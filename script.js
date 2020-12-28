/*Enables spin effect on sidebar toggle*/
$(function()
{
  $("#sidebar_btn").click(function()
  {
    $("#sidebar_btn").toggleClass("spinEffect");
  });
});

/*Activate active class*/
$(document).ready(function()
{
  $('.nav_btn').click(function()
  {
    $('.mobile_nav_items').toggleClass('active');
  });
});

