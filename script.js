const tBodyContainer = document.getElementById("tbody-container")
const url = "./data/data.json"

function displayDoctors(data){
    let tbodyEl = ""
    data.forEach(item => {
        tbodyEl += `
        <tr>
            <td>${item.department}</td>
            <td>
                <img class="td-icon" src="${item.img}" alt="${item.doctor}">
                ${item.doctor}
            </td>
            <td class="hidden">${item.gender}</td>
            <td class="hidden">${item.hod}</td>
            <td class="hidden">
                <img src="assets/actionIcons/edit.png" alt="">
                <img src="assets/actionIcons/Group.png" alt="">
                <img src="assets/actionIcons/delete.png" alt="">
            </td>
            <td><span class="${item.status}">${item.status}</span></td>
        </tr>
        ` 
    });
    tBodyContainer.innerHTML = tbodyEl;
}

function getTableData(url){
    fetch(url)
        .then(res => {
            if(res.ok){
                return res.json()
            } else {
                throw new Error("Error: data was not found")
            }
        })
        .then(data => displayDoctors(data))
}

getTableData(url)