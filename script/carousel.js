const btnL = document.getElementsByClassName('btn_left');
const btnR = document.getElementsByClassName('btn_right');

/* cont from */

const Name = document.getElementById('name');
const Email = document.getElementById('email');
const Mess = document.getElementById('message');
const Btn_send = document.getElementById("send");

console.log(Name);
const Form_need =[Name,Email,Mess]

function TurnNormal(){
    for(const needs of Form_need){
        if(needs.style.borderColor === "red"){
            console.log("Elias")
           if(needs.value.length > 0){
                console.log("Elias")
                needs.style.borderColor = "White";
           }
        }
    }
}

Btn_send.addEventListener("click", (e)=>{
    for(const needs of Form_need){
        if(needs.value == ""){
            e.preventDefault();
            needs.style.borderColor ="red";
        }
    }
})

for( const needs of Form_need){
    needs.addEventListener("change",TurnNormal)
}

// -------- Gsap --------- //

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline();

tl.from(".title", {
    opacity: 0,
    x: -1000,
    duration: 1,
    scrollTrigger:{
        trigger: ".About",
        markers: true
    }
})
.from(".About p", {
    duration: 1,
    delay: 1,
    y: -100,
    opacity: 0,
    ease: "bounce",
    scrollTrigger:{
        trigger: ".title"
    }
})


  