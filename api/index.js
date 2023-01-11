const api = document.querySelector(".container");

const url = "https://jsonplaceholder.typicode.com/users";

fetch(url).then(Response => Response.json()).then(data => {
    data.forEach(usuario => {
        console.log(usuario.name)
        const p = document.createElement('p')
        p.setAttribute('id', usuario.id)
        p.innerHTML = usuario.name
        p.addEventListener('click', function(){
            window.location.href = `./usuarios.html?id=${usuario.id}`
        })
        api.appendChild(p)
    });
    //console.log(data)

}).catch(err => console.log(err))