<template>
    <div class="juanpi">

        <!-- 轮播图 -->
         <div class="swiper-container"  ref = "el">
            <div class="swiper-wrapper">
                <div v-for="(item,i) in banners" :key="i+'q'" class="swiper-slide">
                    <img v-bind:src="item.imgUrl" alt="" width="100%">
                  
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>

        <!-- 商品信息 -->
        <div v-for="(item,id) in details" :key="id+'w'" class="introduce">
            <div>
              <p>
                <span>￥{{item.price}}</span>
                <span>￥{{item.prime}}</span>
                <span class="sc-chPdSV eCpHpu" style="background-color: rgb(255, 70, 78); border-color: rgb(255, 70, 78); color: rgb(255, 255, 255);">包邮</span>
              </p>
              <span>{{item.qty}}人已购</span>
            </div>
            <div>
              <p>{{item.type}}</p>
              <i class="fa fa-heart" aria-hidden="true"></i>
            </div>
        </div>

        <!-- 活动售后 -->
        <div class="activity">
          <div @click="xuanfun(1)">
            <p>
              <span class="sc-kAzzGY iXUUuH" style="margin-right: 0.341333rem;">满件减</span>
              <span>满2件减8元,满3件减15元</span>
            </p>
            <i class="fa fa-angle-double-right" aria-hidden="true"></i>
          </div>
          <div @click="xuanfun(2)">
              <p>
              <span>24小时发货</span>
              <span>7天包邮</span>
              <span>售后补贴</span>
            </p>
            <i class="fa fa-angle-double-right" aria-hidden="true"></i>
          </div>
        </div>

        <!-- 尺码颜色选择 -->
        <div class="choose " @click="xuanfun(3)">
          <p>请选择颜色: 颜色、尺码</p>
          <i class="fa fa-angle-right" aria-hidden="true"></i>
        </div>

          <!-- 店铺专场 -->
          <div class="business">
            <div v-for="(item,idx) in choice" :key="idx" class="business_d"> 
              <img :src="item.imgUrl" alt="">
              <div class="business_dgm"><p>{{item.Lot}}</p><p>{{item.Number}}万人购买</p></div>
              <router-link :to="{name:'shop'}" class="business_dzc"><span>进入专场</span><i class="fa fa-chevron-right" aria-hidden="true"></i></router-link>
            </div>
            <div class="business_img">
               <div v-for="(item,j) in img" :key="j+1" >
                <img :src="item.imgUrl" alt="">
                </div>
            </div>
             <div class="business_shop"><router-link :to="{name:'shop'}">查看店铺所有商品</router-link></div>
        </div>
         
        <!-- 模拟数据循环生成:图片详情, 商品参数, 咨询与售后 -->
        <div class="parameter">
            <div class="parameter_t">
              <div  v-for="(item,idx) in service" :key="idx" :class="tabIndex==idx?'active':''" @click = 'tabIndex=idx'>
                  <span>{{item}}</span>
              </div>
            </div>
            
        </div>

        <!-- 商品详情 -->
        <div class="sc-hEsumM" v-for="(item,id) in tupian" :key="id" v-if= "tabIndex==0">
          <div class="sc-ktHwxA dyihyA">
                <span class="sc-cIShpX brDmTL">商家提醒：<span class="sc-kafWEX ircegq sc-cIShpX brDmTL">
                <font color="#9b9b9b">此商品由品牌商从<font color="#4a4a4a">【广东广州】</font>发货。</font></span></span>
            </div>
          <img :src="item.imgUrl" alt="">
        </div>

        <!-- 商品参数 -->
        <div v-if= "tabIndex==1" v-for="(item,idx) in parameters" :key="idx" class="parameters">
            <div><span>{{item.shipments}}</span><span>{{item.normal}}</span></div>
        </div>

        <!-- 咨询与售后 -->
        <div v-if= "tabIndex==2" class="Customer_Service">
          <h3>温馨提示</h3>
          <div v-for="(item,i) in hint" :key="i">
            {{item.prompt}}
          </div>
        </div>

        <!-- 底部 -->
        <div class="sc-box">
          <div class="sc-gqPbQI">

            <router-link :to="{name:'home'}"><i class="fa fa-home" aria-hidden="true"></i><span>首页</span></router-link>
            <div><i class="fa fa-shopping-cart" aria-hidden="true"></i><span>购物车</span></div>
            <span  @click="xuanfun(3)">立即购买</span>
            <div class="choose jiarucar" @click="xuanfun(3)">加入购物车</div>
          </div>

        </div>

        <!-- 弹窗组件 -->
        <detail-pop-up v-if="isStatus" :aa='popType' :close='closePopUp' :ascertain="clickSure"></detail-pop-up>
    </div>
