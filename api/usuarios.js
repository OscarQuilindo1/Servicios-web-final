const api = document.querySelector(".container");
const getUrl = new URLSearchParams(window.location.search);
const ctx = document.getElementById('myChart');
id = getUrl.get("id");
const url = "https://jsonplaceholder.typicode.com/users";

fetch(`${url}/${id}`)
  .then((Response) => Response.json())
  .then((data) => {
    api.innerHTML = `
    <div class="wrapper">
    <div class="data-wrapper">
        <h4>Nombre:</h4>
        <span>${data.name}</span>
    </div>
</div>
<div class="wrapper">
<div class="data-wrapper">
    <h4>Nombre de Usuario:</h4>
    <span>${data.username}</span>
</div>
</div>
<div class="wrapper">
<div class="data-wrapper">
    <h4>Correo Electronico:</h4>
    <span>${data.email}</span>
</div>
</div>
<div class="wrapper">
<div class="data-wrapper">
    <h4>Telefono:</h4>
    <span>${data.phone}</span>
</div>
</div>
<div class="wrapper">
<div class="data-wrapper">
    <h4>Sitio Web:</h4>
    <span>${data.website}</span>
</div>
<div class="wrapper">
<div class="data-wrapper">
    <h4>Geo-lalitud:</h4>
    <span>${data.address.geo.lat}</span>
</div>
<div class="wrapper">
<div class="data-wrapper">
    <h4>Geo-longitud:</h4>
    <span>${data.address.geo.lng}</span>
</div>
</div>`;

  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['lat', 'lng'],
      datasets: [{
        label: 'datos',
        data: [data.address.geo.lat, data.address.geo.lng],
        fill: true,
        borderWidth: 2
      }],
      hoverOffset: 4
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  })
  .catch((err) => console.log(err));


  
