$('.landing-carousel').owlCarousel({
  loop:true,
  margin:10,
  autoplay:true,
  autoplayTimeout:5000,
  dots:false,
  responsive:{
      0:{
          items:1
      }
  }
})

$('.testimonials-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  autoplay:true,
  responsive:{
      0:{
          items:1
      },
      600:{
        items:1
      },
      1000:{
        items:2
      }
  }
})

let start = false ;

window.onscroll = _ => {
  if(window.scrollY >= document.querySelector(".counts").offsetTop - 300){
      if(!start){
          document.querySelectorAll(".count-box .counter").forEach(num => decrement(num));
      }
  start = true; 
  }
  scrollTop()
}

function decrement(ele) {
    let count = setInterval(() => {
        ele.textContent++
        if(ele.textContent == ele.dataset.goal ){
            clearInterval(count);
        }
    }, 3000 / ele.dataset.goal ) ;
}

function scrollTop() {
  if(window.scrollY >= 600){
    document.querySelector(".scrollToTop").classList.add("show")
  }else {
    document.querySelector(".scrollToTop").classList.remove("show")
  }
}
document.querySelector(".scrollToTop").onclick = _ =>{
  scrollTo({
    top:0,
    behavior:"smooth"
  })
}