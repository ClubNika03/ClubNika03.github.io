let elem = document.querySelector('#first'); 
let elem2 = document.querySelector('#second'); 
let kor = document.querySelector('#korsina'); 

kor.addEventListener('dragover',function(event){ 
event.preventDefault(); 
console.log("over");
});

elem.addEventListener('dragstart',function(){
event.dataTransfer.setData("Text", event.target.id);//для запоминания айди элемента 1
});

elem2.addEventListener('dragstart',function(){
event.dataTransfer.setData("Text", event.target.id);//для запоминания айди элемента 2
});

kor.addEventListener('drop',function(event){//когда перетаскиваем элемент и отпускаем внутри корзины, то увеличиваем кол-во товара
plus(event.dataTransfer.getData("Text"));
});

let ob = [
{
id: "first",
name: "city1",
count: 0,
},

{
id: "second",
name: "city2",
count: 0,
}
];


const plus = id => {
if (id == "first")
{
ob[0].count++;
}
else if (id == "second")
{
ob[1].count++;
}
renderob();
}

const renderob = () => {
console.log(ob[0].count);
console.log(ob[1].count);
kor.innerHTML = (`city1: ${ob[0].count} and city2: ${ob[1].count}`);
}

renderob();