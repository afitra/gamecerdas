var scor = 0
function aturan() {
    alert(' tombol mulai berfungsi untuk memulai game selama 1 menit , tombol reset untuk memulai game dari awal, semua tantangan di operasikan angka 1 terhadap angka 2 ');
}
function acak() {
    var num = Math.floor((Math.random() * 20) + 1);
    return num
}
function penjumlahan(angka1, angka2) {
    return angka1 + angka2
}
function pengurangan(angka1, angka2) {

    return angka1 - angka2
}
function perkalian(angka1, angka2) {
    return angka1 * angka2
}
// function reset() {
//     location.reload();
// }
function koreksi() {

    // document.getElementById("angka1").value = acak();
    // document.getElementById("angka2").value = acak();

    var isi = document.getElementById("kuis");
    var pilihan = isi.options[isi.selectedIndex].value;
    document.getElementById('g1').style.display = 'none';
    document.getElementById('g2').style.display = 'none';
    document.getElementById('g3').style.display = 'none';

    var num1 = Number(document.getElementById('angka1').value);
    var num2 = Number(document.getElementById('angka2').value);
    var jawab = Number(document.getElementById('jawab').value);
    // console.log("olala ", angka1)
    // var element = Number(document.getElementById('score').value)
    var element = document.getElementById('score')
    if (pilihan === 'penjumlahan') {
        var hasil = penjumlahan(num1, num2)
        if (jawab == hasil) {
            document.getElementById('selamat').style.display = 'block';
            document.getElementById('maaf').style.display = 'none';

            var point = Number(element.innerHTML) + 10
            element.innerHTML = point
            document.getElementById("angka1").value = acak();
            document.getElementById("angka2").value = acak();
            scor += 10

        } else if (jawab !== hasil) {
            document.getElementById('maaf').style.display = 'block';
            document.getElementById('selamat').style.display = 'none';
        }

    } else if (pilihan === 'pengurangan') {
        var hasil1 = pengurangan(num1, num2)
        if (jawab == hasil1) {
            document.getElementById('selamat').style.display = 'block';
            document.getElementById('maaf').style.display = 'none';
            var point = Number(element.innerHTML) + 10
            element.innerHTML = point
            document.getElementById("angka1").value = acak();
            document.getElementById("angka2").value = acak();
            scor += 10
        } else if (jawab !== hasil) {
            document.getElementById('maaf').style.display = 'block';
            document.getElementById('selamat').style.display = 'none';
        }

    } else if (pilihan === 'perkalian') {
        var hasil2 = perkalian(num1, num2)
        if (jawab == hasil2) {
            document.getElementById('selamat').style.display = 'block';
            document.getElementById('maaf').style.display = 'none';
            var point = Number(element.innerHTML) + 10
            element.innerHTML = point
            document.getElementById("angka1").value = acak();
            document.getElementById("angka2").value = acak();
            scor += 10
        } else if (jawab !== hasil) {
            document.getElementById('maaf').style.display = 'block';
            document.getElementById('selamat').style.display = 'none';
        }
    }

    document.getElementById("jawab").value = ''

}
// function timer() {
//     alert('waktu anda habis');
// }
// function hasil() {
//     return document.getElementById('score').value
// }

function tampil() {
    setTimeout(function () {
        var a = document.getElementById('score')
        alert("waktu telah habis !!!,point yang anda kumpulkan hanya " + scor + 'pts' + ', sangat kurang dari rata rata.......rupanya kecerdasan anda biasa biasa saja, kumpulkan 500pts dan raihlah umroh gratis se keluarga !!! '); history.go(0)
    }, 60000);
    scor = 0
    var element = document.getElementById('score')
    element.innerHTML = scor
    var isi = document.getElementById("kuis");
    var pilihan = isi.options[isi.selectedIndex].value;
    document.getElementById('tabelsoal').style.display = 'block'
    document.getElementById("angka1").value = acak();
    document.getElementById("angka2").value = acak();

    // console.log(satu)
    if (pilihan === 'penjumlahan') {
        scor = 0
        var element = document.getElementById('score')
        element.innerHTML = scor
        document.getElementById('g1').style.display = 'block';
        document.getElementById('g2').style.display = 'none';
        document.getElementById('g3').style.display = 'none';
        document.getElementById('selamat').style.display = 'none';
        document.getElementById('maaf').style.display = 'none';
    } else if (pilihan === 'pengurangan') {
        scor = 0
        var element = document.getElementById('score')
        element.innerHTML = scor
        document.getElementById('g2').style.display = 'block';
        document.getElementById('g1').style.display = 'none';
        document.getElementById('g3').style.display = 'none';
        document.getElementById('selamat').style.display = 'none';
        document.getElementById('maaf').style.display = 'none';
    } else if (pilihan === 'perkalian') {
        scor = 0
        var element = document.getElementById('score')
        element.innerHTML = scor
        document.getElementById('g3').style.display = 'block';
        document.getElementById('g2').style.display = 'none';
        document.getElementById('g1').style.display = 'none';
        document.getElementById('selamat').style.display = 'none';
        document.getElementById('maaf').style.display = 'none';
    }
    document.getElementById("angka1").value = acak();
    document.getElementById("angka2").value = acak();
    // return  timer()
}
// console.log(angka1, angka2, penjumlahan())

