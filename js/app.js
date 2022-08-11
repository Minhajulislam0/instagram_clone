// Activity Notification 

const notification = document.getElementById('notifications');
const notificationBox = document.querySelector('.activity-container');

notification.addEventListener('click', ()=>{
    notificationBox.classList.toggle('hide');
    // image fill no fill
    const imgFill = notification.src.split('-')[0];
    if(notification.src.includes('nofill')){
        notification.src = `${imgFill}-fill.png`
    }else{
        notification.src = `${imgFill}-nofill.png`;
    }
})