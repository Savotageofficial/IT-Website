function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
  }
  function markJoined(button) {
  button.innerText = "Joined ✅";
  button.disabled = true;
  button.style.backgroundColor = "#4CAF50";}
  
  function Search() {
    // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    table = document.getElementById("myUL1");
    tr = table.getElementsByTagName('tr');
  
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      txtValue = td.textContent || td.innerText;
      if(txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
    function Search1() {
      var input, filter, ul, li, a, i, txtValue;
      input = document.getElementById('myInput2');
      filter = input.value.toUpperCase();
      table = document.getElementById("myUL2");
      tr = table.getElementsByTagName('tr');
        for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        txtValue = td.textContent || td.innerText;
        if(txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
    function sortTable() {
        var table, rows, switching, i, x, y, shouldSwitch;
        table = document.getElementById("myTable");
        switching = true;
        while (switching) {
          switching = false;
          rows = table.rows;
          for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("td")[0];
            y = rows[i + 1].getElementsByTagName("td")[0];
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
              shouldSwitch = true;
              break;
            }
          }
          if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
          }
        }
      }
      function sortTable2() {
        var table, rows, switching, i, x, y, shouldSwitch;
        table = document.getElementById("myTable2");
        switching = true;
        while (switching) {
          switching = false;
          rows = table.rows;
          for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[0];
            y = rows[i + 1].getElementsByTagName("TD")[0];
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
              shouldSwitch = true;
              break;
            }
          }
          if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
          }
        }
      }
let en  = document.getElementById("en").classList;
        let ar  = document.getElementById("ar").classList;
        function hide(){
            en.toggle("hiddenen");
            ar.toggle("hiddenar");

        }
// دالة تبديل حالة الانضمام مع حفظها في localStorage
function toggleJoin(button) {
    const activity = button.getAttribute('data-activity');
    let joinedActivities = JSON.parse(localStorage.getItem('joinedActivities')) || {};

    if (joinedActivities[activity]) {
        // إلغاء الانضمام
        button.innerText = 'Join';
        button.classList.remove('joined');
        delete joinedActivities[activity];
    } else {
        // الانضمام
        button.innerText = 'Joined ✅';
        button.classList.add('joined');
        joinedActivities[activity] = true;
    }

    localStorage.setItem('joinedActivities', JSON.stringify(joinedActivities));
}

// تهيئة الأزرار عند تحميل الصفحة
window.onload = function() {
    const joinedActivities = JSON.parse(localStorage.getItem('joinedActivities')) || {};
    document.querySelectorAll('.join-btn').forEach(button => {
        const activity = button.getAttribute('data-activity');
        if (joinedActivities[activity]) {
            button.innerText = 'Joined ✅';
            button.classList.add('joined');
        }
    });
};

// دالة لحذف جميع بيانات localStorage
function clearLocalStorage() {
    localStorage.removeItem('joinedActivities');
    document.querySelectorAll('.join-btn').forEach(button => {
        button.innerText = 'Join';
        button.classList.remove('joined');
    });
}