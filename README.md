
一、创建项目

    1.create-react-app myredux

    2.cd myredux git init  添加忽略文件

    3.git add /  commit

    4.git remote add origin  https://github.com/yjh1005797634/myredux.git

    5.git push -u origin master


二、手动创建redux.js 页面 导出一个createStore
    1.创建一个仓库 里面返回 三个方法
      getState
      subscribe 订阅  listeners.push(listener)
      dispatch 分发 发送  分发后 会遍历通知所有监听者对象 执行

三、监听者对象
    1.订阅 subscribe(render)
    2.render方法 渲染
