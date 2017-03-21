$(document).ready(function(){

var ScriptEders = ["Gabby","Anahi","Felix","Lauren","Pamela","Daril"];
var ScriptEducators = ["Nick", "Matthew", "Jenna", "Rafi" , "Michael"];
var studentrandom =  Math.floor(Math.random() * ScriptEders.length);
var teacherrandom =  Math.floor(Math.random() * ScriptEducators.length);
$("#studentButton").click(function(){
    $("#studentDisplay").html(ScriptEders[studentrandom]);
});

$("#teacherButton").click(function(){
    $("#teacherDisplay").html(ScriptEducators[teacherrandom]);
});


    
    
    });
/* ScriptEders.push("Nicole");
ScriptEducators.push("Bob");
console.log(ScriptEducators[teacherrandom]);
console.log(ScriptEders[studentrandom]); */

