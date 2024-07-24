document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav ul li a");
 
    navLinks.forEach(link => {
        link.addEventListener("click", function() {
            navLinks.forEach(navLink => navLink.classList.remove("active"));
            this.classList.add("active");
        });
    });
});

function openBusinessTab(evt, businessName) {
    var tabContent = document.getElementsByClassName("tab-content");
    for (var i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    var tabLinks = document.getElementsByClassName("tab-link");
    for (var i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }

    document.getElementById(businessName).style.display = "block";
    evt.currentTarget.className += " active";
}


document.getElementsByClassName("tab-link")[0].click();

$(document).ready(function () {
    $('.clients-slider').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.backgroundColor = '#e0f7fa';
    });
    card.addEventListener('mouseout', () => {
        card.style.backgroundColor = 'white';
    });
});


function openTabExplore(event, tabName) {
    var tabcontent = document.getElementsByClassName("tab-content");
    for (var i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        tabcontent[i].classList.remove("active");
    }

    var tablinks = document.getElementsByClassName("tab-link");
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    document.getElementById(tabName).style.display = "block";
    document.getElementById(tabName).classList.add("active");
    event.currentTarget.classList.add("active");
}


document.addEventListener("DOMContentLoaded", function () {
    document.getElementsByClassName("tab-link")[0].click();
});

document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.case-studies-slide');
    const navDots = document.querySelectorAll('.nav-dot');
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[index].classList.add('active');
        navDots.forEach(dot => dot.classList.remove('active'));
        navDots[index].classList.add('active');
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    document.querySelector('.more-case-studies').addEventListener('click', nextSlide);

    navDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            showSlide(currentIndex);
        });
    });

    // Auto-slide every 5 seconds
    setInterval(nextSlide, 5000);

    // Show the first slide initially
    showSlide(currentIndex);
});

$(document).ready(function() {
    // Function to handle tab clicks
    $('.tab-link').click(function() {
        var tabId = $(this).attr('onclick').match(/'(.*?)'/)[1];
        $('.tab-content').removeClass('active');
        $('#' + tabId).addClass('active');

        // Reset carousel position on tab change
        $('.cards-business').css('margin-left', 0);
    });

    // Infinite carousel function
    function startCarousel() {
        var cardWidth = $('.card-business').outerWidth(true);
        var totalCards = $('.card-business').length;
        var currentIndex = 0;

        setInterval(function() {
            // Calculate the next index
            var nextIndex = (currentIndex + 1) % totalCards;

            // Animate to the next card
            $('.cards-business').animate({
                marginLeft: -nextIndex * cardWidth
            }, 1000, function() {
                // After animation completes
                if (nextIndex === 0) {
                    // Reset back to the first card without animation
                    $('.cards-business').css('margin-left', 0);
                    currentIndex = 0;
                } else {
                    // Update current index
                    currentIndex = nextIndex;
                }
            });
        }, 1000); // Adjust speed as needed (3000ms = 3 seconds)
    }

    startCarousel(); // Start the carousel on page load
});

document.addEventListener('DOMContentLoaded', function() {
    const industriesLink = document.getElementById('industries-link');
    const heroOverlay = document.querySelector('.hero-overlay');

    industriesLink.addEventListener('mouseenter', function() {
        heroOverlay.classList.add('active');
    });

    industriesLink.addEventListener('mouseleave', function() {
        heroOverlay.classList.remove('active');
    });
});

$(document).ready(function(){
    $('.carousel').slick({
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      dots:true,
      centerMode: true,
      responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          // centerMode: true,
  
        }
  
      }, {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
          infinite: true,
  
        }
      },  {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 2000,
        }
      }]
    });
  });