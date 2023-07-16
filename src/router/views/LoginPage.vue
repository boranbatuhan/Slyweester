<script setup>
import logo from "/src/components/logo.vue"
import login from "/src/components/login.vue"
import createAccount from "/src/components/createAccount.vue"
import { ref } from "vue"



const modalName = ref();
const modals = {
  login,
  createAccount,
}


</script>

<template>
    <div class=" flex items-start justify-start  md:items-center md:justify-center flex-col md:flex-row max-w-screen h-screen overflow-x-hidden">
        <!-- photo area -->
        <div class="imgbg basis-1/12 md:basis-1/3 w-full h-full box-border  order-2 md:order-1 bg-[url('/src/assets/logins.webp')] object-fill flex items-center justify-center ">
            <svg class=" scale-75 md:scale-100" version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="256" height="256" viewBox="0 0 500.000000 500.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)"
fill="#ffffff" stroke="none">
<path d="M3760 4683 c-129 -110 -369 -288 -505 -373 -235 -148 -504 -266 -652
-286 -50 -6 -51 -6 -116 48 -132 108 -315 194 -546 254 -126 34 -137 35 -200
24 -131 -23 -276 -82 -393 -161 -32 -22 -94 -50 -145 -66 -87 -27 -91 -27
-328 -24 -236 2 -402 -8 -479 -30 -56 -16 -136 -101 -180 -191 -38 -79 -62
-207 -51 -275 13 -81 29 -141 52 -200 l25 -62 -31 -93 c-62 -187 -78 -320 -51
-417 24 -90 173 -201 390 -294 140 -59 222 -79 505 -127 473 -80 622 -133 781
-282 120 -113 153 -184 264 -568 122 -424 213 -825 245 -1085 28 -225 29 -226
43 -75 74 806 206 1348 366 1514 49 50 105 69 369 121 214 43 297 69 442 139
198 95 374 226 598 445 130 127 143 144 220 276 197 341 359 704 427 960 29
108 57 282 47 291 -3 3 -36 -16 -73 -41 -263 -177 -759 -325 -1182 -352 l-103
-6 64 129 c180 361 285 673 275 820 l-3 51 -75 -64z m-2075 -828 c174 -37 342
-154 486 -337 37 -47 28 -42 -67 35 -225 183 -591 242 -957 153 -54 -13 -97
-22 -97 -20 0 2 35 24 77 49 203 119 382 157 558 120z"/>
</g>
            </svg>
        </div>
        <!-- content area -->
        <div class="basis-11/12 md:basis-2/3 w-full h-fit md:h-full box-border shrink-0 order-1 md:order-2 flex flex-col items-start justify-start pt-5 pl-8 md:pt-10 md:pl-10 md:overflow-y-auto pb-10 md:pb-0">
            <component :is="modals[modalName]"></component>
            <logo class=" mb-6 md:mb-16 scale-75 md:scale-100" ></logo>
            <h1 class="text-white/90 text-7xl font-extrabold tracking-wide  mb-16 w-full md:w-[480px] ">
                Şu anda olup bitenler
            </h1>
            <h1 class="text-white/90 text-3xl font-extrabold tracking-wide  mb-8 ">
                Slyweester'a bugün katıl.
            </h1>
            <div class="w-72 select-none cursor-pointer hover:saturate-[.75] h-10 my-1 px-2 py-1 gap-3 bg-white text-black/70 rounded-full flex items-center justify-center">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="16" height="16"><g><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path><path fill="none" d="M0 0h48v48H0z"></path></g></svg>
                <p>Google ile kaydolun</p>
            </div>
            <div @click="modalName='createAccount'" class="w-72 select-none cursor-pointer hover:saturate-[.75] h-10 px-2 py-1 bg-sl-blue text-white font-bold  rounded-full flex items-center justify-center">
                    <p>Hesap oluştur</p>
            </div>
            <p class="text-white font-bold text-sm my-1">Zaten bir hesabın var mı?</p>
            <div @click="modalName='login'" class="w-72 select-none cursor-pointer hover:saturate-[.75] h-10 mb-1 px-2 py-1 bg-black hover:bg-sl-blue/10 border border-sl-blue text-sl-blue font-bold rounded-full flex items-center justify-center">
                    <p>Giriş yap</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.imgbg{
    background: #000 url('src/assets/logins.webp') left top/cover no-repeat local;
}
</style>