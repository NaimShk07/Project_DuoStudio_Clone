## something new

1. Min-height:100vh (normally it will stay on 100vh, but also it expand as per the element size)

2. mix-blend-mode: difference;(imp element color change as per bg color)
3. if (video.muted) is better than if (video.hasAttribute('muted'))
4. you can only use transform one's, so write code according to that
5. cursor_cir.style.*cssText* = 'height: 17px; width: 17px; left: 0;';
6. gsap short hand

   ```
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

   ```
