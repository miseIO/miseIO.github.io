var bigValueSlider = document.getElementById('slider-huge');
var bigValueSpan = document.getElementById('huge-value');

noUiSlider.create(bigValueSlider, {
    start: 0,
    step: 1,
    format: wNumb({
        decimals: 0
    }),
    range: {
        min: 0,
        max: 15
    }
});

var range = [
    '50000', 
    '100000', 
    '200000',
    '300000', 
    '400000', 
    '500000',
    '1000000', 
    '1500000',
    '2000000',
    '3000000',
    '4000000',
    '5000000',
    '6000000',
    '7000000',
    '8000000',
    '9000000',
];


bigValueSlider.noUiSlider.on('update', function (values, handle) {
    bigValueSpan.innerHTML = range[values[handle]];
});