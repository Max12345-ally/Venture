// const mqDark = window.matchMedia("(prefers-color-scheme: dark)")

// const darkModeToggle = document.querySelector("a.dark-mode-toggle")
// const darkModeToggleText = darkModeToggle.querySelector("span")

const menuToggle = document.querySelector("a.menu-toggle")
const menuToggleText = menuToggle.querySelector("span")

const bodyTag = document.querySelector("body")

menuToggle.addEventListener("click", function () {
    bodyTag.classlist.toggle("nav-open")
})

// const updateDarkMode = function () {
//     if (mqDark.matches) {
//         darkModeToggleText.innerHTML = "Light mode"
//     } 
    
// }

// updateDarkMode()
// mqDark.addListener(function () {
//     updateDarkMode()
// })
