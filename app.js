// Bio carousel
// let currentImgIndex = 0
// const numOfImages = $('.carousel-imgs').children().length - 1
$(() => {
    let currentImgIndex = 0
    const numOfImages = $('.carousel-imgs').children().length - 1
    $('#next').on('click', () => {
        $('.carousel-imgs').children().eq(currentImgIndex).css('display', 'none')
        if(currentImgIndex < numOfImages) {
            currentImgIndex++
        } else {
            currentImgIndex = 0
        }
        $('.carousel-imgs').children().eq(currentImgIndex).css('display', 'flex')
    })
    $('#back').on('click', () => {
            $('.carousel-imgs').children().eq(currentImgIndex).css('display', 'none')
            if (currentImgIndex > numOfImages) {
            } else {
                currentImgIndex--
            }
            $('.carousel-imgs').children().eq(currentImgIndex).css('display', 'flex')

    })
// home page button

    const $openBtn = $('#home-btn');

    const $modal = $('#home-page');

    const $closeBtn = $('#close');

    const openPage = ()=>{
        $modal.css('display', 'block')
    }
    $openBtn.on('click', openPage)


    const closePage =()=>{
        $modal.css('display', 'none')

    }
    $closeBtn.on('click', closePage)
    

// bio page button
    
    const $openBtn1 = $('#bio-btn');

    const $modal1 = $('#bio-page');

    const $closeBtn1 = $('#close1');

    const openPage1 = ()=>{
        $modal1.css('display', 'flex')
    }
    $openBtn1.on('click', openPage1)


    const closePage1 =()=>{
        $modal1.css('display', 'none')

    }
    $closeBtn1.on('click', closePage1)
// resume page button

    const $openBtn2 = $('#resume-btn');

    const $modal2 = $('#resume-page');

    const $closeBtn2 = $('#close2');

    const openPage2 = ()=>{
        $modal2.css('display', 'block')
    }
    $openBtn2.on('click', openPage2)


    const closePage2 =()=>{
        $modal2.css('display', 'none')

    }
    $closeBtn2.on('click', closePage2)
// project page button

    const $openBtn3 = $('#projects-btn');

    const $modal3 = $('#projects-page');

    const $closeBtn3 = $('#close3');

    const openPage3 = ()=>{
        $modal3.css('display', 'block')
    }
    $openBtn3.on('click', openPage3)


    const closePage3 =()=>{
        $modal3.css('display', 'none')

    }
    $closeBtn3.on('click', closePage3)
    
    const $playMov = $('mov-box')
    .on()
    const $openPage = $('nav')
    $
    $('.nav').css('cursor', 'pointer')
    
    $('#close').on('click', function(ev) {
        $('mov').src += "&autoplay=1"
        ev.preventDefault()
    })
})
