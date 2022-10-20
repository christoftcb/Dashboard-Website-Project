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

function sortusingNumber(n) {
    var table;
    var rows
    var sort;
    var i;
    var x;
    var y;
    var tosorting;
    var sortcon = 0;
    var condition ="one";
    table = document.getElementById("tabel");
    sort = true;

    while (sort) {
        sort = false;
        rows = table.rows;
        for (i = 1; i < (rows.length - 1); i++) {
            tosorting = false;
            x = rows[i].getElementsByTagName("td")[n];
            y = rows[i + 1].getElementsByTagName("td")[n];
            if(condition == "one"){
                if (Number(x.innerHTML) > Number(y.innerHTML)) {
                    tosorting = true;
                    break;
                } 
            }else if (condition == "two"){
                if (Number(x.innerHTML) < Number(y.innerHTML)) {
                    tosorting = true;
                    break;
                } 
            };
        };
        if (tosorting) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            sort = true;
            sortcon ++;
        }else{
            if (sortcon == 0 && condition == "one") {
                condition = "two";
                sort = true;
            };
        };
    };
};

function sortusingAlphabet(n) {
    var table;
    var rows
    var sort;
    var i;
    var x;
    var y;
    var tosorting;
    var sortcon = 0;
    sort = true;
    condition = "one"; 
    table = document.getElementById("tabel");

    while (sort) {
        sort = false;
        rows = table.rows;
        for (i = 1; i < (rows.length - 1); i++) {
            tosorting = false;
            x = rows[i].getElementsByTagName("td")[n];
            y = rows[i + 1].getElementsByTagName("td")[n];
            if (condition == "one") {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                tosorting= true;
                break;
            };
        }else if (condition == "two") {
            if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                tosorting = true;
                break;
            };
        };
      };
      if (tosorting) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            sort = true;
            sortcon ++;      
      }else {
            if (sortcon == 0 && condition == "one") {
                condition = "two";
                sort = true;
            };
        };
    };
};

function searchbar() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("tabel");
    tr = table.getElementsByTagName("tr");
  
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }