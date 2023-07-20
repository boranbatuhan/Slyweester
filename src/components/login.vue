<script setup>
import logo from "/src/components/logo.vue"
import { computed, onMounted, reactive, ref } from "vue";
import router from "/src/router"


const props = defineProps({
    closeModal:Function
})

const step=ref(1)

const showPw=ref(false)

const isEmail = ref(false)

const loginForm=reactive({
    name:"",
    password:"",
})

const formActives=reactive({
    name:false,
    password:false,
})

const clickFocus=(id)=>{
    for (const key in formActives) {
    if (key === id) {
        formActives[key] = true;
    } else {
        if(loginForm[key] !='')
      formActives[key] = true;
      else
      formActives[key] = false;
    }
  }
}
const reset=()=>{
    formActives.name=false
    formActives.password=false

    loginForm.name=""
    loginForm.password=""
}



const checkName = computed(() => {
    return loginForm.name.length < 3 ? true : false
});
const checkPw = computed(() => {
    return loginForm.password.length < 6 ? true : false
});

const forward=()=>{
    step.value++
    if(loginForm.name.includes('@')&& loginForm.name.includes('.com'))
    {
        isEmail.value=true
    }
    else{
        isEmail.value=false
    }
}

const toggleShowPw =()=>{
    showPw.value = !showPw.value
    const pw = document.querySelector("#password")
    pw.type= showPw.value ? "text" : "password"
}
const login = ()=>{
router.push("/home")
}

onMounted(()=>{

    document.addEventListener('mousedown',(event)=>{
        clickFocus(event.target.id.toLowerCase())
    })

})



</script>

