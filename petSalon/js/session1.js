 //Remove index image when main menu is clicked on. 
 $('#about , #services, #register').on('click', function(){
    $('.main-photo').hide();
    $('.review-container').hide();
    
 });

 //Show main photo when home page is pressed
 $('#home').on('click', function(){
    $('.main-photo').show();
    $('.review-container').show();

    //When home is clicked, refresh page for index.html
    window.location.reload();
});







// Hiding the services and only displaying main image when page is loaded

function init(){
    
    $('#haircut').hide();
    $('#shower').hide();
    $('#fullService').hide();

    $('.sectionMenu').on('click', function(){
        $('.mainImg').hide();
    });

   


// On click functions for displaying services


    $('#option1').on('click', function(){
        $('#shower').show();
        $('#haircut').hide();
        $('#fullService').hide();
        
    });

        
    $('#option2').on('click', function(){
        $('#haircut').show();
        $('#shower').hide();
        $('#fullService').hide();
        
        
    });
    $('#option3').on('click', function(){
        $('#haircut').hide();
        $('#shower').hide();
        $('#fullService').show(); 
    });

};
$(document).ready(()=>init());