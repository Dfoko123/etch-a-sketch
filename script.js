const body=document.querySelector("body");
const container=document.createElement("div");
body.appendChild(container)
const button=document.createElement("button");
button.textContent="number of square per size";
button.style="padding:6px;border-raduis:9px; border:2px solid red;"
body.appendChild(button)
button.addEventListener('click',()=>{
    let numberSquare=+prompt("enter the square number");
    if(numberSquare<=100){
        let n=numberSquare*numberSquare;
        let divSpace=((100-(numberSquare-1)*4*0.053)/numberSquare).toFixed(2);//1px=>0.053%;
        for(let i=1; i<n+1; i++){
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
    }
    else{
        const p=document.createElement('p');
        p.textContent="number square per size can be greater than 100";
        container.appendChild(p);
    }    
});