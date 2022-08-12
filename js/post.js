// icon fill change
const changeIcon = (icon)=>{
    let imgFill = icon.src.split('-')[0];
    if(icon.src.includes('nofill')){
        icon.src = `${imgFill}-fill.png`
    }else{
        icon.src = `${imgFill}-nofill.png`;
    }   
}


// like

let likeBtn = document.querySelector('.like-btn');
let likePopup = document.querySelector('.like-icon');

likeBtn.addEventListener('click',()=>{
    if (likeBtn.src.includes('nofill')){
        likePopup.classList.add('show');
    }
    // icon fill calback 
    changeIcon(likeBtn)
    
    setTimeout(()=>{
        likePopup.classList.remove('show');
    },2000);

    
})





