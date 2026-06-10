import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

export interface BlogPost {
  categorySlug: string;
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  tags: string[];
  content: string;
  readingTime: string;
}

export interface BlogCategory {
  slug: string;
  name: string;
  posts: BlogPost[];
}

const BLOG_ROOT = path.join(process.cwd(), 'content', 'blog');

function toTitle(value: string) {
  return value
    .split('-')
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

function getReadingTime(content: string) {
  const words = content
    .replace(/```[\s\S]*?```/g, '')
    .replace(/[^\w\u4e00-\u9fa5]+/g, ' ')
    .trim();
  const count = words ? words.split(/\s+/).length : 0;
  const minutes = Math.max(1, Math.ceil(count / 220));
  return `${minutes} min read`;
}

function getCategoryDirs() {
  if (!fs.existsSync(BLOG_ROOT)) return [];

  return fs
    .readdirSync(BLOG_ROOT, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();
}

function readPost(categorySlug: string, fileName: string): BlogPost {
  const fullPath = path.join(BLOG_ROOT, categorySlug, fileName);
  const raw = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(raw);
  const slug = fileName.replace(/\.md$/, '');

  return {
    categorySlug,
    slug,
    title: String(data.title ?? toTitle(slug)),
    description: String(data.description ?? ''),
    date: String(data.date ?? ''),
    category: String(data.category ?? toTitle(categorySlug)),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    content,
    readingTime: getReadingTime(content),
  };
}

export function getAllPosts(): BlogPost[] {
  return getCategoryDirs()
    .flatMap((categorySlug) => {
      const categoryPath = path.join(BLOG_ROOT, categorySlug);
      return fs
        .readdirSync(categoryPath)
        .filter((fileName) => fileName.endsWith('.md'))
        .map((fileName) => readPost(categorySlug, fileName));
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getCategories(): BlogCategory[] {
  return getCategoryDirs()
    .map((categorySlug) => {
      const posts = fs
        .readdirSync(path.join(BLOG_ROOT, categorySlug))
        .filter((fileName) => fileName.endsWith('.md'))
        .map((fileName) => readPost(categorySlug, fileName))
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

      return {
        slug: categorySlug,
        name: posts[0]?.category ?? toTitle(categorySlug),
        posts,
      };
    })
    .filter((category) => category.posts.length > 0);
}

export function getPostBySlug(categorySlug: string, slug: string) {
  const filePath = path.join(BLOG_ROOT, categorySlug, `${slug}.md`);
  if (!fs.existsSync(filePath)) return undefined;
  return readPost(categorySlug, `${slug}.md`);
}

export function getPostSlugs() {
  return getAllPosts().map((post) => ({ category: post.categorySlug, slug: post.slug }));
}

export function getPostContentWithoutDuplicateTitle(post: BlogPost) {
  const lines = post.content.split('\n');
  const firstContentLineIndex = lines.findIndex((line) => line.trim().length > 0);

  if (firstContentLineIndex === -1) return post.content;

  const firstLine = lines[firstContentLineIndex].trim();
  const firstHeading = firstLine.match(/^#\s+(.+)$/);
  const normalizeTitle = (value: string) => value
    .toLowerCase()
    .replace(/[\s:：,，/]+/g, '')
    .replace(/[^\p{L}\p{N}\u4e00-\u9fa5]/gu, '');

  if (normalizeTitle(firstHeading?.[1] ?? '') !== normalizeTitle(post.title)) return post.content;

  return [
    ...lines.slice(0, firstContentLineIndex),
    ...lines.slice(firstContentLineIndex + 1),
  ].join('\n').replace(/^\s+/, '');
}
