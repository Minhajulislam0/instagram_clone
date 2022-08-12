// icon fill change
const changeIcon = (icon)=>{
    let imgFill = icon.src.split('-')[0];
    if(icon.src.includes('nofill')){
        icon.src = `${imgFill}-fill.png`
    }else{
        icon.src = `${imgFill}-nofill.png`;
    }   
}

// interection to all post

const addInteractionsToPost= (post) =>{

    // like

let likeBtn = post.querySelector('.like-btn');
let likePopup = post.querySelector('.like-icon');

likeBtn.addEventListener('click',()=>{
    if (likeBtn.src.includes('nofill')){
        likePopup.classList.add('show');
        if(shareIcon.src.includes('-fill')){
            shareIcon.click()
        }
    }
    // icon fill calback 
    changeIcon(likeBtn)

    setTimeout(()=>{
        likePopup.classList.remove('show');
    },2000);

    
})


// share post

let shareIcon = post.querySelector('.send-btn');
let sharePost = post.querySelector('.share-post');

shareIcon.addEventListener('click', ()=>{
    sharePost.classList.toggle('active');
    changeIcon(shareIcon)
})


// user link copy

let postLink = post.querySelector('#share-link').value;
let copyLinkBtn = post.querySelector('.copy-btn');

copyLinkBtn.addEventListener('click', ()=>{
    navigator.clipboard.writeText(postLink).then(()=>{
        shareIcon.click();
    })
})

}

// post

let posts = [...document.querySelectorAll('.post')];
posts.map(post => addInteractionsToPost(post));