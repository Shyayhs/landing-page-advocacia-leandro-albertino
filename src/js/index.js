AOS.init();

const buttons = document.querySelectorAll(".know-more");
const descriptions = document.getElementsByClassName("service-description");
const serviceItems = document.getElementsByClassName("service-item");

buttons.forEach((element, index) => {
    element.addEventListener("click", () => {
        let description = descriptions[index];
        let serviceItem = serviceItems[index];

        if (description.classList.contains("visible") === true) {
            description.classList.remove("visible");
            serviceItem.classList.remove("on");
            
            element.innerHTML = "Saiba mais"
        } 
        else {
            description.classList.add("visible");
            serviceItem.classList.add("on");

           element.innerHTML = "Fechar"
        }
    });
});