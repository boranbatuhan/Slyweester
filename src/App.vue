<script setup>
import loadingScene from "/src/components/loadingScene.vue"
import sideMenu from "/src/components/sideMenu.vue"
import tagsMenu from "/src/components/tagsMenu.vue"
import store from "/src/store"
import router from "/src/router"



</script>
<template>
<div class="flex items-center justify-center  w-full h-[100dvh]  flex-col md:flex-row overflow-hidden">
<loadingScene></loadingScene>
  <sideMenu v-if="store.state.activePage"  class=" shrink-0 w-full h-full border-t md:border-t-0 basis-1/12 md:basis-1/4 order-2 md:order-1" ></sideMenu>
  <router-view :key="router.currentRoute.value.fullPath" :class="{'basis-full md:!basis-full':store.state.activePage==false, 'basis-11/12 md:!basis-2/4 border-0 md:border-x order-1 md:order-2':store.state.activePage==true}" class="  shrink-0 w-full h-full  "></router-view>
  <tagsMenu v-if="store.state.activePage" class="border-y md:border-0 shrink-0 w-full h-full basis-1/12 md:basis-1/4 order-2 md:order-3 hidden md:inline-flex" ></tagsMenu>
</div>

</template>