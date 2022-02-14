let books = document.querySelectorAll('#book-list li .name'); //Todo li con clase name dentro de book-list

Array.from(books).forEach(function(book){
    book.textContent += " (book title)"; //Reemplazamos el contenido de los li por "test"
});

const bookList = document.querySelector("#book-list");
//bookList.innerHTML = '<h2> Books and more books....</h2>';
bookList.innerHTML += '<p> This is how you add HTML </p>';