const elForm = document.querySelector("#form"); // form
let elInput = elForm.querySelector("#input"); // input
const elSelect = elForm.querySelector("#select"); // select
const elResult = elForm.querySelector("#result"); // p


const rub = 123; // rublning qiymati
const eur = 12583; // euroning qiymati
const usd = 10640;// dollarning qiymati

let elInputValue = Number(elInput.value) //inputdan kelayotgan qiymatni raqamga o'zgartirdim


elForm.addEventListener("submit", function(evt){
    evt.preventDefault() // submit hodisasini default qiymatini yo'qotdim 

      if(!isNaN(elInputValue)){ 
        if(elSelect.value === "usd"){
            elResult.textContent = (elInput.value / usd).toFixed(2)+ ' $';
        }
        else if(elSelect.value === "rub"){
            elResult.textContent = (elInput.value / rub).toFixed(2)+ ' rub';
        }
        else if(elSelect.value === "eur"){
            elResult.textContent = (elInput.value / eur).toFixed(2)+ ' eur';
        }
    }else{
        elResult.textContent = "Xatolik yuz berdi";
    }
})