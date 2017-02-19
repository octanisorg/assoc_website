<template>
  <div id="hello">
    <img src="http://vuejs.org/images/logo.png">
    <router-link to="items">Get Started</router-link>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
