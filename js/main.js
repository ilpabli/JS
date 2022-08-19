let userSaved = 'pepe';
let passSaved = 'hitaca';
let loginSuccess = true;
let loginFail = 0;

do {
    let user = prompt('Ingresa tu usuario');
    let pass = prompt('Ingresa tu password');
    if (user === userSaved && pass === passSaved) {
        console.log('Te eche de menos ' + userSaved);
        loginSuccess = false;
    }
    if (loginFail <= 3 && loginSuccess != false) {
        console.log('Estas pifiando!!! Tipeaste User: ' + user + ' Pass: ' + pass);
        loginFail++;
    }
    if (loginFail === 2) {
        console.log('Cuidado te queda 1 intento!');
    }
    if (loginFail === 3) {
        console.log('Llegaste a tus 3 intentos');
        alert('Te fuiste baneado!!!');
        loginSuccess = false;
    } 
} while (loginSuccess);