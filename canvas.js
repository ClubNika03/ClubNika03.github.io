function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
    }


let button = document.querySelector("#canvasButton");


function Draw() {
    let number = Number(document.querySelector('#count').value);
    let art = document.querySelector("#canvas");
    let ctx = art.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#278472';
    let t = 0;
    let i = 0;

    while(i!=number){
        ctx.fillRect(t, 200, 20, getRandom(-300, -20));
        i++;
        t+=25;
        }
    }

button.addEventListener("click", Draw);