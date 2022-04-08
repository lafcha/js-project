
let pics = document.getElementsByClassName("gallery-pic");


/**
 * Displays gallery as a grid
 */
function displayGrid (){
    document.getElementById("gallery-container").style.flexDirection = "row";
    for (let i = 0; i < pics.length ; i++){
        pics[i].style.margin = "";
      }
    
}
/**
 * Displays image full width
 */
function displayFull(){
    document.getElementById("gallery-container").style.flexDirection = "column";
    
    for (let i = 0; i < pics.length ; i++){
      pics[i].style.margin = "auto";
    }
}

/**
 * Hide & show the form to add images
 */

function toggleForm(){
    let form = document.getElementById('gallery-form');
    if(form.style.display === "none"){
        form.style.display ="block";
    } else {
        form.style.display ="none";
    }

}

function displayNewImage(e){

    if(e.target.files) {
        let newImg = e.target.files[0];
        let reader = new FileReader;

        reader.onload = function(e) {
            var imgHtml = document.createElement("img");

            imgHtml.onload = function(event){

            }
            imgHtml.src = e.target.result;
          };
          reader.readAsDataURL(imageFile);
    }

}
