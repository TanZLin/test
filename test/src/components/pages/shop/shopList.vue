<template>
    <div class="juanpi">
        <div class="shopLot">
            <i class="fa fa-chevron-left" aria-hidden="true" @click="chevron_left"></i>
            <span>鞋柜品牌女鞋专场</span>
            <i class="fa fa-align-justify" aria-hidden="true"></i>
        </div>
        <div class="shopName">
            <div class="shopNam-top">
                <div><img src="../img/xiegui.png" alt=""></div>
                <div>
                    <p>鞋柜品牌女鞋专场</p>
                    <p>共126件商品</p>
                </div>
                <div><i class="fa fa-heart" aria-hidden="true"></i></div>
            </div>
            <div class="shopName-bom"> 
                <span>任选</span>
                <span>59元3件任选</span>
            </div>
        </div>
        <div class="shopTime">
            <p>距离结束还剩</p>
            <span>时间</span>
        </div>
        <div class="menuBar">
            <ul>
                <li v-for="(item,idx) in menu" :key="idx" @click="filtrate(idx)" :class="listid == idx?'listcolor':''">{{item.text}}</li>
            </ul>
        </div>
        <div class="goodlist">
          <ul>
            <li v-for="(item,i) in goodList" :key="i" @click="goodList_cli(item)">
                <img :src="item.pic_url" alt="">
                <p class="list_pw"><span>￥{{item.cprice}}</span><span>￥{{item.oprice}}</span></p>
                <p class="list_pt">{{item.vip_mark.text}}</p>
                <p class='list_ps'>{{item.title}}</p>
            </li>
          </ul>
        </div>
    </div>
</template>

<script>
export default {
  name: "shopTop",
  data() {
    return {
      listid: 0,
      menu: [],
      goodList: [],
      id: "",
      brand_id: ""
    };
  },
  components: {},
  created() {
    this.id = this.$route.query.shop_id;
    this.brand_id = this.$route.query.brand;
    this.shopcli();
  },
  methods: {
    filtrate(id) {
      console.log(id);
      if (id == 0) {
        this.goodList;
      } else if (id == 1) {
        //sort排序b-a从大到小，a-b从小到大
        this.goodList = this.goodList.sort((a, b) => {
          // console.log(a,b)
          return a.price - b.price;
        });
        console.log(this.goodList);
      } else if (id == 2) {
        this.goodList = this.goodList.sort((i, j) => {
          return j.Sales - i.Sales;
        });
        console.log(this.goodList);
      }
      this.listid = id;
    },

    goodList_cli(obj) {
    let id = obj.goods_id
      this.$router.push({
        path: "/detail",
        query: {
          id:id
        }
      });
    },

    chevron_left() {
      this.$router.go(-1);
    },
    shopcli() {
      this.$http.get(`https://webservice.juanpi.com/api/getBrandGoods?page=1&brand_id=${this.brand_id +"_" +this.id}&msort=1&goods_utype=C4&price_range=&cat_threeids=`).then(res => {
          console.log(res);
          this.goodList = res.data.goods;
          this.menu = res.data.msort;
        });
    }
  }
};
</script>

<style scoped lang="scss">
.juanpi {
  width: 100%;
  .shopLot {
    display: flex;
    justify-content: space-between;
    padding: 0 0.1rem;
    height: 0.4rem;
    align-items: center;
    font-size: 0.16rem;
    background: #fff;
  }
  .shopName {
    height: 1.2rem;
    background: #fff;
    margin: 0.1rem;
    .shopNam-top {
      height: 0.7rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 0.2rem;
      div:nth-child(1) {
        width: 0.6rem;
        height: 0.6rem;
        border: 1px solid #f2f2f2;
        img {
          width: 0.5rem;
          height: 0.3rem;
          margin-top: 0.18rem;
        }
      }
    }
    .shopName-bom {
      height: 0.4rem;
      padding: 0 0.2rem;
      line-height: 0.4rem;
      span:nth-child(1) {
        width: 0.3rem;
        height: 0.1rem;
        border: 1px solid red;
        padding: 0.02rem;
        color: red;
      }
    }
  }
  .shopTime {
    height: 0.3rem;
    font-size: 0.12rem;
    text-align: center;
    color: #999;
    margin-bottom: 0.1rem;
  }
  .menuBar {
    ul {
      height: 0.46rem;
      display: flex;
      justify-content: space-around;
      align-items: center;
      background: #fff;
      font-size: 0.14rem;
    }
  }
  .goodlist {
    ul {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      width: 100%;
    }
    .listcolor {
      color: red;
    }
    li {
      width: 49%;
      background: #fff;
      margin: 0.01rem;

      img {
        width: 100%;
      }
      .list_pw {
        height: 0.24rem;
        line-height: 0.24rem;
        padding: 0 0.1rem;
        span:nth-child(1) {
          color: #ff464e;
        }
        span:nth-child(2) {
          text-decoration: line-through;
          color: #999;
        }
      }
      .list_pt {
        height: 0.24rem;
        line-height: 0.24rem;
        padding: 0 0.1rem;
        color: #999;
      }
      .list_ps {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        height: 0.24rem;
        line-height: 0.24rem;
        padding: 0 0.1rem;
      }
    }
  }
}
</style>
