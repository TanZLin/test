<template>
    <div class="juanpi">
        <div class="closed">
            <div @click="search_t">
              <i class="fa fa-search" aria-hidden="true"></i>
              <span class="closed-s">卷皮</span>
              <span>搜索</span>
            </div>
            <div><i class="fa fa-bars" aria-hidden="true"></i></div>
        </div>
        <div class="swiper-container"  ref = "el">
            <div class="swiper-wrapper">
                <div v-for="(item,i) in banners" :key="i+'i'" class="swiper-slide">
                    <img :src="item.pic" alt="" width="100%">
                  
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>

        <div class="activity">
          <ul>
            <li v-for="(item,idx) in activity" :key="idx" @click="click_activity(idx)">
              <img :src="item.child[0].pic" alt="">
            </li>
          </ul>
        </div>
        <div class="qixi" v-if="topInfo.data"><img :src="topInfo.data[0].child[0].pic" alt=""></div>
        <div class="jingxuan" v-if="topInfo.data"><img :src="new_product.data[0].child[0].pic" alt=""></div>
    </div>
</template>

<script>
import Swiper from "swiper";
import Vue from "vue";
export default {
  name: "homeTop",
  data() {
    return {
      banners: [],
      activity: [],
      topInfo:{},
      new_product:{},
    };
  },
  components: {},
  methods: {
    getBanners() {
      this.$http.get("https://webservice.juanpi.com/api/getIndexFirstPaintInfo?cid=&zy_ids=p8_c3_l4_1456_51_1391_1406_18_1371_1217_5_128&app_name=zhe&app_version=&platform=&catname=newest_zhe").then(res => {
          
          this.banners = res.data.adsInfo.slide_ads.config.slide;
          this.activity = res.data.adsInfo.block[0].multi_block[0].data
          this.topInfo = res.data.adsInfo.block[0].multi_block[1]
          this.new_product = res.data.adsInfo.block[0].multi_block[2]

          Vue.nextTick(() => {
            new Swiper(this.$refs.el, {
              autoplay: true,
              pagination: {
                el: ".swiper-pagination"
              }
            });
          });
        });
    },
    search_t() {
      this.$router.push({
        path: "/homesearch",
        query: {
          name: "lily",
          age: "18"
        }
      });
    },
    click_activity(idx) {
      if (idx == 0) {
        console.log("跳转瓜分60元页面");
      } else if (idx == 1) {
        console.log("跳转限时秒杀页面");
      } else if (idx == 2) {
        console.log("跳转品牌特卖页面");
      } else {
        console.log("跳转拼好货页面");
      }
    }
  },
  created() {
    this.getBanners();
  }
};
</script>

<style scoped lang="scss">
.juanpi {
  width: 100%;
  .app-download {
    img {
      width: 100%;
    }
  }
  .closed {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.1rem;
    height: 0.46rem;
    background: #fff;
    div:nth-child(1) {
      width: 3.22rem;
      height: 0.26rem;
      line-height: 0.26rem;
      font-size: 0.12rem;
      background: #f2f2f2;
      padding-left: 0.1rem;
      border-radius: 3%;

      .closed-s {
        color: #ff5159;
      }
    }
    div:nth-child(2) {
      i {
        font-size: 0.26rem;
        color: #838383;
      }
    }
  }

  .swiper-container {
    img {
      width: 100%;
    }
  }

  .activity {
    ul {
      display: flex;
      li {
        flex: 1;
        img {
          width: 100%;
        }
      }
    }
  }

  .qixi {
    img {
      width: 100%;
    }
  }
  .jingxuan {
    margin-top: 0.1rem;
    margin-bottom: 0.1rem;
    img {
      width: 100%;
    }
  }
}
</style>
