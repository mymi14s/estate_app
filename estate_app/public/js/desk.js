console.log("HELLO DESK")

// dom ready
document.addEventListener("DOMContentLoaded", (event)=>{
  // navbar and anchor element
  let navbar = document.querySelector(".navbar-collapse");
  let anc = document.createElement('a');
  anc.id="ytWidget";
  navbar.prepend(anc);
  // script tag
  let scrtag = document.createElement('script');
  scrtag.src = "https://translate.yandex.net/website-widget/v1/widget.js?widgetId=ytWidget&pageLang=en&widgetTheme=dark&autoMode=true"
  scrtag.type = "text/javascript";
  // append script tage to page
  document.head.appendChild(scrtag);

})
