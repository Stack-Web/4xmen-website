import createGlobe from 'https://cdn.skypack.dev/cobe'

let phi = 0;
let theta = 0;
let isUp = false;
let canvas = document.getElementById("cobe")

let stopGlobe = false;

canvas.addEventListener('mouseenter', function () {
    stopGlobe = true;
});
canvas.addEventListener('mousemove', function (e) {
    if (e.target.offsetHeight / 2 > e.clientY) {
        isUp = false;
    } else {
        isUp = true;
    }
});
canvas.addEventListener('mouseleave', function () {
    stopGlobe = false;
});

const globe = createGlobe(canvas, {
    devicePixelRatio: 2,
    width: 1500,
    height: 1500,
    phi: 0,
    theta: 0,
    dark: 1,
    diffuse: 1.2,
    scale: 1,
    mapSamples: 20000,
    mapBrightness: 7,
    baseColor: [1, 1, 1],
    markerColor: [1, 0.5, 1],
    glowColor: [1, 1, 1],
    offset: [0, 0],
    markers: [
        {location: [34.6416, 50.8746], size: 0.03},
        {location: [59.3293, 18.0686], size: 0.03},
    ],
    onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi
        if (!stopGlobe) {
            phi += 0.0035
        } else {
            phi -= 0.0035
            state.theta = theta;
            if (isUp){
                theta += 0.0035
            }else{
                theta -= 0.0035
            }

        }
    },
})