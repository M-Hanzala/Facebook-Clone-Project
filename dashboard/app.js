const icons = document.querySelectorAll(".header-mid i");
const homeIcon = document.getElementById("home");

icons.forEach(icon => {
    homeIcon.style.color = "#0866FF";

    icon.addEventListener("click", () => {

        // reset all icons to grey
        icons.forEach(i => {
            i.style.color = "#65676B";
        });

        // make clicked icon blue
        icon.style.color = "#0866FF";
    });
});