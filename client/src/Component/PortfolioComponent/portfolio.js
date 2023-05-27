const protofolioCard = document.getElementsByClassName('portfolio_card')
let number = 1

export const autoSlider = () => {
    setInterval(() => {
        addActiveImage(number)
        number += 1
        if (number == 8) number = 0
    }, 5000)
}

const addActiveImage = (number) => {
    const dummy = [...protofolioCard]

    let img
    let backImage
    const backNumber = (number - 1 < 0 ? 7 : number - 1)

    console.log(number, backNumber)


    const image = document.querySelectorAll(`.portfolio_card`)
    const d = [...image]

    img = d[number]
    backImage = d[backNumber]

    img.classList.add('imageLeftToDisplay')
    img.classList.remove('rightTransfer')

    backImage.classList.add('rightTransfer')
    backImage.classList.remove('imageLeftToDisplay')
    console.log(img)
}

