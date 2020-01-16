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
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);
//anchor tags
let anchor = document.querySelectorAll('a');
const a_names = ["Services", "Product", "Vision", "Features", "About", "Contract"];
anchor.forEach(item => item.textContent = a_names.shift());
//h1
let h1 = document.querySelector('h1');
h1.innerHTML = "DOM <br> Is <br> Awesome";
//button
let button = document.querySelector('button');
button.textContent = "Get Started";
//cta-Image
let cta_img = document.querySelector("#cta-img");
cta_img.setAttribute('src', "img/header-img.png");
//middle-img
let middle_img = document.querySelector(".middle-img");
middle_img.setAttribute('src', "img/mid-page-accent.jpg");
//textcontent h4
let h4 = document.querySelectorAll('h4');
const h4_names = ["Features", "About", "Services", "Product", "Vision" ];
h4.forEach(item => item.textContent = h4_names.shift());
// .text-contentp
let bottom_content_p = document.querySelectorAll('.text-content p');
const bottom_content_p_names = ["Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.", "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.", "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.", "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.", "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis." ];
bottom_content_p.forEach(item => item.textContent = bottom_content_p_names.shift());
//Contact
let contact_h4 = document.querySelector('.contact h4');
let contact_p = document.querySelectorAll('.contact p');
const contact_text = [`123 Way 456 Street<br>
Somewhere, USA`, "Services", "1 (888) 888-8888", "sales@greatidea.io" ];
console.log(contact_h4);
contact_h4.textContent = 'Contact';
contact_p.forEach(item => item.innerHTML = contact_text.shift());

//footer
let footer = document.querySelector('footer');
footer.textContent = 'Copyright Great Idea! 2018';
