
let pics = document.getElementsByClassName("gallery-pic");


/**
 * Displays gallery as a grid
 */
function displayGrid() {

    document.getElementById("gallery-container").style.flexDirection = "row";
    for (let i = 0; i < pics.length; i++) {
        pics[i].style.margin = "";
    }

}
/**
 * Displays image full width
 */
function displayFull() {
    document.getElementById("gallery-container").style.flexDirection = "column";
    for (let i = 0; i < pics.length; i++) {
        pics[i].style.margin = "auto";
    }
}


function deleteGalleryImg (event){

    let imgWrapper = event.path[3];

    if (imgWrapper.classList.contains('img-wrapper')){

        imgWrapper.remove();
    }

}
