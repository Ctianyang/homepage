import Description from "@/components/Description";
import MotionDivWrapper from "@/components/MotionDivWrapper";
import Series from "@/components/Series";
import { getSeries } from "@/lib/series";

/**
 * 用于展示所有系列
 */

export default async function BlogSerie() {
  const series = await getSeries();

  return (
    <MotionDivWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="flex flex-col gap-10 "
    >
      <Description page="Blog" description="" />
      <Series series={series} />
    </MotionDivWrapper>
  );
}
