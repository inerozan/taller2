/* CARROUSEL */
var isAnimating = false;

function scrollLeftAnimate(elem, unit) {

    if (!elem || isAnimating) {
        //if element not found / if animating, do not execute slide
        return;
    }

    var time = 300; // animation duration in MS, the smaller the faster.
    var from = elem.scrollLeft; // to continue the frame posistion
    var aframe =
        10; //fraction of frame frequency , set 1 for smoothest  ~ set 10++ for lower FPS (reduce CPU usage)
    isAnimating = true; //if animating prevent double trigger animation

    var start = new Date().getTime(),
        timer = setInterval(function () {
            var step = Math.min(1, (new Date().getTime() - start) / time);
            elem.scrollLeft = ((step * unit) + from);
            if (step === 1) {
                clearInterval(timer);
                isAnimating = false;
            }
        }, aframe);
}

function initDealCarrousel(dealCarrouselID) {
    var target = document.querySelector("#" + dealCarrouselID + " .va-carrousel-flexbox");
    var cardOutterWidth;
    var maxCarrouselScroll;

    function updateUpaCarrouselInfo() {
        cardOutterWidth = document.querySelector("#" + dealCarrouselID + " .va-card").offsetWidth; //you can define how far the scroll
        maxCarrouselScroll = (document.querySelectorAll("#" + dealCarrouselID + " .va-card").length *
                cardOutterWidth) - document.querySelector("#" + dealCarrouselID + " .va-carrousel-flexbox")
            .clientWidth;
    }

    document.querySelector("#" + dealCarrouselID + " .deals-scroll-left").addEventListener("click",
        function () {
            updateUpaCarrouselInfo(); //in case window resized, will get new info
            if (target.scrollLeft > 0) {
                scrollLeftAnimate(target, -cardOutterWidth * 2);
            }
        }
    );

    document.querySelector("#" + dealCarrouselID + " .deals-scroll-right").addEventListener("click",
        function () {
            updateUpaCarrouselInfo(); //in case window resized, will get new info 
            if (target.scrollLeft < maxCarrouselScroll) {
                scrollLeftAnimate(target, cardOutterWidth * 2);
            }
        }
    );
}
// Initiate the container with ID
initDealCarrousel('va_container'); //carrousel ID



/* FORMULARIO */
var input_name = document.getElementById("name");
var input_mail = document.getElementById("mail");
var button_siguiente = document.getElementById("siguiente");
var input_cta= document.getElementById("cta");

console.log(input_name);
console.log(input_mail);
console.log(button_siguiente);

input_cta.addEventListener("click", function() {
    window.location.href = "#formulario";
});


var button_enviar = document.getElementById("enviar");

console.log(button_enviar);

button_siguiente.addEventListener("click", enviarFormulario);

button_siguiente.addEventListener("click", );

function enviarFormulario(){
event.preventDefault();

    console.log("Hemos hecho click");

    var valor_name = input_name.value;
    var valor_mail = input_mail.value;

    console.log(valor_name);
    console.log(valor_mail);

    //obtener los placeholders
    var placeholder_name = document.getElementById("name-placeholder");
    var placeholder_mail = document.getElementById("mail-placeholder");

    //Paso 5 cambiar el contenido de los placeholders
    placeholder_name.innerHTML = valor_name;
    placeholder_mail.innerHTML = valor_mail;

    //Paso 6 mostrar el feedback
    elemento_feedback = document.getElementById("feedback");
    elemento_feedback.classList.remove("oculto");

    //Paso 7 ocultar el formulario
    elemento_feedback = document.getElementById("formulario");    
    elemento_feedback.classList.add("oculto");
}

const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})


// Obtener todos los botones de radio
const radioButtons = document.querySelectorAll('input[type="radio"]');

// Añadir un listener de eventos de cambio a cada botón de radio
radioButtons.forEach(radioButton => {
    radioButton.addEventListener('change', function() {
        // Verificar si el botón de radio está seleccionado
        if (this.checked) {
            // Obtener el ID del botón de radio seleccionado
            const selectedRadioId = this.id;
            // Hacer algo con el ID, por ejemplo, imprimirlo en la consola
            console.log('ID del botón de radio seleccionado:', selectedRadioId);
        }
    });
});
