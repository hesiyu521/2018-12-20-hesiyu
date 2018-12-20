<template>
  <div id="shopcar">
    这里购物车
    <p>this:{{this.$store.state.num}}</p>
    <p>data:{{num}}</p>
    <p>computed{{_num}}</p>
    <p>mapstate:{{stateNum}}</p>
    <p>getter:{{dbl}}</p>
  </div>
</template>

<script>
import {mapState,mapGetters} from 'vuex'
//引入vuex的辅助函数
export default {
  name: 'Shopcar',
  data(){
  	return {
  		num:this.$store.state.num
  	}
  },
  // computed:{
  // 	_num(){
  // 		return this.$store.state.num
  // 	}
  // }
  // computed:mapState(['num','isLogin'])
  // computed:mapState({stateNum:'num'})
  computed:{
  	_num(){
  		return '呵呵'
  	},
  	// ...mapState({stateNum:'num'})
  	...mapState({
  		// stateNum: state => state.num
  		stateNum:(state)=>{return state.num}
  	}),
  	...mapGetters({dbl:'double'})
  },
  created(){
  	console.log(this.$store);
  }
}
</script>

<style>

</style>
