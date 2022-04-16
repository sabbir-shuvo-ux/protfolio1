// =================== # scroll to nav style # ===================
window.onscroll = function() {navbar()};
function navbar() {
	if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
		document.querySelector(".navbar_custom").style.boxShadow = "0px 0px 3px 0px #cccccc";
		document.querySelector(".navbar_custom").classList.add('nav_style_active');
	}else{
		document.querySelector(".navbar_custom").style.boxShadow = "none";
		document.querySelector(".navbar_custom").classList.remove('nav_style_active');
	};
};

// =================== # active nav # ===================
const menu = document.querySelector('.menu');
const menuLi = document.querySelectorAll('.menu li');

menuLi.forEach(li => {
	li.addEventListener('click', ()=> {
		menu.querySelector('.nav_active').classList.remove('nav_active');

		li.classList.add('nav_active');
	})
});

// ==================== # responsive navbar # =====================
const menuBtn = document.querySelector(".toggle_img");
const exitBtn = document.querySelector(".cross");

let t1 = gsap.timeline({ paused: true });
t1.to(".menu", {
	opacity: 1,
	duration: 1,
	top: 71,
	ease: Power2.easeInOut
});

t1.to(
    ".nav_items",
    {
        opacity: 1,
        left: 0,
        duration: 1,
        ease: Power2.easeInOut,
        stagger: 0.3,
    },
    ">-0.5"
);

menuBtn.addEventListener("click", () => {
    t1.play().timeScale(1);
    document.querySelector('.toggle_btn').classList.add('active_ani');
});

exitBtn.addEventListener("click", () => {
    t1.timeScale(2.5);
    t1.reverse();
    document.querySelector('.toggle_btn').classList.remove('active_ani');
});

// ========== # drak_mode # =======================
const drak_mode = document.querySelector('#drak_mode');
const light_mode = document.querySelector('#light_mode');

drak_mode.addEventListener('click', ()=> {
	document.body.classList.add('drak_mode_body');
	menu.classList.add('mode_swich');
});


light_mode.addEventListener('click', ()=> {
	document.body.classList.remove('drak_mode_body');
	menu.classList.remove('mode_swich');
});