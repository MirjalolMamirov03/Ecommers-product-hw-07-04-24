
const menuIcon = document.querySelector('#menu-icon')
const menuActive = document.querySelector('.menu-active')
let menuItem = [...document.querySelectorAll('.menu-item')]

menuIcon.addEventListener('click', function () {
    menuActive.classList.toggle('display-none')
    if (menuIcon.classList.contains('fa-bars')) {
        menuIcon.classList.replace('fa-bars', 'fa-times')
    } else if (menuIcon.classList.contains('fa-times')) {
        menuIcon.classList.replace('fa-times', 'fa-bars')
    }
})


// console.log('dsafa');
for (let i = 0; i < menuItem.length; i++) {
    menuItem[i].onclick = () => {
        menuItem[i].classList.toggle('active-item')
    }
}


// console.log(menuIcon.classList.replace('fa-bars', 'fa-times'))







// Main-section JS

sneakers = {
    price: 125.00,
    realPrice: 250.00,
    amount: 0,
    get calcSum() {
        this.amount * this.price
    }
}

let costBoxNewPrice = document.querySelector('.cost-box-newPrice')
let costBoxOldPrice = document.querySelector('.cost-box-oldPrice')

costBoxNewPrice.innerHTML = `$${sneakers.price}.00`
costBoxOldPrice.innerHTML = `$${sneakers.realPrice}.00`

const cartBtnText = document.querySelector('.add-cart__btn');
let headerIconCount = document.querySelector('.header-icon__count')

cartBtnText.addEventListener('click', function () {
    headerIconCount.style.display = "unset";
})

const headerIcon = document.querySelector('.header-icon')
let cartBox = document.querySelector('.cart-box')

headerIcon.addEventListener('click', function () {
    cartBox.style.display = "block"
    // cartBox.style.transform.scale = "1"

    setTimeout(() => {
        cartBox.style.opacity = "1"
    }, 500);
})

let countBoxItem = [...document.querySelectorAll('.count-box__item')]
let countNum = document.querySelector('.count-num')


// countNum.innerHTML++
// console.log(countNum.innerHTML--);

for (let i = 0; i < countBoxItem.length; i++) {
    sym = countBoxItem[i].getAttribute('data-symbol')
    // console.log(sym);

    let count;
    // let num = 0;
    countBoxItem[i].addEventListener('click', function () {

        // alert('hello')
        if (countBoxItem[i].getAttribute('data-symbol') == 'plus') {
            countNum.innerHTML++
            headerIconCount.innerHTML++
            sneakers.amount++
            // count++

            // console.log(countBoxItem[i].getAttribute('data-symbol'));

        } else if (countBoxItem[i].getAttribute('data-symbol') == 'minus' && countNum.innerHTML > 0) {
            countNum.innerHTML--
            headerIconCount.innerHTML--
            sneakers.amount--
            // count--


            // console.log(countBoxItem[i].getAttribute('data-symbol'));
        }

        count = countNum.innerHTML
        sneakers.amount = count


    })

}

console.log(sneakers.amount);

// num = count;
// console.log(count);


// countNum.innerHTML = sneakers.amount
// console.log(sneakers.amount);


let cartBoxBody = document.querySelector('.cart-box__body')
let cartBoxBodyTitle = "Fall Limited Edition Sneakers \n"
cartBoxBodyTitle += `${costBoxNewPrice.innerHTML} x ${sneakers.amount} = $${sneakers.calcSum}.00`

cartBoxBody.innerHTML = `${cartBoxBodyTitle}`