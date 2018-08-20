<template>
    <div class="juanpi">
        <div class="search-top">
            <div>
                <i class="fa fa-search" aria-hidden="true"></i>
                <input type="text" placeholder="Missface隔离霜19.9">
            </div>
            <span @click="cancel">取消</span>
        </div>
        <div class="hot-search"> 
            <p>热搜</p>
            <ul></ul>
        </div>
        <div class="Search-history">
            <p><span>历史搜索</span><i class="fa fa-trash-o" aria-hidden="true"></i></p>
        </div>
        
    </div>
</template>

<script>
export default {
  name: "homeSearch",
  data() {
    return {
        name:'',
        age:'',
    };
  },
  components: {},
  created() {
    this.name = this.$route.query.name;
    console.log(this.name)
    this.age = this.$route.query.age;
     console.log(this.$route.query.age)
  },
  methods: {
      cancel(){
          this.$router.go(-1)
      }
  }
};
</script>

<style scoped lang="scss">
.juanpi{
    background: #fff;
    height:100%;
}
.search-top {
  display: flex;
  height: 0.4rem;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.1rem;
  background: #fff;
  border-bottom:1px solid #f2f2ff;
  div {
    width: 3.2rem;
    height: 0.24rem;
    background: #f2f2f2;
    padding-left:0.1rem;

    input {
      width:2.8rem;
      height: 0.22rem;
      border: none;
      outline-style: none;
      word-break: normal;
      background: #f2f2f2;
      font-size: inherit;
      color: inherit;
    }
  }
  span{
      font-size:0.14rem;
  }
}

.hot-search{
    height: 2.24rem;
    padding:0 0.1rem;
    background: #fff;
}
.Search-history{
    height:0.8rem;
    padding:0 0.1rem;
    background: #fff;
    p{
        display:flex;
        justify-content:space-between;
    }
}
</style>
