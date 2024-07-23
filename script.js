window.onload = function(){

    $('#menu').click(function(){
      $(this).toggleClass('fa fa-times');
      $('header').toggleClass('toggle');
    });
  
    $(window).on('scroll load',function(){
  
      $('#menu').removeClass('fa fa-times');
      $('header').removeClass('toggle');
  
      if($(window).scrollTop() > 0){
        $('.top').show();
      }else{
        $('.top').hide();
      }
  
    });
  
    // smooth scrolling 
  
    $('a[href*="#"]').on('click',function(e){
  
      e.preventDefault();
  
      $('html, body').animate({
  
        scrollTop : $($(this).attr('href')).offset().top,
  
      },
        500, 
        'linear'
      );
  
    });
  
  };
       
     

    // Function to calculate age
    function calculateAge(birthDate) {
        const today = new Date();
        const birthDateObj = new Date(birthDate);
        let age = today.getFullYear() - birthDateObj.getFullYear();
        const monthDiff = today.getMonth() - birthDateObj.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDateObj.getDate())) {
            age--;
        }
        return age;
    }

    // Function to update age in the DOM
    function updateAge() {
        const ageElement = document.getElementById('age');
        const birthDate = '1996-02-01'; // Your birth date
        const age = calculateAge(birthDate);
        ageElement.textContent = 'Age: ' + age;
    }

    // Function to update the footer year in the DOM
    function updateFooterYear() {
        const yearElement = document.getElementById('year');
        const currentYear = new Date().getFullYear();
        yearElement.textContent = currentYear;
    }

    // Call the functions to update the age and footer year
    updateAge();
    updateFooterYear();

  
  