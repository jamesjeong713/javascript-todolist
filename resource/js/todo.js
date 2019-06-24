window.onload = function () {
    let form = document.getElementById("form");
    let input = document.getElementById("input");
    let btn = document.getElementById("btn");
    let list = document.getElementById("list");
    let id  = 1;

    btn.addEventListener("click", function () {
        if (input.value === "") {
            alert("There is no any input value. Please enter your item.");
        } else {
            let text = input.value;
            let item = `<li id ="li-${id}" class="list-group-item">
                        <input id="box-${id}" class="checkboxes" type="checkbox">
                        ${text}
                        </li>`;
            list.insertAdjacentHTML('beforeend', item);
            id++;
            form.reset();
        }
    });
    list.addEventListener("click", function () {
        const element = event.target;
        if(element.type === "checkbox") {
            element.parentNode.style.textDecoration = "line-through";
        }
    });

}


                        
