/*
Diketahui air memiliki kondisi tertentu kapan cair, uap, maupun beku, berikut rentangnya:
	Beku suhu minus -100 sampai 0
	Cair suhu 1 sampai 100
	Uap suku 101 sampai 500
	Suhu selain rentang tersebut tidak terdefinisi 

Variabel yang dibutuhkan dalam fungsi “condition” adalah suhu yang digunakan untuk memeriksa apakah status kondisi air dalam kondisi beku, cair, atau uap berdasarkan rentang suhu yang diberikan.
*/
function condition(suhu) {
    if (suhu >= -100 && suhu <= 0) {
        return "Beku";
    } else if (suhu >= 1 && suhu <= 100) {
        return "Cair";
    } else if (suhu >= 101 && suhu <= 500) {
        return "Uap";
    } else {
        return "Suhu di luar rentang yang didefinisikan";
    }
}

console.log(`1. Suhu -15 derajat Celsius: ${condition(-15)}`); // Output: "Beku"
console.log(`2. Suhu 35 derajat Celsius: ${condition(35)}`); // Output: "Cair"
console.log(`3. Suhu 110 derajat Celsius: ${condition(110)}`); // Output: "Uap"
console.log(`4. Suhu -150 derajat Celsius: ${condition(-150)}`); // Output: "Suhu di luar rentang yang didefinisikan"


/*
Diketahui SPBU memiliki logika sebagai berikut:
	Jika plat kuning atau motor maka BBM subsidi
	Jika mobil CC kurang dari 1500 maka Pertamax
	Jika mobil CC diatas atau sama dengan 1500 maka Pertamax Turbo 

Jawab : 
Variabel yang dibutuhkan adalah : 
1.	jenisKendaraan, menyimpan data jenis kendaraan yang digunakan sebagai acuan dalam penentuan jenis BBM
2.	kapasitasMesin, menyimpan data kapasitas mesin kedaraan dalam satuan CC

Jika variabel jenisKendaraan diisi mobil dan kapasitasMesin diisi 1200, maka output yang dihasilkan adalah Pertamax

Jika variabel jenisKendaraan diisi motor dan kapasitasMesin diisi 1000, maka output yang dihasilkan adalah BBM subsidi

Jika variabel jenisKendaraan diisi mobil dan kapasitasMesin diisi 3000, maka output yang dihasilkan adalah PERTAMAX Turbo
*/

function cekJenisBBM(jenisKendaraan, kapasitasMesin) {
    if (jenisKendaraan === "plat kuning" || jenisKendaraan === "motor") {
        return "BBM subsidi";
    } else if (kapasitasMesin < 1500) {
        return "PERTAMAX";
    } else {
        return "PERTAMAX Turbo";
    }
}

// Contoh penggunaan fungsi untuk kasus tertentu
const jenisKendaraan = "mobil"; // contoh jenis kendaraan
const kapasitasMesin = 3000; // contoh kapasitas mesin

console.log(`Jenis BBM untuk kendaraan ${jenisKendaraan} dengan kapasitas mesin ${kapasitasMesin} CC adalah ${cekJenisBBM(jenisKendaraan, kapasitasMesin)}`);





















