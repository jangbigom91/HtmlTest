$(document).on('mouseover', '.menu i', function(){
    $('.category-bar').slideDown(1000);
});
$(document).on('mouseover', 'div', function(){
   if(!$(this).hasClass('menu')) {
       $('.category-bar').slideUp(1000);
   }
});