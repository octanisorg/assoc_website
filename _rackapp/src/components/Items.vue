<template>

  <div class="padded">
    <h1>What will you do today?</h1>

    <div id="items">

      <div class="item" v-for="item of items">

        <router-link :to="{ name: 'item', params: { id: item.label }}">
          <img :src="item.img_url" alt="" />
          <h2>{{item.title}}</h2>
        </router-link>
      </div>



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
  border-bottom: 4px solid #ffc600;
  width: 20%;
  margin: 5%;
  float: left;
}

.item img {
  width: 100%;
  filter: brightness(45%);
  -webkit-filter: brightness(45%);
  -moz-filter: brightness(45%);
  -o-filter: brightness(45%);
  -ms-filter: brightness(45%);
}

.item img:hover {
  width: 100%;
  filter: brightness(100%);
  -webkit-filter: brightness(100%);
  -moz-filter: brightness(100%);
  -o-filter: brightness(100%);
  -ms-filter: brightness(100%);
}

h2 {
  position: absolute;
  top:200px;
  width:100%;
  color: white;
  font-weight: bold;
  padding: 5px;
  font-size: 2.5em;
}
</style>
