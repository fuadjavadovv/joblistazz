
function sendForm(event) {

    event.preventDefault();
    const form = document.querySelector('.form');
    const cityCheckboxes = document.querySelectorAll('.city-checkbox');
    const categoryCheckboxes = document.querySelectorAll('.category-checkbox');
    const educationCheckboxes = document.querySelectorAll('.education-checkbox');
    const experienceCheckboxes = document.querySelectorAll('.experience-checkbox');
    const minSalary = document.querySelector('.minSalary');
    const maxSalary = document.querySelector('.maxSalary');
    let selectedCities = "";
    let selectedCategories = "";
    let selectedEducation = "";
    let selectedExperience = "";

    console.log(cityCheckboxes, cityCheckboxes);

    cityCheckboxes.forEach((c) => {
        if (c.checked) selectedCities += c.value + ",";
    });
    categoryCheckboxes.forEach((c) => {
        if (c.checked) selectedCategories += c.value + ",";
    });

    educationCheckboxes.forEach((c) => {
        if (c.checked) selectedEducation += c.value + ",";
    });

    experienceCheckboxes.forEach((c) => {
        if (c.checked) selectedExperience += c.value + ",";
    });

    let href = window.location.href;
    if (href.includes('?')) href = href.slice(0, href.indexOf('?'))
    window.location.href = `${href}?city=${selectedCities.slice(0, selectedCities.length - 1)}&category=${selectedCategories.slice(0, selectedCategories.length - 1)}&education=${selectedEducation.slice(0, selectedEducation.length - 1)}&experience=${selectedExperience.slice(0, selectedExperience.length - 1)}&min_salary=${minSalary.value}&max_salary=${maxSalary.value}`;

}


let modalBtn = document.querySelectorAll('.modal-btn');
let modals = document.querySelectorAll('.modal');
function closeModal() {
    this.querySelector('.modal-main').addEventListener('click', (e) => { e.stopPropagation() });
    this.classList.remove('active')
}
let modalsExx = document.querySelectorAll('.modal-main')
modalsExx.forEach(btn => {
    btn.addEventListener('click', (e) => { e.stopPropagation() })
})




modalBtn.forEach(btn => {
    btn.addEventListener('click', showModal)
})

function showModal() {
    const id = this.getAttribute('target');
    const modal = document.querySelector(id);
    modal.classList.add('active')
}

function btnWithClose() {
    this.closest('.modal').classList.remove('active')
}

function myFunction() {
    document.querySelector('.dropdown-content').classList.toggle('show')
}

modals.forEach(modal => {
    modal.addEventListener('click', closeModal)
    if (!document.querySelector('.close-modal').addEventListener('click', btnWithClose)) return;


})

let mobileMenu = document.querySelector('.header-mobile-menu')
let xIcon = document.querySelector('.x_icon');
let arrIcon = document.querySelector('.arr_icon');

arrIcon.addEventListener('click', () => {
    arrIcon.style.display = 'none'
    xIcon.style.display = 'block'
    mobileMenu.classList.add('mobile-menu-active')
})

xIcon.addEventListener('click', () => {
    xIcon.style.display = 'none'
    arrIcon.style.display = 'block'
    mobileMenu.classList.remove('mobile-menu-active')
})



$('.slider').slick({
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: "<div class='arr'><span class='nextArrow'><i class='fa-solid fa-chevron-right'></i> </span ></div>",
    prevArrow: "<div class='arr'><span class='prevArrow'><i class='fa-solid fa-chevron-left'></i></span></div>",



    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: false,
                dots: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});








let dropBtn = document.querySelectorAll('.dropBtn');
let drop = document.querySelectorAll('.drop');


dropBtn.forEach(drpp => {
    if (drpp.addEventListener('click', showdrop)) {
    }
})


function showdrop() {
    const id = this.getAttribute('target');
    const drop = document.querySelector(id);
    drop.classList.toggle('show');
}

