let leftstar = document.querySelector(".leftStars");
let leftStars = document.querySelectorAll(".leftStar");

leftStars.forEach((leftstar, index)=>{
    leftstar.value = (index + 1);
    leftstar.addEventListener("click", starRatingA);
});

function starRatingA(e){
    leftStars.forEach((leftstar, index)=>{
        if(index < e.target.value){
            leftstar.classList.add("orange");
        }else {
            leftstar.classList.remove("orange")
        }
    });
}

let rightStar = document.querySelector(".rightStars");
let rightStars = document.querySelectorAll(".rightStar");

rightStars.forEach((rightStar, index)=>{
    rightStar.value = (index + 1);
    rightStar.addEventListener("click", starRatingB)
})
function starRatingB(e){
    rightStars.forEach((rightStar, index)=>{
        if(index < e.target.value){
            rightStar.classList.add("orange");
        }else {
            rightStar.classList.remove("orange");
        }
    })
}