export default{
      changeNum(state,params){
      	//只能修改state的数据不能做任何逻辑运算  逻辑运算放到 actions
      	this.state.num=params
      }
	}