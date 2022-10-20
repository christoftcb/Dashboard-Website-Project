function validatePassword(){
    let valid = false;
    let pass = document.getElementById('password').value;
    if(pass == '')
    {
        alert("Password lama tidak boleh kosong")
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

function validatePasswordNew(){
    let valid = false;
    let pass = document.getElementById('passwordnew').value;
    if(pass == '')
    {
        alert("Password baru tidak boleh kosong")
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

function validateCheckBox(){
    let terms = document.getElementById('agree');

    if(!terms.checked)
    {
        alert("Jangan lupa centang konfirmasi")
    }
    else
    {
        valid = true;
    }
    return valid;
}

let form = document.getElementById('subform')
form.addEventListener('submit', function(e){
    passwordoldValidation = validatePassword(),
    passwordnewValidation = validatePasswordNew(),
    checkboxValidation = validateCheckBox();

if (true == passwordoldValidation && true == passwordnewValidation && true == checkboxValidation) {
        alert("Ganti password berhasil")
        $('#subform').attr('action','homesignedin.html');
}
else {
    e.preventDefault();
}
})