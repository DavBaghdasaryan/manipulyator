let body = document.querySelector('.body')

/////////// pages

let intro = document.querySelector('.intro')
let booking_section = document.querySelector('.booking_section')
let kamaz_booking_section = document.querySelector('.kamaz_booking_section')
let tractor_booking_section = document.querySelector('.tractor_booking_section')
let payment_section = document.querySelector('.payment_section')
let footer = document.querySelector('.footer')
//////// scroll buttons

let logo = document.querySelectorAll('.header_logo')
let booking = document.querySelectorAll('.booking')
let kamaz = document.querySelectorAll('.kamaz')
let tractor = document.querySelectorAll('.tractor')
let up_scroll = document.querySelector('.up_scroll')
let payment = document.querySelectorAll('.payment')
let contact = document.querySelectorAll('.contact')


//////header
let header = document.querySelector('.header')

// burger menu
let burger = document.querySelector('.burger')
let close_btn = document.querySelector('.close_btn')
let burger_nav = document.querySelector('.burger_nav')


// calculate
let calc_btn = document.querySelector('.calc_btn')
let calculator = document.querySelector('.calculator')
let cancel_btn = document.querySelector('.cancel_btn')



let slider1 = document.getElementById('range1')
let slider2 = document.getElementById('range2')

let output1 = document.getElementById('value1')
let output2 = document.getElementById('value2')

let obshi = document.getElementById('obshi')

let yndhanur = parseInt(obshi.innerHTML)


output1.innerHTML = slider1.value

slider1.oninput = function () {
    output1.innerHTML = this.value
    let value = this.value

    obshi.innerHTML = parseInt(value * 70 + yndhanur) + "руб"



}

output2.innerHTML = slider2.value

slider2.oninput = function () {
    output2.innerHTML = this.value
    let value = this.value

    obshi.innerHTML = parseInt(value * 70 + yndhanur) + "руб"


}






calc_btn.addEventListener('click', e => {
    e.preventDefault()
    intro.scrollIntoView({ behavior: "smooth" })

    calculator.style.display = 'block'
    body.classList.add('hidden')

})


cancel_btn.addEventListener('click', e => {
    e.preventDefault()
    calculator.style.display = 'none'
    body.classList.remove('hidden')
})



/////////////// burger menu
burger.addEventListener('click', e => {
    e.preventDefault()
    burger_nav.classList.add('block')
    burger.style.display = 'none'
})

close_btn.addEventListener('click', e => {
    e.preventDefault()
    burger_nav.classList.remove('block')
    burger.style.display = 'block'
})

/////////////// header_fixed position

window.addEventListener('scroll', () => {
    let scrollY = window.scrollY
    if (scrollY > 90) {
        up_scroll.style.display = 'block'
        header.classList.add('black_header')
    } else if (scrollY < 30) {
        up_scroll.style.display = 'none'

        header.classList.remove('black_header')
    }
})

//////////// intro_scroll
up_scroll.addEventListener('click', e => {
    e.preventDefault()
    intro.scrollIntoView({ behavior: "smooth" })
})


logo.forEach(i => {
    i.addEventListener('click', e => {
        e.preventDefault()
        intro.scrollIntoView({ behavior: "smooth" })
    })
})


////////////// booking_scroll
booking.forEach(i => {
    i.addEventListener('click', e => {
        e.preventDefault()
        booking_section.scrollIntoView({ block: "start", behavior: "smooth" })
        burger_nav.classList.remove('block')
        burger.style.display = 'block'
    })
})


////////////// kamaz_section_scroll
kamaz.forEach(i => {
    i.addEventListener('click', e => {
        e.preventDefault()
        kamaz_booking_section.scrollIntoView({ behavior: "smooth" })
    })
})


/////////////// tractor_section_scroll
tractor.forEach(i => {
    i.addEventListener('click', e => {
        e.preventDefault()
        tractor_booking_section.scrollIntoView({ behavior: "smooth" })
    })
})

///////////////// payment_section_scroll
payment.forEach(i => {
    i.addEventListener('click', e => {
        e.preventDefault()
        payment_section.scrollIntoView({ block: "start", behavior: "smooth" })
        burger_nav.classList.remove('block')
        burger.style.display = 'block'
    })
})

//////////////// footer_section_scroll
contact.forEach(i => {
    i.addEventListener('click', e => {
        e.preventDefault()
        footer.scrollIntoView({ behavior: "smooth" })
        burger_nav.classList.remove('block')
        burger.style.display = 'block'
    })
})

