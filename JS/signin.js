function validateEmail(){
    let valid = false;
    let email = document.getElementById('email').value;
    let arrEmail = email.split('@')
    if(arrEmail.length !=2)
    {
        alert("Email Salah")
    }
    else if(arrEmail[0].length<=1)
    {
        alert("Email Salah")
    }
    else if(arrEmail[1] != 'gmail.com')
    {
        alert('Email harus diakhiri dengan @gmail.com')
    }
    else
    {
    valid = true;
    }
    return valid;
}

function validatePassword(){
    let valid = false;
    let pass = document.getElementById('password').value;
    if(pass == '')
    {
        alert("Password tidak boleh kosong")
    }
    else if(pass.length<8){
        alert("Password minimal 8 karakter")
    }
    else if(pass.length>10){
        alert("Password maksimal 10 karakter")
    }
    else if (pass.search(/(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])/) < 0){
        alert("Password minimal menggunakan 1 huruf besar, 1 huruf kecil, dan 1 angka")
    }
    else
    {
    valid = true;
    }
    return valid;
}

let form = document.getElementById('subform')
form.addEventListener('submit', function(e){
    emailValidation = validateEmail(),
    passwordValidation = validatePassword();

if (true == emailValidation && true == passwordValidation) {
        alert("Sign In Berhasil")
        $('#subform').attr('action','homesignedin.html');
}
else {
    e.preventDefault();
}
})