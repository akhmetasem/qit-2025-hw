document.addEventListener("DOMContentLoaded", loadItems);

        function addItem() {
            let input = document.getElementById("itemInput");
            let itemText = input.value.trim();
            if (itemText === "") return;

            let li = createListItem(itemText, false);
            document.getElementById("shoppingList").appendChild(li);
            saveItems();
            input.value = "";
        }

        function createListItem(text, completed) {
            let li = document.createElement("li");
            let checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.checked = completed;
            checkbox.onchange = function() {
                li.classList.toggle("completed", checkbox.checked);
                saveItems();
            };

            let span = document.createElement("span");
            span.textContent = text;
            
            let deleteBtn = document.createElement("button");
            deleteBtn.textContent = "❌";
            deleteBtn.onclick = function() {
                li.remove();
                saveItems();
            };

            li.appendChild(checkbox);
            li.appendChild(span);
            li.appendChild(deleteBtn);
            li.classList.toggle("completed", completed);
            return li;
        }

        function saveItems() {
            let items = [];
            document.querySelectorAll("#shoppingList li").forEach(li => {
                let text = li.querySelector("span").textContent;
                let completed = li.querySelector("input").checked;
                items.push({ text, completed });
            });
            localStorage.setItem("shoppingList", JSON.stringify(items));
        }

        function loadItems() {
            let items = JSON.parse(localStorage.getItem("shoppingList")) || [];
            items.forEach(item => {
                let li = createListItem(item.text, item.completed);
                document.getElementById("shoppingList").appendChild(li);
            });
        }