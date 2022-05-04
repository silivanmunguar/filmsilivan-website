const buttonList = document.querySelectorAll("#locationsButton");


for (let i = 0; i < buttonList.length; i++){
    buttonList[i].onmouseover = function(){buttonList[i].style.cssText = "border: solid black; color: white; background-position: left;"};
    buttonList[i].onmouseout = function(){buttonList[i].style.cssText = "border: dotted black;"};
}

