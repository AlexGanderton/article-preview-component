const shareBtn = document.querySelector(".fa-share");
const links = document.querySelector(".links");

shareBtn.addEventListener("click", function () {
  if (links.classList.contains("hide")) {
    shareBtn.style.backgroundColor = "#6d7f97";
    shareBtn.style.color = "#ecf2f8";
    links.classList.remove("hide");
  } else {
    shareBtn.style.backgroundColor = "#ecf2f8";
    shareBtn.style.color = "#6d7f97";
    links.classList.add("hide");
  }
});
