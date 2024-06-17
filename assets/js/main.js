const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const clickFilter = $$('.filter span')
const elementOfProduct = $$('.page-change .elements-All')
const page = $('.page-change')

function checkDisplay(idx) {
    for (let i = 0; i < elementOfProduct.length; i++) {
        const element = elementOfProduct[i];
        if (!element.classList.contains('hide')) {
            element.classList.add('hide')
        }
    }
    setTimeout(() => {
        if (elementOfProduct[idx].classList.contains('hide')) {
            elementOfProduct[idx].classList.remove('hide')
        }
    }, 100);
}


clickFilter.forEach((element, idx) => {
    element.addEventListener('click', (e) => {
        for (let i = 0; i < clickFilter.length; i++) {
            if (clickFilter[i].classList.contains('active')) {
                clickFilter[i].classList.remove('active')
            }
        }
        setTimeout(() => {
            element.classList.add('active')
        }, 100);
        checkDisplay(idx)
    })
});

