const cardNumDisplay = document.querySelector('.cardnum-display')
const cardNameDisplay = document.querySelector('.cardname-display')
const cvcDisplay = document.querySelector('.cvc-display')
const cardExpiryDisplay = document.querySelector('.cardexpiry-display')
const form = document.querySelector('.card-form')
const errorMsg = document.querySelectorAll('.error')
let msg = ''
const confirmationPage = document.querySelector(".confirm")
const formDiv = document.querySelector('.form')
const continueBtn = document.querySelector('.continue-btn')

const inputValue = (e)=>{
    const cardName = document.querySelectorAll('.input')[0].value
    const cardNumber = document.querySelectorAll('.input')[1].value
    const expiryMonth = document.querySelectorAll('.input')[2].value
    const expiryYear = document.querySelectorAll('.input')[3].value
    const CVC = document.querySelectorAll('.input')[4].value
   
    cardNumDisplay.innerHTML = cardNumber;
    cardNameDisplay.innerHTML = cardName;
    cvcDisplay.innerHTML = CVC;
    cardExpiryDisplay.innerHTML = expiryMonth+'/'+expiryYear
}
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    if(isNaN(document.querySelectorAll('.input')[1].value)){
        msg = 'Wrong Format. numbers only'
        errorMsg[0].innerHTML = msg
        errorMsg[0].style.display = 'block'
    }else{
        errorMsg[0].style.display = 'none'
        form.style.display = 'none'
        confirmationPage.style.display = 'flex'
    }
    if(isNaN(document.querySelectorAll('.input')[2].value)){
        msg = 'Numbers only'
        errorMsg[1].innerHTML = msg
        errorMsg.style[1].display = 'block'
    }else{
        errorMsg[1].style.display = 'none'
        form.style.display = 'none'
        confirmationPage.style.display = 'flex'
    }
    console.log(isNaN(document.querySelectorAll('.input')[2].value));
})
continueBtn.addEventListener('click',()=>{
    location.reload()
})
const allInput = document.querySelectorAll('input')
allInput.addEventListener('click',()=>{
    allInput.style.borderColor = 'green'
})