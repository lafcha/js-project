
/**
 * Hide & show the form to add images
 */

function toggleForm() {

    let form = document.getElementById('gallery-form');
    if (form.style.display === "none") {
        form.style.display = "block";
    } else {
        form.style.display = "none";
    }

}

/**
 * 
 * @param nbOfInputs 
 */


function addNewFormInput(nbOfInputs) {

    let wrapper = document.createElement('div');
    wrapper.className = "gallery-input-wrap";
    wrapper.id = 'wrapper-img-' + nbOfInputs;


    let label = document.createElement('label');
    label.setAttribute('for', 'new-img');
    label.textContent = "Add a new url ";

    let input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('name', 'new-img');
    input.className = "gallery-url-input";

    input.id = 'new-img-' + nbOfInputs;


    wrapper.append(label);
    wrapper.append(input);

    document.querySelector('.gallery-inputs').append(wrapper);
}

/**
 * 
 */

function displayInputsNbError() {

    let error = document.createElement('div');
    error.classList.add('form-img-error')
    error.textContent = "You cannot upload more than 5 images";

    let parent = document.querySelector("#gallery-form > p");

    parent.append(error);


}

/**
 * 
 * @param event 
 */


function handleImageForm(event) {

    event.preventDefault();

    //On récupère tous les inputs value

    let inputs = document.querySelectorAll('.gallery-url-input');

    let errorDivs = document.getElementsByClassName('url-error');

    for (let i = 0; i < errorDivs.length; i++) {
        errorDivs[i].remove();
    }

    inputs.forEach(input => {


        let inputValue = input.value;

        if (inputIsUrl(inputValue)) {

            displayNewImage(inputValue);
            input.value = "";

        } else {



            displayErrorUrl(input);

        }

    });

}

/**
 * 
 * @param inputValue 
 * @returns 
 */

function inputIsUrl(inputValue) {


    let response;
    let http = inputValue.slice(0, 7);
    let https = inputValue.slice(0, 8);

    if (http == "http://" || https == "https://") {
        response = true;
    } else {
        response = false;
    }

    return response;

}

/**
 * 
 * @param input 
 */

function displayErrorUrl(input) {



    //Get wrapper
    let wrapper = input.parentNode;

    let error = document.createElement('div');
    error.classList.add('form-img-error');
    error.classList.add('url-error');
    error.textContent = "Please enter a valid url";
    wrapper.append(error);




}

function displayNewImage(inputValue) {

    let imgWrapper = document.createElement('div');
    imgWrapper.classList.add('img-wrapper')

    //Image
    let newImgDiv = document.createElement('img');
    newImgDiv.classList.add('gallery-pic');
    newImgDiv.setAttribute("src", inputValue);

    //Overlay
    let imgOverlay = document.createElement('div');
    imgOverlay.classList.add('img-overlay');

    //Spans
    let outerSpan = document.createElement('span');
    outerSpan.classList.add('close-img-icon');

    let innerSpan = document.createElement('span');
    innerSpan.classList.add('iconify');
    innerSpan.setAttribute('data-icon', "akar-icons:cross");


    outerSpan.append(innerSpan);
    imgOverlay.append(outerSpan);
    imgWrapper.append(newImgDiv);
    imgWrapper.append(imgOverlay);
    document.getElementById("gallery-container").prepend(imgWrapper);

    imgWrapper.addEventListener('click', function (event) {

        deleteGalleryImg(event);

    });


}