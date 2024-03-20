let ampm=document.getElementById('ampm');
function displayTime(){
    let dateTime=new Date();//for getting time
    let hr=dateTime.getHours();
    let min=padZero(dateTime.getMinutes());
    let sec=padZero(dateTime.getSeconds());
    if(hr>12){
        hr=hr-12;
       ampm.innerHTML='PM';
    }

    document.getElementById('hours').innerHTML=padZero(hr);
    document.getElementById('mins').innerHTML=min;
    document.getElementById('seconds').innerHTML=sec;


}
function padZero(num){
    return num<10?"0"+num:num;
}
setInterval(displayTime,500);

//500ms=less than a sec

function header(){
    let dateTime=new Date();
    let mon=dateTime.getMonth();
    document.getElementById('month').innerHTML=monthName(mon);
    let day=dateTime.getDay();
    document.getElementById('day').innerHTML=dayname(day);
    displayDate(padZero(mon),padZero(day));
}
setInterval(header,500);
function monthName(num){
    switch(num){
        case 1:
            return 'January';
            break;
        case 2:
            return 'February';
            break;
        case 3:
            return 'March';
            break;
        case 4:
            return 'April';
            break;
        case 5:
            return 'May';
            break;
        case 6:
            return 'June';
            break;
        case 7:
            return 'July';
            break;
        case 8:
            return 'August';
            break;
        case 9:
            return 'September';
            break;
        case 10:
            return 'October';
            break;
        case 11:
            return 'November';
            break;
        case 12:
            return 'December';
            break;
    }
}
function dayname(n){
    switch(n){
        case 1:
            return 'Monday';
            break;
        case 2:
            return 'Tuesday';
            break;
        case 3:
            return 'Wednesday';
            break;
        case 4:
            return 'Thursday';
            break;
        case 5:
            return 'Friday';
            break;
        case 6:
            return 'Saturday';
            break;
        case 7:
            return 'Sunday';
            break;
}
}
function displayDate(month,day){
    let dateTime=new Date();
    let year=dateTime.getFullYear();
    let date=dateTime.getDate();
    document.getElementById('date').innerHTML=date+"-"+month+"-"+year;
}