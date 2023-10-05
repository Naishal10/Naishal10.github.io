gsap.registerPlugin(ScrollTrigger);
// REVEAL //
gsap.utils.toArray(".revealUp").forEach(function (elem) {
  ScrollTrigger.create({
    trigger: elem,
    start: "top 80%",
    end: "bottom 20%",
    markers: false,
    onEnter: function () {
      gsap.fromTo(
        elem,
        { y: 200, autoAlpha: 0 },
        {
          duration: 2,
          y: 0,
          autoAlpha: 1,
          ease: "back",
          overwrite: "auto"
        }
      );
    },
    onLeave: function () {
      gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
    },
    onEnterBack: function () {
      gsap.fromTo(
        elem,
        { y: -200, autoAlpha: 0 },
        {
          duration: 2,
          y: 0,
          autoAlpha: 1,
          ease: "back",
          overwrite: "auto"
        }
      );
    },
    onLeaveBack: function () {
      gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
    }
  });
});


 // Function to copy text to clipboard
 function copyToClipboard(text) {
  const el = document.createElement('textarea');
  el.value = text;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
}

// Add click event listeners to buttons
document.querySelectorAll('.copyBtn').forEach(button => {
  button.addEventListener('click', function() {
    const textToCopy = this.getAttribute('data-clipboard-text');
    copyToClipboard(textToCopy);
    alert(`Copied: ${textToCopy}`);
  });
});



document.addEventListener("DOMContentLoaded", function() {
  // Initialize popovers
  var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
  var popoverList = popoverTriggerList.map(function(popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl);
  });

  // Initialize offcanvas
  var offcanvasElement = document.getElementById('sidePanelExp');
  var offcanvas = new bootstrap.Offcanvas(offcanvasElement);
  });

  document.addEventListener("DOMContentLoaded", function() {
  // Initialize popovers
  var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
  var popoverList = popoverTriggerList.map(function(popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl);
  });

  // Initialize offcanvas
  var offcanvasElement = document.getElementById('sidePanelExp');
  var offcanvas = new bootstrap.Offcanvas(offcanvasElement);

  // Listen for offcanvas close event
  offcanvasElement.addEventListener('hidden.bs.offcanvas', function() {
    // Close all popovers
    popoverList.forEach(function(popover) {
      popover.hide();
    });
   });

   // Initialize popovers
  var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
  var popoverList = popoverTriggerList.map(function(popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl);
  });

  // Initialize offcanvas
  var offcanvasElement2 = document.getElementById('offcanvasPort');
  var offcanvas2 = new bootstrap.Offcanvas(offcanvasElement2);

  // Listen for offcanvas close event
  offcanvasElement2.addEventListener('hidden.bs.offcanvas', function() {
    // Close all popovers
    popoverList.forEach(function(popover) {
      popover.hide();
    });
   });

  });





  function resizeOffcanvas() {
    const offcanvasElements = document.getElementsByClassName('offcanvas-end');
    for (let i = 0; i < offcanvasElements.length; i++) {
      if (window.innerWidth < 576) {
        offcanvasElements[i].style.width = '420px';
      } else {
        offcanvasElements[i].style.width = '600px';
      }
    }

    const offcanvasElements2 = document.getElementsByClassName('offcanvas-start');
    for (let i = 0; i < offcanvasElements2.length; i++) {
      if (window.innerWidth < 576) {
        offcanvasElements2[i].style.width = '420px';
      } else {
        offcanvasElements2[i].style.width = '600px';
      }
    }
  }

  // Call the function once to set the initial size
  resizeOffcanvas();

  // Update the size whenever the window is resized
  window.addEventListener('resize', resizeOffcanvas);
