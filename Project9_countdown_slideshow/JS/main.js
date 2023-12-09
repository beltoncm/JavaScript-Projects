
// This is a countdown function that runs without an event handler
// call is made  an onload in the body tag
//counts down 15 seconds

function countdown() {

    

  var seconds = 15;

    function tick() {
        seconds = seconds - 1;
        timer.innerHTML = seconds;
        var time = setTimeout(tick, 1000);
        if (seconds == -1) {
            alert("Time's up! Click OK to begin viewing slides or close the browser to abort.");
            clearTimeout(time);
            timer.innerHTML = "";
            window.location.href="cars_slide_show.html?backurl="+window.location.href;
           
        }


    }
    tick();
}

