
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

    console.table(iconName, imageSource, link, date);

    createIcon(iconName, imageSource, link, date);

})




function createIcon(iconName, imageSource, link, date) {

    let panel = document.createElement("a");
    panel.classList.add("icon")
    panel.href = link;
    panel.target = "_blank";
    panel.style.border = "2px solid red";
    formattedDate = new Date(date);


    let deletePanel = document.createElement("a");
    deletePanel.classList.add("delete")
    deletePanel.text = "X";
    deletePanel.href = "#";

    let dateDisplay = document.createElement("p");
    dateDisplay.textContent = date;
    dateDisplay.style.paddingTop = "20px";
    dateDisplay.style.textAlign = "center";


    let img = document.createElement("img");
    img.classList.add("image");

    switch (imageSource) {
        case "electric":
            img.src = "./assets/imgs/electric.png";
            break;
        case "gas":
            img.src = "./assets/imgs/heat.png";
            break;
        case "medical":
            img.src = "./assets/imgs/medical.png";
            break;
        case "water":
            img.src = "./assets/imgs/water.png";
            break;
        case "wifi":
            img.src = "./assets/imgs/wifi.png";
            break;

        default:
            img.src = "#";
            break;
    }

    let iconLabel = document.createElement("p");
    iconLabel.classList.add("label");
    iconLabel.innerText = iconName;


    panel.appendChild(deletePanel);
    panel.appendChild(dateDisplay);
    panel.appendChild(img);
    panel.appendChild(iconLabel);

    container[0].appendChild(panel);

    saveIconToDB(panel);

}

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
                e.target.style.borderColor = "green";
                e.target.style.boxShadow = " 0px 0px 10px green";
            })

        }

    })
}
