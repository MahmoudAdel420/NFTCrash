let link = document.querySelector("link");
let icon = document.querySelector("footer .sun");
let photo = document.querySelector("main .container .row .photo img");
let effect = document.querySelector("main .container .row .effects img");
let isOriginalPath = true;

function darkMode(){

    if(isOriginalPath){

     link.href = "./assets/css/Drak.css";
     icon.innerHTML=`<i class="fa-regular fa-moon"></i>`;
     photo.src="./assets/images/UkaUkaC4.png" ;
     effect.src="./assets/images/pngegg.png";
     isOriginalPath = false;

    }else {
        link.href = "./assets/css/main.css";
        icon.innerHTML=`<i class="fa-regular fa-sun"></i>`;
        effect.src="./assets/images/pngkey.com-light-effects-png-543877.png";
        photo.src="./assets/images/Crash Bandicoot.png" ;
        isOriginalPath = true;
    }

}

icon.addEventListener("click", darkMode)

