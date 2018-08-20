<template>
    <div>
      <home-top></home-top>
      <home-list></home-list>
      <home-bottom></home-bottom>
    </div>
</template>

<script>
import homeTop from './homeTop';
import homeList from './homeList';
import homeBottom from './homeBottom';
export default {
  name: "",
  data() {
    return {
     
    };
  },
  components: {
    homeTop,
    homeList,
    homeBottom
  },
  created() {

  },
  methods: {
    
  }
};
</script>