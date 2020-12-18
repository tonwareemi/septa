const menu = document.getElementsByClassName("menu")[0];
const nav = document.getElementsByTagName("nav")[0];

let coin = false

menu.onclick = ()=> {
  if(!coin){
    menu.classList.add("open")
    nav.style.height = "100vh"
    coin = true
  }else{
    nav.style.height = "0px"
    menu.classList.remove("open")
    coin = false
  }
}