// Marquee Slider ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let marqueeSlider = document.querySelector('.marquee-slider');
let marqueeSlide = document.querySelector('.b-slider__ref');
let mainTicker = new Flickity('.marquee-slider', {
    accessibility: true,
    resize: true,
    wrapAround: true,
    rightToLeft: true,
    prevNextButtons: false,
    pageDots: false,
    percentPosition: true,
    setGallerySize: true,
});

// Set initial position to be 0
mainTicker.x = 0;

// Start the marquee animation
play();

// Main function that 'plays' the marquee.
function play() {
    // Set the decrement of position x
    mainTicker.x -= 1.5;

    // Settle position into the slider
    mainTicker.settle(mainTicker.x);

    // Set the requestId to the local variable
    requestId = window.requestAnimationFrame(play);
}

// Main function to cancel the animation.
function pause() {
    if(requestId) {
        // Cancel the animation
        window.cancelAnimationFrame(requestId)

        // Reset the requestId for the next animation.
        requestId = undefined;
    }
}

// Pause on hover/focus
marqueeSlider.addEventListener('mouseenter', () => pause());

// Unpause on mouse out / defocus
marqueeSlider.addEventListener('mouseleave', () => play());


// Marquee Slider 2

let marquee2Slider = document.querySelector('.marquee2-slider');
let marquee2Slide = document.querySelector('.b2-slider__ref');
let main2Ticker = new Flickity('.marquee2-slider', {
    accessibility: true,
    resize: true,
    wrapAround: true,
    rightToLeft: false,
    prevNextButtons: false,
    pageDots: false,
    percentPosition: true,
    setGallerySize: true,
});

// Set initial position to be 0
main2Ticker.x = 0;

// Start the marquee animation
play2();

// Main function that 'plays' the marquee.
function play2() {
    // Set the decrement of position x
    main2Ticker.x -= 1.5;

    // Settle position into the slider
    main2Ticker.settle(main2Ticker.x);

    // Set the requestId to the local variable
    request2Id = window.requestAnimationFrame(play2);
}

// Main function to cancel the animation.
function pause2() {
    if(request2Id) {
        // Cancel the animation
        window.cancelAnimationFrame(request2Id)

        // Reset the requestId for the next animation.
        request2Id = undefined;
    }
}

// Pause on hover/focus
marquee2Slider.addEventListener('mouseenter', () => pause2());

// Unpause on mouse out / defocus
marquee2Slider.addEventListener('mouseleave', () => play2());
