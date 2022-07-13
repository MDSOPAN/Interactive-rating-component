const btn = document.querySelectorAll(".ratenum button");
let ra = sessionStorage.getItem("rating") || 0;
(() => {
  if (ra != 0) {
    btn[ra - 1].classList.add("selected");
  }
})();
btn.forEach((el) => {
  el.addEventListener("click", (ele) => {
    ra = ele.target.innerHTML;
    sessionStorage.setItem("rating", `${ra}`);
    btn.forEach((el) => {
      el.classList.remove("selected");
    });
    ele.target.classList.add("selected");
  });
});
const subbtn = document.querySelector(".subbtn");
subbtn.addEventListener("click", () => {
  if (ra == 0) {
    window.alert("Please Select a Rating");
  } else {
    window.location.href = 'Interactive-rating-component/submit.html';
  }
});
