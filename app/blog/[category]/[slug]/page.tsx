import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getPostBySlug, getPostContentWithoutDuplicateTitle, getPostSlugs } from '@/lib/blog';

export function generateStaticParams() {
  return getPostSlugs();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}): Promise<Metadata> {
  const { category, slug } = await params;
  const post = getPostBySlug(category, slug);

  if (!post) return {};

  return {
    title: `${post.title} - Leon Blog`,
    description: post.description,
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } = await params;
  const post = getPostBySlug(category, slug);

  if (!post) notFound();

  const content = getPostContentWithoutDuplicateTitle(post);

  return (
    <main className="min-h-screen bg-[var(--background)]">
      <article>
        <header className="relative overflow-hidden border-b border-[var(--card-border)]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e0e0e0_1px,transparent_1px),linear-gradient(to_bottom,#e0e0e0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--background)]" />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-14 relative z-10">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors text-sm mb-10 font-mono"
            >
              <span aria-hidden="true">←</span>
              返回博客列表
            </Link>

            <div className="flex flex-wrap gap-2 mb-5">
              <span className="px-3 py-1 text-xs text-[var(--text-secondary)] rounded-full border border-[var(--card-border)] font-mono">
                {post.category}
              </span>
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs text-[var(--text-secondary)] rounded-full border border-[var(--card-border)] font-mono"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-[var(--text-primary)] leading-tight mb-6">
              {post.title}
            </h1>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-6">
              {post.description}
            </p>
            <div className="flex flex-wrap gap-4 text-sm font-mono text-[var(--text-secondary)]">
              <span>{post.date}</span>
              <span>{post.readingTime}</span>
            </div>
          </div>
        </header>

        <div className="markdown-body max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              a: ({ href, children }) => (
                <a href={href} target="_blank" rel="noopener noreferrer">
                  {children}
                </a>
              ),
            }}
          >
            {content}
          </ReactMarkdown>
        </div>
      </article>
    </main>
  );
}
