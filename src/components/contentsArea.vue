<script setup>
import newSlywet from '/src/components/newSlywet.vue';
import slyweetCard from '/src/components/slyweetCard.vue';
import store from "/src/store"

</script>


<template>
    <div class="overflow-x-hidden overflow-y-scroll pb-10 w-full flex items-center justify-start flex-col  ">
        <div class="hidden md:inline-flex h-10 py-2 sticky top-0 bg-sl-black w-full z-[999] text-white tracking-widest  ">
            <p class="animate-pulse text-center w-full duration-[20000ms]">
                slyweester
            </p>
        </div>
        <newSlywet></newSlywet>
        <slyweetCard class="px-2" v-for="sly in store.state.slyweets" :key="sly" :id="sly.id" :content="sly.content" :date="sly.date" :name="sly.name" :tag="sly.tag" :like="9760" ></slyweetCard>
 

    </div>
</template>