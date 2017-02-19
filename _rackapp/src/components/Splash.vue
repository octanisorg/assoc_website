<template>
  <div id="hello">
     <router-link to="items"class="btn btn--large btn--default cta">Get Started</router-link>
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
