import fs from 'fs/promises'; // Use the promises version of the fs module

export default async function handler(req, res) {
    try {
        const files = await fs.readdir('src/blogData');
        const allBlogPromises = files.map(async (item) => {
            const content = await fs.readFile(`src/blogData/${item}`, 'utf-8');
            return JSON.parse(content);
        });
        const allBlogContent = await Promise.all(allBlogPromises);
        res.status(200).json(allBlogContent);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
