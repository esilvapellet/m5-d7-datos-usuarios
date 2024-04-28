let urlApi = "https://randomuser.me/api/?results=10";

const getData = async (url) => {

    try {
        let response = await fetch(url);
        console.log(response);
        let data = await response.json();
        return data;
        code = response.status;

    } catch (error) {
        console.log(error);
        return { code, error };
        // return "Ha fallado el llamado a la API.";
    }
}

const datosUsuarios = (datos) => {
    let elementoLista = "";
    datos.forEach(dato => {
        // elementoLista += `<img src="${dato.picture.large}"><p>${dato.name.first} ${dato.name.last}</p><p>${dato.email}</p><p>${dato.cell}</p><hr>`;

        elementoLista += `<div class="col-12 col-md-6 g-2"><div class="card py-2"><img src="${dato.picture.large}" class="card-img-top text-center">
  <div class="card-body">
    <h5 class="card-title">👤 ${dato.name.first} ${dato.name.last}</h5>
    <p class="card-text">📨 ${dato.email}<br>📲 ${dato.cell}</p></div></div></div>`;
    });
    document.getElementById("user-data").innerHTML = elementoLista;
    console.log(elementoLista);
}

const main = async () => {
    let datos = await getData(urlApi);
    document.getElementById("user-data").style.display = "block";
    datosUsuarios(datos.results);
}

main();