const select = (el) => document.querySelector(el);

select(".hambuger-container").addEventListener("click", () => {
  select(".hambuger-container").classList.toggle("open");
});
