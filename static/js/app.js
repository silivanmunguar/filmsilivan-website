


// Button Ainamtion
const buttonList = document.querySelectorAll("#locationsButton");

// Page trasitions
const sections = document.querySelectorAll('.section');
const sectionButtons = document.querySelectorAll('.buttons');
const sectionButton = document.querySelectorAll('.button');
const allSections = document.querySelector('.mainContent');




// Download button *Come back and fix downlaod buttons for scalability

const downloadBtns = document.querySelectorAll('#downloadbtn');

for (let i = 0; i < downloadBtns.length; i++){
    downloadBtns[i].addEventListener('click', function(){
        let icon = document.getElementById("downlaodIcon")
        let btn1 = document.getElementById("buttond1");
        let btn2 = document.getElementById("buttond2");
        if(btn1){
            btn1.innerHTML = "Done"
            btn1.style.cssText = "transiontion: 1s; color: black; transform: translateY(140%); left: 40%;"
            icon.src="../images/icons/check-circle.svg"
        }
        else if(btn2){
            btn2.innerHTML = "Done"
            btn2.style.cssText = "transiontion: 1s; color: black; transform: translateY(140%); right: 10%;"
            icon.src="../images/icons/check-circle.svg"
        }
        // reset everything
        setTimeout(function(){
            icon.src="../images/icons/download-cloud.svg"
            btn1.style.cssText = 'visibility: hidden;'
            btn2.style.cssText = 'visibility: hidden;'
        }, 1000)
    })
}







// Button Ainamtion

for (let i = 0; i < buttonList.length; i++){
    buttonList[i].onmouseover = function(){buttonList[i].style.cssText = "border: solid black; color: white; background-position: left;"};
    buttonList[i].onmouseout = function(){buttonList[i].style.cssText = "border: dotted black;"};
}





// page transition
function pageTransitions(){
    // Button Clicks
    for(let i= 0; i < sectionButton.length; i++){
       sectionButton[i].addEventListener('click', function(){
           let currentButton = document.querySelectorAll('.activeButton');
           currentButton[0].className = currentButton[0].className.replace('activeButton', '');
           this.className += ' activeButton'
       })
    }
    allSections.addEventListener('click', (e) =>{
        const id = e.target.dataset.id;
        if(id){
            sectionButtons.forEach((button) =>{
                button.classList.remove('active')
            })
            e.target.classList.add('active');

            //hide other sections
            sections.forEach((section) => {
                section.classList.remove('active')
            })
            const element =  document.getElementById(id);
            element.classList.add('active');
        }
    })
}

pageTransitions();