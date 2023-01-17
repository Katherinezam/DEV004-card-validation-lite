
// creo mi funcion con nombre comunicarValidacion.
function comunicarValidacion() {
    /**
     * creo mi variable numerosDeTarjeta donde iran almacenadose los numeros a ingresar en mi cuadro (input), 
     * los cuales seran llamados del html atravez del metodo document.getElementById(nombre del id=carnumber)
     * .value (en este caso .value serian los numeros que voy a ingresar en el cuadro delinput)
     * tener presente que me piden que solo se ingrese numeros, por el cual en html, puse type="number", si no me permitiria ingresar tambien texto.
     */
    var numerosDeTarjeta = document.getElementById("cardnumber").value
    /**
     * Me indican que si el input esta vacio no debe validarse, por el cual puse mi condicional if
     * donde indico que si mi variable donde voy almacenar mis numeros a ingresar son iguales a un string vacio, debe aparecerme
     * un alert el cual comunique "Por favor, ingrese un número de tarjeta"
     */
    if (numerosDeTarjeta === "") {
        alert("Por favor, ingrese un número de tarjeta!")
        return// salio de la funcion
    }

    /**
     * Como siguiente paso para validar los numeros de mi tarjeta debo seguir el algoritmo de Luhn, para ello he 
     * creado mi nueva variable numeroTarjetaNuevo donde almacenare los numeros nuevos de mi tarjeta en un array 
     */
    var numeroTarjetaNuevo = []

    /** empezare con mi estructura con el bucle for, Un ciclo for se repite hasta que una condición especificada se evalúe como false
     * el aspecto de for ejecuta expresiónInicial,expresiónCondicional y instrucción.
    */

    /**
     * la variable i lo inicio desde 0 para asi aprovechar la posicion del array que empieza tambien 0; si i cumple la condicion de que sea menor a mi variable numerosDeTarjeta,
     * seguira la instruccion mas uno y asi sucesivamente.---( .length devuelve el número de caracteres de una cadena)
    
     */
    for (var i = 0; i < numerosDeTarjeta.length; i++) {
        /**
         *en el ejemplo me percate de que las posiciones resaltados eran multiplos de 2 (pares), 
         entonces a los numeros de esas posiciones resaltadas los multiplique por 2.
         */

        if (i % 2 == 0) { 
            // en mio nuevo array voy a ingresar los nuevos numeros que obtengo de los numeros pares multiplicados por dos
            numeroTarjetaNuevo.push(numerosDeTarjeta[i] * 2) 
        }
        /**
         * para los que no eran pares los agregue directamente a mi nuevoa array. coloque el valor (number) ya que el 
         *  el array especificamente sobre entiede que es un string.
        */ 
        
        else {
            numeroTarjetaNuevo.push(Number(numerosDeTarjeta[i]))
        }
    }

    console.log("Numero modificados --> " + numeroTarjetaNuevo)


// creo una nueva variable donde se almacenaran los numeros sumados con dos digitos en un array nuevo.
    var numeroTarjetaNuevoCalculado = []

    for (var i = 0; i < numeroTarjetaNuevo.length; i++) {

        if (numeroTarjetaNuevo[i].toString().length == 2) {
            let num = numeroTarjetaNuevo[i].toString()  // '16' -> ['1','6']
            //  num[0] + num[1] = 16  por que es un array de string
            numeroTarjetaNuevoCalculado.push(Number(num[0]) + Number(num[1])) // 1 + 6 = 7
            //  console.log("Numero mayores de dos digitos-> " + numeroTarjetaNuevo[i])
        } else (
            numeroTarjetaNuevoCalculado.push(numeroTarjetaNuevo[i])
        )

    }

    console.log("numeroTarjetaNuevoCalculado ->" + numeroTarjetaNuevoCalculado)

    // creo una nueva variable inicializandolo con 0, 
    let resultado = 0
    //nuevamente hago mi estrucura for
    for (var i = 0; i < numeroTarjetaNuevoCalculado.length; i++) {
        resultado = resultado + numeroTarjetaNuevoCalculado[i]
    }
    console.log(resultado)
// si el ultimo digito del resultado es 0, mi tarjeta sera valida, si no, no...lo mostrare mediante un alert.
// todo numero dividido entre 10 me da como resto 0 y si en mi resultado final el ultimo digiton me da 0, es valido.

// hago mi condicional para mandar mis alert.
    if (resultado % 10 == 0) {
        alert("Numero de tarjeta valida")
    }
    else {
        alert("Numero de tarjeta invalida")
    }
}

