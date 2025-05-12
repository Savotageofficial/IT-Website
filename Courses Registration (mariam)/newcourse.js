//dark mode
let mode = document.body;
// let gray = document.getElementById("bg");
function dark_mode() {
    mode.classList.toggle("dark-mode");  
//     gray.classList.toggle("gray");
}

let en  = document.getElementById("en").classList;
let ar  = document.getElementById("ar").classList;
function hide(){
    en.toggle("hiddenen");
    ar.toggle("hiddenar");

}

//fillter search
let fillter=document.getElementById('search');

fillter.addEventListener('keyup',function(){
    let search = this.value.toLowerCase();
    let list =document.querySelectorAll('#list li');
    for( let i of list ){
        let item =i.innerHTML.toLowerCase();
        if (item.indexOf(search)==-1){
            i.classList.add('hide')
        }
        else
        i.classList.remove('hide');
    }
}
)


//hide search
function showlist(){
    let list = document.getElementById("list-search");
    list.classList.toggle("list-search2");
    list.classList.toggle("list-search");
}
//hide searchar
// function showlistar(){
//     let search = document.getElementById("search-barar");
//     let list = document.getElementById("list-searchar");
//     list.classList.toggle("list-search2");
//     list.classList.toggle("list-search")
// }
//english sort
function sortdiv() {
var container = document.getElementById("List");
var elements = container.childNodes;
var sortMe = [];
for (var i=0; i<elements.length; i++) {
    if (!elements[i].id) {
        continue;
    }
    var sortPart = elements[i].id.split("-");
    if (sortPart.length > 1) {
        sortMe.push([ 1 * sortPart[1] , elements[i] ]);
    }
}
sortMe.sort(function(x, y) {
    return x[0] - y[0];
});
for (var i=0; i<sortMe.length; i++) {
    container.appendChild(sortMe[i][1]);
}
document.getElementById("Button").innerHTML = "done.";
}
//arabic sort
function sortdiv1() {
var container = document.getElementById("Listar");
var elements = container.childNodes;
var sortMe = [];
for (var i=0; i<elements.length; i++) {
    if (!elements[i].id) {
        continue;
    }
    var sortPart = elements[i].id.split("-");
    if (sortPart.length > 1) {
        sortMe.push([ 1 * sortPart[1] , elements[i] ]);
    }
}
sortMe.sort(function(x, y) {
    return x[0] - y[0];
});
for (var i=0; i<sortMe.length; i++) {
    container.appendChild(sortMe[i][1]);
}
document.getElementById("Button").innerHTML = "done";

}




    const search = document.getElementById('search');
    const categoryCards = document.querySelectorAll('.shadow');

    search.addEventListener('input', handleSearch);

    function handleSearch() {
      const searchText = search.value.toLowerCase().trim();

      categoryCards.forEach(shadow => {
        const subject = shadow.dataset.subject?.toLowerCase() || '';

        if (subject.startsWith(searchText) || searchText === '') {
          shadow.classList.add('show');
        } else {
          shadow.classList.remove('show');
        }
      });
    }

    // Show all cards initially
    categoryCards.forEach(shadow => shadow.classList.add('show'));