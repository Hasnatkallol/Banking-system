// For MenuBar
const menu = document.getElementById("menu");
const navigation = document.getElementById("navigation");
const close = document.getElementById("close");

if(menu){
    menu.addEventListener("click", ()=>{
      navigation.classList.toggle("active");
    })
}
if(close){
    close.addEventListener("click", ()=>{
      navigation.classList.remove("active");
    })
}