import path from "path";
import fs from "fs";
import matter from "gray-matter";
import remarkParse from "remark-parse"
import remarkMath from "remark-math";
import remarkRehype from "remark-rehype";
import rehypeKatex from "rehype-katex";
import rehypeStringify from "rehype-stringify";
import { unified } from "unified";
import "../public/katex/katex.min.css"

const rootDirectory = path.join(process.cwd(), "content", "blog");

export async function getBlogBySlug(slug) {
  const filePath = path.join(rootDirectory, `${slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, { encoding: "utf-8" });

  const { data, content } = matter(fileContent);
  const processedContent = await unified()
    // 解析md及公式
    .use(remarkParse)
    .use(remarkMath)
    // 转为html ATS
    .use(remarkRehype)
    // 渲染公式，需要引入相应的css
    .use(rehypeKatex)
    .use(rehypeStringify)
    .process(content)

  const contentHtml = processedContent.toString();
  // 直接导出html，所以content->contentHtml，metadata元数据不受影响
  return { metadata: { ...data, slug }, contentHtml };
}

export async function getBlogs() {
  const files = fs.readdirSync(rootDirectory);

  const posts = files
    .map((file) => getBlogMetadata(file))
    .sort((a, b) =>
      new Date(a.publishedAt ?? "") < new Date(b.publishedAt ?? "") ? 1 : -1
    );

  return posts;
}

export function getBlogMetadata(filepath) {
  const slug = filepath.replace(/\.mdx$/, "");
  const filePath = path.join(rootDirectory, filepath);
  const fileContent = fs.readFileSync(filePath, { encoding: "utf8" });
  const { data } = matter(fileContent);
  return { ...data, slug };
}
