function appear() {
    $('.right').addClass('show');
}

$('#bachira').click(function () {
    $("#me").addClass('notShow');
    let instance = new TypeIt("#text-writer", {
        speed: 50,
        cursor: false,
        waitUntilVisible: true,
        deleteSpeed: 10,
        nextStringDelay: 2000,
        strings: ["Hello, my name is Daniel and welcome to my personal website.", "I am a 23 year old Master's student in Design and Multimedia, and this is where i'm going to show some of my works.", "Thanks for coming and hope you enjoy my work."],
        breakLines: false,
        afterComplete: function (instance) {
            appear();
        }
    }).go();

    $("#text-writer").click(function () {
        instance.destroy();
        appear();
    });

});


$('.right').click(function () {
    console.log('click');
    window.location.href = "mainpage.html";
});


$('#interaction-1').click(function () {
    $('#interaction-1').addClass('full');
    $('#interaction-1').removeClass('min');
    $('#interaction-2').addClass('min');
    $('#interaction-2').removeClass('full');
    $('#interaction-3').addClass('min');
    $('#interaction-3').removeClass('full');
});

$('#interaction-2').click(function () {
    $('#interaction-1').addClass('min');
    $('#interaction-1').removeClass('full');
    $('#interaction-2').addClass('full');
    $('#interaction-2').removeClass('min');
    $('#interaction-3').addClass('min');
    $('#interaction-3').removeClass('full');
});

$('#interaction-3').click(function () {
    $('#interaction-1').addClass('min');
    $('#interaction-1').removeClass('full');
    $('#interaction-2').addClass('min');
    $('#interaction-2').removeClass('full');
    $('#interaction-3').addClass('full');
    $('#interaction-3').removeClass('min');
});

let carrossel = document.querySelector(".slider");

let leftArrow = document.querySelector(".prev");

let rightArrow = document.querySelector(".next");

leftArrow.addEventListener("click", function() {
	let current = document.querySelector(".nothidden");
	current.classList.remove("nothidden");
    current.classList.remove("animate__bounceInRight");
    current.classList.remove("animate__bounceInLeft");
	
	let previous = current.previousElementSibling;
	if (previous === null) {
		previous = document.querySelector(".slider h2:last-of-type");
	}
	previous.classList.add("nothidden");
    previous.classList.add("animate__animated");
    previous.classList.add("animate__bounceInLeft");
});

rightArrow.addEventListener("click", function() {
	let current = document.querySelector(".nothidden");
	current.classList.remove("nothidden");
    current.classList.remove("animate__bounceInLeft");
    current.classList.remove("animate__bounceInRight");
	
	let next = current.nextElementSibling;
	if (next === null) {
		next = document.querySelector(".slider h2:first-of-type");
	}
	next.classList.add("nothidden");
    next.classList.add("animate__animated");
    next.classList.add("animate__bounceInRight");
});



//img slider
leftArrow.addEventListener("click", function() {
	let current = document.querySelector(".showed");
	current.classList.remove("showed");
    current.classList.remove("animate__slideInRight");
    current.classList.remove("animate__slideInLeft");
	
	let previous = current.previousElementSibling;
	if (previous === null) {
		previous = document.querySelector(".carrosel a:last-of-type");
	}
	previous.classList.add("showed");
    previous.classList.add("animate__animated");
    previous.classList.add("animate__slideInLeft");
});

rightArrow.addEventListener("click", function() {
	let current = document.querySelector(".showed");
	current.classList.remove("showed");
    current.classList.remove("animate__slideInLeft");
    current.classList.remove("animate__slideInRight");
	
	let next = current.nextElementSibling;
	if (next === null) {
		next = document.querySelector(".carrosel a:first-of-type");
	}
	next.classList.add("showed");
    next.classList.add("animate__animated");
    next.classList.add("animate__slideInRight");
});

$('.unlock').hover(function() {
    $('.text-unlock').removeClass('hidden');
},function() {
    $('.text-unlock').addClass('hidden');
});

$('.unlock').click(function() {
    console.log('click');
    $('#cover').addClass('hide');
});