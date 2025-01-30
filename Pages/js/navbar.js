document.querySelector(".toggle-btn")?.addEventListener("click", function () {
  document.querySelector("#sidebar").classList.toggle("show");
});

document.querySelector("#close-btn")?.addEventListener("click", function () {
  document.querySelector("#sidebar").classList.remove("show");
});
