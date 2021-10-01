// Nav Menu Mobile Btn

const menuBtn = document.getElementById("nav-menu-btn");
const navMenu = document.querySelector(".nav-menu");
const navIcons = document.querySelectorAll(".nav-menu-icons");

menuBtn.addEventListener("click",()=>{
    if (navMenu.hasAttribute("style")) {
        navMenu.removeAttribute("style");
    }
    navMenu.classList.toggle("active");
    navIcons.forEach(element => {
        element.classList.toggle("right");
    });
});

// Nav Menu Color Mode Btn

const modeBtn = document.getElementById("mode-link");
const modeElm = document.querySelectorAll(".mode-option");

modeBtn.addEventListener("click", () => {
    for (let i = 0; i < modeElm.length; i++) {
		modeElm[i].classList.toggle("dark");
	}
});

// Projects Panel Btns

const projectsPanel = document.getElementById("projects-panel");
const projectBtnOne = document.getElementById("project-one");
const projectBtnTwo = document.getElementById("project-two");
const projectBtnThree = document.getElementById("project-three");

projectBtnOne.addEventListener("click", () => {
    projectBtnOne.classList.toggle("active", true);
	projectBtnTwo.classList.toggle("active", false);
	projectBtnThree.classList.toggle("active", false);
    projectsPanel.scrollTo(0 , 0);
});
projectBtnTwo.addEventListener("click", () => {
    projectBtnOne.classList.toggle("active", false);
	projectBtnTwo.classList.toggle("active", true);
	projectBtnThree.classList.toggle("active", false);
    let scrollWidth = projectsPanel.scrollWidth;
    projectsPanel.scrollTo(scrollWidth/3 , 0);
});
projectBtnThree.addEventListener("click", () => {
    projectBtnOne.classList.toggle("active", false);
	projectBtnTwo.classList.toggle("active", false);
	projectBtnThree.classList.toggle("active", true);
    let scrollWidth = projectsPanel.scrollWidth;
    projectsPanel.scrollTo(scrollWidth*2/3 , 0);
});

// Projects Open Btn

const projectsTitleClose = document.getElementById("projects-title-close");
const projectsTitleOpen = document.getElementById("projects-title-open");
const projectsPanelBtns = document.getElementById("projects-btns");

projectsTitleClose.addEventListener("click", () => {
    projectsTitleClose.classList.toggle("open");
	projectsTitleOpen.classList.toggle("open");
	projectsPanelBtns.classList.toggle("open");
    projectsPanel.classList.toggle("open");
});

// Skills Panel Btns

const skillsPanel = document.getElementById("skills-panel");
const skillBtnOne = document.getElementById("skill-one");
const skillBtnTwo = document.getElementById("skill-two");
const skillBtnThree = document.getElementById("skill-three");

skillBtnOne.addEventListener("click", () => {
    skillBtnOne.classList.toggle("active", true);
	skillBtnTwo.classList.toggle("active", false);
	skillBtnThree.classList.toggle("active", false);
    skillsPanel.scrollTo(0 , 0);
});
skillBtnTwo.addEventListener("click", () => {
    skillBtnOne.classList.toggle("active", false);
	skillBtnTwo.classList.toggle("active", true);
	skillBtnThree.classList.toggle("active", false);
    let scrollWidth = skillsPanel.scrollWidth;
    skillsPanel.scrollTo(scrollWidth/3 , 0);
});
skillBtnThree.addEventListener("click", () => {
    skillBtnOne.classList.toggle("active", false);
	skillBtnTwo.classList.toggle("active", false);
	skillBtnThree.classList.toggle("active", true);
    let scrollWidth = skillsPanel.scrollWidth;
    skillsPanel.scrollTo(scrollWidth*2/3 , 0);
});

// Skills Open Btn

const skillsTitleClose = document.getElementById("skills-title-close");
const skillsTitleOpen = document.getElementById("skills-title-open");
const skillsPanelBtns = document.getElementById("skills-btns");

skillsTitleClose.addEventListener("click", () => {
    skillsTitleClose.classList.toggle("open");
	skillsTitleOpen.classList.toggle("open");
	skillsPanelBtns.classList.toggle("open");
    skillsPanel.classList.toggle("open");
});

// About Open Btn

const aboutPanel = document.getElementById("about-panel");
const aboutTitleClose = document.getElementById("about-title-close");
const aboutTitleOpen = document.getElementById("about-title-open");

aboutTitleClose.addEventListener("click", () => {
    aboutTitleClose.classList.toggle("open");
	aboutTitleOpen.classList.toggle("open");
    aboutPanel.classList.toggle("open");
});
