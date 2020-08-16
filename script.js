let buttons = document.getElementsByTagName("button");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", () => {
        if (i == 0) 
            document.body.style.backgroundImage = "url(./images/1.jpg)"
        else if (i == 1)
            document.body.style.backgroundImage = "url(./images/2.jpg)";
        else if (i == 2)
            document.body.style.backgroundImage = "url(./images/3.jpg)";
        else if (i == 3)
            document.body.style.backgroundImage = "url(./images/4.jpg)";
        else if (i == 4)
            document.body.style.backgroundImage = "url(./images/5.jpg)";
        else if (i == 5)
            document.body.style.backgroundImage = "url(./images/6.jpg)";

    })
}