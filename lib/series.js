import yaml from "js-yaml";
import path from "path";
import fs from "fs";

/**
 * Series组件相关工具类
 */

const rootDirectory = path.join(process.cwd(), "content", "blog");

// 从series.yaml中获取所有系列信息
export async function getSeries() {
  const filePath = path.join(rootDirectory, "series.yaml");
  const fileContent = fs.readFileSync(filePath, "utf8");
  const series = yaml.load(fileContent).series;
  return series;
}

// 通过通过系列名称获取文件夹内文件的最后修改时间
// 如果文件夹内没有文件，则返回文件夹的修改时间
export function getLastUpdateTimeBySerie(serie) {
  const filePath = path.join(rootDirectory, serie);
  const files = fs.readdirSync(filePath);
  if (!files.length) return fs.statSync(filePath).mtime.toLocaleDateString();

  const posts = files
    .map((file) => fs.statSync(path.join(filePath, file)))
    .sort((a, b) =>
      new Date(a.mtime ?? "") < new Date(b.mtime ?? "") ? 1 : -1
    );
  return posts[0].mtime.toLocaleDateString();
}