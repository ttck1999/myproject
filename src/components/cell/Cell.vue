<template>
	<div class="cell-page">
		<div class="cell-page__tops">tops</div>
   
		<h3>点击切换</h3>
		<div>
			<router-link to="basicsIndices" tag="span" >我的收藏</router-link>
			<router-link to="weightPending" tag="span">我的足迹</router-link>
		</div>
    <div>
    <div>
      <router-view></router-view>
    </div>
    <br>
    <div>

      store里的值：{{pageName}}
    </div>
    </div>
	</div>
	
</template>
<script>
import { mapGetters, mapActions } from "vuex";
	export default {
	  name: 'cell',

	  components:{
      
	  },

	  data() {
      return {
     
      
      };
    },
    computed: {
      // 挂载 Vuex getter，用于从中央仓库读入当前 dateRagnge
      // 名称一旦定义，不可同名与现有 'props', 'data', 'computed', 'methods' 冲突！
      ...mapGetters([
        "pageName"
      ])
    },
    mounted() {
      this.showPeople("zhangsan")
		},
	
    methods: {
 		  // 挂载 Vuex action，用于向中央仓库写入新的 dateRange
      // 设置新的 dateRange 的时候，调用此 action
      ...mapActions([
        "showPeople"
      ]),
    }
	}
</script>
<style scoped lang="scss">
.cell-page{
	width: 100%;
	height:100%;
	
	&__tops{
		background: blue;
		width: 50px;
		height: 60px;
	}
}
</style>