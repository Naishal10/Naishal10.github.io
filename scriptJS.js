/* Scroll Animation using GSAP */

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
        { y: 100, autoAlpha: 0 },
        {
          duration: 1.25,
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
        { y: -100, autoAlpha: 0 },
        {
          duration: 1.25,
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




/* Custom Cursor */
var kursorx = new kursor({
  type: 4,
})

var kursorx1 = new kursor({
  type: 4,
  color:  rgb(255, 254, 249)

})



/* Next Page section */
function toggleShow(index){

  
  var imagfe = document.getElementsByClassName('displayStyle');
 
  
  var page = document.getElementsByClassName('pageDisplay');
  
  var displaySetting = imagfe[index].style.display;
  
  if(displaySetting=='block' || displaySetting=='flex'){

    imagfe[index].style.display = 'none';
  
    page[index].style.display = 'flex';
  }else{

    imagfe[index].style.display = 'block';
    page[index].style.display = 'none';
    
    
  }

 

}

function showNext(index){

  
  var imagfe = document.getElementsByClassName('displayStyle');
 

    imagfe[index].style.display = 'none';
    imagfe[index+1].style.display = 'block';
    
  
 

}

function showPrevious(index){

  var imagfe = document.getElementsByClassName('displayStyle');
 
    imagfe[index].style.display = 'none';
    imagfe[index-1].style.display = 'block';
    
}

function alerting() {

  alert("Working");
}

