function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    document.getElementById("table4").classList.toggle("border1");
    document.getElementById("table4").classList.toggle("border2");

}
function toggleDarkMode1() {
    document.body.classList.toggle("dark-mode");
    document.getElementById("table5").classList.toggle("border1");
    document.getElementById("table5").classList.toggle("border2");

}
           
function filterTable() {
let input, filter, table, tr, td, i, j, txtValue, found;
input = document.getElementById("filter-input");
filter = input.value.toUpperCase();
table = document.getElementById("table4");
tr = table.getElementsByTagName("tr");

for (i = 1; i < tr.length; i++) { 
found = false;
td = tr[i].getElementsByTagName("td");

for (j = 0; j < td.length; j++) {
txtValue = td[j].textContent || td[j].innerHTML;
if (txtValue.toUpperCase().indexOf(filter) > -1) {
    found = true;
    break;
}
}

if (found) {
tr[i].style.display = "";
} else {
tr[i].style.display = "none";
}
}
}


function filterTable1() {
    let input, filter, table, tr, td, i, j, txtValue, found;
    input = document.getElementById("filter-input1");
    filter = input.value.toUpperCase();
    table = document.getElementById("table5");
    tr = table.getElementsByTagName("tr");
    
    for (i = 1; i < tr.length; i++) { 
    found = false;
    td = tr[i].getElementsByTagName("td");
    
    for (j = 0; j < td.length; j++) {
    txtValue = td[j].textContent || td[j].innerHTML;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
        found = true;
        break;
    }
    }
    
    if (found) {
    tr[i].style.display = "";
    } else {
    tr[i].style.display = "none";
    }
    }
    }

    function button_select (){
     
        const buton=document.querySelector('.button2')
  if(buton.innerHTML=='حفظ'){
    buton.innerHTML='محفوظ';
    alert('تم الحفظ بنجاح');
    window.print();
  }
  else{
    buton.innerHTML='حفظ';
  }



    }