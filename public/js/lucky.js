let box = document.querySelector(".box_mockup");
let box2 = document.querySelector(".box_mockup2");
box.addEventListener("click", () => {
    // box.style.transfrom = "scale(1.5)";
    box.classList.add("remove");
    box2.classList.add("active");
});
box2.addEventListener("click", () => {
    // box.style.transfrom = "scale(1)";
    box.classList.remove("remove");
    box2.classList.remove("active");
});
