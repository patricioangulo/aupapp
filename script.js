document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('button').forEach(function(button) {
        button.onclick = function() {


            const trplat = button.dataset.tr;
            const id = button.dataset.id;
            //console.log(`${trplat}`);
            if (id == "editar") {
                editar(trplat);
            }
            if (id == "guardar") {
                guardar(trplat);
            }

        }
    })

}); //fin del DOMContentLoaded


function editar(trplat) {
    console.log(`${trplat}`);
    var name = trplat;
    console.log(`${name}`);
    document.querySelector("[data-name=" + name + "] #editar").disabled = true;
    document.querySelector("[data-name=" + name + "] #guardar").disabled = false;

    var element = document.querySelector("[data-name=" + name + "] #checkbox1");
    var element2 = document.querySelector("[data-name=" + name + "] #checkbox2");
    var element3 = document.querySelector("[data-name=" + name + "] #checkbox3");
    var element4 = document.querySelector("[data-name=" + name + "] #checkbox4");
    console.log(`${element}`);
    let holas = [element, element2, element3, element4];
    holas.forEach(hola => {
        hola.disabled = false;
    });


}

function guardar(trplat) {
    console.log(`${trplat}`);
    var name = trplat;
    console.log(`${name}`);
    document.querySelector("[data-name=" + name + "] #editar").disabled = false;
    document.querySelector("[data-name=" + name + "] #guardar").disabled = true;

    var element = document.querySelector("[data-name=" + name + "] #checkbox1");
    var element2 = document.querySelector("[data-name=" + name + "] #checkbox2");
    var element3 = document.querySelector("[data-name=" + name + "] #checkbox3");
    var element4 = document.querySelector("[data-name=" + name + "] #checkbox4");
    console.log(`${element}`);
    let holas = [element, element2, element3, element4];
    holas.forEach(hola => {
        hola.disabled = true;
    });

}