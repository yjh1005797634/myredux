/**
 * Created by apple on 18/9/5.
 */
import {createStore} from './redux';
import $ from 'jquery';

const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

$('body').append(
    `
     <p id="counter"></p>
     <button id="increaseBtn">+</button>
     <button id="decreaseBtn">-</button>
   `);

let reducer = (state={num:0},action)=>{

    if(action === undefined) return state;
    switch (action.type){

        case INCREASE:

            return {num:state.num + action.amount}

        case DECREASE:
            return {num:state.num - action.amount}

        default:
             return state;
    }

}

let store = createStore(reducer);


console.log(typeof store);

let render = ()=>{
    document.querySelector('#counter').innerHTML = store.getState().num;
}


//当仓库里的state发生变化的时候 会重新发生渲染 执行render
store.subscribe(render);



$('#increaseBtn').click(()=> store.dispatch({type:INCREASE,amount:3}))

$('#decreaseBtn').click(()=>store.dispatch({type:DECREASE,amount:2}));


render();

