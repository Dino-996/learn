const backButton = document.getElementById('backButton');

backButton.addEventListener('click', function() {
    window.scrollTo(0,0);
});

window.addEventListener('scroll', function(){
    let posY = window.scrollY;
    if(posY > 2300) { 
        backButton.style.display = 'block';
    } else {
        backButton.style.display = 'none';
    }
});