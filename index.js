const menuOpenButton =document.querySelector("#menu-open-button");
const menuCloseButton =document.querySelector("#menu-close-button");
menuOpenButton.addEventListener("click",()=>{
    //toggle mobile menu visibility
    document.body.classList.toggle("show-mobile-menu");
});
//close menu whn the close buton is clicked
menuCloseButton.addEventListener("click", () => menuOpenButton.click());