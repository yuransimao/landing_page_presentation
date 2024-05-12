const header = document.querySelector("header");
const MenuIcon =  document.querySelector("#menu-icon");
const Navlist = document.querySelector(".navlist")


window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", this.scrollY > 80)
})
MenuIcon.onclick = () => {
    MenuIcon.classList.toggle("bx-x")
    Navlist.classList.toggle("open")
}


window.onscroll = () => {
    MenuIcon.classList.remove("bx-x")
    Navlist.classList.remove("open")
}

AOS.init();