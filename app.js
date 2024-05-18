const express = require('express');
const app = express();
const port = 3000; 

// Mengimport router yang telah Anda buat sebelumnya
const filmRouter = require('./routers/filmRouter.js'); 

// Menambahkan middleware untuk menggunakan router
app.use('/api', filmRouter); // Misalnya, mengarahkan semua permintaan ke /api ke filmRouter

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
