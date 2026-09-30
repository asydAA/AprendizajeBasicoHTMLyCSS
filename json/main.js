async function obtenerDatos() {
    const response = await fetch("http://127.0.0.1:5500/json/primer_json.json");
    const json = await response.json();

    //console.log(JSON.parse(json));
    console.log(response);
    console.log(json);
    console.log(json.nombre);
    console.log(json.edad);
    console.log(json.direccion.calle);

    json.experiencia.forEach((elemento) => {
        console.log(elemento.empresa);
        console.log(elemento.antiguedad);
    });
}

obtenerDatos();