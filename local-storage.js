// select Elements

let allSpans = document.querySelectorAll(".buttons span");
let results = document.querySelector(".results > span");
let theInput = document.getElementById("the-input");

allSpans.forEach(span => {

    span.addEventListener("click", (e) => {

        if (e.target.classList.contains("chick-item")) {

            checkItem();
        }

        if (e.target.classList.contains("add-item")) {

            addItem();
        }

        if (e.target.classList.contains("delete-item")) {

            deleteItem();
        }

        if (e.target.classList.contains("show-item")) {

            showItme();
        }
    })
});

function showMsg() {
        results.innerHTML = 'Input Can Be Empty';
}

function checkItem() {

    if (theInput.value !== '') {

        if (localStorage.getItem(theInput.value)) {
           
            results.innerHTML = `found local storage item called <span>${theInput.value}</span>`;
        } 
        else {
            results.innerHTML = `No local Storage Item With The Name <span>${theInput.value}</span>`;
        }
    } else {
        showMsg();
    }
} 
function addItem() {
    if (theInput.value !== '') {

        localStorage.setItem(theInput.value, "Test");

        results.innerHTML = `local storage item <span>${theInput.value}</span> added`;

        theInput.value = '';
    } 
    else {

        showMsg();
    }
}

function deleteItem() {

    if (theInput.value !== '') {

        if (localStorage.getItem(theInput.value)) {

            localStorage.removeItem(theInput.value);

            results.innerHTML = `local storage Item <span>${theInput.value}</span> DELETED`;
     
            theInput.value = '';
        } 
        else {
            results.innerHTML = `No local Storage Item With The Name <span>${theInput.value}</span>`;
        }
    } 
    else {

        showMsg();
    }

}

function showItme() {

    if (localStorage.length) {

        console.log(`found Element ${localStorage.length}`);

        results.innerHTML = '';

        for (let [key, value] of Object.entries(localStorage)) {

            results.innerHTML += `<span class="key">${key}</span>`;

        }
    }  else {
        results.innerHTML = 'local Storage is Empty';
    }
}
