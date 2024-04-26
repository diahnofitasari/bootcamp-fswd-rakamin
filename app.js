class Pendaftar {
    constructor(nama, umur, uangSaku) {
        this.nama = nama;
        this.umur = umur;
        this.uangSaku = uangSaku;
    }
}

let daftarPendaftar = [];

$(document).ready(function() {
    $('#registrationForm').submit(function(event) {
        event.preventDefault();

        let nama = $('#nama').val();
        let umur = parseInt($('#umur').val());
        let uangSaku = parseInt($('#uang').val());

        if (nama.length < 10 || umur < 25 || uangSaku < 100000 || uangSaku > 1000000) {
            alert('Mohon periksa kembali isian form.');
            return;
        }

        let pendaftar = new Pendaftar(nama, umur, uangSaku);
        daftarPendaftar.push(pendaftar);

        $('#pendaftarTableBody').append(`
            <tr>
                <td>${nama}</td>
                <td>${umur}</td>
                <td>${uangSaku}</td>
            </tr>
        `);

        updateResume();
        $('#registrationForm')[0].reset();
    });
});

function updateResume() {
    let totalUang = 0;
    let totalUmur = 0;

    daftarPendaftar.forEach(pendaftar => {
        totalUang += pendaftar.uangSaku;
        totalUmur += pendaftar.umur;
    });

    let rataRataUang = (totalUang / daftarPendaftar.length).toFixed(2);
    let rataRataUmur = (totalUmur / daftarPendaftar.length).toFixed(2);

    $('#resume').html(`
        Rata-rata pendaftar memiliki uang saku sebesar ${rataRataUang} dengan rata-rata umur ${rataRataUmur}.
    `);
}
