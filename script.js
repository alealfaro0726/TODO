const input = document.getElementById('input-task')
const addBtn = document.getElementById('add-btn')
const checkBtn = document.getElementById('check-btn')
const form = document.getElementById('task-form')
const ta = document.getElementById('tasks')
let clearBTN;
let counter = 0;
const topa = document.getElementById('top')

const output = document.createElement('div')

form.addEventListener('submit', (ev) => {
    ev.preventDefault()

    if(input.value == ""){
        form.disabled = true
        alert("Cannot have empty field")
        return;
    } 

    clearBTN = document.createElement('button')
        clearBTN.classList.add('clear')
        clearBTN.innerText = "Clear All"
        topa.appendChild(clearBTN)
        clearBTN.hidden = true;
    
    counter++;
   
    if(counter == 1){
        clearBTN.hidden = false
        
    }
    

    

        
        

        const cont = document.createElement('div')
        cont.classList.add('task-item')

        const taskName = document.createElement('h3')
        taskName.innerText = input.value

        const btn = document.createElement('button')
        btn.innerHTML =`<ion-icon class="check" name="checkmark-outline"></ion-icon>`
        btn.classList.add('check-btn')

        cont.appendChild(taskName)
        cont.appendChild(btn)

        output.appendChild(cont)

        ta.appendChild(output)

        btn.addEventListener('click', function(){
            cont.remove()
        })

        clearBTN.addEventListener('click', function(){
            removeAllNodes(output)
        })

    input.value = ""
})


function removeAllNodes(parent){
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

