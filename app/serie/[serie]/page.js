import Blogs from "@/components/Blogs";
import Description from "@/components/Description";
import MotionDivWrapper from "@/components/MotionDivWrapper";
import { getBlogsBySerie } from "@/lib/blog";

/**
 * 用于展示某个系列中的所有博客
 */

export default async function BlogsInSerie({ params }) {
  const { serie } = params;
  const blogs = await getBlogsBySerie(serie);

  return (
    <MotionDivWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="flex flex-col gap-10 "
    >
      <Description page="Blog" description="" />
      <Blogs blogs={blogs} />
    </MotionDivWrapper>
  );
}
