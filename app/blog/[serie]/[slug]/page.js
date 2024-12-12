import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { getBlogBySlug, getBlogs } from "@/lib/blog";

/**
 * 用于展示具体文章，将路由从/blog/[slug] -> /blog/[serie]/[slug]
 * 虽然不知道slug是什么，但是没改，此处slug = title
 */

export default async function Blog({ params }) {
  const { serie, slug } = params;
  const blog = await getBlogBySlug(serie, slug);

  if (!blog) {
    notFound();
  }

  const { metadata, contentHtml } = blog;
  const { title, summary, image, author, publishedAt, tag } = metadata;

  return (
    <section className="flex pr-8 mx-auto">
      <aside className="hidden relative pt-14 2xl:block">
        <Link
          href="/serie"
          className="sticky flex items-center gap-1 py-2 pl-4 pr-5 rounded-full top-10  text-foreground font-semibold bg-[#f2f2f21a] "
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back</span>
        </Link>
      </aside>

      <article className="mx-auto mt-16 w-full max-w-3xl">
        <header>
          {image && (
            <div className="relative w-full flex justify-center items-center mb-10 overflow-hidden rounded-lg aspect-[240/135]">
              <Image
                src={image}
                alt={title || ""}
                className="object-cover"
                fill
              />
            </div>
          )}

          <p className="mb-2 text-sm text-muted-foreground">
            {publishedAt ?? ""} | {tag}
          </p>

          <h1 className="mb-2 text-4xl font-bold">{title}</h1>

          <p className="mb-6 text-muted-foreground">{author}</p>

          <p className="">{summary}</p>
        </header>

        <hr className="mt-10 border-[0.5px] border-muted-foreground" />

        <main className="mt-16 max-w-none prose prose-invert prose-p:text-foreground prose-h1:text-foreground prose-h2:text-foreground prose-h3:text-foreground prose-h4:text-foreground prose-ul:text-foreground prose-ol:text-foreground prose-li:text-foreground prose-strong:text-foreground prose-strong:font-bold prose-a:text-blue-400 prose-a:opacity-80 prose-code:text-foreground prose-img:opacity-90 prose-p:tracking-tight">
          {/* 直接渲染html */}
          <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </main>
      </article>
    </section>
  );
}

export async function generateStaticParams() {
  const posts = await getBlogs();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
