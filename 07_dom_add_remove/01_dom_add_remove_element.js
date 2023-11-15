const addItemBtn = document.querySelector("#btnAddItem");

const itemList = document.querySelector("#itemList");

addItemBtn.addEventListener('click', addItem)

function removeItem() {
    const currentEle = this;
    currentEle.parentElement.remove();
}

function addItem() {
    const li = document.createElement('li');
    li.innerText = 'item';

    const removeBtn = document.createElement('button');
    removeBtn.innerText = 'remove';
    removeBtn.style.marginLeft = "10px"
    removeBtn.addEventListener('click',  removeItem)

    li.append(removeBtn);

    itemList.append(li)
}