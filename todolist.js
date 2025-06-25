$(document).ready(()=>{
    $("#todo-form").submit((event)=>{
        const texto = $("#todo-input").val();

        $("#todo-list").append(`
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <span class="todo-text">${texto}</span>

            </li>
        `);

        $("#todo-input").val("");
        event.preventDefault(); 
    })
})