<template>
    <div class="juanpi">
        <div class="juanpi-checked">
            <span :class="tabe==0? 'checked':''" @click="tab_hpdp(0)">精选专场</span>
            <span :class="tabe==1? 'checked':''"  @click="tab_hpdp(1)">专场单品</span>
        </div>

        <div v-if= "tabe==0" class="commodity">
            <ul>
                <li v-for="(item,idx) in Session" :key="idx" @click="commodity_cli(item)">
                    <img :src="item.pic_url" alt="">
                    <img :src="item.logo_url" alt="" class="logo_url">
                    <p class="commodity_pw">{{item.coupon_tips}}</p>
                    <p class="commodity_pt"><span>{{item.title}}</span><span>{{item.time_left}}</span></p>
                </li>
            </ul>
        </div>
        <div v-if= "tabe==1" class="commodity">
            <ul>
                <li v-for="(item,idx) in Session1" :key="idx" @click="commodity_danpin(item)">
                    <img v-bind:src="item.pic_url" alt="">
                    <p class="commodity_ddd"><span>￥{{item.cprice}}</span><span>￥{{item.oprice}}</span></p>
                    <p class="commodity_ppp"><span>{{item.title_long}}</span></p>
                </li>
            </ul>
        </div>

        <div v-if="isloadmove" class="loading">加载更多...</div>
        <div v-if="!isNomore" class="loading">喂！已经到底了哟</div>
    </div>
</template>

<script>
export default {
  name: "homeList",
  data() {
    return {
        tabe:0,
        Session:[],
        Session1:[],
        page:1,
        page1:1,
        isloadmove:true,
        isNomore:true,
    
    
    };
  },
  components: {},
  created(){
      this.choiceness()
  },
    mounted() {
        //设置监听
    window.addEventListener("scroll",this.handleScroll);
  },
  methods: {
    commodity_cli(obj){
        console.log(obj)
        let id = obj.shop_id
        let goods_jump_url=obj.goods_jump_url
        let brand_id = goods_jump_url.slice(goods_jump_url.indexOf('brand/')+6,goods_jump_url.indexOf('?'))
        console.log(goods_jump_url.slice(goods_jump_url.indexOf('brand/')+6,goods_jump_url.indexOf('?')))
        this.$router.push({
            path:'/shop',
            query:{
                brand:brand_id,
                shop_id:id,

            }
        })
        // console.log(`把整个商品信息拿到，带shopid为${obj.shopId}跳转商品店铺`)
    },
    commodity_danpin(obj){
        this.$router.push({
            path:'/detail',
            query:{
                id:obj.goods_id
            }
        })
        // console.log(`把整个商品信息拿到，带id为${obj.shopId}跳转详情页`)
    },

    //改变tabe执行切换才去发送请求获取精选单品的数据
    tab_hpdp(id){
        this.tabe = id
        if(id == 1){
            this.selection()
            console.log(123)
        }
    },

    //获取精选专场数据
    choiceness(){
        //获取请求
        this.$http.get(`https://webservice.juanpi.com/api/getGoods?page=${this.page}&zy_ids=p8_c3_l4_1456_51_1391_1406_18_1371_1217_5_128&app_name=zhe&catname=tab_hpzc&flag=tab_hpzc&hasMore=true`).then(res =>{
                if(res.data.code == 1000){
                this.Session = this.Session.concat(res.data.data.goods)
                //  console.log(res.data.data.goods)
                 this.page++
                 this.isloadmove = false;
            }
        })
    },

    //获取精选单品数据
    selection(){
        this.$http.get(`https://webservice.juanpi.com/api/getGoods?page=${this.page1}&zy_ids=p8_c3_l4_1456_51_1391_1406_18_1371_1217_5_128&app_name=zhe&catname=tab_hpdp&flag=tab_hpdp`).then(res =>{
            if(res.data.code == 1000){
                this.Session1 = this.Session1.concat(res.data.data.goods)
                this.page1++
                this.isloadmove =false;
                //  console.log(res.data.data.goods)
            }
           
        })
    },
       //监听滚动
    handleScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;

        //分页加载 监听滚动条是不是到达底部
      if (window.innerHeight + scrollTop >= document.body.scrollHeight&&!this.isloadmove&&this.isNomore) {
        this.isloadmove=true
        if(this.tabe==0){
             this.choiceness()
        }else{
            this.selection()
        }
       
      }
    },
  }
};
</script>

<style scoped lang="scss">
    .juanpi-checked{
        height: 0.4rem;
        background: #fff;
        padding:0 0.1rem;
        span{
            display:inline-block;
            height:0.4rem;
            line-height: 0.4rem;
            font-size:0.16rem;
            margin-right:0.2rem;
        }
    .checked{
       color:red;
       border-bottom: 1px solid red;
   }
    }
   
    .commodity{
        width: 100%;
        ul{
            display: flex;
            width:100%;
            flex-direction:row;
            flex-wrap:wrap;
            
            li{
              width:49%;
              background: #fff;
              margin: 0.01rem;
              position: relative;
              img{
                  width: 100%;
              }
               .logo_url{
                width: 0.6rem;
                height: 0.36rem;
                border: 1px solid #ccc;
                position: absolute;
                right:0.05rem;
                top:1.68rem;
            }
              .commodity_pw{
                  font-size: 0.15rem;
                  color: #ff464e;
                  padding:0 0.1rem;
                  height: 0.3rem;
                  line-height: 0.3rem;
              }
              .commodity_pt{
                  display: flex;
                  justify-content: space-between;
                  padding: 0 0.1rem;
                  height: 0.24rem;
                  line-height: 0.24rem;
                  
                  span:nth-child(2){
                     color: #BBA;;
                  }
              }

              .commodity_ddd{
                  font-size: 0.12rem;
                  padding:0 0.1rem;
                  height: 0.3rem;
                  line-height: 0.3rem;
                  span:nth-child(1){
                    color: #ff464e;
                  }
                    span:nth-child(2){
                    text-decoration: line-through;
                    color:#999;
                  }
              }
              .commodity_ppp{
                    padding: 0 0.1rem;
                    height: 0.24rem;
                    line-height: 0.24rem;
              }
            }
        }

        .loading{
            height: 0.3rem;
            text-align: center;
        }
    }
</style>
