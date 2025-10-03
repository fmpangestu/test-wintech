const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3001;
const dbPath = path.join(__dirname,"..", 'data.json');

app.use(cors());
app.use(express.json());

app.get('/api/images', (req, res) => {
    fs.readFile(dbPath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to read images data'});
        }
        const images = JSON.parse(data);
        res.json(images);
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})