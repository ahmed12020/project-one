function Notificationfunc () {
    let notifica = new Notification('new message in project',{
        body:'ahmed alaa this new message in notification'
    })
};


if(Notification.permission === 'granted') {
    Notificationfunc();
}else if(Notification.permission !=='denied') {
    Notification.requestPermission().then((msg)=>{
        if(msg === 'granted') {
            Notificationfunc();
        }
    })
}