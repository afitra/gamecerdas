// // var pageTitleElement = document.getElementById("page-title");
// // // Menyeleksi DOM berdasarkan Id element dan menampungnya ke dalam variabel. Isinya merupakan object HTML element

// // var pageBoxElements = document.getElementsByClassName("page-box");
// // // Menyeleksi DOM berdasarkan nama class element dan menampungnya ke dalam variabel. Isinya merupakan array dari object HTML element, walau <h1> hanya ada 1.

// // var pageHeadings = document.getElementsByTagName("h1");
// // // Menyeleksi DOM berdasarkan tag <h1> dan menampungnya ke dalam variabel. Isinya merupakan array dari object HTML element

// // var pageTitleElementsContent = pageTitleElement.innerHTML;
// // console.log('isi <div id="page-title"> :' + pageTitleElementsContent);
// // // isi <div id="page-title"> adalah Sample Page Title

// // var pageBoxElementsContent = pageBoxElements.innerHTML;
// // console.log('isi <div class="page-box"> :' + pageBoxElementsContent);
// // // isi <div class="page-box"> adalah undefined!
// var a = 1 + 80 + 410 + 201 + 40 + 1 + 46 + 200 + 12 + 601 + 10 + 200
console.log(406 % 8)
function hitungnama(str) {
    var abjad = 'abcdefghijklmnopqrstuvwxyz'
    var nilai = [1, 2, 3, 4, 0, 80, 20, 5, 10, 3, 20, 30, 40, 50, 6, 80, 100, 200, 60, 400, 6, 80, 6, 90, 10, 700]
    var arr = []
    var total = []
    for (var a = 0; a < str.length; a++) {
        for (var b = 0; b < abjad.length; b++) {
            if (str[a] == abjad[b]) {
                total.push([nilai[b], abjad[b]])
            }
        }
    }
    return total
}
console.log(hitungnama('tasya'))
