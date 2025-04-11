let darkModeToggle = document.querySelector("#darkModeToggleButton")

darkModeToggle.addEventListener("click", switchDarkMode)

function switchDarkMode () {
    document.documentElement.classList.toggle("dark")
}