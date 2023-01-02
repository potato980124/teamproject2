let plusBtn_f = document.querySelector(".m_plus_wrap");
let mainTxt = document.querySelector(".m_sec1_cont_maintxt");
plusBtn_f.addEventListener("click", () => {
    mainTxt.classList.toggle("m_sec1_cont_maintxt_on");
});

const labels = document.querySelectorAll(".label");
const optionLists = document.querySelectorAll(".optionList");
const options_f = document.querySelectorAll(".optionItem");
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
                option.classList.remove("active");
            });
        });
    });
    const handleSelect = function (item) {
        let labelActive = document.querySelector(".label.active");
        let reserve_input = document.querySelector(".reserve_input");
        labelActive.value = item.textContent;
        // labelActive.innerHTML = item.textContent;
        // reserve_input.value = item.textContent;
        // console.log(reserve_input);
        labelActive.classList.remove("active");
        // option.classList.remove("active");
    };
}
let reserve = document.querySelector(".reserve");
let popup_wrap = document.querySelector(".popup_wrap");
let popup_close = document.querySelector(".popup_close");
reserve.addEventListener("click", () => {
    popup_wrap.classList.add("active");
});
popup_close.addEventListener("click", () => {
    popup_wrap.classList.remove("active");
});
