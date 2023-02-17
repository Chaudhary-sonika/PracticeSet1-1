const age = document.querySelector("#ageNum");
const btn = document.querySelector("#btn");
const outputDiv = document.querySelector("#output");

const ageCheck = ()=>  {
    if(age.value >= 20){
        outputDiv.innerHTML = "You are eligible";
    }else {
        outputDiv.innerHTML = "Sorry, you are not eligible";
    }
}

btn.addEventListener("click", ageCheck)