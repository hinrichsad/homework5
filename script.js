$(function() {
    var d = new Date()

    var year = d.getFullYear()
    var month = d.getMonth()+1;
    var day = d.getDate()

    var calDay =
    (month<10 ? '0' : '') + month + '/' +
    (day<10 ? '0' : '') + day + '/' + year

    var t = new Date();
    var hours = t.getHours(); 
    var minutes = t.getMinutes();
    var seconds = t.getSeconds();
    var milli = t.getMilliseconds();
    
    var time = hours + " : " + minutes

    $("#time").text(time);
    $('#date').text(calDay)

    times = [];

    $(".taskSpace").on("click", function () {
        scheduleTime = $(this).val();
        times.push(scheduleTime)
        console.log(times);
    });


  });
