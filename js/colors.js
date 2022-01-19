const main = document.querySelector('.main');

main.addEventListener("click", ({ target }) => {
    if (target.closest('.button-brand-color')) {
        const element = target.nextElementSibling;
        element.select();
        document.execCommand('copy');
        if (target.innerHTML == "Copy")
        {
            target.innerHTML = "Copied";
            setTimeout(function(){
            window.location.reload(1);
            }, 700); 
        }   
    }
});
main.addEventListener("click", ({ target }) => {
    if (target.closest('.button-for-palettes')) {
        const element = target.previousElementSibling;
        element.select();
        document.execCommand('copy');
    }   
});
const changeImage = document.querySelectorAll('.image-palettes-copydone');
const currentImage = document.querySelectorAll('.image-palettes');
currentImage.forEach(function(currentImage){
    currentImage.addEventListener('click', checkIndex);
})

function checkIndex(event){
  const index = Array.from(currentImage).indexOf(event.target)
    if (currentImage[index].style.display !== "block") {
        currentImage[index].style.display = "none"
        changeImage[index].style.display = "block"
        setTimeout(function(){
        window.location.reload(1);
        }, 700); 
  }
}