// import type { NextApiRequest, NextApiResponse } from 'next'
import * as fs from 'node:fs';

export default function handler(req, res) {
    if (req.method === 'POST') {
        // Process a POST request
        console.log(req.body);

        try {
            // Assuming req.body is a JSON string
            const jsonData = req.body;

            // Write the JSON data to the file
            fs.writeFileSync(`src/contactData/${jsonData.name}.json`, JSON.stringify(jsonData));

            // Send the response after writing the file
            res.send(jsonData);
        } catch (error) {
            // Handle JSON parsing error
            console.error('Error parsing JSON:', error);
            res.status(400).send('Invalid JSON format');
        }
    } else {
        // Handle any other HTTP method
        res.status(500).send('Connection refused to connect');
    }
}
