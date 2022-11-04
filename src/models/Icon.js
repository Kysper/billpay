const Icon = {
    uid: abs(Math.random() * 5),
    newIcon(iconName, imageSource, link, date) {
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

    }

}