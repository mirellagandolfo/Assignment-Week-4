console.log("hello")

$(".readmore a").click(function(){
  event.preventDefault(); //default when click on link it goes to the top of the page but here we have a # next to the link so it's an anchor to this point on the page so we want to prevent the default -so we need this code to prevent the default from happening . note: this can only work on links and buttons
  $("#show-this-on-click").slideDown()
  $(".readmore").hide()
  $(".readless").show()
})
$(".readless a").click(function(){
  event.preventDefault();
  $("#show-this-on-click").slideUp()
  $(".readless").hide()
  $(".readmore").show()
})
//when we click on 'learnmore'

$(".learnmore").click(function(){
  event.preventDefault();
  $("#learnmoretext").slideDown()
  $(".learnmore").hide()
})
////
