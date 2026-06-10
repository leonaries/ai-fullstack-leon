import Link from 'next/link';
import type { Metadata } from 'next';
import { getAllPosts, getCategories } from '@/lib/blog';

export const metadata: Metadata = {
  title: '博客 - Leon Portfolio',
  description: 'Leon 的 AI 编程、Web3 前端与全栈工程实践分享。',
};

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = getCategories();

  return (
    <main className="min-h-screen bg-[var(--background)]">
      <section className="relative overflow-hidden border-b border-[var(--card-border)]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e0e0e0_1px,transparent_1px),linear-gradient(to_bottom,#e0e0e0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--background)]" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-14 relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors text-sm mb-10 font-mono"
          >
            <span aria-hidden="true">←</span>
            返回首页
          </Link>

          <div className="max-w-3xl">
            <span className="text-sm font-mono text-[var(--text-secondary)] tracking-widest uppercase mb-3 block">Blog</span>
            <h1 className="text-5xl md:text-7xl font-bold text-[var(--text-primary)] mb-6">
              技术博客
            </h1>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
              记录 AI 编程、Web3 前端、全栈开发与工程化实践里的真实经验。
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-10">
          <aside className="lg:sticky lg:top-24 h-fit">
            <div className="border border-[var(--card-border)] rounded-2xl bg-[var(--card-bg)] p-5">
              <p className="text-sm font-mono text-[var(--text-secondary)] mb-4">Categories</p>
              <div className="space-y-2">
                {categories.map((category) => (
                  <a
                    key={category.slug}
                    href={`#${category.slug}`}
                    className="flex items-center justify-between rounded-lg px-3 py-2 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--background)] transition-colors"
                  >
                    <span>{category.name}</span>
                    <span className="font-mono">{category.posts.length}</span>
                  </a>
                ))}
              </div>
            </div>
          </aside>

          <div className="space-y-12">
            {categories.map((category) => (
              <section key={category.slug} id={category.slug} className="scroll-mt-24">
                <div className="flex items-end justify-between gap-4 mb-5">
                  <div>
                    <p className="text-sm font-mono text-[var(--text-secondary)] mb-1">{category.slug}</p>
                    <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)]">{category.name}</h2>
                  </div>
                  <span className="text-sm font-mono text-[var(--text-secondary)]">{category.posts.length} posts</span>
                </div>

                <div className="grid gap-4">
                  {category.posts.map((post) => (
                    <Link
                      key={post.slug}
                      href={`/blog/${post.categorySlug}/${post.slug}`}
                      className="group block rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] p-6 transition-all hover:border-[var(--primary)] hover:-translate-y-0.5"
                    >
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                        <div>
                          <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-3 group-hover:opacity-80 transition-opacity">
                            {post.title}
                          </h3>
                          <p className="text-[var(--text-secondary)] leading-relaxed max-w-2xl">
                            {post.description}
                          </p>
                        </div>
                        <div className="text-sm font-mono text-[var(--text-secondary)] md:text-right shrink-0">
                          <p>{post.date}</p>
                          <p>{post.readingTime}</p>
                        </div>
                      </div>

                      {post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-5">
                          {post.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 text-xs text-[var(--text-secondary)] rounded-full border border-[var(--card-border)] font-mono"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </Link>
                  ))}
                </div>
              </section>
            ))}

            {posts.length === 0 && (
              <div className="rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] p-8 text-[var(--text-secondary)]">
                暂无文章。
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
