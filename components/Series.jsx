import { getLastUpdateTimeBySerie } from "@/lib/series";
import Image from "next/image";
import Link from "next/link";

/**
 * 
 * Series组件，用于展示系列列表
 * 
 */


// 根据标签列表生成标签列表元素
function getSeriesTagListElements(tags) {
	return tags.map((tag) => (
		<li key={tag} className="inline-block mb-4">
			<span className="mr-2 px-1.5 py-0.5 bg-blue-800 rounded-md">{tag}</span>
		</li>
	));
}

export default function Series({ series }) {
	return (
		<section className="w-full">
			<Link href="/blog" className="w-100 text-right text-xl font-bold text-muted-foreground mb-5">查看所有文章</Link>
			<ul className="grid w-full grid-cols-1 gap-5 mx-auto sm:grid-cols-2 xl:grid-cols-3">
				{series.map((serie) => (
					<div key={serie.title}>
						<Link href={`/serie/${serie.title}`}>
							<div className="relative flex flex-col items-center justify-center gap-6 p-5 border-dashed border-[0.8px] border-transparent rounded-2xl hover:border-muted-foreground hover:bg-muted ">
								<div className="relative flex items-center justify-center">
									<Image
										src={serie.image}
										alt="Series Cover"
										width={300}
										height={100}
										className="object-contain "
									/>
								</div>

								<div className="text-center">
									<h2 className="mb-2 font-semibold">{serie.title}</h2>
									<ul>
										{getSeriesTagListElements(serie.tags)}
									</ul>
									<div className="text-sm font-light text-muted-foreground w-13 h-10 text-ellipsis overflow-hidden">
										{serie.description}
									</div>
								</div>
								{/* style={{ overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }} */}
								<div className="flex items-center justify-center gap-2 text-xs">
									最近更新时间：{getLastUpdateTimeBySerie(serie.title)}
								</div>
							</div>
						</Link>
					</div>
				))
				}
			</ul >
		</section >
	);
}
