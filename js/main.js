let descripe = document.querySelector("#descripe");
let severity = document.querySelector("#severity");
let assigned = document.querySelector("#assigned");
// add data to localstorage
let arrayofdata;
if (localStorage.getItem("localdata")) {
    arrayofdata = JSON.parse(localStorage.getItem("localdata"));
} else {
    arrayofdata = [];
}
function addData() {
    if (descripe.value === "" || severity.value === "" || assigned.value === "") {
        alert("Please Fill Your Data !!!")
    } else {
        let data = {
            descripe: descripe.value,
            severity: severity.value,
            assigned: assigned.value,
        }
        arrayofdata.push(data);
        localStorage.setItem("localdata", JSON.stringify(arrayofdata));

        // function run when press add button
        clearInput();
        drawdata();
    }
}
// clear input after add
function clearInput() {
    descripe.value = "";
    severity.value = "";
    assigned.value = "";
}
// draw data
function drawdata() {
    let table = "" ;

    for (let i = 0; i < arrayofdata.length; i++) {
        let ID = Math.floor(Math.random() * 1000000);

        table += `
        <div class="item col-11 col-md-5 col-lg-3 mb-5 bg-secondary-subtle p-3">
            <p id="ID">Issue ID: ${ID}</p>
            <button class="btn btn-info text-light p-2 pt-0 pb-0 mb-4" id="statu">Open</button>
            <h4>${arrayofdata[i].descripe}</h4>
            <span><i class='bx bx-time-five'></i> <span>${arrayofdata[i].severity}</span></span>
            <span class="mb-2  d-block"><i class='bx bxs-user'></i> <span>${arrayofdata[i].assigned}</span></span>
            <div class="">
                <button class="btn btn-warning text-light" id="closeBtn">Close</button>
                <button class="btn btn-danger" onclick="deleteItem(${i})">Delette</button>
            </div>
        </div>
        ` ;
    }
    document.querySelector(".content_row").innerHTML = table;
}
drawdata();
// delete
function deleteItem(i){
    arrayofdata.splice(i , 1);
    localStorage.setItem("localdata", JSON.stringify(arrayofdata));
    drawdata();
}