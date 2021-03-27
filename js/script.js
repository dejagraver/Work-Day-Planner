$(function() {
// Declare Variables 
//value = what they wrote 
//time =
 $(".saveBtn").on("click", function(){
    var value = $(this).siblings(".description").val()
    var time = $(this).parent().attr("id");
    localStorage.setItem(time,value)
 })

//create function 
//see what time it is 
//loop over each time block 
//check to see if the time block now 
function currentTime() {
    var currentHour = moment().hours();
    $(".time-block").each(function (){
        var timeBlock = parseInt($(this).attr("id").split("-")[1])
        if (timeBlock < currentHour) {
            $(this).addClass("past")
        } else if (timeBlock === currentHour) {
            $(this).addClass("present")
            $(this).removeClass("past")
        } else {
            $(this).addClass("future")
            $(this).removeClass("past")
            $(this).removeClass("present")
        }
    })
} 
currentTime();

var interval = setInterval(currentTime, 15000);
$("#hour-9 .description").val(localStorage.getItem("hour-9"));

///repeat the var interval 9-5 in 24 hour time 
//set hour nine to this thing that we put in .val
//write something and save it 
//get item out of local storage 


$("#currentDay").text(moment().format("dddd, MMMM Do"))



  

//Create Local Storage for timeline saved events 
//.this refers to the actual elements
  //is always a reference to an object and in strict mode can beany value
 
//Create function that determined row color based on time 
    //if time < present red, else if time is > then present green

});
