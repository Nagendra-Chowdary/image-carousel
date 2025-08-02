const imageArr=[
    "Screenshot from 2024-09-07 00-06-49.png",
    "Screenshot from 2024-09-23 12-27-21.png",
    "Screenshot from 2024-11-21 15-32-20.png",
    "Screenshot from 2024-11-27 13-48-51.png",
    "Screenshot from 2024-12-10 17-49-53.png",
    "Screenshot from 2024-12-10 17-50-23.png",
    "Screenshot from 2024-12-19 13-30-34.png",
    "Screenshot from 2025-01-20 19-23-11.png"
];
let count=[0];
let add=(countt=count)=>{
    let eee=document.querySelector(`#dot${(count[(count.length)-1])%(imageArr.length)}`);
    eee.style.background="gray";
    countt.push(countt[(countt.length)-1]+1);
let co=countt[(countt.length)-1];
    document.getElementsByTagName('a')
    let elem=document.querySelector(".gallery");
    console.log((co)%(imageArr.length));
      
    let ee=document.querySelector(`#dot${(co)%(imageArr.length)}`);
    ee.style.background="white";
    elem.style.background=`url("${imageArr[(co)%(imageArr.length)]}") no-repeat center center/cover`;
}
let autoSlide=setInterval(()=>{
    let eee=document.querySelector(`#dot${(count[(count.length)-1])%(imageArr.length)}`);
    eee.style.background="gray";
    count.push(count[(count.length)-1]+1);
let co=count[(count.length)-1];
    document.getElementsByTagName('a')
    let elem=document.querySelector(".gallery");
    console.log((co)%(imageArr.length));
      
    let ee=document.querySelector(`#dot${(co)%(imageArr.length)}`);
    ee.style.background="white";
    elem.style.background=`url("${imageArr[(co)%(imageArr.length)]}") no-repeat center center/cover`;
},5000);
let ele=document.querySelector(".gallery");
let bar=document.createElement("div");
let cc=0;
for(i in imageArr){
 
    bar.innerHTML+=`<div id="dot${cc}"></div>`;
    cc++;
}
bar.classList.add("bar");
ele.appendChild(bar);
let changeImage=(c,count)=>{
    let eee=document.querySelector(`#dot${(count[(count.length)-1])%(imageArr.length)}`);
    eee.style.background="gray";

    console.log("enter",count)
    clearInterval(autoSlide);
    autoSlide=setInterval(add,5000);
    if(c==-1){
        if(count[(count.length)-1]<=0){
            count.push((imageArr.length)-1);
        }else{
            count.push(count[(count.length)-1]-1);
        }
    }
    else{
        count.push(count[(count.length)-1]+1);
    }
    let co=count[(count.length)-1];
    document.getElementsByTagName('a')
    let elem=document.querySelector(".gallery");
    console.log((co)%(imageArr.length));
    
    let ee=document.querySelector(`#dot${(co)%(imageArr.length)}`);
    ee.style.background="white";
  
    elem.style.background=`url("${imageArr[(co)%(imageArr.length)]}") no-repeat center center/cover`;

    count=co;
    let a=0;

}

