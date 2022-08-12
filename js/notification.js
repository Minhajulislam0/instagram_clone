// Activity Notification 

let notification = document.getElementById('notifications');
let notificationBox = document.querySelector('.activity-container');

notification.addEventListener('click', ()=>{
    notificationBox.classList.toggle('hide');
    // image fill no fill
    let imgFill = notification.src.split('-')[0];
    if(notification.src.includes('nofill')){
        notification.src = `${imgFill}-fill.png`
    }else{
        notification.src = `${imgFill}-nofill.png`;
    }    
});