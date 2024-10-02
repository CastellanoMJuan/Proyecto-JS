function saludo() {
    console.log("¡Bienvenido a Juca Bebidas!");
    alert("!Bienvenido a Juca Bebidas!");
}

saludo();

function edad() {
    let adulto = prompt("¿Eres mayor de edad?");
    if (adulto.toLowerCase() == "si") {
        console.log("Continuemos");
        alert("Continuemos");
        bebidas();
    }

    else {
        console.log("¡Esta prohibido la venta de alcohol a menores! Muchas gracias");
        alert("¡Esta prohibido la venta de alcohol a menores! Muchas gracias");
        return false

    }
}

function bebidas(){
    let bebidas = prompt("¿Que tipo de bebida esta buscando?:" + "\n" + "1)Vino Malbec" + "\n" + "2)Vino Blanco" + "\n" + "3)Champange" + "\n" + "4)Fernet");
    if (bebidas == "1" || bebidas.toLowerCase() == "Vino Malbec"){
        console.log("Excelente")
        alert("Excelente");

        cantidad();
    } else if (bebidas == "2" || bebidas.toLowerCase() == "Vino Blanco"){
        console.log("Genial");
        alert("Genial");

        cantidad();
    } else if (bebidas == "3" || bebidas.toLowerCase() == "Champange"){
        console.log("Fantástico");
        alert("Fantástico");

        cantidad();
    } else if (bebidas == "4" || bebidas.toLowerCase() == "Fernet"){
        console.log("Excelente elección");
        alert("Excelente elección");

        cantidad();
    }
}

let usuario = prompt("Ingrese su nombre y apellido");
if (usuario != "") {
    console.log("Hola, " + usuario + ", Bievenido a Juca Bebidas");
    alert("Hola, " + usuario + ", Bienvenido a Juca Bebidas")
}
else {
    alert("Ingrese sus datos");
    usuario = prompt("Ingrese su nombre y apellido")
}

function cantidad(){
    let unidades = prompt("Ingrese la cantidad que desea comprar");
    if (unidades != ""){
        console.log("Usted desea comprar " + unidades);
        alert("Usted desea comprar " + unidades);
    }
    else {
        console.log("Igrese una cantidad");
        alert("Ingrese una cantidad")
    }
}

edad();