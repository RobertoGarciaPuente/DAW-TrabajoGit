var $usuario;
var $password;
var $array_usuario;
var $array_password;


function validarUsuario() {
    let elemento;
    let $validaruser = [];

    $validaruser = [false, false, true, true];

    elemento = document.getElementById("userMin");
    elemento.className = "ko";
    elemento = document.getElementById("userNum");
    elemento.className = "ko";
    elemento = document.getElementById("userSim");
    elemento.className = "blanco";
    elemento = document.getElementById("userMay");
    elemento.className = "blanco";

    $usuario = document.getElementById("usuario").value;
    $array_usuario = Array.from($usuario);
    
    if($array_usuario.some(esMinuscula)){
        elemento = document.getElementById("userMin");
        elemento.className = "ok";
        $validaruser[0] = ($array_usuario.some(esMinuscula));
    };
    
    if($array_usuario.some(esNumero)){
        elemento = document.getElementById("userNum");
        elemento.className = "ok";
        $validaruser[1] = ($array_usuario.some(esNumero));
    };
    
    if($array_usuario.some(esMayuscula)){
        elemento = document.getElementById("userMay");
        elemento.className = "ko";
        $validaruser[2] = (!$array_usuario.some(esMayuscula));  
    };
    
    if($array_usuario.some(esSimbolo)){
        elemento = document.getElementById("userSim");
        elemento.className = "ko";
        $validaruser[3] =(!$array_usuario.some(esSimbolo)); 
    };
    
    console.error($validaruser);
    /*
      No se me ocurria donde usar every() por lo que creo un array con los valores devueltos por 
      los some() que controla si hay minusculas, mayuscula, numero o simbolos  ahi compruebo con 
      el every() si todo es true.
    */
    if ($validaruser.every(correcto)) { 
        return true;                
    } else {
        return false;
    }
}

function validarPassword() {
    let elemento;
    let $validarpass = [];

    $validarpass = [false, false, false, false];

    elemento = document.getElementById("passMin");
    elemento.className = "ko";
    elemento = document.getElementById("passMay");
    elemento.className = "ko";
    elemento = document.getElementById("passMin");
    elemento.className = "ko";
    elemento = document.getElementById("passNum");
    elemento.className = "ko";
    elemento = document.getElementById("passSim");
    elemento.className = "ko";

    $password = document.getElementById("password").value;
    $array_password = Array.from($password);
    if($array_password.some(esMinuscula)){
        elemento = document.getElementById("passMin");
        elemento.className = "ok";
        $validarpass[0] = ($array_password.some(esMinuscula));
    };
    
    if($array_password.some(esNumero)){
        elemento = document.getElementById("passNum");
        elemento.className = "ok";
        $validarpass[1] = ($array_password.some(esNumero));
    };
    
    if($array_password.some(esMayuscula)){
        elemento = document.getElementById("passMay");
        elemento.className = "ok";
        $validarpass[2] = ($array_password.some(esMayuscula));
    };
    
    if($array_password.some(esSimbolo)){
        elemento = document.getElementById("passSim");
        elemento.className = "ok";
        $validarpass[3] =($array_password.some(esSimbolo));
    };
    console.warn($validarpass);
    if ($validarpass.every(correcto)) {
        return true;
    } else {
        return false;
    }
}

function esMinuscula($caracter) {
    return ($caracter.charCodeAt() > 96 && $caracter.charCodeAt() < 123) 
}

function esNumero($caracter) {
    return ($caracter.charCodeAt() > 47 && $caracter.charCodeAt() < 58) 
}

function esMayuscula($caracter) {    
    return ($caracter.charCodeAt() > 64 && $caracter.charCodeAt() < 91) 
}

function esSimbolo($caracter) {
    return (($caracter.charCodeAt() > 32 && $caracter.charCodeAt() < 48) ||
            ($caracter.charCodeAt() > 57 && $caracter.charCodeAt() < 64) ||
            ($caracter.charCodeAt() > 90 && $caracter.charCodeAt() < 96) ||
            ($caracter.charCodeAt() > 122 && $caracter.charCodeAt() < 255));
}

function correcto(opc) {
    return opc == true;
}
function validar() {
    var $correctoUsuario;
    var $correctoPassword;

    $correctoUsuario = validarUsuario();
    console.log("Validar Usuario: " + $correctoUsuario);

    $correctoPassword = validarPassword();
    console.log("Validar Pass: " + $correctoPassword);
    if ($correctoUsuario && $correctoPassword) {
        alert("Datos guardados correctamente");
    } else {
        alert("Compruebe los datos");
    }
}