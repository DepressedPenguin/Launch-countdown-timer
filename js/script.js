

///JS CODE


//BRING ALL THE NECCARY IDS FIRST

//FOR THE SECONDS

var seconds = document.getElementById("seconds_place");

//FOR THE SECONDS

var minutes = document.getElementById("minutes_place");

// FOR THE DAYS

var hours = document.getElementById("hours_place");

// FOR THE MONTHS

var days = document.getElementById("days_place");

function change_seconds(){
    var m = 08; //FOR MINUTES
    var d = 21; //FOR DAYS
    var h = 14;// FOR hours
    var s = 55;
    seconds.innerHTML = s //UPDATE SEONDS
    minutes.innerHTML = m
    hours.innerHTML = h
    days.innerHTML = d

    //
    
    setInterval(function (){
        s++;
        seconds.innerHTML = s;
        if (s == 60){
            s = 0
        }

    }, 1000);

    // FOR MINUTES

    setInterval(function (){
        m++;
        minutes.innerHTML = m;
        if (m == 60){
            m = 0
        }

    }, 60000);

    // FOR HOURS

    setInterval(function (){
        h++;
        hours.innerHTML = h;
        if (h == 60){
            h = 0
        }

    }, 3600000);

    // DAYS

    setInterval(function (){
        d++;
        days.innerHTML = h;
        if (d == 60){
            d = 0
        }

    }, 8640000);
    
}

change_seconds();
