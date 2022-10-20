function validateDesc(){
    let valid = false;
    let desc = document.getElementById('desc').value;
    if(desc == '')
    {
        alert("Description tidak boleh kosong")
    }
    else if(desc.length<5){
        alert("Description terlalu pendek minimal 5 karakter")
    }
    else
    {
    valid = true;
    }
    return valid;
}

let form = document.getElementById('subform')
form.addEventListener('submit', function(e){
   descValidation = validateDesc();

if (true == descValidation) {
        alert("Pesan kamu berhasil dikirim")
        $('#subform').attr('action','kontak.html');
}
else {
    e.preventDefault();
}
})