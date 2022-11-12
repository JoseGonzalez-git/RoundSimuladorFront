document.addEventListener("DOMContentLoaded", () => {
    insertTable("table-One");
});
function insertTable(idTable){
    let divTable = document.getElementById(idTable);

    strHtml = "<table class='table table-dark'><thead><tr>";
    strHtml += `<th scope='col'>#</th>
                <th scope='col'>First</th>
                <th scope='col'>Last</th>
                <th scope='col'>Handle</th>`
    strHtml += "</tr></thead><tbody>";
    strHtml += `<tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>`
    strHtml += "</tbody></table>";

    divTable.innerHTML = strHtml;
}

