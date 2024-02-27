let movies = [
    {
    name: "Koffee With Karan",
    des:
    "NEW EPISODE EVERY THURSDAY. Karan Johar brews a heady koffee in Season 8. Hosting glamourous A-listers, the chat digs deeper with more grounded conversations.",
    image: "imgs/slider5.png"
    },
    {
    name: "ONCE UPON A STUDIO ",
    des:
    "Beloved characters from Disney Animation's 100 years come together for an unforgettable reunion.",
    image: "imgs/slider4.png"
    },
    {
    name: "JOLLY LLB",
    des:
    "olly Tyagi, a small-town lawyer, accepts a widely publicised hit-and-run case against a celebrity lawyer, Tejinder Rajpal. How will the truth prevail?",
    image: "imgs/slider3.png"
    },
    {
    name: "HOUSEFULL 3",
    des:
    "With superstition plaguing his mind, a Gujarati businessman doesn't want his three daughters to get married. Who will win over this overprotective father?",
    image: "imgs/slider2.png"
    },
    {
    name: "Begum Jaan",
    des:
    "A brothel stands in the way of the partition line. While the authorities try all means to oust the prostitutes, they stand their ground.",
    image: "imgs/slider1.png"
    }
    ];
    
    const carousel = document.querySelector(".carousel");
    let sliders = [];
    
    let slideIndex = 0;
    
    const createSlide = () => {
    if (slideIndex >= movies.length) {
    slideIndex = 0;
    }
    
    let slide = document.createElement("div");
    let imgElement = document.createElement("img");
    let content = document.createElement("div");
    let h1 = document.createElement("h1");
    let p = document.createElement("p");
    
    imgElement.appendChild(document.createTextNode(""));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(imgElement);
    slide.appendChild(content);
    carousel.appendChild(slide);
    
    imgElement.src = movies[slideIndex].image;
    slideIndex++;
    slide.className = "slider";
    content.className = "slide-content";
    h1.className = "movie-title";
    p.className = "movie-des";
    
    sliders.push(slide);
    
    if (sliders.length) {
    sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
    30 * (sliders.length - 2)
    }px)`;
    }
    };

    
    
    for (let i = 0; i < 4; i++) {
    createSlide();
    }
    
    setInterval(() => {
    createSlide();
    }, 5000);
    const videoCards = [...document.querySelectorAll(".video-card")];
    videoCards.forEach((item) => {
    item.addEventListener("mouseover", () => {
    let video = item.children[1];
    video.play();
    });
    item.addEventListener("mouseleave", () => {
    let video = item.children[1];
    video.pause();
    });
    });
    let cardContainers = [...document.querySelectorAll(".card-container")];
    let preBtns = [...document.querySelectorAll(".pre-btn")];
    let nxtBtns = [...document.querySelectorAll(".nxt-btn")];
    cardContainers.forEach((items, i) => {
    let containerDimensions = items.getBoundingClientRect();
    let containerWidth = containerDimensions.width;
    
    nxtBtns[i].addEventListener("click", () => {
    items.scrollLeft += containerWidth - 200;
    });
    
    preBtns[i].addEventListener("click", () => {
    items.scrollLeft -= containerWidth + 200;
    });
    });
    