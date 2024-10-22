let inputActual = '';
let operacionActual = '';
let inputAnterior = '';
// estas variables almacenan datos, el primero almacena el primer numero ingresado,
//el segundo, almacena la operacion escogida y el tercero guarda el ultimo numero ingresado


function numero(num) {
    inputActual += num;
    actualizarResultado();
}
//inputActual agrega el numero ingresado, luego llama a actualizarResultado para mostrar el numero en pantalla.



function operacion(op) {
    inputAnterior = inputActual;
    operacionActual = op; 
    inputActual = '';
}
//cuando se selecciona una operacion, se guarda el valor de InputActual en InputAnterior, luego se asigna la
//operacion elegida en operacionActual y se limpia InputActual para despues guardar el segundo numero



function resultado() {
    let res;
    let anterior = parseFloat(inputAnterior);
    let actual = parseFloat(inputActual);

    if (operacionActual === '+') {
        res = anterior + actual;
    } else if (operacionActual === '-') {
        res = anterior - actual;
    } else if (operacionActual === '*') {
        res = anterior * actual;
    } else if (operacionActual === '/') {
        res = anterior / actual;
    }

    inputActual = res;
    operacionActual = '';
    inputAnterior = '';
    actualizarResultado();
}
// se activa cuando se usa el " = " , la funcion usa inputAnterior y actual, luego de eso 
//realiza la operacion ingresada, luego actualiza inputActual y muestra el resultado
//despues limpia la operacion e inputAnterio para ingresar mas datos



function borrar() {
    inputActual = ''; 
    inputAnterior = '';
    operacionActual = '';
    actualizarResultado();
}
//limpia todos los valores cuando se usa " C " restableciendo, InputActual, InputAnterior y OperacionActual 
//y llama a actualizarResultador para limpiar la pantalla




function actualizarResultado() {
    document.getElementById('result').value = inputActual;
}
//muestra el numero en la pantalla de la calculadora,  toma el elemento por ID para acceder al campo 
//donde se muestran los numeros, asigna el valor de inputACtual mostrandolo en pantalla
//al estar dentro de la funcion de numero tambien llama las funciones de numero, resultado y borrar,
//para que se muestren en pantalla al momento de usarlos.