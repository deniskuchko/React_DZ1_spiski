const newTask = document.getElementById('ourTasks');
const valueOfAddTask = document.getElementById('newTask');
let cross = true;
export const maps = new Map;

const deleteTask = () => {
    let trash = document.querySelectorAll('.fa-trash-alt');
    for(let task of trash){
        task.addEventListener('click', function(){
            task.parentElement.parentElement.remove();
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
        })
    }

};

/* const SborMap = (value) => {
    
    const task  = document.querySelector(`.task`);
    maps.set(`${value}`, task);
}
 */
class Filter{
    constructor(value){
        this.value = value;
        this.task = document.querySelector(`.task`);
        console.log(this.value);
    }
    mapSet(){
        maps.set(`${this.value}`, this.task);
        console.log(maps);
    }
    filterAll(){
        console.log('All');
    }
    filterActive(){
        console.log('Active');

    }
    filterDone(){
        console.log('Done');

    }
}



export const getMessage = () => {
    newTask.innerHTML += `<div class="task">
        <p>${valueOfAddTask.value}</p>
        <button>
            <i class="far fa-trash-alt"></i>
        </button>
        <button>    
            <i class="fas fa-exclamation"></i>
        </button>
        </div>`;
        const filterAll = new Filter(valueOfAddTask.value);
        document.querySelector('.all').addEventListener('click', filterAll.mapSet);
    valueOfAddTask.value = '';

    deleteTask();
    zacherkivanie();
    

};

