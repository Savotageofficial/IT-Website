function Mylocal_Storage(){

    document.addEventListener('DOMContentLoaded',function() {
       const form =document.getElementById('form4');

       const savedDate=localStorage.getItem('formData');
       if(savedDate){
        
        const formData=JSON.parse(savedDate);
        for(const key in formData){
          if(formData.hasOwnProperty(key)){
          const input=form.elements[key];
          if(input){
            input.value=formData[key];
          }
        }
      }
    }
  
    form.addEventListener('input',function(e){
      setInterval(()=>{
           const formData={
              name:form.elements.name.value,
              Date:form.elements.Date.value,
              address:form.elements.address.value,
              ID_n:form.elements.ID_n.value,
              Religion:form.elements.Religion.value,
              Birth:form.elements.Birth.value,
              Nation:form.elements.Nation.value,
              Gender:form.elements.Gender.value,
              Phone:form.elements.Phone.value,
              Email:form.elements.Email.value,
              Government:form.elements.Government.value,
              Faculity:form.elements.Faculity.value,
              Academic: form.elements.Academic.value,
              Student:form.elements.Student.value,
              Group:form.elements.Group.value,
              University:form.elements.University.value
           };
           localStorage.setItem('formData',JSON.stringify(formData));

  }, 2000);
});
  
form.addEventListener('submit',function(e){
    e.preventDefault();
    localStorage.removeItem('formData');
    form.reset();
});
});

}
Mylocal_Storage();

function button(){
const butto =document.querySelector('.butt');
    if(button.innerHTML=='SUBMIT'){
      button.innerHTML='SUBMITED';
      alert('has SUBMITED!!');
    }
    else{
      button.innerHTML='SUBMIT';
    }
}
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
     document.getElementById("dim").classList.toggle("form_div2");
    document.getElementById("dim").classList.toggle("form_div");
             }
            