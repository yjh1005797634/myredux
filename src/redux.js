/**
 * Created by apple on 18/9/5.
 */


const createStore = (reducer)=>{


    //状态
    let state;

    //监听对象的数组
    let listeners = [];


    //获取最近的状态 state
    let getState = ()=> state;



    //向仓库发送action
    let dispatch = (action)=>{


       state = reducer(state,action) // 把老的state 传入  返回新的state 又赋值给state 表明仓库状态发生改变了

        //状态发生改变了 通知所有监听者 让所有监听者更改状态
        listeners.forEach(listener => listener());

    }

    // 订阅仓库内的状态变化事件 当状态发生变化之后 会调用对应的监听函数
     let subscribe = (listener)=> {
        listeners.push(listener);

         return ()=> {
             //过滤所有监听者 传入当前的监听者 如果监听者不等于 就保留 如果是当前的 就过滤掉 这样就取消订阅了
           listeners.filter(l => listener !== l);
         }
     }


    dispatch();

    return {
        getState, //获取最新的状态对象
        subscribe,  // 订阅 成为监听者
        dispatch
    }
}

export {createStore}