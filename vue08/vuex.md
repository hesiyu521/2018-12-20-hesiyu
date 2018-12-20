###vuex 

全局状态管理 （全局变量）

解决问题： 多组件共享状态  有n个组件 使用同一个值 要求 其中一个值发生变化其他的组件跟着变化

使用时机：redux（vuex） 当你不知道该不该用状态的管理的时候那就不要用
                      有n个组件都要公用一个状态  其中一个改变其他都变的时候
                      如果项目的很小 没有必要使用vuex  event_bus 事件总线  天使实例

单向数据流
####state
存放所有的状态管理
this.$store.state.name
state 不能往 data属性进行挂载 因为挂载之后数据不会变化
state 属性应该挂载在计算属性里边
通过vuex 提供的 mapState 这个辅助函数 简化操作
compoted:mapState(['a','b']) ab 对应state 里的值
如果还有组件 计算属性  通过展开运算符进行展开
如果名字冲突 进行改名


####mutations
基本使用  this.$store.commit('fun1')
mutations 只做state值的修改不做的任何的逻辑处理，逻辑处理可以往actions放
可以通过辅助函数 mapMutations 进行简化操作 详情同state

####getters
派生属性  有一个值和state产生一定的联系
this.$store.getters.name
也可以通过辅助函数 mapGetters(['double']) 来进行简化操作  double 对应getter 设置的值
其他使用方式参考state

####actions                      
视图通过 dispatch 触发action   内部逻辑处理（请求数据。。。） 触发commit
可以通过辅助函数 mapActions(['fun1',['fun2']])fun1 fun2 对应的是actions 里的方法 也支持改名操作
详情参考mutations

##### 使用
view ->dispatch->action->commit->mutation->state->view

修改状态值 有异步操作 逻辑处理  完整流程
修改状态值 没有异步操作没有逻辑处理  比如1-》2  view(commit)->mutation->state->view

getters 不是必须的 只有当我们需要派生属性的才写