function btnWithClose() {
    this.querySelector('.dropdown-container').addEventListener('click', (e) => { e.stopPropagation() })

    this.closest('.drop').classList.remove('show')
}

function closeDrop() {
    this.classList.remove('show')
}








let expanded = false;

function showCheckboxes() {
    var checkboxes = document.getElementById("checkboxes");
    if (!expanded) {
        checkboxes.style.display = "block";
        expanded = true;
    } else {
        checkboxes.style.display = "none";
        expanded = false;
    }
}


let expandedOne = false;

function showCheckboxesOne() {
    var checkboxesOne = document.getElementById("checkboxesOne");
    if (!expandedOne) {
        checkboxesOne.style.display = "block";
        expandedOne = true;
    } else {
        checkboxesOne.style.display = "none";
        expandedOne = false;
    }
}

let expandedTwo = false;


function showCheckboxesTwo() {
    var checkboxesTwo = document.getElementById("checkboxesTwo");
    if (!expandedTwo) {
        checkboxesTwo.style.display = "block";
        expandedTwo = true;
    } else {
        checkboxesTwo.style.display = "none";
        expandedTwo = false;
    }
}





let expandedThere = false;


function showCheckboxesThere() {
    var checkboxesThere = document.getElementById("checkboxesThere");
    if (!expandedThere) {
        checkboxesThere.style.display = "block";
        expandedThere = true;
    } else {
        checkboxesThere.style.display = "none";
        expandedThere = false;
    }
}


let expandedFour = false;


function showCheckboxesFour() {
    var checkboxesFour = document.getElementById("checkboxesFour");
    if (!expandedFour) {
        checkboxesFour.style.display = "block";
        expandedFour = true;
    } else {
        checkboxesFour.style.display = "none";
        expandedFour = false;
    }
}


let isActive = document.querySelectorAll('.isActive')
let scrrr = document.querySelectorAll('.scrrr')

let sirketHaqqinda = document.querySelectorAll('.sirket-haqqinda')

isActive.forEach((is, i) => {
    console.log(isActive[i]);
    isActive[i].addEventListener('click', () => {
        sirketHaqqinda[i].classList.add('none')
        isActive[i].classList.add('brdrr')
        sirketActive[i].classList.remove('brdrr')

        scrrr[i].classList.add('blcck')
    })
})


let sirketActive = document.querySelectorAll('.sirketActive');
sirketActive.forEach((sirket, i) => {
    sirketActive[i].addEventListener('click', () => {
        sirketHaqqinda[i].classList.add('blcck')
        sirketActive[i].classList.add('brdrr')
        isActive[i].classList.remove('brdrr')


        scrrr[i].classList.remove('blcck')
    })
})





















let openVipBtn = document.querySelectorAll('.open-vip-btn')

let sinpleModal = document.querySelector('.sinple-modal')


let singClose = document.querySelector('.sing-close');



singClose.addEventListener('click', () => {
    deactiveModal()
})

for (let i = 0; i < openVipBtn.length; i++) {
    openVipBtn[i].addEventListener('click', (e) => {
        e.stopPropagation()
        premiumModal.classList.add('sinple-active')
        console.log(openVipBtn[i]);


    })
}


let openSinpleBtn = document.querySelectorAll('.open-sinple-btn')

let premiumModal = document.querySelector('.premium-modal')


let premClose = document.querySelector('.prem-close');


function deactiveModal() {
    premiumModal.classList.remove('sinple-active')
    sinpleModal.classList.remove('sinple-active')

}

premClose.addEventListener('click', () => {
    deactiveModal()
})

document.addEventListener('click', () => {
    deactiveModal()

})


for (let i = 0; i < openSinpleBtn.length; i++) {
    openSinpleBtn[i].addEventListener('click', (e) => {
        e.stopPropagation()
        console.log(openSinpleBtn[i]);
        sinpleModal.classList.add('sinple-active')
    })
}




const dots = document.querySelectorAll('.slick-dots button');
const selectSlide = (e) => {
    const index = e.target.getAttribute('data-index');
    dots[index].click();
}