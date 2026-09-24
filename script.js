const faqItems = document.querySelectorAll('.faq-item')

for (let i = 0; i < faqItems.length; i++) {
    let item = faqItems[i]
    let btn = item.querySelector('.faq-question')
    btn.addEventListener('click', abrirOuFechar)
}

function abrirOuFechar(){
    const faqItem = this.closest('.faq-item')
    faqItem.classList.toggle('active')

    const icon = faqItem.querySelector('.icon')

    if (faqItem.classList.contains('active')) {
        icon.src = 'assets/images/icon-minus.svg'
    } else {
        icon.src = 'assets/images/icon-plus.svg'
    }
}