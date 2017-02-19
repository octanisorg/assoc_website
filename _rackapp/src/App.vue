<template>
  <div class="main">
    <transition name="fade" mode="out-in">
        <router-view></router-view>
    </transition>
   </div>
</template>

<script>

export default {
  name: 'app',

  data () {
    return {
        items: [{
                label: '3dprinting',
                title: '3D Printing',
                question: "What are you printing?",
                img_url: "http://lorempixel.com/100/100/"
              },
              {
                label: 'soldering',
                title: 'Soldering',
                question: "What are you soldering?",
                img_url: "http://lorempixel.com/100/100/"

              },
              {
                label: 'soldering',
                title: 'Soldering',
                question: "What are you soldering?",
                img_url: "http://lorempixel.com/200/200/"

              }]
            }
    }

}
</script>


<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
}
</style>
