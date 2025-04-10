let buttonDark = document.querySelector("#darkMode")

buttonDark.addEventListener("click", switchDarkMode)

function switchDarkMode () {
    document.documentElement.classList.toggle("dark")
}