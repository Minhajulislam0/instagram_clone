// suggestion carousel slider

let userCardContainer = document.querySelector('.user-suggestion-container');
let nextArrowBtn = document.querySelector('.next-arrow');
let previousArrowBtn = document.querySelector('.previous-arrow');

let containerDimension = userCardContainer.getBoundingClientRect();
let containerWidth = containerDimension.width;

nextArrowBtn.addEventListener('click', ()=>{
    userCardContainer.scrollLeft += containerWidth;
})

previousArrowBtn.addEventListener('click', ()=>{
    userCardContainer.scrollLeft -= containerWidth;
})

// popup post

const userPost = [...document.querySelectorAll('.post_container .post')] 
let postPopup = document.querySelector('.post-popup');
let closePopup = document.querySelector('.close-overlay');
let popupPostImg = document.querySelector('.post-popup .post .post-img-container img');


userPost.map(post =>{
    post.addEventListener('click', ()=>{
        let img = post.querySelector ('.post-img');
        popupPostImg.src = img.src;
        postPopup.classList.add('show')
    })
})

closePopup.addEventListener('click', ()=>{
    postPopup.classList.remove('show')
})

post = [...document.querySelectorAll('.post-popup .post')];
post.map(post => addInteractionsToPost(post));