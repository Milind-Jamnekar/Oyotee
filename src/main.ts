// import './style.css'
// import typescriptLogo from './typescript.svg'
// import { setupCounter } from './counter'
const linkList = document.querySelector<HTMLUListElement>(".link-list");
const links = document.querySelectorAll<HTMLAnchorElement>(".nav-link");

// changing active class on click
linkList?.addEventListener("click", (event) => {
  const target = event.target as HTMLAnchorElement | HTMLLIElement;

  if (target.tagName === "LI" || target.tagName === "A") {
    removeActiveClass();
    if (target.tagName === "A") {
      target.parentElement.classList.toggle("active");
    } else {
      target.classList.toggle("active");
    }
  }
});

function removeActiveClass() {
  links.forEach((link) => {
    link.classList.remove("active");
  });
}

const stars = document.querySelectorAll(".star");
const rating = document.querySelector(".rating-box");

const fillUpto = (index: number) => {
  for (let i = 0; i < stars.length; i++) {
    if (i <= index) {
      stars[i].classList.add("fill");
    } else {
      stars[i].classList.remove("fill");
    }
  }
};

rating?.addEventListener("mouseover", (event) => {
  const target = event.target;
  if (target !== null && target.classList.contains("star")) {
    fillUpto(target.dataset.i);
  }
});
// document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="/vite.svg" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://www.typescriptlang.org/" target="_blank">
//       <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
//     </a>
//     <h1>Vite + TypeScript</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite and TypeScript logos to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
