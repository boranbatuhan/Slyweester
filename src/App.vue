<script setup>
import loadingScene from "/src/components/loadingScene.vue"
import sideMenu from "/src/components/sideMenu.vue"
import tagsMenu from "/src/components/tagsMenu.vue"
import store from "/src/store"


</script>
<template>
<div class="flex items-center justify-center  w-full h-screen  flex-col md:flex-row">
<loadingScene></loadingScene>
  <sideMenu v-if="store.state.activePage"  class=" shrink-0 w-full h-full basis-1/12 md:basis-1/4 order-1 md:order-1" ></sideMenu>
  <router-view :class="{'basis-11/12 md:!basis-full':store.state.activePage==false, 'basis-11/12 md:!basis-2/4 border-0 md:border-x order-3 md:order-2':store.state.activePage==true}" class="  shrink-0 w-full h-full  "></router-view>
  <tagsMenu v-if="store.state.activePage" class="border-y md:border-0 shrink-0 w-full h-full basis-1/12 md:basis-1/4 order-2 md:order-3 hidden md:inline-flex" ></tagsMenu>
</div>

</template>