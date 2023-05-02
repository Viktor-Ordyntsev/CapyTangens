const anchors = document.querySelectorAll('a[href*="#"')

for (let anchor of anchors) {
    anchor.addEventListener("click", function(event){
        event.preventDefault();
        const blockID = anchor.getAttribute('href')
        document.querySelector('' + blockID ).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}


const onClick = () => {
    document.querySelector('.header__burger').classList.toggle("is-active")
    document.querySelector(".header__dropdown").classList.toggle("is-active")
    document.querySelector("main").classList.toggle("is-active")
}

const noClick = () => {
    document.querySelector('.header__burger.is-active').classList.toggle("is-active")
    document.querySelector(".header__dropdown.is-active").classList.toggle("is-active")
    document.querySelector("main.is-active").classList.toggle("is-active")
}
