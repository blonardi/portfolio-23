window.addEventListener("load", function(event) {
    // console.log("'Todos los recursos terminaron de cargar!");
    let body = document.querySelector('body');
    let cursor = document.querySelector('#cursor');
    body.onmousemove = (e) => {
        // console.log("movi el mouse")
        // console.clear();

        let clientX = e.clientX;
        let clientY = e.clientY;
        // console.log(e)

        cursor.classList.add('top', 'left');

        cursor.style.left = (clientX - 40) + 'px';
        cursor.style.top = (clientY - 40) + 'px';
    }

    let anchor = document.querySelectorAll('a');
    // console.log(anchor)
    anchor.forEach(a => {
        console.log(a.title)
        a.onmouseover = () => {
            cursor.classList.add('mini')
        }

        a.onmouseout = () => {
            cursor.classList.remove('mini')
        }
    });
});