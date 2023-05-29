const protofolioCard = document.getElementsByClassName('portfolio_card')
let number = 0


export const autoSlider = () => {
    setInterval(() => {
        if (protofolioCard.length > 0) {
            addActiveImage(number)
            number += 1
            if (number == 8) number = 0
        }
    }, 5000)
}

const addActiveImage = (number) => {
    const dummy = [...protofolioCard]

    let img
    let backImage
    const backNumber = (number - 1 < 0 ? 7 : number - 1)



    const image = document.querySelectorAll(`.portfolio_card`)
    const d = [...image]

    img = d[number]
    backImage = d[backNumber]

    img.classList.add('imageLeftToDisplay')
    img.classList.remove('rightTransfer')

    backImage.classList.add('rightTransfer')
    backImage.classList.remove('imageLeftToDisplay')
}

autoSlider()