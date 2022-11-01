let first_button = document.getElementById("first_button");
let second_button = document.getElementById("second_button");
let third_button = document.getElementById("third_button");
let first_p = document.getElementById("first_p");
let second_p = document.getElementById("second_p");
let third_p = document.getElementById("third_p");
let accordion = document.querySelector(".accordion");




first_button.addEventListener("click",()=>{
     
    if (first_p.style.display=="block") {
        first_p.style.display="none";

    }
    else{
        first_p.style.display="block";
    }
   
})

second_button.addEventListener("click",()=>{
       
    if (second_p.style.display=="block") {
        second_p.style.display="none";
    }
    else{
        second_p.style.display="block";
    }
      
})

third_button.addEventListener("click",()=>{
        
    if (third_p.style.display=="block") {
        third_p.style.display="none";
    }
    else{
        third_p.style.display="block";
    }
     
})


////////////////////2-ci tapsiriq sizin deyen usul//////////////////////////////////////////////


let firstList = [1,2,3,4,5,6]
let secondList = [4,5,6,7,8,9]
let thirdList = [9,10,11,12,13]
let fourthList = [14,15,16,17]



function addArrays(firstList,...otherLists){
 
    const newlist = otherLists.flat()
    
    return firstList.concat(newlist);

}

console.log(addArrays(firstList,secondList,thirdList,fourthList)); 



////////////////////2-ci tapsiriq menim usulum//////////////////////////////////////////////


function myAddArrays(_List,...otherLists) {
 
    let newarr =[..._List]

     otherLists.forEach(arrays => {
        for (const items of arrays) {
            newarr.push(items)
        }
       
     });
     return newarr;
}


console.log(myAddArrays(firstList,secondList,thirdList,fourthList)); 