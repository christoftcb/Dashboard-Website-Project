Number.prototype.pad = function(n) {
    for (var r = this.toString(); r.length < n; r = 0 + r);
    return r;
  };
  
  function updateClock() {
    var now = new Date();
    var sec = now.getSeconds(),
      min = now.getMinutes(),
      hou = now.getHours(),
      mo = now.getMonth(),
      dy = now.getDate(),
      yr = now.getFullYear();
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var tags = ["mon", "d", "y", "h", "m", "s"],
      corr = [months[mo], dy, yr, hou.pad(2), min.pad(2), sec.pad(2)];
    for (var i = 0; i < tags.length; i++)
      document.getElementById(tags[i]).firstChild.nodeValue = corr[i];
  }
  
  function initClock() {
    updateClock();
    window.setInterval("updateClock()", 1);
  }

function validateNoKaryawan(){
    let valid = false;
    let nokaryawan = document.getElementById('nokaryawan').value;
    if(nokaryawan == '')
    {
        alert('Nomor Karyawan tidak boleh kosong')
    }
    else
    {
    valid = true;
    }
    return valid;
}

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

function validateGaji(){
    let valid = false;
    let gaji = document.getElementById('gaji').value;
    if(gaji == '')
    {
        alert('Gaji Karyawan tidak boleh kosong')
    }
    else
    {
    valid = true;
    }
    return valid;
}

function validateJabatan(){
    let valid = false;
    let j = document.getElementById("jabatan");
    let optionSelIndex = j.options[j.selectedIndex].value;
    let optionSelectedText = j.options[j.selectedIndex].text;
    if(optionSelIndex != 0)
    {
        valid = true;
    }
    else if (optionSelIndex == 0)
    {
        alert('Silahkan pilih jabatan')
    }
    else 
    {

    }
    return valid;
    }

function validateTambah(){
    let valid = false;
    let e = document.getElementById("tambah");
    let optionSelIndex = e.options[e.selectedIndex].value;
    let optionSelectedText = e.options[e.selectedIndex].text;
    if(optionSelIndex != 0)
    {
        valid = true;
    }
    else if (optionSelIndex == 0)
    {
        alert('Silahkan pilih ditambahkan oleh siapa')
    }
    else 
    {

    }
    return valid;
}

function validateTanggal(){
    let valid = false;
    var tanggal = document.getElementById('tanggal').value;
    if(tanggal == ''){
        alert('Tanggal lahir harus diisi');
    } 
    else{
        valid = true;
    }
    return valid;
}

let form = document.getElementById('subform')
form.addEventListener('submit', function(e){
    nokaryawanValidation = validateNoKaryawan(),
    namaValidation = validateNama(),
    gajiValidation = validateGaji(),
    jabatanValidation = validateJabatan(),
    tambahValidation = validateTambah(),
    tanggalValidation = validateTanggal();

if (true == nokaryawanValidation && true == namaValidation && true == gajiValidation && true == jabatanValidation && true == tambahValidation && true == tanggalValidation) {
        alert("Data berhasil ditambahkan!")
        $('#subform').attr('action','managedata.html');
}
else {
    e.preventDefault();
}
})