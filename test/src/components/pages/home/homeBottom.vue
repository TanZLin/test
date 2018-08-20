<template>
    <div class="juanpi">
            <div class="bottom-nan">
                <div v-for="(item,i) in bottom" :key="i">
                  <i :class="'fa fa-'+item.icon"></i>
                  <span>{{item.title}}</span>
                </div>
            </div>
    </div>
    
</template>

<script>
export default {
  name: "homeBottom",
  data() {
    return {
      bottom: [
        { id: 1, title: "首页", icon: "home", name: "home" },
        { id: 2, title: "分类", icon: "calendar", name: "home" },
        { id: 3, title: "购物车", icon: "shopping-cart", name: "home" },
        { id: 4, title: "我的卷皮", icon: "user-o", name: "home" }
      ]
    };
  },
  components: {},
  created() {
   
  },
  methods: {}
};
</script>

<style scoped lang="scss">
.juanpi{
    height: 0.5rem;
}
.bottom-nan {
  height: 0.5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid #ccc;
  background: #fff;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 1000;
  div {
    display: flex;
    flex-flow: column;
    text-align: center;
    font-size: 0.14rem;
  }
}
</style>
