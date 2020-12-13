 const Array = [ { 
    id:01 , 
    img: "images/Ellipse 2.png" , 
    name : "Edvard" , job : "UI|UX designer" , 
    text : '"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem repellat sunt fuga iste enim nam nostrum aliquid, saepe ipsum quasi."'
},
{ 
    id:02 , 
    img: "images/Ellipse 3.png" , 
    name : "Spider" , job : "Web Developer" , 
    text : '"Lorem ipsum, dolor sit amet cLorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, modi.unt fuga iste enim nam nostrum aliquid, saepe ipsum quasi."'
},
{ 
    id:03 , 
    img: "images/Ellipse 4.png" , 
    name : "lufy" , job : "Softwear Engineer" , 
    text : '"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem reLorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, modi. saepe ipsum quasi."'
},
{ 
    id:04 , 
    img: "images/Ellipse 5.png" , 
    name : "Superlady" , job : "Product Designer" , 
    text : '"Lorem ipsum, dolor sit amet consectetur adipisicing elit.  aliquid, saepe ipsum quasi."'
},





]

const image = document.getElementById("img");
const name = document.getElementById("name");
const job = document.getElementById("job");
const info = document.getElementById("info");


const next = document.getElementById("btnnext");
const prev = document.getElementById("btnprev");


let currentItem = 0 ;

window.addEventListener("DOMContentLoaded" ,() => {
    const item = Array[currentItem];
    image.src = item.img;
    name.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;

});

function slider() {
    const item = Array[currentItem];
    image.src = item.img;
    name.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
};


next.addEventListener("click", () => {

    currentItem++;

    if ( currentItem > Array.length - 1) {
        currentItem = 0;
    }
    slider();
   
    
});


prev.addEventListener("click", () => {

    currentItem--;

    if ( currentItem < 0 ) {
        currentItem = 3;
    }
       
   

        slider();
  
})