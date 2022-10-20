function validateNama(){
    let nama = document.getElementById('nama').value;
    let letters = /^[A-Za-z]+$/
    let valid = false

    if(nama.match(letters))
    {
        valid = true;
    }
    else
    {
        alert('Nama hanya harus menggunakan huruf')
    }
    return valid;
}

function validateAlamat(){
    let alamat = document.getElementById('alamat').value;
    let letters = /^[A-Za-z]+$/
    let valid = false

    if(alamat == '')
    {
        alert('Alamat harus diisi')
    }
    else
    {
        valid = true;
    }
    return valid;
}


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
        alert('Email tidak boleh kosong dan diakhiri dengan @gmail.com')
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

function validateLahir(){
    let valid = false;
    var lahir = document.getElementById('lahir').value;
    if(lahir == ''){
        alert("Tanggal lahir harus diisi");
    } 
    else{
        valid = true;
    }
    return valid;
}

function validateTelepon(){
    let valid = false;
    var notelp = document.getElementById('notelp').value;

    if(notelp == "" || isNaN(notelp)){
        alert('Nomor telepon tidak boleh kosong dan hanya diisi angka')
    }
    else{
        valid = true;
    }
    return valid;
}

function validateCheckBox(){
    let terms = document.getElementById('agree');

    if(!terms.checked)
    {
        alert("Jangan lupa centang terms & agreement")
    }
    else
    {
        valid = true;
    }
    return valid;
}

let form = document.getElementById('subform')
form.addEventListener('submit', function(e){
    namaValidation = validateNama(),
    lahirValidation = validateLahir(),
    alamatValidation = validateAlamat(),
    emailValidation = validateEmail(),
    teleponValidation = validateTelepon(),
    passwordValidation = validatePassword(),
    checkboxValidation = validateCheckBox();

if (true == namaValidation && true == lahirValidation && true == alamatValidation && true == emailValidation && true == teleponValidation && true == passwordValidation && true == checkboxValidation) {
        alert("Sign Up Berhasil")
        $('#subform').attr('action','signin.html');
}
else {
    e.preventDefault();
}
})