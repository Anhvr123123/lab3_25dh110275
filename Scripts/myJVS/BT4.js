// Hàm thêm công việc mới vào danh sách
function addTask() {
    const input = document.getElementById('taskInput');
    const taskText = input.value.trim();

    if (taskText === '') {
        alert('Vui lòng nhập nội dung công việc!');
        return;
    }

    const ul = document.getElementById('todoList');

    // Tạo thẻ li mới
    const li = document.createElement('li');
    li.className = 'todo-item';

    // Tạo checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.onchange = function () {
        toggleTask(this);
    };

    // Tạo span chứa tên công việc
    const span = document.createElement('span');
    span.className = 'task-text';
    span.innerText = taskText;

    // Tạo nút xóa (dấu ✕)
    const deleteBtn = document.createElement('span');
    deleteBtn.className = 'delete-btn';
    deleteBtn.innerText = '✕';
    deleteBtn.onclick = function () {
        deleteTask(this);
    };

    // Ghép các phần tử vào thẻ li
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);

    // Thêm thẻ li vào danh sách ul
    ul.appendChild(li);

    // Xóa nội dung trong ô input sau khi thêm
    input.value = '';
}

// Xử lý khi nhấn phím Enter trong ô input
function handleKeyPress(event) {
    if (event.key === 'Enter') {
        addTask();
    }
}

// Chuyển đổi trạng thái hoàn thành (gạch ngang chữ)
function toggleTask(checkbox) {
    const li = checkbox.parentElement;
    if (checkbox.checked) {
        li.classList.add('completed');
    } else {
        li.classList.remove('completed');
    }
}

// Xóa công việc khỏi danh sách
function deleteTask(deleteBtn) {
    const li = deleteBtn.parentElement;
    li.remove();
}