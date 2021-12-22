let colorbut = document.querySelector("#but");
let div = document.querySelector("#LocalStorage")

colorbut.onclick=function(){
    if(div.style.background == "rgb(201, 56, 46)")
    {
        div.style.background = "#0000ff";
        localStorage.setItem('color', div.style.background);
    }
    else 
    {
        div.style.background = "rgb(201, 56, 46)";
        localStorage.setItem('color',div.style.background);
    }
}
div.style.background = localStorage.getItem('color');