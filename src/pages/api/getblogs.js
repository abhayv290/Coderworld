// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'node:fs';


export default function handler(req, res) {
  fs.readFile(`src/blogData/${req.query.slug}.json`, 'utf-8', (err, data) => {
    try {
      res.status(200).json(JSON.parse(data))

    } catch (error) {
      res.status(500).send({ error: 'no blog found' })
    }
  })
  // console.log(res);
}
