import fs from 'fs'
import matter from 'gray-matter'

export interface PostMetadata {
    title: string
    bio: string
    slug: string[]
    basePath: string
}

export default function getPostMetadata(basePath: string): PostMetadata[] {
    const folder = basePath + '/'
    const files = fs.readdirSync(folder, { recursive: true}) as string[]
    const markdownPosts = files.filter(file => file.endsWith('.md'))

    // get the file data
    const posts = markdownPosts.map((filename) => {
        const fileContents = fs.readFileSync(`${basePath}/${filename}`, 'utf8')
        const matterResult = matter(fileContents)
        return {
            title: matterResult.data.title,
            bio: matterResult.data.description,
            slug: filename.replace('.md', '').split("\\"),
            basePath: folder
        }
    })
    return posts
}