</template>

<script>
import detailPopUp from "./detaiPopUp";
import Swiper from "swiper";
import Vue from "vue";
export default {
  name: "",
  data() {
    return {
      goodId:'',
      tabIndex:0,
      popType: "",
      banners: [
        { imgUrl: "./static/shangpin2.jpg" },
        { imgUrl: "./static/shangpin3.jpg" },
        { imgUrl: "./static/shangpin4.jpg" },
        { imgUrl: "./static/shangpin5.jpg" }
      ],
      details: [
        {
          price: "49.9",
          prime: "60",
          qty: "1458",
          type: "小清新吊带雪纺套装女士高腰碎花半身裙网红气质两件套"
        }
      ],
      tupian: [
        {
          imgUrl:
            "https://goods1.juancdn.com/goods/180714/0/6/5b4a05abb6f8ea4fd6509d8b_775x847.png"
        },
        {
          imgUrl:
            "https://goods2.juancdn.com/goods/180714/3/8/5b4a059cb6f8ea4fe553aaea_750x411.jpg"
        },
        {
          imgUrl:
            "https://goods5.juancdn.com/goods/180714/8/e/5b4a05af33b08952062a742e_750x1070.jpg"
        },
        {
          imgUrl:
            "https://goods3.juancdn.com/goods/180714/5/4/5b4a05b433b0894e94491f7b_750x974.jpg"
        },
        {
          imgUrl:
            "https://goods4.juancdn.com/goods/180714/7/e/5b4a05b833b0894edd0e13c6_750x889.jpg"
        },
        {
          imgUrl:
            "https://goods2.juancdn.com/goods/180714/3/4/5b4a05bc33b0894e9d52c0c8_750x1108.jpg"
        },
        {
          imgUrl:
            "https://goods7.juancdn.com/goods/180714/d/4/5b4a05bfb6f8ea4fed778918_750x820.jpg"
        },
        {
          imgUrl:
            "https://goods6.juancdn.com/goods/180714/b/2/5b4a05c6b6f8ea5035170c00_750x970.jpg"
        },
        {
          imgUrl:
            "https://goods7.juancdn.com/goods/180714/c/a/5b4a05cab6f8ea500f28c202_750x750.jpg"
        },
        {
          imgUrl:
            "https://goods2.juancdn.com/goods/180714/2/b/5b4a05ceb6f8ea502b4f1b3e_750x750.jpg"
        },
        {
          imgUrl:
            "https://goods2.juancdn.com/goods/180714/2/8/5b4a05d0b6f8ea4fdc1945fe_750x750.jpg"
        },
        {
          imgUrl:
            "https://goods5.juancdn.com/goods/180714/9/7/5b4a05d233b08952431d8a13_750x686.jpg"
        }
      ],
      isStatus: false,
      choice: [
        {
          imgUrl:
            "https://goods7.juancdn.com/bao/170628/d/5/5953657a5a3f3207e8694821_180x90.png?iopcmd=convert&Q=88&dst=png",
          Lot: "一蓝轩美妆进口美妆上新专场",
          Number: "4.7"
        }
      ],
      img: [
        {
          imgUrl:
            "https://goods7.juancdn.com/goods/180309/d/9/5aa267e1a9fcf84af816cc5a_800x800.jpg?iopcmd=thumbnail&type=11&height=350&width=350"
        },
        {
          imgUrl:
            "https://goods7.juancdn.com/goods/180309/d/9/5aa2683aa9fcf854376a9e57_800x800.jpg?iopcmd=thumbnail&type=11&height=350&width=350"
        },
        {
          imgUrl:
            "https://goods6.juancdn.com/goods/180309/b/9/5aa2693d8150a15b8d4fef5e_800x800.jpg?imageMogr2/thumbnail/350x350!"
        },
        {
          imgUrl:
            "https://goods3.juancdn.com/goods/180309/5/9/5aa276508150a15a6e3bcc7e_800x800.jpg?iopcmd=thumbnail&type=11&height=350&width=350"
        }
      ],
      service: ["图片详情", "商品参数", "咨询与售后"],
      parameters:[
        {
          shipments :'发货地',
          normal:'泰国',
        },
        {
          shipments  :'运费',
          normal:'包邮',
        },
        {
          shipments :'是否为...',
          normal:'否',
        },
        {
          shipments :'规格类型',
          normal:'正常规格',
        },
        {
          shipments :'功效',
          normal:'保湿/补水',
        },
        {
          shipments :'产地',
          normal:'泰国',
        }

      ],
      hint:[
          {
            prompt:'1.卷皮海淘产品的发货方式有两种：一种是海外商家从海外直邮给您，商品将由国际快递直发，由卷皮代您办理繁杂的清关手续，通常需要两周时间;另一种是国内商家从保税仓发货，卷皮上的卖家将商品提前储存在国内保税仓，您下单后直接由国内快递寄出，通常3-6天达到。'
          },
          {
            prompt:'2.海关规定，公民个人包裹办理入境清关手续需提交收件人身份证明。您在卷皮首次购买海淘产品的，需要在支付页面录入您的身份证号码。您的个人身份信息仅用于办理清关手续，卷皮将确保您的个人信息安全。您只需填写一次便可终身享受卷皮提供的海淘服务。'
          },
          {
            prompt:'3.在办理清关事务时，海关需要提取支付信息。您需要在线完成订单支付，卷皮才能帮您办理清关手续。如图4所示，单次购买海淘商品一单不得超出两千元。'
          },
          {
            prompt:'4.为了节省您的预算，等待时间，您在付款时订单信息已同时发送至海外仓库或保税仓库以及海关。因此订单一旦审核通过则表示相关信息已经提交给海关人员审核，所以此时订单无法取消，请您谅解单次购买海淘商品一单不得超出两千元。'
          },
          {
            prompt:'5.发票是我国特有的统一税务凭据。海淘模式下，商品相当由海外商家直接销售给您，所以无法提供发票。包裹内的装箱单即是您从商家购买的凭据。'
          },
          {
            prompt:'7.周末和法定休息日，您的包裹会自动顺延。'
          }
        ]
    };
  },
  components: {
    detailPopUp
  },
  methods: {
    //轮播图插件
    getBanners() {
      Vue.nextTick(() => {
        new Swiper(this.$refs.el, {
          pagination: {
            el: ".swiper-pagination"
          }
        });
      });
    },

    //点击弹窗显示隐藏
    xuanfun(type) {
      this.isStatus = true;
      //点击判断是点到哪一个弹窗赋值传给弹窗组件
      this.popType = type;
    },

    //传给弹窗组件点击显示隐藏
    closePopUp() {
      this.isStatus = false;
    },

    clickSure(){
      this.isStatus = false;
    },

    cartCli(){
      this.$http.get(`https://webservice.juanpi.com/api/getMemberAboutInfo?goods_id=83478398&sa_id=17946898&is_pt_goods=0&req_coupons_id=${this.id}`).then(res =>{
        console.log(res.data.skudata)
      })
    }
  },

  //当数据已经挂载好了，更新轮播图
  created() {
    this.getBanners();
    this.goodId = this.$route.query.id
    this.cartCli()
  }
};
</script>

