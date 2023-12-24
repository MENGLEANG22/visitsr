
document.addEventListener('DOMContentLoaded', function () {
    const photoList = [
        {
            "img": "/images/temple/banteaysrey/1.jpg",
        },
        {
            "img": "/images/temple/banteaysrey/2.jpg",
        },
        {
            "img": "/images/temple/banteaysrey/6.jpg",
        },
        {
            "img": "/images/temple/banteaysrey/3.jpg",
        },
        {
            "img": "/images/temple/banteaysrey/3.jpg",
        },
        {
            "img": "/images/temple/banteaysrey/16.jpg",
        },
        {
            "img": "/images/temple/banteaysrey/9.jpg",
        },
        {
            "img": "/images/temple/banteaysrey/7.jpg",
        },
    ];

    // Get Slide
    const getSlide = () => {
        var cur_slide = 1;
        var txt = '';
        var txt2 = '';
        photoList.forEach((e) => {
            txt += `<div class="slide">
                        <img src="${e['img']}" >
                    </div>`;

            txt2 += `<li> ${cur_slide}</li>`;
            cur_slide++;
        });
        document.querySelector('.slide-box .pagination ul').innerHTML = txt2;
        document.querySelector('.slide-box').insertAdjacentHTML('beforeend', txt);
    };


    const photoContainer = document.querySelector('.photo-container');
photoList.forEach((photo) =>{
const imgTag = document.createElement('img');
imgTag.src= photo.img;
photoContainer.appendChild(imgTag);
});

    getSlide();

    // Slide container
    const slide = document.querySelectorAll('.slide');
    var numSlide = slide.length;
    var slideInd = 0;
    slide.forEach((s) => s.style.display = 'none');
    slide[slideInd].style.display = 'block';
    document.querySelector('.pagination ul li').classList.add('active');

    // Auto Slide
    const autoSlide = () => {
        document.querySelector('.btn-next').click();
    };

    var myNextSlide = setInterval(autoSlide, 1500);

    // Clear Auto Slide
    document.querySelector('.slide-box').addEventListener('mouseover', function () {
        clearInterval(myNextSlide);
    });

    document.querySelector('.slide-box').addEventListener('mouseleave', function () {
        myNextSlide = setInterval(autoSlide, 1500);
    });

    // Pagination
    document.querySelector('.pagination').addEventListener('click', function (event) {
        if (event.target.tagName === 'LI') {
            var i = Array.from(event.target.parentNode.children).indexOf(event.target);
            slide[slideInd].style.display = 'none';
            document.querySelector('.pagination ul li.active').classList.remove('active');
            slideInd = i;
            slide[slideInd].style.display = 'block';
            document.querySelector('.pagination ul li:nth-child(' + (slideInd + 1) + ')').classList.add('active');
        }
    });

    // Next Slide
    document.querySelector('.btn-next').addEventListener('click', function () {
        slide[slideInd].style.display = 'none';
        document.querySelector('.pagination ul li.active').classList.remove('active');
        slideInd++;
        if (slideInd >= numSlide) {
            slideInd = 0;
        }
        slide[slideInd].style.display = 'block';
        document.querySelector('.pagination ul li:nth-child(' + (slideInd + 1) + ')').classList.add('active');
    });

    // Back Slide
    document.querySelector('.btn-back').addEventListener('click', function () {
        slide[slideInd].style.display = 'none';
        document.querySelector('.pagination ul li.active').classList.remove('active');
        slideInd--;
        if (slideInd < 0) {
            slideInd = numSlide - 1;
        }
        slide[slideInd].style.display = 'block';
        document.querySelector('.pagination ul li:nth-child(' + (slideInd + 1) + ')').classList.add('active');
    });

});

