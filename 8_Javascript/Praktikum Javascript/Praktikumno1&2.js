var a = 5;
let b = "kampus merdeka";
const nama = "Budi";
let terdaftar = true;
let lengkap_arr = [a, b, nama, terdaftar]; //1a. diambil index ke-2 alam array dibaris 5 dan tampilkan dalam console
console.log(lengkap_arr[2]);//ouputnya budi

function perkenalan() {
    let asal = "Indonesia";
    return console.log(
        " perkenalkan nama saya " + 
        nama +
        " nomor urut " +
         a +
        " Sekarang sedang mengikuti" + 
        b + 
        " berasal dari " + 
        asal
    );
}

if (terdaftar === true) {
    console.log(nama + " terdaftar sebagai kegiatan kampus merdeka");
}

a = b;
// nama = b;

// console.log("asal diakses = " + asal);
console.log("a adalah = " + a);
console.log("b adalah = " + b);
perkenalan();
