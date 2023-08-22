function loco() {
   gsap.registerPlugin(ScrollTrigger);

   const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true
   });
   locoScroll.on("scroll", ScrollTrigger.update);

   ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
         return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
         return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
   });




   ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

   ScrollTrigger.refresh();


}
loco();

let cursor_cir = document.querySelector('#circle-cursor');
function cursor() {

   window.addEventListener('mousemove', (dets) => {
      var x = dets.clientX;
      var y = dets.clientY;
      cursor_cir.style.transform = `translate(${dets.clientX - 8}px, ${dets.clientY - 8}px)`;

   });

   let video = document.querySelector('#page1 > video');
   video.addEventListener('mouseenter', () => {
      cursor_cir.style.width = "fit-content";
      cursor_cir.textContent = 'SOUND ON';
      cursor_cir.style.left = "-20px";

   });
   video.addEventListener('mouseleave', () => {
      cursor_cir.textContent = '';
      cursor_cir.style.cssText = 'height: 17px; width: 17px; left: 0;';

   });

   video.addEventListener('click', () => {
      if (video.muted) {
         video.muted = false;
         cursor_cir.textContent = 'SOUND OFF';

      } else {
         video.muted = true;
         cursor_cir.textContent = 'SOUND ON';


      }
   });

   let p3_img = document.querySelector('#page3  img');
   let p3_video = document.querySelector('#page3  video');

   p3_img.addEventListener('mouseenter', () => {
      cursor_cir.style.width = "fit-content";
      cursor_cir.textContent = 'VIEW';
      cursor_cir.style.left = "-10px";
   });

   p3_img.addEventListener('mouseleave', () => {
      cursor_cir.textContent = '';
      cursor_cir.style.cssText = 'height: 17px; width: 17px; left: 0;';

   });
   p3_video.addEventListener('mouseenter', () => {
      cursor_cir.style.width = "fit-content";
      cursor_cir.textContent = 'VIEW';
      cursor_cir.style.left = "-10px";
   });

   p3_video.addEventListener('mouseleave', () => {
      cursor_cir.textContent = '';
      cursor_cir.style.cssText = 'height: 17px; width: 17px; left: 0;';

   });


}

cursor();



function anim1() {
   var tl = gsap.timeline({
      scrollTrigger: {
         trigger: "#heading #one",
         scroller: "#main",
         start: 'top 23%',
         end: 'top -25%',
         scrub: 2,
      }
   });

   tl.to('#heading > #one', {
      x: -92,

   }, 'anyname_trick');//same name, so it can work on same time

   tl.to('#heading > #two ', {
      x: 85,

   }, 'anyname_trick');//same name, so it can work on same time

   tl.to('#page1 video ', {
      width: "95%",

   }, 'anyname_trick');//same name, so it can work on same time



}
anim1();

var tl2 = gsap.timeline({
   scrollTrigger: {
      trigger: "#heading #one",
      scroller: "#main",
      start: 'top -120%',
      end: 'top -125%',
      scrub: 2,
   }
});

tl2.to("#main", {
   duration: 1,
   backgroundColor: "white",
});

var tl3 = gsap.timeline({
   scrollTrigger: {
      trigger: "#heading #one",
      scroller: "#main",
      start: 'top -330%',
      end: 'top -335%',
      scrub: 2,
   }
});

tl3.to('#main', {
   backgroundColor: 'black'
});



document.querySelectorAll('#page5 .elem').forEach(function (val) {
   var diff = 0;

   val.addEventListener('mousemove', (dets) => {
      var diffY = dets.clientY - val.getBoundingClientRect().top;
      var diffX = dets.clientX - val.getBoundingClientRect().left;
      gsap.to(val.querySelector('img'), {
         opacity: 1,
         ease: Power3,
         top: diffY,
         left: diffX,
      });
   });
   val.addEventListener('mouseleave', (dets) => {
      gsap.to(val.querySelector('img'), {
         opacity: 0,
         ease: Power3,
         duration: .5
      });
   });
});


var items = document.querySelectorAll('#nav ul li');
items.forEach(function (val) {
   val.addEventListener('mouseenter', () => {
      if (val.innerHTML == "HOME") {

      }
      else {
         document.querySelector('#purple').style.display = "flex";

         var purple = document.querySelector('#purple ');
         var temp = "";

         for (let i = 0; i < 100; i++) {
            temp += `<h1>${val.innerHTML} &nbsp;</h1>`;
            purple.innerHTML = temp;

         }
         gsap.to('#purple h1', {
            x: '-1000%',
            duration: 20,
            repeat: -1,
         });

      }
   });

   val.addEventListener('mouseleave', () => {
      document.querySelector('#purple').style.display = "none";
   });

});









