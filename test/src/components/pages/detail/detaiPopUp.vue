<template>
    <div class="markBox">

      <!-- 满减活动弹窗 -->
        <div class="chooseBox choose_hd" :key='aa' v-if='aa==1'>
            <div>
                  <span></span>
                  <span>促销</span>
                  <i class="fa fa-times" aria-hidden="true" @click="close"></i>
            </div>

            <div>
                <p> 
                    <span>任选</span>
                    <span>99件3件任选</span>
                </p>
                <i class="fa fa-chevron-right" aria-hidden="true"></i>
            </div>
        
        </div>
       
       <!-- 服务说明弹窗 -->
       <div class="chooseBox" :key="aa" v-if="aa==2"> 
           <div class="explain"><span></span><span>服务说明</span><i class="fa fa-times" aria-hidden="true" @click="close"></i></div>
           <div class="maxHeight">
             <div v-for="(item,id) in process" :key="id" class="explain_bz">
               <h3>{{item.title}}</h3>
               <div>
                   <p>{{item.explain}}</p>
                   <i class="fa fa-chevron-right" aria-hidden="true"></i>
               </div>
              </div>
           </div>
          <div @click="close" class="btn_zdl">知道了</div>
       </div>

      <!-- 颜色尺码弹窗 -->
       <div class="chooseBox" :key='aa' v-if="aa==3">
           <div class="chooseBox_tow">
                <div>
                    <img :src="styles.imgUrl" alt="">
                    <div>
                        <span class="chooseBox_tow_span">￥{{styles.price}}</span>
                        <p>已选择: <span></span><span></span></p>
                    </div>
                    <i class="fa fa-times" aria-hidden="true" @click="close"></i>
                </div>
                <div>
                    <h3>{{styles.title1}}</h3>

                    <p class="chooseBox_p" >
                      <span v-for="(item,id) in styles.colors" :key="id+'a'" :class="table===id?'switch':''" @click="toggle(item,id)">{{item.colors}}</span>                      
                    </p>
                </div>
                <div>
                    <h3>{{styles.title2}}</h3>
                    <p class="chooseBox_p"><span v-for="(item,idx) in styles.guige" :key="idx+'i'" :class="guige===idx?'switch':''" @click="guige=idx">{{item.gaine}}</span></p>
                </div>

                <div class="chooseBox_qty">
                    <span>{{styles.title3}}</span>
                    <p class="chooseBox_qty_p"><span @click="styles.qty==1?1:styles.qty--">-</span><span>{{styles.qty}}</span><span @click="styles.qty++">+</span></p>
                </div>
           </div>
          <div @click="clickSure" class="chooseBox_sure">确定</div>
       </div>
    </div>
</template>
 
<script>
export default {
  name: "dataiPopUp",
  data() {
    return {
      process: [
        {
          title: "正品保障",
          explain:
            "卷皮全球购的所有商品皆在海关总署备案，每一批次的产品皆由国家出入境检验检疫局查验货物并出具通关单。卷皮全球购的线上交易环节、仓储物流环节、通关发货环节全程受海关监督，每单必检，保证100%正品。"
        },
        {
          title: "海外直采",
          explain:
            "卷皮全球购拥有专业的国际采购团队，特赴品牌原产地直接采购，与品牌方或总代理签订合作协议，减去中间环节，保证商品的低价与日期的新鲜."
        },
        {
          title: "免税包邮",
          explain:
            "税费全免，支持全国绝大部分地区包邮（偏远地区除外），让消费者以实惠的价格，享受到国际高性价比的商品。"
        },
        {
          title: "售后补贴",
          explain:
            "商品存在问题时，请及时申请售后，卷皮将提供价值10元的退货运费补贴。如遇少件、错发、空包裹等情况，还额外提供至少10元的补偿（详见“客服中心”相关规则说明）。"
        }
      ],
      styles: {
          imgUrl:
            "https://goods8.juancdn.com/goods/180406/e/1/5ac728088150a153743acd0b_800x800.jpg?imageMogr2/thumbnail/145x145!",
          price: "88",
          title1: "颜色",
          colors: [
            {
              colors:"金色款",
            },
            {
              colors: "银色款",
            }
          ],
          guige:[
            {
              gaine: "10片/盒",
            },
            {
               gaine: "6片/盒"
            }
            
          ],
          title2: "规格",
          title3:'购买数量',
          qty:'1',
        },
        table:'',
        guige:'',
        datalist:{},
    };
  },
  components: {},
  created() {
    console.log(this.close);
  },
  props: ["close", "aa"],
  methods: {
    toggle(item,id){
      console.log(this.datalist)
      this.datalist.color=item.colors
      console.log(this.datalist)
      this.table=id
      this.datalist['imgUrl']=this.styles.imgUrl;
      this.datalist.price=this.styles.price;
    },
    clickSure(){
      console.log(this.datalist)
    }
  }
};
</script>



