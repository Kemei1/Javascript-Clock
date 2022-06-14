setInterval(displayTime,1000)
function displayTime()
{
    // Date constructor
    const timeNow=new Date();
    //declaring variables
    let hoursOfDay=timeNow.getHours();
    let minutes=timeNow.getMinutes();
    let seconds=timeNow.getSeconds();
    let weekDay=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    let today=weekDay[timeNow.getDay()];
    let months=timeNow.toLocaleString("default",{month:"long"});
    let year=timeNow.getFullYear();
    let day=timeNow.getDate();
    let period="AM";

    if(hoursOfDay>12 )
    {
        hoursOfDay-=12;
        period="PM";
    }
    else
    {
        period="AM";
    }
    hoursOfDay=hoursOfDay<10?"0"+hoursOfDay:hoursOfDay;
    minutes=minutes<10?"0"+minutes:minutes;
    seconds=seconds<10?"0"+seconds:seconds;
    let time=hoursOfDay+":"+minutes+":"+seconds+period;
    document.getElementById('Clock').innerHTML=time+" "+today+" "+day+" "+months+" "+year;
}
displayTime();

