/* Burger Icon click */
const burger_icon = document.querySelector('.burger');
burger_icon.addEventListener('click', (event) => {
    burger_icon.classList.toggle("open");
})

/* Change pricing plan button color */
// const planButtonPlus = document.querySelector('.plus .plan_button');
// const planButtonPremium = document.querySelector('.premium .plan_button');
// const screenSize = window.matchMedia('(min-width: 799px) and (max-width: 1035px)');
//
// function changeColor(e) {
//     if (e.matches){
//         planButtonPlus.style.backgroundColor = '#83a7a5';
//         planButtonPremium.style.backgroundColor = '#6fb048';
//
//         planButtonPlus.setAttribute('class','plan_button effect effect_green');
//         planButtonPremium.setAttribute('class','plan_button effect effect_gray');
//     }else{
//         planButtonPlus.style.backgroundColor = '#6fb048';
//         planButtonPremium.style.backgroundColor = '#83a7a5';
//
//         planButtonPlus.setAttribute('class','plan_button effect effect_gray');
//         planButtonPremium.setAttribute('class','plan_button effect effect_green');
//     }
// }
//
// screenSize.addEventListener('change',changeColor)