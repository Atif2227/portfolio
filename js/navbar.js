const menuToggle=document.querySelector(".menu-toggle");
const primaryNav=document.querySelector(".primary-nav");
const navLinks=document.querySelectorAll(".nav-link");
const mobileBreakpoint=720;
if(menuToggle&&primaryNav){
 const setMenuState=(isOpen)=>{
  menuToggle.classList.toggle("open",isOpen);
  primaryNav.classList.toggle("open",isOpen);
  document.body.classList.toggle("menu-open",isOpen);
  menuToggle.setAttribute("aria-expanded",String(isOpen));
  menuToggle.setAttribute("aria-label",isOpen?"Close navigation menu":"Open navigation menu");
  if(window.innerWidth<=mobileBreakpoint){primaryNav.setAttribute("aria-hidden",String(!isOpen));}
  else{primaryNav.removeAttribute("aria-hidden");}
 };
 const closeMenu=()=>setMenuState(false);
 menuToggle.addEventListener("click",()=>setMenuState(!primaryNav.classList.contains("open")));
 navLinks.forEach(link=>link.addEventListener("click",closeMenu));
 document.addEventListener("click",e=>{if(primaryNav.classList.contains("open")&&!primaryNav.contains(e.target)&&!menuToggle.contains(e.target))closeMenu();});
 document.addEventListener("keydown",e=>{if(e.key==="Escape"){closeMenu();menuToggle.focus();}});
 window.addEventListener("resize",()=>{if(window.innerWidth>mobileBreakpoint){closeMenu();primaryNav.removeAttribute("aria-hidden");}else if(!primaryNav.classList.contains("open")){primaryNav.setAttribute("aria-hidden","true");}});
 if(window.innerWidth<=mobileBreakpoint)primaryNav.setAttribute("aria-hidden","true");
}