<style scoped lang="scss">
.juanpi {
  padding-bottom: 0.5rem;
}

  // <!-- 商品信息 -->
.introduce {
  height: 1.2rem;
  padding: 0.14rem;
  background: #fff;
  div:nth-child(1) {
    display: flex;
    justify-content: space-between;
    height: 0.4rem;
    align-items: center;
    color: #999;
    p {
      span:nth-child(1) {
        font-size: 0.18rem;
        color: red;
      }
      span:nth-child(2) {
        text-decoration: line-through;
        padding-right: 0.1rem;
      }
    }
  }
  div:nth-child(2) {
    display: flex;
    justify-content: space-between;
    height: 0.5rem;
    align-items: center;
    font-size: 0.16rem;
    p {
      width: 3rem;
    }
    i {
      font-size: 0.2rem;
    }
  }
}

//  <!-- 活动售后 -->
.activity {
  margin-top: 0.1rem;
  margin-bottom: 0.1rem;
  height: 0.8rem;
  background: #fff;
  div:nth-child(1) {
    display: flex;
    justify-content: space-between;
    padding: 0 0.14rem;
    height: 0.4rem;
    align-items: center;
    border-bottom: 1px solid #f2f2f2;
    p {
      span:nth-child(1) {
        background-color: #ff464e;
        font-size: 0.14rem;
        color: #ffffff;
        line-height: 1;
      }
    }
    i {
      font-size: 0.16rem;
      color: #ccc;
    }
  }
  div:nth-child(2) {
    display: flex;
    justify-content: space-between;
    padding: 0 0.14rem;
    height: 0.4rem;
    align-items: center;
    span {
      padding: 0 0.04rem;
    }

    i {
      font-size: 0.16rem;
      color: #ccc;
    }
  }
}

