
 let pics = document.getElementsByClassName("gallery-pic");

function displayGrid (){
    document.getElementById("gallery-container").style.flexDirection = "row";
    for (let i = 0; i < pics.length ; i++){
        pics[i].style.margin = "";
      }
    
}

function displayFull(){
    document.getElementById("gallery-container").style.flexDirection = "column";
    
    for (let i = 0; i < pics.length ; i++){
      pics[i].style.margin = "auto";
    }
}