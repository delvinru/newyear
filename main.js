$(document).ready(function(){
    var timeend= new Date();
    timeend= new Date(timeend.getYear()>1900?(timeend.getYear()+1):(timeend.getYear()+1901),0,1);
    var EndY = timeend.getFullYear(),
    EndM = timeend.getMonth(),
    EndD = timeend.getDay();  

    var timer = setTimeout(
        function time() { 
            var check = new Date();
            today = new Date();
            today = Math.floor((timeend-today)/1000);
            tsec=today%60; today=Math.floor(today/60); if(tsec<10)tsec='0'+tsec;
            tmin=today%60; today=Math.floor(today/60); if(tmin<10)tmin='0'+tmin;
            thour=today%24; today=Math.floor(today/24);
            timestr=today +" дней "+ thour+" часов "+tmin+" минут "+tsec+" секунд";
            $('.numbers').text(timestr);

            if(check.getFullYear() == EndY && check.getMonth() == EndM && check.getDay() == EndD){
                $('.text').text('С Новым 2018 Годом!')
            };

            timer = setTimeout(time, 1000)
        } , 1000); 

    moonSugar.init({
        countFlakesInSecons : 7,
        countFlakeTypes : 4
    });
});