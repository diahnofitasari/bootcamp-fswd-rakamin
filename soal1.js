// Import semua fungsi dari file utils/shape.js sebagai objek shapes
import * as shapes from './utils/shape.js';

// Gunakan fungsi-fungsi tersebut untuk melakukan console.log
console.log('1. Luas persegi panjang dengan panjang 5 dan lebar 3:', shapes.calculateRectangleArea(5, 3));
console.log('2. Keliling persegi panjang dengan panjang 5 dan lebar 3:', shapes.calculateRectanglePerimeter(5, 3));
console.log('3. Luas persegi dengan sisi 4:', shapes.calculateSquareArea(4));
console.log('4. Keliling persegi dengan sisi 4:', shapes.calculateSquarePerimeter(4));
