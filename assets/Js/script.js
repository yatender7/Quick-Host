// Set the date we're counting down to
var countDownDate = new Date("Jan 28, 2024 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.querySelector(".day .number").innerHTML = days;
    document.querySelector(".hours .number").innerHTML = hours;
    document.querySelector(".minutes .number").innerHTML = minutes;
    document.querySelector(".seconds .number").innerHTML = seconds;

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.querySelector(".time").innerHTML = "EXPIRED";
    }
}, 1000);



// Accordion code


let accordions = document.querySelectorAll('.accordion');

accordions.forEach((accordion) => {
    let icon = accordion.querySelector('.icon');
    let answer = accordion.querySelector('.answer');
    accordion.addEventListener('click', () => {
        icon.classList.toggle('active');
        answer.classList.toggle('active');
    })

})

// Scroll code

window.addEventListener("scroll", (event) => {
    let scrollBtn = document.querySelector('.to-the-top');
    let scroll = this.scrollY;
    if (scroll > 400) {
        scrollBtn.classList.add('active');
    } else {
        scrollBtn.classList.remove('active');
    }
});