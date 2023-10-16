// SIMULADOR DE CUANTOS GRAMOS DE CAFE NECESITO
// function multiplicar(num1, num2){
// return num1 * num2;
// }

// let cantidadDeTazas = parseInt(prompt("¿CUÁNTAS TAZAS DE CAFÉ TOMA USTED POR DÍA?"));

// let gramosDeCafeMensuales = multiplicar((cantidadDeTazas*30), 12.5);
// console.log(gramosDeCafeMensuales);



// VIRTUAL COFFEE SHOP EXPERIENCE

function espresso(){
    if(bebidas == 1){
        precio = 700;
        let tipoDeCafe;
        while(true){
            tipoDeCafe = parseInt(prompt("¿Que tipo de café desea? 1. Espresso Blend  2. Sumatra  3. Colombia  4.Kenya"));
            if(tipoDeCafe > 0 && tipoDeCafe <= 4){
                switch(tipoDeCafe){
                    case 1:
                        tipoDeCafe  =  "Espresso Blend";
                        break;
            
                    case 2:
                        tipoDeCafe = "Sumatra";
                        break;
                    
                    case 3:
                        tipoDeCafe = "Colombia";
                        break;
            
                    case 4:
                        tipoDeCafe = "Kenya";
                        break;
                }
                break;
            }
            else{
                alert("Por favor, ingrese una opción válida.");
            }
        }
        let extras;
        while (true){
            extras = prompt("¿Quiere cortarlo con espuma por +$75? Conteste si o no");
            if(extras == "si" || extras == "Si"){
                precio = precio + 75;
                alert("¡Excelente! Su bebida será un Espresso de " + tipoDeCafe + " Con espuma. Total a pagar: $" + precio);
                break;
            }
            else if (extras == "no" || extras == "No"){
                alert("¡Excelente! Su bebida será un Espresso de " + tipoDeCafe + " sin espuma. Total a pagar: $" + precio);
                break;
            }
            else{
                alert("Por favor, ingrese una opción válida");
            }
        }

    }
}
function latte(){
    if(bebidas == 2){
        precio = 1000;
        let tipoDeLeche;
        while(true){
            tipoDeLeche = parseInt(prompt("¿Que tipo de leche desea? 1. Entera  2. Descremada  3. Almendra  4.soja"));
            if(tipoDeLeche > 0 && tipoDeLeche <=4){
                switch(tipoDeLeche){
                    case 1:
                        tipoDeLeche  =  "Entera";
                        break;
            
                    case 2:
                        tipoDeLeche = "Descremada";
                        break;
                    
                    case 3:
                        tipoDeLeche = "Almendra";
                        break;
            
                    case 4:
                        tipoDeLeche = "Soja";
                        break;
                }
                break;
            }
            else {
                alert("Por favor, ingrese una opción válida");
            }
        }
        let extras;
        while (true){
            extras = prompt("¿Quiere agregarle crema por +$120? Conteste si o no");
            if(extras == "si" || extras == "Si"){
                precio = precio + 120;
                alert("¡Excelente! Su bebida será un Latte de " + tipoDeLeche + " con crema. Total a pagar: $" + precio);
                break;
            }
            else if (extras == "no" || extras == "No"){
                alert("¡Excelente! Su bebida será un Latte de " + tipoDeLeche + " sin crema. Total a pagar: $" + precio);
                break;
            }
            else{
                alert("Por favor, ingrese una opción válida");
            }
        }

    }
}
function americano(){
    if(bebidas == 3){
        precio = 900;
        let shots = parseInt(prompt("¿Cuántos shots va a querer? 1 shot || 2 shots || 3 shots"));
        let extras = prompt("¿Quiere agregarle crema por +$120? Conteste si o no");
            if(extras == "si" || extras == "Si"){
                precio = precio + 120;
                alert("¡Excelente! Su bebida será un americano con " + shots + " shots con crema. Total a pagar: $" + precio);
            }
            else if (extras == "no" || extras == "No"){
                alert("¡Excelente! Su bebida será un americano con " + shots + " shots sin crema. Total a pagar: $" + precio);
            }
            else{
                alert("Por favor, ingrese una opción válida");
            }
        }

}
function caramel(){
        if(bebidas == 4){
            precio = 1200;
            let shots;
            while (true){
                shots = parseInt(prompt("quiere extra shots de café por +120 c/u? Ingrese el número de shots o 0 para continuar"));
                if(shots !== 0 && shots <= 5){
                    for(shots; shots > 0; shots--){
                        precio += 120;
                    }
                    break;
                }
                else if (shots == 0){
                    shots = 2; // 2 shots es lo predeterminado con esta bebida.
                    break;
                }
                else{
                    alert("Por favor, nuestro máximo de shots en esta bebida son 5");

                }
            }
            while (true){
                let extras = prompt("¿Quiere agregarle crema por +$120? Conteste si o no");
                if(extras == "si" || extras == "Si"){
                    precio = precio + 160;
                    alert("¡Excelente! Su bebida será un Caramel Machiatto con " + shots + " shots con crema. Total a pagar: $" + precio);
                break;
                }
                else if (extras == "no" || extras == "No"){
                    alert("¡Excelente! Su bebida será un Caramel Machiato con " + shots + " shots sin crema. Total a pagar: $" + precio);
                break;
                }
                else{
                    alert("Por favor, ingrese una opción válida");
                }
    
            }

            }
}
alert("¡Hola! Bienvenidos a Virtual Coffee Experience.");
let bebidas;
let precio;

while(true){
    bebidas = parseInt(prompt("Por favor, ingrese el numero de la bebida que desees: 1. $700 Espresso  2. $1.000 Late  3. $900 Americano  4. $1.200 Caramel Machiato"));
    if(bebidas > 0 && bebidas <= 4){
        espresso();
        latte();
        americano();
        caramel();
        break;
    }
    else{
        alert("Por favor, ingrese una opción válida.");
    }
}


