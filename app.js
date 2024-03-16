// var bulb = document.querySelector("#bulb");
// var btn = document.querySelector("button");
// var flag = 0
// btn.addEventListener("click" , function(){
//     if(flag == 0){
//         bulb.style.backgroundColor = "yellow";
//         flag = 1;
//     }else{
//         bulb.style.backgroundColor = "transparent";
//         flag = 0; 
//     }
  
// })

function getCheese(){
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            const cheese = "🧀";
            res(cheese);
        },2000);
    })
}
function MakeDough(cheese){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            const dough = cheese + "🍩";
        res(dough)
        },3000);
    });
}

function bakePizza(dough){
    return new Promise((res,rej)=>{
        setTimeout(() => {
            const pizza = dough + "🍕";
            res(pizza)
        }, 4000);
});
}

async function orderPizza(){
    const cheese = await getCheese();
    console.log("here is the cheese",cheese);
    const dough = await MakeDough(cheese);
    console.log("here is the dough",dough);
    const pizza = await bakePizza(dough);
    console.log("pizza");
}
orderPizza()