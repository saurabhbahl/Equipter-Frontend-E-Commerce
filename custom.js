jQuery(document).ready(function($){
    $('.image-slider').slick({
        centerMode: true,
        centerPadding: '60px',
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
      $('.tab-slider').slick({
        loop: true,
        slidesToShow: 1,
        arrows: false,
        dots: true,
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

  // Check if the content is currently visible
  const isOpen = contentDetail.style.maxHeight && contentDetail.style.maxHeight !== '0px';

  if (isOpen) {
      // If it's open, close it
      contentDetail.style.maxHeight = '0';
      toggleIcon.textContent = '+';
  } else {
      // If it's closed, open it
      contentDetail.classList.remove('hidden'); // Ensure it's in the flow for height calculation
      contentDetail.style.maxHeight = contentDetail.scrollHeight + 'px'; // Set to full height
      toggleIcon.textContent = '-';
  }

  // After the closing transition, add the hidden class to hide it completely
  if (isOpen) {
      setTimeout(() => {
          contentDetail.classList.add('hidden');
      }, 300); // Match the duration of the transition
  }
}
