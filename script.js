let arr=[40,20,10,55,35,32,50];

var btn = document.getElementsByClassName("start");
let parent = document.getElementsByClassName("parent");

var i=0;

arr.forEach(elem => {
    let innerDiv = document.createElement("div");

    innerDiv.style.height = (elem*7 + 'px') ;
    innerDiv.style.width = (50 + 'px');
    innerDiv.style.backgroundColor = '#'+((1<<24)*Math.random()|1).toString(16);
    
    innerDiv.setAttribute('id','elem'+i);
    i++;
    innerDiv.classList.add("innerDiv");
    parent[0].appendChild(innerDiv);
})

btn[0]-addEventListener ("click", ()=>myFunction(arr));
const sleep = (time)=>{
return new Promise(resolve => setTimeout(resolve, time))
}

async function myFunction(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length-i-1;j++){
            await sleep(500);
            if(arr[j]>arr[j+1]){
                swapNumber(arr,j);
                swapColorHeight(j); 
            }
        }
    }
}

function swapNumber(arr,j){
    let temp=arr[j];
    arr[j]=arr[j+1];
    arr[j+1]=temp;
}

function swapColorHeight(j){
let a = 'elem'+j;
let b = 'elem'+(j+1);
let el = document.getElementById(a);
let e2 = document.getElementById(b);
let bg1 = el.style.backgroundColor;
let bg2 = e2.style.backgroundColor
let h1 = el. clientHeight;
let h2 = e2. clientHeight;
el.style.backgroundColor = bg2;
e2.style.backgroundColor = bg1;
el.style.height = h2+"px";
e2. style.height = h1 + "px";
}