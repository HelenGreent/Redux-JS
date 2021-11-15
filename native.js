const counter = document.getElementById('counter')
const addBtn = document.getElementById('add')
const delBtn = document.getElementById('del')

let state = 0

function render() {
    counter.textContent = state.toString()
}

addBtn.addEventListener('click',() => {
    state++
    render()
})
delBtn.addEventListener('click',() => {
    state--
    render()
})

render()
