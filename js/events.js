//define functions here

$(document).ready(function(){

// call functions here
getIt(); frameIt(); pressIt(); submitIt();
});

function getIt(){ $('p').on("click",function(){alert("Hey!")})}
function frameIt(){ $('img').on("load",function(){ $("img").addClass("tasty")    })}
function pressIt(){ $('#typing').on("keydown", function(e){
  var key = parseInt( e.detail || e.which)
  console.log(key)
  if(key === 71){ alert("You pressed G!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")}
  }
)}
function submitIt(){ $("form").on("submit",function(){ alert("Your form is going to be submitted now.")}   )}
