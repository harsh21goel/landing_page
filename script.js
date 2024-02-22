let crsr= document.querySelector("#cursor")
let crsrblr= document.querySelector("#cursorblur")

document.addEventListener("mousemove",function(dets){
    crsr.style.top=dets.y+"px",
    crsr.style.left=dets.x+"px"
    crsrblr.style.top=dets.y+"px",
    crsrblr.style.left=dets.x+"px"
})




gsap.to(".nav",{
    backgroundColor :"black",
    duration: 0.8,
    height: "110px",
    scrollTrigger:{
    trigger:".nav",
    scoller:"body",
    // markers:true,
    start:"top -10%",
    end:"top -11%",
    scrub:1
    }
})
gsap.to("#main",{
    backgroundColor: "black" ,
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -50%",
        end:"top -100%",
        scrub:1,
        // markers:true
    }
    
})
gsap.to("h1",{
    fontSize: "2rem",
    
    scrollTrigger:{
        trigger:"h1",
        scroller:"body",
        start:"top 10%",
        end:"top 10%",
        scrub:1
    }
})
gsap.to("h2",{
    fontSize: "2rem",
    
    scrollTrigger:{
        trigger:"h1",
        scroller:"body",
        start:"top 10%",
        end:"top 10%",
        scrub:1
    }
})
gsap.to("p",{
    fontSize: "1rem",
    
    scrollTrigger:{
        trigger:"h1",
        scroller:"body",
        start:"top 10%",
        end:"top 10%",
        scrub:1
    }
})
