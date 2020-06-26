let newTask = document.getElementById('ourTasks');
const valueOfAddTask = document.getElementById('newTask');
let taskDiv = document.querySelectorAll('.task');
let valueOfP;
let cross = true;
let mass = [];

const deleteTask = () => {
    let trash = document.querySelectorAll('.fa-trash-alt');
    for(let task of trash){
        task.addEventListener('click', function(){
            task.parentElement.parentElement.remove();
            localStorage.setItem('todoApplication', newTask.innerHTML);

            event.preventDefault();
        })
    }

};

const zacherkivanie = () => {
    const exclamations = document.querySelectorAll('.fa-exclamation');
    for(let exclamation of exclamations){
        exclamation.addEventListener('click', function(){
            if(cross){
                cross = false;
                exclamation.parentElement.parentElement.style.setProperty("text-decoration", "line-through");
                
            } else{
                cross = true;
                exclamation.parentElement.parentElement.style.setProperty("text-decoration", "none");
            } 
            event.preventDefault();
            return cross
        })
    }

};

function loadToDo(){
    if(localStorage.getItem('todoApplication')){
        newTask.innerHTML = localStorage.getItem('todoApplication');
        deleteTask();
        zacherkivanie();

    }
};


export const getMessage = () => {
    const task = document.createElement('div');
    task.className = 'task';
    task.innerHTML = `
        <button>
            <i class="far fa-trash-alt"></i>
        </button>
        <button>    
            <i class="fas fa-exclamation"></i>
        </button>
        `;

    const p = document.createElement('p');
    
    p.innerText = `${valueOfAddTask.value}`;
    newTask.appendChild(task).prepend(p);

    localStorage.setItem('todoApplication', newTask.innerHTML);

    mass.push(valueOfAddTask.value);
    valueOfAddTask.value ='';
    deleteTask();
    zacherkivanie();
};
loadToDo();
deleteTask();

/* кнопка "все" */
const filterAll = () => {
    newTask.innerHTML = '';
    for(let i = 0; i < mass.length; i++){
        
        const task = document.createElement('div');
        const p = document.createElement('p');

        task.innerHTML = `
        <button>
            <i class="far fa-trash-alt"></i>
        </button>
        <button>    
            <i class="fas fa-exclamation"></i>
        </button>
        `;
        p.innerText = mass[i];
        newTask.appendChild(task).prepend(p);
    }
    deleteTask();
    zacherkivanie();
}

document.getElementById('all').addEventListener('click', filterAll);

/* */