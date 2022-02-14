const wrap = document.querySelector('#book-list li:nth-child(2) .name');
//console.log(wrap);

var books = document.querySelector('#book-list li .name'); //Todo li con clase name dentro de book-list
//console.log(books)

books = document.querySelectorAll('#book-list li .name'); //Todo li con clase name dentro de book-list
//console.log(books)

Array.from(books).forEach(function(book){
    console.log(book);
})
