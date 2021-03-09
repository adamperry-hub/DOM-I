const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// const nav = document.querySelector("nav");
// console.log(nav);

const nav = document.querySelectorAll('nav a');
// console.log(nav);

let firstItem = nav[0]; // Services

firstItem.textContent = siteContent['nav']['nav-item-1']

let secondItem = nav[1];
secondItem.textContent = siteContent['nav']['nav-item-2']

let thirdItem = nav[2];
thirdItem.textContent = siteContent['nav']['nav-item-3']

let fourthItem = nav[3];
fourthItem.textContent = siteContent['nav']['nav-item-4']

let fifthItem = nav[4];
fifthItem.textContent = siteContent['nav']['nav-item-5']

let sixthItem = nav[5];
sixthItem.textContent = siteContent['nav']['nav-item-6']
//end of navigation
let headText = document.querySelector('h1');
// console.log(headText);

// siteContent["cta"]["h1"]
headText.textContent = siteContent['cta']['h1']

// capture the button - querySelector '.whatevertheclassis button'
const butt = document.querySelector('button');
// console.log(butt);


butt.textContent = siteContent['cta']['button']

const image = document.querySelector('.cta img');
// console.log(image);

image.setAttribute('src', siteContent['cta']['img-src']);
const topContent = document.querySelector('.top-content');
// topContent[0][0].textContent = siteContent["main-content"]["features-h4"];

const firstTop = topContent.childNodes[1];
const secondTop = topContent.childNodes[3];

firstTop.children[0].textContent = siteContent["main-content"]["features-h4"];
firstTop.children[1].textContent = siteContent["main-content"]["features-content"];

secondTop.children[0].textContent = siteContent["main-content"]["about-h4"];
secondTop.children[1].textContent = siteContent["main-content"]["about-content"];

const middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

const bottomContent = document.querySelector('.bottom-content');
// console.log(bottomContent.childNodes);

const firstBottom = bottomContent.childNodes[1];
const secondBottom = bottomContent.childNodes[3];
const thirdBottom = bottomContent.childNodes[5]

firstBottom.children[0].textContent = siteContent["main-content"]["services-h4"];
firstBottom.children[1].textContent = siteContent["main-content"]["services-content"];

secondBottom.children[0].textContent = siteContent["main-content"]["product-h4"];
secondBottom.children[1].textContent = siteContent["main-content"]["product-content"];

thirdBottom.children[0].textContent = siteContent["main-content"]["vision-h4"];
thirdBottom.children[1].textContent = siteContent["main-content"]["vision-content"];

const contact = document.querySelector('.contact');
console.log(contact.childNodes);

let contactTitle = contact.childNodes[1];
let address = contact.childNodes[3];
let phone = contact.childNodes[5];
let email = contact.childNodes[7];
contactTitle.textContent = siteContent["contact"]["contact-h4"];
address.textContent = siteContent["contact"]["address"];
phone.textContent = siteContent["contact"]["phone"];
email.textContent = siteContent["contact"]["email"];


// const topC = document.querySelector('.top-content');

// const topFirstCard = topC.childNodes[1] // div text content
// // console.log(topFirstCard)

// const topContent1 = topFirstCard.children[0] // h4
// // console.log(topContent1);
// // .textContent logic in HERE
// topContent1.textContent = siteContent["main-content"]["features-h4"];
// // console.log(topFirstCard);

// const topContent2 = topFirstCard.children[1]
// topContent2.textContent = siteContent["main-content"]["features-content"]["features-content"];
// // p
// // ,textContent logic in HERE


// // console.log(topContent1);
// // console.log(topContent2);

// topSecondCard = topC.childNodes[3]
// // console.log(topFirstCard);
// // console.log(topSecondCard);
// topContent1.textContent = siteContent["main-content"]["features-h4"];
// console.log(topSecondCard);


// const middleImage = document.getElementById("middle-img");
// middleImage.setAttribute('src', siteContent['main-content']["middle-img-src"]);
// // console.log(middleImage);





















//const bottomthing = topSecondCard.children[1] //h4 of the bottom tect-content

// .textContent --> siteContent object


