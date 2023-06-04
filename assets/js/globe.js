import createGlobe from 'https://cdn.skypack.dev/cobe'

let phi = 0
let canvas = document.getElementById("cobe")

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
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 },
    ],
    onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi
        phi += 0.01
    },
})