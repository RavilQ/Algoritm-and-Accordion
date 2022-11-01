let first_button = document.getElementById("first_button");
let second_button = document.getElementById("second_button");
let third_button = document.getElementById("third_button");
let firstButtonInFirstButton = document.getElementById("firstButtonInFirstButton");
let secondButtonInFirstButton = document.getElementById("secondButtonInFirstButton");
let firstButtonInSecondButton = document.getElementById("firstButtonInSecondButton");
let firstButtonInThirdButton = document.getElementById("firstButtonInThirdButton");
let firstButtonFirstText = document.getElementById("firstButtonFirstText");
let firstButtonSecondText = document.getElementById("firstButtonSecondText");
let secondButtonFirstText = document.getElementById("secondButtonFirstText");
let thirdButtonFirstText = document.getElementById("thirdButtonFirstText");
let accordion = document.querySelector(".accordion");




first_button.addEventListener("click",()=>{
     
    if (firstButtonInFirstButton.style.display=="block") {
        firstButtonInFirstButton.style.display="none";

    }
    else{
        firstButtonInFirstButton.style.display="block";
    }
    if (secondButtonInFirstButton.style.display=="block") {
        secondButtonInFirstButton.style.display="none";

    }
    else{
        secondButtonInFirstButton.style.display="block";
    }
    if (firstButtonFirstText.style.display == "block") {
        firstButtonFirstText.style.display = "none"
    }
    
    if (firstButtonSecondText.style.display == "block") {
        firstButtonSecondText.style.display = "none"
    }
   
})





firstButtonInFirstButton.addEventListener("click",()=>{
   
    if (firstButtonFirstText.style.display == "block") {
        firstButtonFirstText.style.display = "none"
    }
    else{
        firstButtonFirstText.style.display = "block"
    }
     
})


secondButtonInFirstButton.addEventListener("click",()=>{

    if (firstButtonSecondText.style.display == "block") {
        firstButtonSecondText.style.display = "none"
    }
    else{
        firstButtonSecondText.style.display = "block"
    }
     
})









second_button.addEventListener("click",()=>{
       
    if (firstButtonInSecondButton.style.display=="block") {
        firstButtonInSecondButton.style.display="none";
    }
    else{
        firstButtonInSecondButton.style.display="block";
    }
    if (secondButtonFirstText.style.display=="block") {
        secondButtonFirstText.style.display="none"
     }
      
})

firstButtonInSecondButton.addEventListener("click",()=>{

     if (secondButtonFirstText.style.display=="block") {
        secondButtonFirstText.style.display="none"
     }
     else{
        secondButtonFirstText.style.display="block"
     }

})








third_button.addEventListener("click",()=>{
        
    if (firstButtonInThirdButton.style.display=="block") {
        firstButtonInThirdButton.style.display="none";
    }
    else{
        firstButtonInThirdButton.style.display="block";
    }
    if (thirdButtonFirstText.style.display=="block") {
        thirdButtonFirstText.style.display="none"
    }
     
})

firstButtonInThirdButton.addEventListener("click",()=>{

    if (thirdButtonFirstText.style.display=="block") {
        thirdButtonFirstText.style.display="none"
    }
    else{
        thirdButtonFirstText.style.display="block"
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