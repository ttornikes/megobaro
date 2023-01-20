const accordionItems=document.querySelectorAll(".value__accordion-item");

accordionItems.forEach((item)=>{
   const accordionHeader=item.querySelector(".value__accordion-header");

   accordionHeader.addEventListener("click",()=>{
       const openItem=document.querySelector(".accordion-open");
       
       
       toggleItem(item);

       if(openItem && openItem!==item){
           toggleItem(openItem);

       }
   })
})

const toggleItem=(item)=>{
   const accordionContent=item.querySelector(".value__accordion-content");
   
   if(item.classList.contains("accordion-open")){

       accordionContent.removeAttribute("style")
       item.classList.remove("accordion-open")
   }else{
       accordionContent.style.height=accordionContent.scrollHeight+'px';
       item.classList.add("accordion-open");   
   }
}

// scrollreveal
const sr = ScrollReveal({
    origin:"top",
    distance:"60px",
    duration:1500,
    delay:400,
    // reset:true
})

sr.reveal(".costumer, .top_header, .questions, .menu_header, .wrapper")
sr.reveal(".wrapper_order, .wrapper_hero", {delay:500})
sr.reveal(".offer", {delay:600})
sr.reveal(".container", {delay:700})


sr.reveal(".product_item", {setInterval:100})
sr.reveal(".get, .paymethod", {origin:"left"})
sr.reveal(".product_desc", {origin:"right"})
// slider

const mainWidth=document.getElementsByClassName('cosumer_item')
if (window.innerWidth > 600) {
    mainWidth.remove.classList('.slick-initialized')
    console.log(mainWidth)
}



$(document).ready(function(){
    $('.cosumer_item').slick({
        infinite: true,
        slidesToScroll: 3
      });
  });
