// import { client } from "./sanity";

// export async function getProjects() {
//   const query = `*[_type == 'project'] | order(_updatedAt desc) {
//         title,
//           _id,
//           link,
//           description,
//           tags,
//           "imageUrl": image.asset->url
//     }`;

//   const projects = await client.fetch(query);

//   return projects;
// }

export async function getProjects() {
  const projects = [
    {
      title: "Project Three",
      _id: "1",
      link: "https://github.com/eurooooo/zephyrlin.me",
      description: "This is a description of project three.",
      imageUrl: "/images/clerk1.png",
    },
  ]

  return projects;
}
