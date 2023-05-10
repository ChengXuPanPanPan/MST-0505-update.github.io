const lg_select = document.querySelector(".language_select");
const En_active = document.querySelector(".En_lg");
const Ch_active = document.querySelector(".Ch_lg");
const CH_cnt = document.querySelector(".CH_language")
const EN_cnt = document.querySelector(".EN_language")

lg_select.addEventListener("click", function(e) {
    if (e.target.value == "English") {
        En_active.classList.add("active");
        Ch_active.classList.remove("active");
        EN_cnt.classList.add("active");
        CH_cnt.classList.remove("active");
    }
    if (e.target.value == "Chinese") {
        console.log("fmlfd");
        Ch_active.classList.add("active");
        En_active.classList.remove("active");
        EN_cnt.classList.remove("active");
        CH_cnt.classList.add("active");
    }

})