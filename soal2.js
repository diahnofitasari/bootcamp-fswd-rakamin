// soal2.js

import fs from 'fs'

// Path menuju file homework.log dan log.txt (pastikan sesuai dengan lokasi sebenarnya)
const inputFilePath = './homework.log';
const outputFilePath = './log.txt';

// Baca isi file homework.log
fs.readFile(inputFilePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Gagal membaca file:', err);
        return;
    }

    // Tulis isi file homework.log ke dalam file log.txt
    fs.writeFile(outputFilePath, data, 'utf8', (err) => {
        if (err) {
            console.error('Gagal menulis ke file log.txt:', err);
            return;
        }
        console.log('Isi file homework.log berhasil disalin ke file log.txt.');
    });
});
