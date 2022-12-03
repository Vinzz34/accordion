const title = document.querySelectorAll(".faq__title");
const answer = document.querySelectorAll(".faq__answer");
const question = document.querySelectorAll(".faq__question");
const arrow = document.querySelectorAll(".faq__arrow");

for(let i = 0; i < title.length ; i++){
    title[i].addEventListener("click",() => {
        if(answer[i].style.maxHeight){
            answer[i].style.maxHeight = "";
            answer[i].style.paddingTop = "";
        }
        else{
            answer[i].style.maxHeight = answer[i].scrollHeight + "px";
            answer[i].style.paddingTop = "1rem";
        }
        arrow[i].classList.toggle("faq__arrow--open"); 
        question[i].classList.toggle("faq__question--open"); 
    });
}

