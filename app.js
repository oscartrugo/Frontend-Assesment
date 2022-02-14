var btns = document.querySelectorAll('#book-list .delete')

Array.from(btns).forEach(function(btn){
    btn.addEventListener('click', function(e){
        const li = e.target.parentElement; //Redirige al elemento padre del boton
        li.parentNode.removeChild(li); //Elimina al nodo, todo el objeto book
    });
});

const link = document.querySelector('#page-banner a');
link.addEventListener('click', function(e){
    e.preventDefault(); //Previene la funcion por default
    console.log("Navigtion to ", e.target.textContent, ' was prevented')
})
