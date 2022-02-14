const bookList = document.querySelector('#book-list');
console.log('the parent node is: ', bookList.parentNode)
console.log('the parent node is: ', bookList.parentElement.parentElement)
//Now the children nodes
console.log(bookList.children);
