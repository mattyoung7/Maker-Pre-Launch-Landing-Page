function validate(){
    const mail = document.getElementById("email").value;

    const regx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    if(regx.test(mail)){
        document.getElementById('error').classList.remove('error');
        document.getElementById('error').classList.add('error-hidden');
        document.getElementById('email').classList.remove('email-error');
        document.getElementById("email").value = "";
        return true;
    } else {
        document.getElementById('error').classList.add('error');
        document.getElementById('error').classList.remove('error-hidden');
        document.getElementById('email').classList.add('email-error');
        return false;
    }
}