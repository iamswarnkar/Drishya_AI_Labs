//selector
const rowAndCol = document.querySelectorAll('td');
const val = document.querySelector('#val');
const addBtn = document.querySelector('#add');
const deleteBtn = document.querySelector('#delete');
const tbody = document.querySelector('tbody');
const table= document.querySelector('table');




//EventListener
addBtn.addEventListener('click',createRowAndCol);
deleteBtn.addEventListener('click',deleteRow);




//functions

function sumOfRowAndCol(el){
    let total = 0;
    for(let i=0; i<el.length; i++){
        total += parseInt(el[i].innerText);
        console.log(el[i].innerText)
    }  
    val.innerText= `Total:- ${total}`;
}

sumOfRowAndCol(rowAndCol);


function randomNumber(){
   return Math.floor(Math.random() * 100);
}

function createRowAndCol(){
    let tr = document.createElement('tr');
    for(let i=0; i<3; i++){
       let td = document.createElement('td');
       td.innerText = randomNumber();
       tr.append(td);
    }
    tbody.append(tr);
    const rowAndCol = document.querySelectorAll('td');
    sumOfRowAndCol(rowAndCol);
}

function deleteRow(){
    let rowCount = table.rows.length;
    table.deleteRow(rowCount-1);
    const rowAndCol = document.querySelectorAll('td');
    sumOfRowAndCol(rowAndCol)

}
