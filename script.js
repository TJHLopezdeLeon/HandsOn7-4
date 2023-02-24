/*
Hands-on Project 7-4
TJ H Lopez de Leon
02/23/23
*/

//4
"use strict";


//5
function processDeliveryInfo(){
   var delivInfo = {};
   var delivSummary = document.getElementById("deliverTo");
   var prop;
   delivInfo.name = document.getElementById("nameinput").value;
   delivInfo.addr = document.getElementById("addrinput").value;
   delivInfo.city = document.getElementById("cityinput").value;
   delivInfo.email = document.getElementById("emailinput").value;
   delivInfo.phone = document.getElementById("phoneinput").value;
   //6
   for (prop in delivInfo) {
      delivSummary.innerHTML += "<p>" + delivInfo[prop] + "</p>";
      //document.write(delivInfo[prop]);
   }
   
}

//7
function previewOrder() {
    processDeliveryInfo();
    document.getElementById("section").style.display = "block";
}

//8
function createEventlistener() {
    var button = document.getElementById("previewBtn");
    if (button.addEventListener) {
       button.addEventListener("click",previewOrder,false);
    } else if (button.attachEvent) {
       button.attachEvent("onclick",previewOrder);
    }
 }

//9
 if (window.addEventListener) {
    window.addEventListener("load",createEventlistener,false);
 } else if (window.attachEvent) {
    window.attachEvent("onload",createEventlistener,false);
 }
