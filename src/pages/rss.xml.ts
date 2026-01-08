import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { HOME, SEO } from "@consts";

type Context = {
  site: string
}

export async function GET(context: Context) {
  const blog = (await getCollection("blog"))
  .filter(post => !post.data.draft);

  const projects = (await getCollection("projects"))
    .filter(project => !project.data.draft);

  const items = [...blog, ...projects]
    .sort((a, b) => new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf());

  return rss({
    title: `${SEO.AUTHOR} - ${HOME.TITLE}`,
    description: HOME.DESCRIPTION,
    site: context.site,
    xmlns: {
      atom: "http://www.w3.org/2005/Atom",
      dc: "http://purl.org/dc/elements/1.1/",
    },
    customData: `
      <language>${SEO.LANGUAGE}</language>
      <managingEditor>${SEO.AUTHOR}</managingEditor>
      <webMaster>${SEO.AUTHOR}</webMaster>
      <copyright>Copyright ${new Date().getFullYear()} ${SEO.AUTHOR}</copyright>
      <atom:link href="${context.site}rss.xml" rel="self" type="application/rss+xml"/>
    `,
    items: items.map((item) => ({
      title: item.data.title,
      description: item.data.description,
      pubDate: item.data.date,
      link: `/${item.collection}/${item.slug}/`,
      author: SEO.AUTHOR,
      customData: `<dc:creator>${SEO.AUTHOR}</dc:creator>`,
    })),
  });
}