<template>
    <div class="w-screen h-screen fixed top-0 left-0 bg-sl-black md:bg-zinc-700/50 z-[999] flex items-center justify-center">
        
        <div  class="w-full h-[90dvh] md:w-[500px] md:h-[500px] shrink-0 rounded-none  md:rounded-2xl bg-sl-black flex items-center justify-center flex-col overflow-y-auto">
            <!-- close area -->
            <div class=" w-full  text-white  flex items-center justify-center relative"> 
                <svg @click="props.closeModal()" class="hover:text-sl-blue absolute top-1/2 left-5 -translate-y-1/2" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="m13.41 11.996 4.3-4.29a1.004 1.004 0 1 0-1.42-1.42l-4.29 4.3-4.29-4.3a1.004 1.004 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a.999.999 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1.001 1.001 0 0 0 1.639-.325 1 1 0 0 0-.22-1.095l-4.3-4.29Z"></path>
                </svg>
                <logo class="h-9 opacity-80 hover:opacity-100"></logo>
            </div>


            <!-- username mail TAB -->
            <div v-if="step==1" class=" w-full h-full px-12 md:px-24 py-2 md:py-2 flex items-start justify-start gap-6 md:gap-3 flex-col">
                <p class="text-white/90 font-bold md:mt-4 mt-10 text-2xl md:text-3xl">Slyweester'a giriş yap</p>
               
                <!-- open google -->
                <div class="w-full select-none cursor-pointer hover:saturate-[.75] h-10 my-1 px-2 py-1 gap-3 bg-white hover:bg-zinc-100 text-zinc-600 rounded-full flex items-center justify-center font-bold text-sm">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="16" height="16"><g><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path><path fill="none" d="M0 0h48v48H0z"></path></g></svg>
                <p>Google ile oturum açın</p>
                </div>
               <!-- or row -->
               <div class="w-full flex items-center justify-center text-white/90">
                <span class="w-full h-px bg-zinc-700"></span>
                <p class="leading-[.5rem] mx-3">veya</p>
                <span class="w-full h-px bg-zinc-700"></span>
               </div>
                <!-- mail or userid -->
                <label @click="clickFocus('name')" :class="{'border-sl-blue':formActives.name==true, 'border-slate-600 ':formActives.name==false}" class="border relative cursor-text w-full group h-16 rounded-md overflow-hidden" for="name">
                    <p :class="{'leading-4 text-xs text-sl-blue pt-1':formActives.name==true, 'leading-[56px] text-xl text-slate-600':formActives.name==false}" class="select-none px-2 transition-all ">E-posta veya kullanıcı adı</p>
                    <input :class="{'absolute bottom-0 left-0' : formActives.name==true}" @focus="clickFocus('name')" class="outline-none w-full delay-1000 bg-transparent text-white  p-2 " type="text" name="name" id="name" autocomplete="off" v-model="loginForm.name">
                </label>
                <!-- next -->
                <button :disabled="checkName" @click="forward" class="w-full select-none cursor-pointer hover:saturate-[.75] h-9 my-1 px-2 py-px gap-3 bg-white hover:bg-zinc-100 text-zinc-900 rounded-full flex items-center justify-center font-bold text-sm disabled:pointer-events-none disabled:bg-zinc-500">İleri</button>
                <!-- forgot password -->
                <button class="w-full select-none cursor-pointer hover:saturate-[.75] h-9 my-1 px-2 py-px gap-3 text-white/90 border border-zinc-600 hover:bg-white/10 bg-transparent transition-all rounded-full flex items-center justify-center font-bold text-sm ">Şifreni mi unuttun?</button>
                <p class="text-zinc-600 text-sm mt-10">
                    Henüz bir hesabın yok mu? <span class="text-sl-blue cursor-pointer">Kaydol</span>
                </p>


            </div>


            <!-- password TAB -->
            <div v-if="step==2" class=" w-full h-full px-2 md:px-12 py-2 md:py-2 flex items-start justify-start gap-6 md:gap-3 flex-col">
                <p class="text-white/90 font-bold md:mt-4 mt-10 text-2xl md:text-3xl">Şifreni gir</p>
  

                <!-- mail or userid -->
                <div class="w-full h-16 text-zinc-700 rounded-md overflow-hidden bg-zinc-900 flex items-start justify-center flex-col px-2">
                    <p class="text-sm">{{ isEmail?'E-posta' : 'Kullanıcı adı' }}</p>
                    <p class="text-base">{{isEmail ? 'user@mail.com':'@username'}}</p>
                </div>
                <!-- password -->
                <label @click="clickFocus('password')" :class="{'border-sl-blue':formActives.password==true, 'border-slate-600 ':formActives.password==false}" class="border relative cursor-text w-full group h-16 rounded-md overflow-hidden" for="password">
                    <p :class="{'leading-4 text-xs text-sl-blue pt-1':formActives.password==true, 'leading-[56px] text-xl text-slate-600':formActives.password==false}" class="select-none px-2 transition-all ">Şifre</p>
                    <input :class="{'absolute bottom-0 left-0' : formActives.password==true}" @focus="clickFocus('password')" class="outline-none w-full delay-1000 bg-transparent text-white  p-2 " type="password" name="password" id="password" autocomplete="off"  v-model="loginForm.password">
                    <svg @click="toggleShowPw" class="text-white absolute bottom-2 right-2 cursor-pointer z-50" v-if="showPw==false" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21.87 11.496c-.64-1.11-4.16-6.68-10.14-6.5-5.53.14-8.73 5-9.6 6.5a1 1 0 0 0 0 1c.63 1.09 4 6.5 9.89 6.5h.25c5.53-.14 8.74-5 9.6-6.5a1.001 1.001 0 0 0 0-1Zm-9.65 5.5c-4.31.1-7.12-3.59-8-5 1-1.61 3.61-4.9 7.61-5 4.29-.11 7.11 3.59 8 5-1.03 1.61-3.61 4.9-7.61 5Z"></path>
                      <path d="M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm0 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"></path>
                    </svg>
                    <svg @click="toggleShowPw" class="text-white absolute bottom-2 right-2 cursor-pointer z-50" v-if="showPw==true" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.71 3.286a1.004 1.004 0 1 0-1.42 1.42l5.63 5.63a3.5 3.5 0 0 0 4.74 4.74l5.63 5.63a1 1 0 0 0 1.42 0 1.002 1.002 0 0 0 0-1.42l-16-16ZM12 13.496a1.5 1.5 0 0 1-1.5-1.5v-.07l1.56 1.56-.06.01Z"></path>
                      <path d="M12.22 16.997c-4.3.1-7.12-3.59-8-5 .627-1 1.38-1.913 2.24-2.72L5 7.867a15.89 15.89 0 0 0-2.87 3.63 1 1 0 0 0 0 1c.63 1.09 4 6.5 9.89 6.5h.25a9.481 9.481 0 0 0 3.23-.67l-1.58-1.58a7.74 7.74 0 0 1-1.7.25Z"></path>
                      <path d="M21.87 11.496c-.64-1.11-4.17-6.68-10.14-6.5a9.48 9.48 0 0 0-3.23.67l1.58 1.58a7.74 7.74 0 0 1 1.7-.25c4.29-.11 7.11 3.59 8 5a13.705 13.705 0 0 1-2.29 2.72l1.51 1.41a15.89 15.89 0 0 0 2.91-3.63 1 1 0 0 0-.04-1Z"></path>
                    </svg>
                </label>
                <p class="!text-xs hover:underline cursor-pointer text-sl-blue ml-3 -mt-3">Şifreni mi unuttun?</p>
                <!-- next -->
                <button @click="login" :disabled="checkPw" class="w-full select-none mt-auto cursor-pointer hover:saturate-[.75] h-12 my-1 px-2 py-px gap-3 bg-white hover:bg-zinc-100 text-zinc-900 rounded-full flex items-center justify-center font-bold text-sm disabled:pointer-events-none disabled:bg-zinc-500">Giriş</button>
                <p class="text-zinc-600 text-sm mt-2 mb-4">
                    Henüz bir hesabın yok mu? <span class="text-sl-blue cursor-pointer">Kaydol</span>
                </p>


            </div>
        </div>

    </div>
</template>
