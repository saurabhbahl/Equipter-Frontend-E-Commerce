jQuery(document).ready(function($){
    $('.image-slider').slick({
        centerMode: true,
        centerPadding: '150px',
        slidesToShow: 1,
        arrows: false,
        autoplay: true,
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
  var sliderId = $(this).closest('.tab-slider').parent().attr('id'); // Get the slider wrapper ID
  var modalId = sliderId === 'slider1' ? 'lightbox-modal-slider1' : 'lightbox-modal-slider2'; // Determine the modal ID

  // Clear existing content in the selected modal slider
  $('#' + modalId + ' .lightbox-slider').html('');

  // Clone all slides from the original slider into the selected modal slider
  $('#' + sliderId + ' .slide-image').each(function(index) {
      var imageSrc = $(this).attr('src');
      var detailsId = $(this).siblings('.slide-details').children('.info-icon').data('id');
      var detailsContent = $('#details-' + detailsId).html();
        
      // Create new slide structure
      var slideHtml = `
          <div class="modal-slider p-5 2xl:p-11">
              <div class="flex bg-white p-9 gap-6 items-center">
                  <img src="${imageSrc}" alt="Slide Image" class="w-1/2">
                  <div class="slide-details w-1/2">${detailsContent}</div>
              </div>
          </div>
      `;

      // Append to the selected modal slider
      $('#' + modalId + ' .lightbox-slider').append(slideHtml);
      $('.slide-details:not(.tab-slide-content) > div').show();
      $('.slide-details:not(.tab-slide-content) .info-icon').hide();
  });

  // Initialize Slick Slider in the selected modal
  $('#' + modalId + ' .lightbox-slider').slick({
      centerMode: true,
      centerPadding: '250px',
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      focusOnSelect: true,
      initialSlide: clickedSlideIndex, // Center the clicked slide
  });

  // Show the selected modal
  $('#' + modalId).show();
});

// Close modal when clicking the close button
$('.close').on('click', function() {
  var modalId = $(this).closest('.modal').attr('id'); // Get the modal ID

  $('#' + modalId).hide();
  $('.slide-details:not(.tab-slide-content) > div').hide();
  $('.slide-details:not(.tab-slide-content) .info-icon').show();

  // Destroy Slick slider inside the modal to reset it for future use
  $('#' + modalId + ' .lightbox-slider').slick('unslick');
  $('html').removeClass('modal-open');
});
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
const modal = document.getElementById('DepositForm');
const openModal = document.getElementById('DepositBtn');
const closeModal = document.getElementById('closeModal');
openModal.addEventListener('click', () => {
    modal.classList.add('show');
    document.body.classList.add('deposit-modal-open'); // Prevent scrolling
});
closeModal.addEventListener('click', () => {
    modal.classList.remove('show');
    document.body.classList.remove('deposit-modal-open'); // Allow scrolling again
});
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.classList.remove('show');
        document.body.classList.remove('deposit-modal-open'); // Allow scrolling again
    }
});

function toggleContent(event) {
  const titleElement = event.currentTarget;
  const contentDetail = titleElement.nextElementSibling;
  const toggleIcon = titleElement.querySelector('.toggle-icon');
  const isOpen = contentDetail.style.maxHeight && contentDetail.style.maxHeight !== '0px';
  if (isOpen) {
      contentDetail.style.maxHeight = '0';
      toggleIcon.textContent = '+';
  } else {
      contentDetail.classList.remove('hidden'); 
      contentDetail.style.maxHeight = contentDetail.scrollHeight + 'px'; 
      toggleIcon.textContent = '-';
  }
  if (isOpen) {
      setTimeout(() => {
          contentDetail.classList.add('hidden');
      }, 300);
  }
}

// const Submitmodal = document.getElementById('SubmitDeposit');
// const SubmitopenModal = document.getElementById('SubmitBtn');
// const SubmitcloseModal = document.getElementById('SubmitcloseModal');
// SubmitopenModal.addEventListener('click', () => {
//   Submitmodal.classList.add('show');
//     document.body.classList.add('submit-modal-open'); 
// });
// SubmitcloseModal.addEventListener('click', () => {
//   Submitmodal.classList.remove('show');
//     document.body.classList.remove('submit-modal-open');
// });
// window.addEventListener('click', (event) => {
//     if (event.target === modal) {
//       Submitmodal.classList.remove('show');
//         document.body.classList.remove('submit-modal-open');
//     }
// });
