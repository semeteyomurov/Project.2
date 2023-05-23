let slide = document.querySelectorAll(".slide")

let i = 0;
let x = 0;

for(let i = 0; i < slide.length; i++){
    slide[i].style.display = "none"
}

slide[0].style.display = "block"

const right = () =>{
    if(i < 2){
        slide[i].style.display = "none"
        i++; x++;
        slide[i].style.display = "block"
    }else{
        slide[i].style.display = "none"
        i = 0; x = 0;
        slide[i].style.display = "block"
    }
}
const left = () =>{
    if(i > 0){
        slide[i].style.display = "none"
        i--; x--;
        slide[i].style.display = "block"
    }else{
        slide[i].style.display = "none"
        i = 2; x = 2;
        slide[i].style.display = "block"
    }
}
let slide1 = document.querySelectorAll("#slide1")

let v = 0;
let z = 0;

for(let i = 0; i < slide1.length; i++){
    slide1[i].style.display = "none"
}

slide1[0].style.display = "block"

let power1 = document.querySelector(".power1")
let power2 = document.querySelector(".power2")

power1.addEventListener('click', ()=>{
    if(i > 0){
        slide1[i].style.display = "none"
        i--; x--;
        slide1[i].style.display = "block"
    }else{
        slide1[i].style.display = "none"
        i = 2; x = 2;
        slide1[i].style.display = "block"
    }  
})

power2.addEventListener("click", ()=>{
    if(i < 2){
        slide1[i].style.display = "none"
        i++; x++;
        slide1[i].style.display = "block"
    }else{
        slide1[i].style.display = "none"
        i = 0; x = 0;
        slide1[i].style.display = "block"
    }
})

const popupBg = document.querySelector('.popup__bg');
const popup = document.querySelector('.popup');
const openPopupButtons = document.querySelectorAll('.open-popup');
const closePopupButton = document.querySelector('#close-popup');

openPopupButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        popupBg.classList.add('active');
        popup.classList.add('active');
    })
});

closePopupButton.addEventListener('click',() => { 
    popupBg.classList.remove('active');
    popup.classList.remove('active');
});

document.addEventListener('click', (e) => {
    if(e.target === popupBg) {
        popupBg.classList.remove('active');
        popup.classList.remove('active');
    }
});
//!
// https://api.telegram.org/bot6038135685:AAH7_R7xMSYUIl_yzx2Ykm6E7cz70tQTe6g/getUpdates

const TOKEN = "6038135685:AAH7_R7xMSYUIl_yzx2Ykm6E7cz70tQTe6g"
const CHAT_ID = '5746575938'
const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`

document.getElementById("tg").addEventListener('submit', function(e) {
    e.preventDefault()
    let = message = `<b>Заявка с сайта</b>\n`
    message += `<b>Отправитель :</b> ${this.name.value}\n`
    message +=` <b>Номер :</b> ${this.number.value}\n`
    message += `<b>Почта :</b> ${this.email.value}\n`
    console.log('message')
    axios.post(URL_API, {
        chat_id: CHAT_ID,
        parse_mode: "html",
        text: message
    }).then((res) => {
        this.name.value = " "
        this.number.value = " "
        this.email.value = " "
    }).catch((err) => {
        console.log(err)
    }).finally(() => {
        console.log("Goooooooooood")
    })
})