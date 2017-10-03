$(document).ready(function(){
    var endDate = "December 14, 2014 16:00:00";

    $('.countdown.simple').countdown({ date: endDate });

    $('.countdown.styled').countdown({
        date: endDate,
        render: function(data) {
            $(this.el).html("<div>" + this.leadingZeros(data.years, 2) + " <span>years</span></div><div>" + this.leadingZeros(data.days, 3) + " <span>days</span></div><div>" + this.leadingZeros(data.hours, 2) + " <span>hrs</span></div><div>" + this.leadingZeros(data.min, 2) + " <span>min</span></div><div>" + this.leadingZeros(data.sec, 2) + " <span>sec</span></div>");
        }
    });

    $('.countdown.customize').countdown({
        date: endDate,
        render: function(data) {
            $(this.el).html("<div><span>"  + this.leadingZeros(data.days, 2) + "</span><br>days</div><div><span>" + this.leadingZeros(data.hours, 2) + " </span><br>hours</div><div><span>" + this.leadingZeros(data.min, 2) + " </span><br>minutes</div><div><span>" + this.leadingZeros(data.sec, 2) + " </span><br>seconds</div>");
        }
    });
});
