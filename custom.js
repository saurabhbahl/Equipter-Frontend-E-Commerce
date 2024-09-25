jQuery(document).ready(function($){
    $('.image-slider').slick({
        centerMode: true,
        centerPadding: '150px',
        slidesToShow: 1,
        arrows: false,
        dots: true,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
    });
    // $('.tab-slider').slick({
    //   loop: true,
    //   slidesToShow: 1,
    //   arrows: false,
    //   dots: true,
    // });


      // Initialize the primary Slick Slider
    $('.tab-slider').slick({
      infinite: false,
      loop: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      focusOnSelect: true
  });

  // Handle slide click to open modal
  $('.tab-slider').on('click', '.info-icon', function() {
      $('html').addClass('modal-open');
      var clickedSlideIndex = $(this).data('id') - 1; // Get the index of clicked slide

      // Clear existing content in the modal slider
      $('.lightbox-slider').html('');

      // Clone all slides from the original slider into the modal slider
      $('.tab-slider .slide-image').each(function(index) {
        var imageSrc = $(this).attr('src');
        var detailsId = $(this).siblings('.slide-details').children('.info-icon').data('id');
        var detailsContent = $('#details-' + detailsId).html();
        // console.log($(this).siblings('.slide-details').children('.info-icon'));
          
          // Create new slide structure
          var slideHtml = `
            <div class="modal-slider p-5 2xl:p-11">
              <div class="flex bg-white p-9 gap-6 items-center">
                <img src="${imageSrc}" alt="Slide Image" class="w-1/2">
                <div class="slide-details w-1/2">${detailsContent}</div>
              </div>
            </div>
          `;

          // Append to modal slider
          $('.lightbox-slider').append(slideHtml);
          $('.slide-details:not(.tab-slide-content) > div').show();
          $('.slide-details:not(.tab-slide-content) .info-icon').hide();
      });

      // Initialize Slick Slider in modal
      $('.lightbox-slider').slick({
        centerMode: true,
        centerPadding: '250px',
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
          focusOnSelect: true,
          initialSlide: clickedSlideIndex, // Center the clicked slide
      });

      // Show the modal
      $('#lightbox-modal').show();
  });

  // Close modal when clicking the close button
  $('.close').on('click', function() {
      $('#lightbox-modal, .slide-details:not(.tab-slide-content) > div').hide();
      $('.slide-details:not(.tab-slide-content) .info-icon').show();
      // Destroy Slick slider inside modal to reset it for future use
      $('.lightbox-slider').slick('unslick');
      $('html').removeClass('modal-open');
  });

  // Optionally close the modal when clicking outside of it
  // $(window).on('click', function(event) {
  //     if ($(event.target).is('#lightbox-modal')) {
  //         $('#lightbox-modal').hide();
  //         // Destroy Slick slider inside modal
  //         $('.lightbox-slider').slick('unslick');
  //         $('body').removeClass('modal-open');
  //     }
  // });

      
      
});
jQuery(document).ready(function($) {
  // Initialize all tab sections
  $('.tabs-section').each(function() {
    var $this = $(this);
    
    // Set the first tab as active and show the first tab content
    $this.find('.tabs-nav li:first-child').addClass('active');
    $this.find('.tab-content').hide();
    $this.find('.tab-content:first').show();

    // Handle tab clicks
    $this.find('.tabs-nav li').click(function() {
      // Only affect the current section
      $this.find('.tabs-nav li').removeClass('active');
      $(this).addClass('active');
      $this.find('.tab-content').hide();

      var activeTab = $(this).find('a').attr('href');
      $this.find(activeTab).fadeIn();
      return false;
    });
  });
});