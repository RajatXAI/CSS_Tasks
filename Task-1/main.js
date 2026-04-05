let cursor = document.querySelector(".cursor")

window.addEventListener("mousemove", function(e){

    cursor.style.zIndex = "1"

    gsap.to(cursor,{
        x: e.clientX,
        y: e.clientY,
        duration: 0.4,
        ease: "power3.out"
    })

})