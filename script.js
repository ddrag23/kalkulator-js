var bil1;
var bil2;
var hasil;
var opr;
var oprSeleksi = false;

function btn(angka) {
    var tampil = document.getElementById("output").value;
    if (tampil == '0') {
        tampil = angka;
    } else {
        tampil += angka;
    }
    document.getElementById('output').value = tampil;
}

function hapus() {
    document.getElementById('output').value = "0";
    bil1 = '0';
    bil2 = '0';
    oprSeleksi = false;
}

function koma() {
    var tampil = document.getElementById('output').value;
    if (tampil.includes = (".") == false) {
        tampil += ".";
    }
    document.getElementById('output').value = tampil;
}

function btnOpr(o) {
    oprSeleksi = true;
    bil1 = parseFloat(document.getElementById('output').value);
    opr = o;
    document.getElementById('output').value = "0";

}

function hitung() {
    if (oprSeleksi == true) {
        bil2 = parseFloat(document.getElementById("output").value);
        switch (opr) {
            case 1:
                hasil = bil1 + bil2;
                document.getElementById('output').value = hasil;
                break;
            case 2:
                hasil = bil1 * bil2;
                document.getElementById('output').value = hasil;
                break;
            case 3:
                hasil = bil1 / bil2;
                document.getElementById('output').value = hasil;
                break;
            case 4:
                hasil = bil1 - bil2;
                document.getElementById('output').value = hasil;
                break;
        }
        oprSeleksi = false;
        hasil = 0;
        bil1 = 0;
        bil2 = 0;
    }
}