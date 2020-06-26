import {getMessage, filterDone} from './utils/utils';


document.getElementById('add').addEventListener('click', getMessage);


/* 
let list = ['list1','list2','list3'];
let result = document.getElementById('ourTasks');
renderList(list, result);
function filter(val, list){
    let result = [];
    list.forEach(i => {
        if(i.indexOf(val) != -1){result.push(i)};
    })
    return result
}
function renderList(_list=[], el = document.body){
    el.innerHTML = '';

    _list.forEach(i => {
        let new_el = document.createElement('div');
        new_el.innerHTML = i;
        el.appendChild(new_el);
    })
}

    document.getElementById('input_search').addEventListener('input', e =>{
        let new_arr = filter(e.target.value, list)
        renderList(new_arr, result);
    })
 */