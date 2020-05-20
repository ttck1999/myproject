<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div @click="cellClick">点击跳转页面</div>
    <br>
    <div @click="storeClick">点击改变store里的值</div>
    <div> store里的值：{{pageName}}</div>
    
    <br>
    <div>{{dateRange}}</div>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
	import { mapGetters, mapActions } from "vuex";
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        articles:null
      }
    },
    mounted(){
      // 设置日期
      this.changeDateRange(
        {
          startDate:"2002-01-20",
          endDate:"2019-10-25"
        }
      );
      this.requestData()
    },
    computed: {
      // 挂载 Vuex getter，用于从中央仓库读入当前 dateRagnge
      // 名称一旦定义，不可同名与现有 'props', 'data', 'computed', 'methods' 冲突！
      ...mapGetters([
        "dateRange",
        "pageName"
      ])
    },
    methods:{
      // 挂载 Vuex action，用于向中央仓库写入新的 dateRange
      // 设置新的 dateRange 的时候，调用此 action
      ...mapActions([
        "changeDateRange",
        "showPeople"
      ]),
      cellClick(){
        this.$router.push({
          path: `/cell`,
        })
      },
      storeClick(){
        // 设置日期
        this.changeDateRange(
          {
            startDate:"2005-05-10",
            endDate:"2020-10-14"
          }
        );

      },
      requestData () {
        
        this.Axios.get('/api/articles').then(res => {
          let data = res.data;
          if (data.data && Array.isArray(data.data)) {
            this.articles = data.data
          }
          console.log(this.articles)
        }).catch(err => {
          console.log(err)
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
