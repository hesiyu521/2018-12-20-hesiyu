export default{
       getNumByApi({commit},params){
       	console.log(params);
       	   setTimeout(()=>{
             let data=678
             commit('changeNum',data)
       	   }, 2000);
       }
	}