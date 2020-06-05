<template>
	<div class="cell-page">
    <img src="../../assets/images/logo.png">
		<div class="cell-page__tops">tops</div>
   
		<h3>点击切换</h3>
		<div>
			<router-link to="/cell/basicsIndices" tag="span" >我的收藏</router-link>
			<router-link to="/cell/weightPending" tag="span">我的足迹</router-link>
		</div>
    
    <div>
      <router-view></router-view>
    </div>
    <br>

    <div>
      store里的值：{{pageName}}
    </div>
    <div>{{curEnd}}</div>

     <el-button type="success">测试</el-button>
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        fixed
        prop="date"
        label="日期"
        width="150">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="120">
      </el-table-column>
      <el-table-column
        prop="province"
        label="省份"
        width="120">
      </el-table-column>
      <el-table-column
        prop="city"
        label="市区"
        width="120">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址"
        width="300">
      </el-table-column>
      <el-table-column
        prop="zip"
        label="邮编"
        width="120">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="block">
      <span class="demonstration">完整功能</span>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-size="10"
        layout="total,  prev, pager, next, jumper"
        :total="400">
      </el-pagination>
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
        curEnd:"1234",
         tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1517 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1519 弄',
          zip: 200333
        }, {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1516 弄',
          zip: 200333
        }],
         currentPage4: 1
      
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
       handleClick(row) {
        console.log(row);
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
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