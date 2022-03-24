const firstPic = document.getElementById('picture1');
const secondPic = document.getElementById('picture2');
const thirdPic = document.getElementById('picture3');
const fourthPic = document.getElementById('picture4');
const fifthPic = document.getElementById('picture5');

firstPic.addEventListener('click',()=>{
    removeActiveClass();
    addActiveClass(firstPic);
});

secondPic.addEventListener('click',()=>{
    removeActiveClass();
    addActiveClass(secondPic);
});

thirdPic.addEventListener('click',()=>{
    removeActiveClass();
    addActiveClass(thirdPic);
});

fourthPic.addEventListener('click',()=>{
    removeActiveClass();
    addActiveClass(fourthPic);
});

fifthPic.addEventListener('click',()=>{
    removeActiveClass();
    addActiveClass(fifthPic);
});

function removeActiveClass(){
    if(firstPic.classList.contains('active')){
        firstPic.classList.remove('active');
    }
    else if(secondPic.classList.contains('active')){
        secondPic.classList.remove('active');
    }
    else if(thirdPic.classList.contains('active')){
        thirdPic.classList.remove('active');
    }
    else if(fourthPic.classList.contains('active')){
        fourthPic.classList.remove('active');
    }
    else {
        fifthPic.classList.remove('active');
    }
};

function addActiveClass(value){
    value.classList.add('active');
};