document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('button').forEach(function(button) {
        button.onclick = function() {

            //toma el valor del botón seleccionado
            const info = button.dataset.tr;
            //toma el id del boton seleccionado
            const id = button.dataset.id;
            //console.log(`${info}`);
            //ejecuta las acciones de los botones
            if (id == "editar") {
                editar(info);
            }
            if (id == "guardar") {
                guardar(info);
            }

        }
    })

}); //fin del DOMContentLoaded


function editar(info) {
    //console.log(`${info}`);
    document.querySelector("[data-name=" + info + "] #editar").disabled = true;
    document.querySelector("[data-name=" + info + "] #guardar").disabled = false;
    const box = document.querySelector("[data-name=" + info + "] #checkbox1");
    const box2 = document.querySelector("[data-name=" + info + "] #checkbox2");
    const box3 = document.querySelector("[data-name=" + info + "] #checkbox3");
    const box4 = document.querySelector("[data-name=" + info + "] #checkbox4");

    if (box) {
        box.disabled = false;
    }
    if (box2) {
        box2.disabled = false;
    }
    if (box3) {
        box3.disabled = false;
    }
    if (box4) {
        box4.disabled = false;
    }


}

function guardar(info) {
    console.log(`${info}`);
    document.querySelector("[data-name=" + info + "] #editar").disabled = false;
    document.querySelector("[data-name=" + info + "] #guardar").disabled = true;
    const box = document.querySelector("[data-name=" + info + "] #checkbox1");
    const box2 = document.querySelector("[data-name=" + info + "] #checkbox2");
    const box3 = document.querySelector("[data-name=" + info + "] #checkbox3");
    const box4 = document.querySelector("[data-name=" + info + "] #checkbox4");

    if (box) {
        box.disabled = true;
    }
    if (box2) {
        box2.disabled = true;
    }
    if (box3) {
        box3.disabled = true;
    }
    if (box4) {
        box4.disabled = true;
    }

}