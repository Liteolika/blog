import { MDXContent } from "mdx/types";
import fs from "fs";
import path from "path";

export interface ArticleMetadata {
  author: string;
  title: string;
  description: string;
  slug: string;
  tags: string[];
  date: Date;
}

export interface Article {
  content: MDXContent;
  metadata: ArticleMetadata;
}

export const ArticleExists = async (slug: string): Promise<boolean> => {
  let articles = await GetArticles();
  let slugs = articles.map(x=>x.slug);
  return slugs.indexOf(slug) !== -1;
}

const articlesFolder = "data/articles";

export const GetArticleAt = async (articlePath: string): Promise<Article> => {
  
  let normalizedPath = articlePath.replace(/\\/g, "/");
  console.log(normalizedPath);
  let article = await import(`../../${articlesFolder}/${normalizedPath}/page.mdx`);
  article.meta.slug = normalizedPath;
  return {
    content: article.default,
    metadata: article.meta,
  };
};

export const GetArticles = async (): Promise<ArticleMetadata[]> => {
  const files = fs.readdirSync(path.resolve(articlesFolder), {
    recursive: true,
  }) as string[];

  const fileNames = files.filter((file) => file.endsWith(".mdx"));
  
  let articlesMetadata = fileNames.map(async (filename) => {
    const folderName = path.dirname(filename);
    
    let article = await GetArticleAt(folderName);
    return article.metadata;
  });

  return await Promise.all(articlesMetadata);
};
