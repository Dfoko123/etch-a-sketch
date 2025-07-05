const body=document.querySelector("body");
const container=document.createElement("div");
body.appendChild(container)
const button=document.createElement("button");
button.textContent="number of square per size";
button.style="padding:6px;border-raduis:9px solid green;"
body.appendChild(button)
button.addEventListener('click',()=>{
    let numberSquare=+prompt("enter the square number");
    let n=numberSquare*numberSquare;
    let divSpace=((100-(numberSquare-1)*4*0.053)/numberSquare).toFixed(2);//1px=>0.053%;
    for(let i=1; i<n+1; i++){
        let p=Math.floor(110*Math.sqrt(n));
        const childs=document.createElement("div");
        childs.style.cssText=`background-color:red; aspect-ratio:1/1; box-sizing:border-box;width:${divSpace}%; flex:auto;`
        body.style="display:flex; justify-content:center;margin:0px;flex-direction:column;"
        container.style.cssText=`display:flex; flex-wrap:wrap; flex-direction:row;gap:4px; flex:auto;`
        container.appendChild(childs);
        childs.addEventListener('mouseenter',()=>{
            let randomColor=Math.floor(Math.random()*3)+1;
            switch(randomColor){
                case 1:
                    childs.style.backgroundColor='green';
                    break;
                case 2:
                    childs.style.backgroundColor='yellow';
                    break;
                case 3:
                    childs.style.backgroundColor='purple';
                    break;
            }
            
        })
        childs.addEventListener('mouseleave',()=>{
            childs.style.backgroundColor='red';
        })
    }
});