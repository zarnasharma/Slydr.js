var slides = document.getElementsByClassName("slide");
var nextBtn = document.getElementById("next"); //FORWARD BUTTON
var backBtn = document.getElementById("previous"); //BACKWARD BUTTON
var sliderHolder = document.getElementById("mainCarouselHolder");
var arrayIndex = 0;
var maxLimit = slides.length-1;
var sliderArray = [].slice.call(slides);
console.log(sliderArray);

function goForward() {
    console.log("slides array index - "+sliderArray[arrayIndex].innerHTML);
    console.log("Before increment arrayIndex is - "+arrayIndex);
    console.log("Slider element - "+sliderArray[arrayIndex].innerHTML);
    arrayIndex++;
    console.log("On clicking forward arrayIndex is - "+arrayIndex);
    if(arrayIndex > maxLimit)
    {
        arrayIndex = 0;
    }
    console.log("Slider element - "+sliderArray[arrayIndex].innerHTML);
    sliderHolder.innerHTML = sliderArray[arrayIndex].innerHTML;
}
function goBackwards()
{
    arrayIndex--;
    if(arrayIndex < 0)
    {
        arrayIndex = maxLimit;
    }
    //flipping the current slide to the previous one
    sliderHolder.innerHTML = sliderArray[arrayIndex].innerHTML;
}
nextBtn.onclick = goForward;
backBtn.onclick = goBackwards;