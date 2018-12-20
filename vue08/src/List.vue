<template>
  <div id="list">
    这里列表
    <div @click='getNumByApi'>change</div>
  </div>
</template>

<script>
import {mapMutations,mapActions} from 'vuex'
export default {
  name: 'List',
  methods:{
  	changeState(){
  		this.$store.commit('changeNum',999)
  	},
  	test(){
  		this.$store.dispatch('getNumByApi','hehe')
  	},
  	// ...mapMutations(['changeNum'])
  	// ...mapMutations({test:'changeNum'})
  	...mapActions(['getNumByApi'])
  }
  // methods:mapMutations(['changeNum'])
}
</script>

<style>

</style>
