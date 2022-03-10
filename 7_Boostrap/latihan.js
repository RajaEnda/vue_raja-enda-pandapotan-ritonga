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
}//21,22,23 tidak tampil karena nama dengan nilai false tidak akan masuk kedalam terdaftar, sehinga false harus diganti dengan true jika ingin ditampilkan

a = b;
// nama = b; //error karena nama tidak sama dengan b

// console.log("asal diakses = " + asal); //dapat dieksekusi karena merupakan bagian yang salah yang tidak sesuai. dengan, melakukan komen membuat outputnya bisa dijalankan.
console.log("a adalah = " + a);
console.log("b adalah = " + b);
perkenalan();
