const todoText = document.querySelector("#todoText");
const addBtn   = document.querySelector("#addBtn");
const todoList = document.querySelector("#todoList");
/*
    eğer 10 tane inputumuz olsaydı hepsinin eventını alıcaktık
    bu çok zor olurdu
*/
addBtn.addEventListener("click", () => {
    const listItem = document.createElement("li");
    listItem.textContent = todoText.value;
    todoList.append(listItem);
});