<style scoped lang="scss">

//蒙层样式 公共弹窗样式
.markBox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;

  .chooseBox {
    background: #fff;
    position: fixed;
    bottom: 0;
    width: 100%;
  }

  //  <!-- 满减活动弹窗 -->
  .choose_hd {
    height: 2.5rem;

    div:nth-child(1) {
      display: flex;
      justify-content: space-between;
      padding: 0 0.2rem;
      height: 0.5rem;
      align-items: center;
      font-size: 0.16rem;
      border-bottom: #ccc;
      border-bottom: 1px solid #f2f2f2;
      i {
        font-size: 0.2rem;
        color: #9b9b9b;
      }
    }
    div:nth-child(2) {
      height: 0.5rem;
      display: flex;
      justify-content: space-between;
      padding: 0 0.2rem;
      align-items: center;
      border-bottom: 1px solid #f2f2f2;
      p {
        span:nth-child(1) {
          color: #ff464e;
          border: 1px solid #ff464e;
          font-size: 0.12rem;
          text-align: center;
          height: 0.2rem;
          padding: 0 0.02rem;
        }
      }
      i {
        color: #9b9b9b;
      }
    }
  }

  //  <!-- 服务说明弹窗 -->
  .explain {
    height: 0.5rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 0.16rem;
    border-bottom: 1px solid #ddd;
    width: 100%;

    i {
      font-size: 0.2rem;
      color: #ccc;
    }
  }
  .maxHeight{
    max-height: 3rem;
    overflow-y: scroll;
  }
  //  <!-- 服务说明弹窗 -->
  .explain_bz {
  
    border-bottom: 1px solid #ccc;
    h3 {
      height: 0.3rem;
      line-height: 0.3rem;
      padding: 0 0.1rem;
    }
    div {
      height: 0.8;
      padding: 0.04rem 0.1rem;
      justify-content: space-between;
      display: flex;
      align-items: center;
      p {
        width: 3.3rem;
        font-size: 0.12rem;
        color: #9b9b9b;
      }
      i {
        color: #9b9b9b;
      }
    }
  }
  .btn_zdl {
    height: 0.5rem;
    text-align: center;
    font-size: 0.16rem;
    line-height: 0.6rem;
    background: #ff464e;
    color: #fff;
  }



  //  <!-- 颜色尺码弹窗 -->
  .chooseBox_tow {
    div:nth-child(1) {
      height: 1.26rem;
      justify-content: space-around;
      display: flex;
      align-items: center;
      font-size: 0.14rem;

      div{
          .chooseBox_tow_span{
              color: #ff464e;
          }
      }
      i{
          height: 0.24rem;
          width: 0.24rem;;
          font-size: 0.2rem;
          color: #9b9b9b;
      }
    }

    div:nth-child(2){
        padding: 0 0.2rem;
        h3{
            height:0.4rem;
            font-size: 0.16rem;
            line-height: 0.4rem;
        }
        .chooseBox_p{
            height: 0.6rem;

            span{
                display:inline-block;
                width: 1rem;
                height: 0.3rem;
                text-align: center;
                border: 1px solid #9b9b9b;
                line-height:0.3rem;
                margin-right: 0.2rem; 
            }
        }
    }
    div:nth-child(3){
        padding: 0 0.2rem;
        h3{
            height:0.4rem;
            font-size: 0.16rem;
            line-height: 0.4rem;
        }
        .chooseBox_p{
            height: 0.6rem;

            span{
                display:inline-block;
                width: 1rem;
                height: 0.3rem;
                text-align: center;
                border: 1px solid #9b9b9b;
                line-height:0.3rem;
                margin-right: 0.2rem; 
            }
        }
    }
    .chooseBox_qty{
        height: 0.5rem;
        display: flex;
        padding: 0 0.2rem;
        align-items: center;
        justify-content: space-between;
        font-size: 0.16rem;

        .chooseBox_qty_p{
            
              span:nth-child(2){
                display: inline-block;
                width: 0.5rem;
                padding:0 0.2rem;
                
              }
                span:nth-child(1),span:nth-child(3){
                display: inline-block;
                width: 0.3rem;
                height:0.3rem;
                text-align: center;
                line-height: 0.3rem;
                background: #ccc;
                
              }
           }
    }

    
  }
  .chooseBox_sure{
        height: 0.5rem;
        text-align: center;
        font-size: 0.16rem;
        line-height: 0.6rem;
        background: #ff464e;
        color: #fff;
       }
}
.switch{
  background: #ff464e;
  color: #fff;
}
</style>
