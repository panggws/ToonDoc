// Calling this functions runs all of the calculations
function calculate() {

	// Combine the minute and hour RTO inputs and convert them to milliseconds
    var targetRto = Number($('#rtoMin').val() * 60) + Number($('#rtoHr').val() * 3600);
	
	// Combine the minute and hour RPO inputs and convert them to milliseconds
    var targetRpo = Number($('#rpoMin').val() * 60) + Number($('#rpoHr').val() * 3600);
	
	// Combine the minute and hour for "initaite recovery process" inputs and convert them to milliseconds
    var initiateRecovery = Number($('#recoveryMin').val() * 60) + Number($('#recoveryHr').val() * 3600);
	
	// Take the amount of data inputed and convert it to kilobits 
    var dataDisrupted = Number($('#dataDisrupted').val()) * 8388608;
	
	// Take the value of the selected radio button in megabits and convert it to kilobits
    var transferSpeed = ($('input:radio[name=transferSpeed]:checked').val() * 1024);
	
	// Combine the minute and hour for "backup interval" inputs and convert them to milliseconds
    var backupInterval = Number($('#backupMin').val() * 60) + Number($('#backupHr').val() * 3600);
	

	// Determine the time it will take the data to transfer by dividing the disrupted data (kb) by the transfer speed (kb/s)
    var dataTransfer = (dataDisrupted / transferSpeed);
	
	// Determine total recovery time by adding the data transfer time and the time it takes to start the recovery process
    var recoveryTime = Number(dataTransfer + initiateRecovery);
    var totalRTO = Number(recoveryTime);
    $('#totalRTO').val(totalRTO);
	
	// Get value for number of employees
    var affectedEmployees = Number($('#affectedEmployees').val());
	
	// Get value for average wage / hr
    var averageWage = Number($('#averageWage').val());
	
	// Get value for overhead cost / hr
    var overheadCost = Number($('#overheadCost').val());
	
	// Get value for business lost / hr
    var businessLost = Number($('#businessLost').val());

    // Get the total cost to the business per hour
    var costPerHour = (affectedEmployees * (averageWage)) + overheadCost + businessLost;

    // This function converts variables from milliseconds to a readable time format
    function convertTime(totalRTO,targetRto,targetRpo,backupInterval){
        var x = totalRTO,targetRto,targetRpo,backupInterval;
        var days = Math.floor(x / 86400);
        var hours = Math.floor(x/ 3600) % 24;
        var minutes = Math.floor(x / 60) % 60;
        var seconds = x % 60;
        var format = days + " Days " + hours + " Hours " + minutes + " Minutes ";

        return format;
    }

    // This function convers milliseconds into an hour format (ex. 1.5 hours)
    function convertCost(x){
        var hours = (x / 3600);
        var downtimeHours = hours.toFixed(2);

        return downtimeHours;
    }

    // Print out the calculator results

    document.getElementById("calc1").innerHTML =
           '<span class="large uppercase">Recovery Process</span>'
         + '<div id="resultsleft" class="uppercase left">' + '<span class="uppercase medium">Critical System Data: </span>' + '<span class="blue">' + (dataDisrupted / 8388608)+ ' GB</span>' // Convert the amount of data back to GB
         + '<br /><span class="uppercase medium">Time Between Backups: </span>' + '<span class="blue medium">' + convertTime(backupInterval) + '</span>' // Convert backup interval in milliseconds to a readable time format
         + '<br /><span class="uppercase medium">Recovery Process Start: </span>' + '<span class="blue medium">' + convertTime(initiateRecovery) + '</span>' // Convert initiate recovery time in milliseconds to a readable time format
         + '<br /><span class="medium uppercase left">Estimate Downtime: </span>'
         + '<span class="red uppercase left">'
         + convertTime(totalRTO) // Convert recovery time in milliseconds to a readable time format
         + '</span>'
         + '</div><br />'
         + '<div id="resultsRight" class="uppercase left">'
         + '<span class="large uppercase">Downtime Costs</span>'
         + '<br /><span class="uppercase medium">Employees Affected: </span>' + '<span class="blue medium">' + affectedEmployees + '</span>' // Print value for number of employees
         + '<br /><span class="uppercase medium">Average Wage: </span>' + '<span class="blue medium">' + '$' + averageWage + '/hr</span>' // Print value for wage / hr
         + '<br /><span class="uppercase medium">Overhead Costs: </span>' + '<span class="blue uppercase medium">' + '$' + overheadCost + '/hr</span>' // Print value for overhead cost / hr
         + '<br /><span class="uppercase medium">Revenue Lost: </span>' + '<span class="blue uppercase medium">' + '$' + businessLost + '/hr</span>' // Print value for business lost / hr
         + '<br /><span class="medium uppercase left">Total Cost: </span>'
         + '<span class="red uppercase left">'
         + '$'
         + costPerHour // Determine the cost of employees / hr
         + '/hr</span>'
         + '</div>'
         + '<br/>';

		 
	
	// These statements determine if the RPO and RTO are met 
    if (targetRto > recoveryTime) {
        document.getElementById("rtoStatement").innerHTML = '<div class="medium left">Recovery Time Objective <span class="green">Met</span></div>';
    }
    else if (targetRto == recoveryTime) {
        document.getElementById("rtoStatement").innerHTML = '<div class="medium left">Recovery Time Objective <span class="green">Met</span></div>';
    }
    else {
        document.getElementById("rtoStatement").innerHTML = '<div class="medium left">Recovery Time Objective <span class="red">Not Met</span></div>';
    }


    if (targetRpo > backupInterval) {
        document.getElementById("rpoStatement").innerHTML = '<div class="medium left">Recovery Point Objective <span class="green">Met</span></div>';
    }
    else if (targetRpo == backupInterval) {
        document.getElementById("rpoStatement").innerHTML = '<div class="medium left">Recovery Point Objective <span class="green">Met</span></div>';
    }
    else {
        document.getElementById("rpoStatement").innerHTML = '<div class="medium left">Recovery Point Objective <span class="red">Not Met</span></div>';
    }

    // Calculation to determine the cost of downtime
    var totalCost = costPerHour * convertCost(totalRTO);
	
    // Animation for cost of downtime number to count up when the calculate button is submitted
    function counter(totalCost){
            x = totalCost;
            $({countNum: $('#countedCost').text()}).animate({countNum: x.toFixed()}, {
            duration: 1500,
            easing: 'linear',
            step: function () {
                $('#countedCost').text(Math.floor(this.countNum));
                console.log(Math.floor(this.countNum));
            },
            complete: function () {
                $('#countedCost').text(this.countNum);
            }
        });
        return x;
    }
    counter(totalCost);

    return false;
}

// Open the results modal when the calculate button is clicked
$('#openModal').click(function() {
    $('#results').dialog('open');
    closedialog = 0;
});

var closedialog;
function overlayclickclose() {
    if (closedialog) {
        $('#results').dialog('close');
    }
    // Set to one because click on dialog box sets to zero
    closedialog = 1;
}
$("#dialogContainer").dialog({
    autoOpen: false,
    open: function() {
        closedialog = 1;
    },
    focus: function() {
        closedialog = 0;
    },
    close: function() {
        $(document).unbind('click');
    },
    buttons: {
        Ok: function() {
            $(this).dialog('close');
        }
    }
});

// Set properties for the results modal - jQuery
$('#results').dialog({
    open: function(){
        $('.ui-widget-overlay').hide().fadeIn();
    },
    width: 620,
    modal: true,
    autoOpen: false,
    title: 'RESULTS',
    resizable: false,
    draggable: false,
    show: 'fade',
    position: ['center',100]
});

// jQuery arrows for input boxes
$("input[type=number]").spinner();

// Call the calculate function when the calculate button is submitted
$('#calculator').submit(calculate);



