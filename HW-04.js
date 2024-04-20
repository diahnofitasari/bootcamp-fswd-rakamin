// Fungsi untuk membuat array dengan nilai random antara 1 dan 50
function generateRandomArray(length) {
    const arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(Math.floor(Math.random() * 50) + 1);
    }
    return arr;
}

const mainArray = generateRandomArray(100);
console.log("Array dengan 100 nilai random:", mainArray);

// Fungsi untuk membagi array menjadi array genap dan ganjil
function splitArrayByEvenOddIndexes(arr) {
    const evenArray = [];
    const oddArray = [];

    arr.forEach((value, index) => {
        if (index % 2 === 0) {
            evenArray.push(value); // Index genap
        } else {
            oddArray.push(value); // Index ganjil
        }
    });

    return { evenArray, oddArray };
}

const { evenArray, oddArray } = splitArrayByEvenOddIndexes(mainArray);
console.log("Array pada index genap dengan length 50:", evenArray);
console.log("Array pada index ganjil dengan length 50:", oddArray);

// Fungsi untuk mencari nilai minimum
function findMin(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

// Fungsi untuk mencari nilai maksimum
function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

// Fungsi untuk mencari total nilai
function findTotal(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

// Fungsi untuk mencari rata-rata
function findAverage(arr) {
    const total = findTotal(arr);
    return total / arr.length;
}

const evenMin = findMin(evenArray);
const evenMax = findMax(evenArray);
const evenTotal = findTotal(evenArray);
const evenAverage = findAverage(evenArray);

console.log("Perhitungan untuk array genap:");
console.log("Min:", evenMin);
console.log("Max:", evenMax);
console.log("Total:", evenTotal);
console.log("Rata-rata:", evenAverage);

const oddMin = findMin(oddArray);
const oddMax = findMax(oddArray);
const oddTotal = findTotal(oddArray);
const oddAverage = findAverage(oddArray);

console.log("Perhitungan untuk array ganjil:");
console.log("Min:", oddMin);
console.log("Max:", oddMax);
console.log("Total:", oddTotal);
console.log("Rata-rata:", oddAverage);

// Fungsi untuk membandingkan hasil kedua array
function compareArrays(evenArray, oddArray) {
    const comparison = {
        minComparison: evenMin > oddMin ? "Min lebih besar array genap" : "Min lebih besar array ganjil",
        maxComparison: evenMax > oddMax ? "Max lebih besar array genap" : "Max lebih besar array ganjil",
        totalComparison: evenTotal === oddTotal ? "Total memiliki nilai sama antara array genap dan ganjil" : "",
        averageComparison: evenAverage > oddAverage ? "Rata-rata lebih besar array genap" : "Rata-rata lebih besar array ganjil",
    };

    return comparison;
}

const comparisonResult = compareArrays(evenArray, oddArray);
console.log("Perbandingan nilai:");
console.log(comparisonResult);


