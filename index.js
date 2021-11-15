import {createStore} from './createStore'
import './index.css'
import { reducer } from './redux/reducer'

const counter = document.getElementById('counter')
const addBtn = document.getElementById('add')
const delBtn = document.getElementById('del')

const store = createStore(reducer, 0)

addBtn.addEventListener('click',() => {
    store.dispatch( { type:'Increment'} ) 
})

delBtn.addEventListener('click',() => {
    store.dispatch( { type:'Decement'} )
})

store.subscribe( ()=> {
    const state = store.getState()
    counter.textContent = state
})

store.dispatch( {type: 'Init_0'})

//store.subscribe( () => console.log(store.getState()))