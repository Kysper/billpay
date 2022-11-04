
const container = document.getElementsByClassName("container");
const btn = document.getElementById("add");
const panel = document.getElementById("icon-panel")
const submitIcon = document.getElementById("submit-icon")
let formattedDate;

btn.addEventListener('click', () => {
    if (panel.hasAttribute("hidden")) {
        panel.removeAttribute("hidden")
    } else {
        panel.setAttribute("hidden", "true")
    }
})




submitIcon.addEventListener('click', (e) => {
    e.preventDefault();
    const iconName = document.getElementById("icon-name").value
    const imageSource = document.getElementById("image-type").value;
    const link = document.getElementById('link-to-site').value;
    const date = document.getElementById("date-due").value;
    
    Icon.newIcon(Icon.uid, iconName, imageSource, link, date);

})


setInterval(() => {
    let panels = document.querySelectorAll(".icon");
    checkDateDistance(formattedDate, panels);
    const deleteIcons = document.querySelectorAll(".delete");
    deleteIcons.forEach(element => {
        element.addEventListener('click', (e) => {
            container[0].removeChild(e.target.parentNode)
        })
    })
}, 2000)

function checkDateDistance(formattedDate, panels) {

    panels.forEach(elem => {
        if ((formattedDate - Date.now()) < 7) {
            panel.style.border = "3px solid red;"
        } else {
            elem.addEventListener("click", (e) => {
                if (e.target != container[0]) {
                    e.target.parentNode.style.borderColor = "green";
                    e.target.parentNode.style.boxShadow = " 0px 0px 10px green";
                }
            })

        }

    })
}
