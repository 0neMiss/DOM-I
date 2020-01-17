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
let nav = document.querySelector('nav')
let try_now = document.createTextNode('try now');
let or_dont = document.createTextNode('or dont');
const a_names = Object.values(siteContent["nav"]);
anchor.forEach(item => item.textContent = a_names.shift());
anchor.forEach(item => item.style.color = "green");
nav.appendChild(try_now);
nav.prepend(or_dont);
//h1
let h1 = document.querySelector('h1');
h1.innerHTML = siteContent.cta.h1.replace("DOM Is", "DOM <br> Is <br>");
//button
let button = document.querySelector('button')
button.innerHTML = siteContent.cta.button;
//cta-Image
let cta_img = document.querySelector("#cta-img");
let imgsrc = siteContent.cta["img-src"];
cta_img.setAttribute('src', imgsrc);
//middle-img
let middle_img = document.querySelector(".middle-img");
middle_img.setAttribute('src', siteContent["main-content"]["middle-img-src"]);
//textcontent h4 and textContent p
let h4 = document.querySelectorAll('h4');
let main_content_array = Object.values(siteContent["main-content"]);
let main_content_h4 = [];
let main_content_p = [];
main_content_array.splice(4, 1);

for (i = 0; i < main_content_array.length; i++) {
  if (main_content_array[i].length <= 8) {
    main_content_h4.push(main_content_array[i]);
  }

  else {
    main_content_p.push(main_content_array[i]);
  }
}

h4.forEach(item => item.textContent = main_content_h4.shift());
let bottom_content_p = document.querySelectorAll('.text-content p');
bottom_content_p.forEach(item => item.textContent = main_content_p.shift());
//Contact
let contact_h4 = document.querySelector('.contact h4');
let contact_p = document.querySelectorAll('.contact p');
const contact_text = Object.values(siteContent["contact"]);
let contact_h4_name =""
let contact_p_array =[]
for (i = 0; i < contact_text.length; i++) {
  if (contact_text[i] == contact_text[0]) {
    contact_h4_name =contact_text[i];
  }

  else {
    contact_p_array.push(contact_text[i]);
  }
}
contact_h4.textContent = contact_h4_name;
contact_p.forEach(item => item.innerHTML = contact_p_array.shift());
//footer
let footer = document.querySelector('footer');
footer.textContent = siteContent["footer"]["copyright"];
