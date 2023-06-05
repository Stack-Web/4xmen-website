const app = {
    selector: 'h4',
    texts: ['تلفن : 09123456789','ایمیل : 4xmen@team.ir','آدرس : البرز - کرج','تلگرام : Devefun','توییتر : a1gard'],
    typeSpeed:230
}

let text = document.querySelector(app.selector)
    , i = 0, controlIncrement = false, iteration = 0;

text.innerHTML = '';
const textAnimation = setInterval(()=>{

    if(controlIncrement == false){
        text.innerHTML += app.texts[iteration].charAt(i);
        i++;

        if(i >= app.texts[iteration].length +1){
            let timeout = setTimeout(()=>{
                clearTimeout(timeout);
                controlIncrement = !controlIncrement;
            },app.typeSpeed -50);

        }
    }
    if(controlIncrement){

        i--;
        if(i <= 0){
            if(iteration >= app.texts.length - 1){
                iteration = 0;
            }else{
                iteration++;
            }
            app.texts[iteration];
            controlIncrement = !controlIncrement;
        }
        text.innerHTML = app.texts[iteration].substr(0,i);


    }
},app.typeSpeed);