// <!-- 尺码颜色选择 -->
.choose {
  display: flex;
  justify-content: space-between;
  padding: 0 0.14rem;
  height: 0.5rem;
  background: #fff;
  align-items: center;
  font-size: 0.14rem;
  i {
    font-size: 0.18rem;
    color: #999;
  }
}


//  <!-- 店铺专场 -->
.business {
  background: #fff;
  margin-top: 0.1rem;
  padding: 0 0.14rem;
  margin-bottom: 0.1rem;
  .business_d {
    display: flex;
    justify-content: space-between;
    height: 0.8rem;
    align-items: center;

    img {
      width: 0.4rem;
      height: 0.26rem;
    }
    .business_dgm {
      width: 2;
      height: 0.8rem;

      p:nth-child(1) {
        font-size: 0.16rem;
        height: 0.6rem;
        line-height: 0.6rem;
      }
      p:nth-child(2) {
        font-size: 0.12rem;
        color: #999;
      }
    }
    .business_dzc {
      border: 1px solid #ccc;
      padding: 0.06rem 0.1rem;
      font-size: 0.12rem;
      span {
        padding-right: 0.04rem;
      }
    }
  }

  .business_img {
    border-bottom: 1px solid #ccc;
    display: flex;
    div {
      width: 25%;
      img {
        width: 100%;
      }
    }
  }
  .business_shop {
    height: 0.5rem;
    line-height: 0.5rem;
    text-align: center;
    background: #fff;
    margin-bottom: 0 0.1rem;
    
    a{
      font-size: 0.16rem;
    }
  }
}

//  <!-- 模拟数据循环生成:图片详情, 商品参数, 咨询与售后 -->
.parameter {
  background: #fff;

  .parameter_t {
    display: flex;
    height: 0.6rem;
    align-items: center;
    justify-content: space-around;

    div {
      width: 33%;
      text-align: center;
      line-height: 0.3rem;
      height: 0.3rem;
      
      span {
        width: 100%;
      }
    }
    .active{
      background: #ccc;
    }
  }

}

// <!-- 商品详情 -->
.sc-hEsumM {
  img {
    width: 100%;
  }
    .sc-ktHwxA{
    padding: 0 0.2rem;
    height: 0.5rem;
    background: #fff;
    line-height: 0.5rem;
    margin-bottom: 0.1rem;
  }
}


//产品参数
.parameters{
  background: #fff;
  div{
    height: 0.36rem;
    line-height: 0.36rem;
    padding-left: 0.2rem;

    span{
      display: inline-block;
      width:0.8rem;
      font-size: 0.14rem;
    }

    span:nth-child(1){
      color: #999;
    }
  }
}


  // <!-- 咨询与售后 -->
  .Customer_Service{
    h3{
      height: 0.4rem;
      line-height: 0.4rem;
      text-align: center;
    }

    div{
      padding:0 0.2rem;
      padding-bottom: 0.2rem;
    }
  }
   

// <!-- 底部 -->
.sc-box {
  height: 0.5rem;
  padding-left: 0.1rem;
  background: #fff;
  position: fixed;
  bottom: 0;
  width: 100%;

  .sc-gqPbQI {
    display: flex;
    justify-content: space-between;
    height: 0.5rem;
    align-items: center;

    a {
      display: flex;
      text-align: center;
      flex-flow: column;
      font-size: 0.13rem;
      color: #333;
    }

    div {
      display: flex;
      flex-flow: column;
      text-align: center;
      font-size: 0.13rem;
      color: #333;
    }
    .jiarucar {
      background: #ff464e;
      height: 0.5rem;
      width: 1.4rem;
      line-height: 0.5rem;
      color: #ffffff;
      text-align: center;
      font-size: 0.14rem;
    }
  }
}
</style>