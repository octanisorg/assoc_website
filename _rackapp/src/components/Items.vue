<template>
  <div id="items">

    <div class="item" v-for="item of items">
      {{item.title}}<br />
      <img :src="item.img_url" alt="" /><br/>
      <router-link :to="{ name: 'item', params: { id: item.label }}">View Details</router-link>
    </div>


  </div>

</template>

<script>
export default {
  name: 'items',
  data () {
    return {
      items:  this.$parent.items
    }
  }
}
</script>

<style>
.item{
  flex-wrap: wrap;
}
</style>
