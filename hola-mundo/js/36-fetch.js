'use strict'

// Fetch (ajax) y peticiones a servicios / apis rest
var div_usuarios = document.querySelector("#usuarios");
var div_profesor = document.querySelector("#profesor");
var div_janet = document.querySelector("#janet");

//fetch('https://jsonplaceholder.typicode.com/users')           //Otra página para capturar jsons con fetch
//fetch('https://reqres.in/api/users?page=2')
    getUsuarios()
    .then(data => data.json())
    .then(users => 
        {
            listadoUsuarios(users.data);
            return getInfo();
        })
        .then(data =>
            {
                div_profesor.innerHTML = data;

                return getJanet();
            })
        .then(data => data.json())
        .then(user => 
            {
                mostrarJanet(user.data);
            })
        .catch(error => 
            {
                alert("Error en las peticiones: " + error);
            });
        

function getUsuarios()
{
    return fetch('https://reqres.in/api/users?page=2');
}

function getJanet()
{
    return fetch('https://reqres.in/api/users/2');
}

function getInfo()
{
    var profesor = 
    {
        nombre: 'Luis',
        apellidos: 'Rico',
        url: 'https://github.com/LuisRcap'
    };

    return new Promise((resolve, reject) => 
    {
        var profesor_string = "";
        setTimeout(function()
        {
            profesor_string = JSON.stringify(profesor);

            if(typeof profesor_string != 'string' && profesor_string != '')
                return reject('error');
            else
                return resolve(profesor_string);
        }, 3000);

        
    });
}

function listadoUsuarios(usuarios)
{
    usuarios.map((user, i) =>
    {
        let nombre = document.createElement("h3");
        nombre.innerHTML = i + ". " + user.first_name + " " + user.last_name;

        div_usuarios.appendChild(nombre);

        document.querySelector(".loading").style.display = "none";
    });
}

function mostrarJanet(user)
{
    let nombre = document.createElement("h4");
    let avatarDeFuncion = document.createElement("img");

    nombre.innerHTML = user.first_name + " " + user.last_name;
    avatarDeFuncion.src = user.avatar;
    avatarDeFuncion.width = "100";

    div_janet.appendChild(nombre);
    div_janet.appendChild(avatarDeFuncion);

    document.querySelector("#janet .loading").style.display = "none";
}