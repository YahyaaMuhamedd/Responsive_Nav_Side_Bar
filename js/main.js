let button = document.getElementById("drop-click");
let button2 = document.querySelector(".socials");
let button3 = document.getElementById("dropdown-three");
let element = document.querySelector(".about");
let element2 = document.querySelector(".list");
let element3 = document.querySelector(".dropdown");

let classlist = [button, button2, button3];
let elements = [element, element2, element3];

for (let i = 0; i < classlist.length; i++) {
    elements.push(classlist[i].getAttribute("data-progress"))
    classlist[i].addEventListener('click', function () {

        elements[i].classList.toggle(elements[i].getAttribute("data-progress"));
        // remove class list and transfer it to another element in array  if iam clicked in another element in array
        // Close other tabs if open
        for (var j = 0; j < elements.length; j++) {
            if (!(j == i)) {
                elements[j].classList.remove(elements[j].getAttribute("data-progress"));
            }
        }
    });
}


// Dropdown Menu Functionality
var sidebar = document.querySelector('.navTrigger');

sidebar.onclick = function () {
    var menuDropDown = document.querySelector('.sidebar')

    menuDropDown.classList.toggle("show")

    // if (menuDropDown.className = "sidebar") {
    // } else {
    //     menuDropDown.classList.add("out-animation")
    //     menuDropDown.classList.remove("show")
    // }
}
// give me code to add a second animation when the user click on toggle
// .add("in-animation", "out-animation")
// and remove it after the animation is finished
