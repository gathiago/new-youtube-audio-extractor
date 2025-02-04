const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');

const app = express();
app.use(cors());

app.get('/audio', async (req, res) => {
    const videoUrl = req.query.url;
    if (!ytdl.validateURL(videoUrl)) {
        return res.status(400).json({ error: 'URL inválida' });
    }

    res.header('Content-Disposition', 'attachment; filename="audio.mp3"');
    res.header('Content-Type', 'audio/mpeg');

    ytdl(videoUrl, { filter: 'audioonly', quality: 'highestaudio' })
        .pipe(res);
});

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
