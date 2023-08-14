function init() {
      gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });






  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();

}
init()

let cc=document.querySelector(".cursor-circle")

window.addEventListener("mousemove",(dets)=>{
    cc.style.transform=`translate(${dets.clientX}px,${dets.clientY}px)`;
    
})


function hero() {
    var tl=gsap.timeline()

    tl.from("#nav",{
        y:-100,
        opacity:0,
        duration:2,
        
    },"one")
    tl.to(".bounding-elem",{
        y:"0%",
        

        
    },"anime")
    tl.from(".newbounding-elem",{
        y:"100%",
        duration:1,
        delay:.8



    },"anime")


    tl.from("#hero-footer",{
        y:100,
        opacity:0,
        duration:2
    },"one")
}
hero()







function opening() {
  document.querySelector(".main-line").style.display="block"
  document.querySelector("body").style.overflow="hidden"
  document.querySelector("#nav-stripe-one").style.transform="translateY(0%)";
  document.querySelector("#nav-stripe-two").style.transform="translateY(0%)";
  document.querySelector("#nav-stripe-three").style.transform="translateY(0%)";
   
}
function closing() {

  document.querySelector("#nav-stripe-one").style.transform="translateY(-200vh)";
  document.querySelector("#nav-stripe-two").style.transform="translateY(-200vh)";
  document.querySelector("#nav-stripe-three").style.transform="translateY(-200vh)";
   
}








// if (matchMedia('(min-width:900px)').matches) {
  document.querySelectorAll(".elem")
.forEach(function (elem){
      elem.addEventListener("mousemove",(dets)=>{
        //  console.log(dets.clientY - elem.getBoundingClientRect())
        var difference=dets.clientY - elem.getBoundingClientRect().top;
        gsap.to(elem.querySelector("img"),{
          opacity:1,
          ease:Power1,
          top: difference,
          x:dets.clientX
         })
      })

      elem.addEventListener("mouseout",(dets)=>{
        //  console.log(dets.clientY - elem.getBoundingClientRect())
        // var difference=dets.clientY - elem.getBoundingClientRect().top;
        gsap.to(elem.querySelector("img"),{
          
          
          opacity:0,
          
         })
      })

      

})
// }







