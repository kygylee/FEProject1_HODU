const imageList = document.querySelector(".s_contents_pic_infi");
let pageToFetch = 1;
let loadingImages = false; 

const fetchImages = async (pageNum) => {
    try {
        const response = await fetch('https://picsum.photos/v2/list?page=' + pageNum + '&limit=6');
        if (!response.ok) {
            throw new Error('네트워크 응답에 문제가 있습니다.');
        }

        const datas = await response.json();
        console.log(datas);

        makeImageList(datas);

    } catch (error) {
        console.error('데이터를 가져오는데 문제가 발생했습니다 :', error);
    } finally {
        loadingImages = false; 
    }
};

const makeImageList = (datas) => {
    datas.forEach((item) => {
        imageList.innerHTML += "<li class='li_infi'><img src=" + item.download_url + " alt='li_infinity_imgs'></li>"; 
    });
};

const infinityScroll = () => {
    const cardWrap = document.querySelector('.s_contents_catpic');
    const scrollTop = cardWrap.scrollTop; 
    const scrollHeight = cardWrap.scrollHeight; 
    const clientHeight = cardWrap.clientHeight; 

    console.log('scroll!'); 
    if (scrollTop + clientHeight + 10 >= scrollHeight && !loadingImages) { 
        loadingImages = true; 
        fetchImages(pageToFetch++);
    }
};

const throttling = (callback, delay) => {
    let timer = null;

    return () => {
        if (timer === null) {
            timer = setTimeout(() => {
                callback();
                timer = null;
            }, delay);
        }
    };
};

const LoadButton = document.querySelector(".s_contents_showmore_button");
const CancelButton = document.querySelector(".s_contents_cancel_button");

const ButtonContainer = document.querySelector(".s_contents_button");
const ImgLayout = document.querySelector(".s_contents_catpic_infi");
const CardWrap = document.querySelector(".s_contents_catpic");
const TextLayout = document.querySelector(".s_contents_showmore_text");

LoadButton.addEventListener('click', () => {
    ImgLayout.style.display = 'block';
    CardWrap.style.overflowY = "auto";
    CardWrap.style.overflowX = "hidden";
    LoadButton.style.display = "none";
    CancelButton.style.display = "block";
    TextLayout.style.display = "none";

    CardWrap.addEventListener('scroll', throttling(infinityScroll, 1000));
    pageToFetch = 2;
});

CancelButton.addEventListener('click', () => {
    ImgLayout.style.display = 'none';
    CardWrap.style.overflow = "";
    LoadButton.style.display = "block";
    CancelButton.style.display = "none";
    TextLayout.style.display = "block";

    CardWrap.removeEventListener('scroll', throttling(infinityScroll, 1000));

    pageToFetch = 1;
    imageList.innerHTML = "";
});


fetchImages(1);