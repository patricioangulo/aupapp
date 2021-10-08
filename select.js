document.addEventListener('DOMContentLoaded', function() {

    const opciones = document.querySelector('#opciones');

    //seleccionar uno de los elementos
    opciones.addEventListener('change', (event) => {
        console.log(`${event.target.value}`)
        if (`${event.target.value}` == 'grupo') {

            document.getElementById("grupos").style.display = "block";
            document.querySelector('.atributos-usuarios').style.display = "none";
            //mostrar los elementos de la opción seleccionada
            //mostrar elementos de "Grupo"
            const grupos = document.querySelector('#grupos');

            grupos.addEventListener('change', (event) => {
                console.log(`${event.target.value}`);
                document.querySelector('#nombre-grupo').innerHTML = `${event.target.value}`;
                document.querySelector('.atributos-grupo').style.display = "block";
                document.querySelector('.atributos-rol').style.display = "none";
                document.querySelector('.atributos-usuarios').style.display = "none";
                //document.querySelector('.checkbox').disabled = true;
            })

        } else {
            document.getElementById("grupos").style.display = "none";
            document.querySelector('.atributos-grupo').style.display = "none";
        }
        //Muestra las opciones de "Rol"
        if (`${event.target.value}` == 'rol') {
            document.getElementById("roles").style.display = "block";
            document.querySelector('.atributos-usuarios').style.display = "none";
            document.querySelector('.atributos-grupo').style.display = "none";
        } else {
            document.getElementById("roles").style.display = "none";
            document.querySelector('.atributos-rol').style.display = "none";

        }

        if (`${event.target.value}` == 'usuario') {
            document.getElementById("usuarios").style.display = "block";
            document.querySelector('.atributos-grupo').style.display = "none";
            document.querySelector('.atributos-rol').style.display = "none";
        } else {
            document.getElementById("usuarios").style.display = "none";
            document.querySelector('.atributos-usuarios').style.display = "none";
        }

    });



    //mostrar elementos de "Usuarios"
    const usuarios = document.querySelector('#usuarios');

    usuarios.addEventListener('change', (event) => {
        console.log(`${event.target.value}`);
        document.querySelector('#nombre-usuario').innerHTML = `${event.target.value}`;
        document.querySelector('.atributos-usuarios').style.display = "block";
        document.querySelector('.atributos-grupo').style.display = "none";
        document.querySelector('.atributos-rol').style.display = "none";


    })


    //mostrar elementos de "Roles"
    const roles = document.querySelector('#roles');

    roles.addEventListener('change', (event) => {
        console.log(`${event.target.value}`);
        document.querySelector('#nombre-rol').innerHTML = `${event.target.value}`;
        document.querySelector('.atributos-rol').style.display = "block";
        document.querySelector('.atributos-usuarios').style.display = "none";
        document.querySelector('.atributos-grupo').style.display = "none";


    })

    //document.getElementById("btn").style.display = "none";
    document.getElementById("grupos").style.display = "none";
    document.getElementById("roles").style.display = "none";
    document.getElementById("usuarios").style.display = "none";
    document.querySelector('.atributos-grupo').style.display = "none";
    document.querySelector('.atributos-rol').style.display = "none";
    document.querySelector('.atributos-usuarios').style.display = "none";




});
//fin del DOMContentLoaded