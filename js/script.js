//backend logic
function Destination(place,landmarks,year,){
  this.place=place;
  this.landmarks=landmarks;
  this.year=year;
}
Destination.prototype.fullDestination=function(){
  return this.place + "" + this.landmarks +this.year;

}

//user interface logic
$(document).ready(function(){
  $("form#new-destination").submit(function(event){
    event.preventDefault();


    var inputtedplace=$("input#new-place").val();
    var inputtedlandmarks=$("input#new-landmarks").val();
    var inputtedyear=$("input#new-year").val();

   var newDestination = new Destination(inputtedplace,inputtedlandmarks,inputtedyear);

   $("ul#records").append("<li><span class='records'>" +newDestination.fullDestination() +"</span></li>");

   $("input#new-place").val("");
   $("input#new-landmarks").val("");
   $("input#new-year").val("");

   $("#records").last().click(function() {
  $("#show-destination").show();
  $("#show-records h2").text(newDestination.place);
  $(".place").text(newDestination.place);
  $(".landmarks").text(newDestination.landmarks);
   $(".year").text(newDestination.year);

});



 });
});
