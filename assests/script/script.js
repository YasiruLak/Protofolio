$(document).ready(function (){
    $('.about-info-title').counterUp({
        delay:3,
        time:300
    });


    $(window).scroll(function (){
        if (this.scrollY > 20){
            $('.navbar').addClass("sticky")
        }else{
            $('.navbar').removeClass("sticky");
        }

        // scroll-up button show/hide script
        if (this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slid up script

    $('.scroll-up-btn').click(function (){
        $('html').animate({scrollTop: 0});
    });

    // typing animation script

    var typed = new Typed(".typing",{
        strings: ["Full Stack Developer", "Freelance", "Developer", "Designer", "Blogger", "Traveller"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true

    });

    var typed = new Typed(".typing-2",{
        strings: ["Full Stack Developer", "Freelance", "Developer", "Designer", "Blogger", "Traveller"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true

    })
    // toggle menu/navbar script

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
        $('.scroll-up-btn').removeClass("show");
    });

    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

// selecting all required element

const  filterItem = document.querySelector(".items");
const  filterImg = document.querySelectorAll(".image1");

window.onload = () =>{
    filterItem.onclick = (selectedItem)=>{
    if (selectedItem.target.classList.contains("item")){
        filterItem.querySelector(".active").classList.remove("active");
        selectedItem.target.classList.add("active");
        let filterName = selectedItem.target.getAttribute("data-name");
            filterImg.forEach((image1)=>{
                let filterImages = image1.getAttribute("data-name");
                if ((filterImages == filterName) || filterName == "all"){
                    image1.classList.remove("hide");
                    image1.classList.add("show");
                }else{
                    image1.classList.add("hide");
                    image1.classList.remove("show");
                }
            });
        }
    }

}


const skillsContent = document.getElementsByClassName('skills-content2'),
    skillsHeader = document.querySelectorAll('.skills-header');

function  toggleSkills(){
    let itemClass = this.parentNode.className

    for (let i =  0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills-content2 skills-close'
    }
    if (itemClass === 'skills-content2 skills-close'){
        this.parentNode.className = 'skills-content2 skills-open'
    }
}

skillsHeader.forEach((el) =>{
    el.addEventListener('click', toggleSkills)
})




// const tabs = document.querySelectorAll('[data-target]'),
//     tabContents = document.querySelectorAll('[data-content]')
//
// tabs.forEach(tab =>{
//     tab.addEventListener('click', () =>{
//         const target = document.querySelector(tab.dataset.target)
//
//         tabContents.forEach(tabContent =>{
//             tabContent.classList.remove('qualification-active')
//         });
//         target.classList.add('qualification-active')
//
//         tabs.forEach(tab =>{
//             tab.classList.remove('qualification-active')
//         });
//         tab.classList.add('qualification-active')
//     })
// })

