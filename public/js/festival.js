let plusBtn = document.querySelector(".m_plus_wrap");
let mainTxt = document.querySelector(".m_sec1_cont_maintxt");
plusBtn.addEventListener("click", () => {
    mainTxt.classList.toggle("m_sec1_cont_maintxt_on");
});

const labels = document.querySelectorAll(".label");
const optionLists = document.querySelectorAll(".optionList");
const options = document.querySelectorAll(".optionItem");
let optionListsActive = document.querySelector(".optionList.active");

for (i = 0; i < labels.length; i++) {
    let label = labels[i];
    label.addEventListener("click", (e) => {
        label.classList.toggle("active");
        let labelActive = document.querySelector(".label.active");
        let optionlist = labelActive.nextElementSibling;
        optionlist.classList.add("active");

        optionlist.childNodes.forEach(function (option) {
            option.addEventListener("click", () => {
                handleSelect(option);
            });
        });
    });
    const handleSelect = function (item) {
        let labelActive = document.querySelector(".label.active");
        labelActive.innerHTML = item.textContent;
        labelActive.classList.remove("active");
        option.classList.remove("active");
    };
}
