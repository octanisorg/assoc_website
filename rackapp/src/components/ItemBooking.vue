<template>
  <div id="itembooking">

    <h1>{{item.title}}</h1> Guide: {{item.guide_url}}

    <horizontal-booking></horizontal-booking>


    <router-link to="">Book</router-link>
    <router-link to="/items">Cancel</router-link>

  </div>

</template>

<script>
import HorizontalBooking from './HorizontalBooking.vue'

export default {
  name: 'itembooking',
  components: {
    HorizontalBooking
  },
  data: function() {

      var item;
      for (var i = 0; i < this.$parent.items.length; i++) {
        console.log(i);
        if(this.$parent.items[i].label == this.$route.params.id) {
          item = this.$parent.items[i];
          console.log(item);
          break;
        }
      }

      return {
        item
      }

  }
}
</script>

<style>

</style>
