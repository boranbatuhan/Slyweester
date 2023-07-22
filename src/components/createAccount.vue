<script setup>
import logo from "/src/components/logo.vue"
import { computed, onMounted, reactive, ref } from "vue";
import router from "/src/router"


const props = defineProps({
    closeModal:Function
})

const step = ref(1)
const createAccForm=reactive({
    name:"",
    mail:"",
    password:"",
    day:0,
    month:0,
    year:0,
    userid:""

})

const formActives=reactive({
    name:false,
    mail:false,
    password:false,
    day:false,
    month:false,
    year:false,
    userid:false,


})

const clickFocus=(id)=>{
    for (const key in formActives) {
    if (key === id) {
        formActives[key] = true;
    } else {
        if(createAccForm[key] !='')
      formActives[key] = true;
      else
      formActives[key] = false;
    }
  }
}
const reset=()=>{
    formActives.name=false
    formActives.mail=false
    formActives.day=false
    formActives.month=false
    formActives.year=false
    formActives.password=false
    formActives.userid=false
    createAccForm.name=""
    createAccForm.mail=""
    createAccForm.day=0
    createAccForm.month=0
    createAccForm.year=0
    createAccForm.password=""
    createAccForm.userid=""
}

const nextStep=()=>{
    console.log('createAccForm :>> ', createAccForm);
    if(step.value<=3)
    {
    step.value++

    }
    else{
        step.value=4
    }
}
const goHome=()=>{
    router.push("/home")
}

const checkform = computed(() => {

    return  step.value<=2 ? (createAccForm.name !== "" && createAccForm.mail !== "" && createAccForm.day > 0 && createAccForm.month > 0 && createAccForm.year > 0 ? false : true) : (createAccForm.password !== "" && createAccForm.password.length > 8 ? false : true);


});


onMounted(()=>{

    document.addEventListener('mousedown',(event)=>{
        clickFocus(event.target.id.toLowerCase())
    })

})

</script>

<template>
    <div class="w-screen h-screen fixed top-0 left-0 bg-sl-black md:bg-zinc-700/50 z-[999] flex items-start justify-start md:items-center md:justify-center">
        
        <div  class="w-full h-[90dvh] md:w-[500px] md:h-[500px] shrink-0 rounded-none  md:rounded-2xl bg-sl-black flex items-center justify-center flex-col overflow-y-auto">
            <!-- steps and close area -->
            <div class=" w-full  text-white p-3 flex items-center justify-start gap-4"> 
                <svg @click="props.closeModal()" class="hover:text-sl-blue" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="m13.41 11.996 4.3-4.29a1.004 1.004 0 1 0-1.42-1.42l-4.29 4.3-4.29-4.3a1.004 1.004 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a.999.999 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1.001 1.001 0 0 0 1.639-.325 1 1 0 0 0-.22-1.095l-4.3-4.29Z"></path>
                </svg>
                <p class="font-bold text-white/90">Adım {{step}}/4</p>
            </div>
            <!-- PAGE1 form  Start-->
            <div v-if="step==1" class=" w-full h-full px-2 md:px-16 py-2 md:py-2 flex items-start justify-start gap-6 md:gap-3 flex-col">
                <p class="text-white/90 font-bold text-3xl">Hesabını oluştur</p>
                <!-- name Start-->
                <label @click="clickFocus('name')" :class="{'border-sl-blue':formActives.name==true, 'border-slate-600 ':formActives.name==false}" class="border relative cursor-text w-full group h-16 rounded-md overflow-hidden" for="name">
                    <p :class="{'leading-4 text-xs text-sl-blue pt-1':formActives.name==true, 'leading-[56px] text-xl text-slate-600':formActives.name==false}" class="select-none px-2 transition-all ">İsim</p>
                    <input :class="{'absolute bottom-0 left-0' : formActives.name==true}" @focus="clickFocus('name')" class="outline-none w-full delay-1000 bg-transparent text-white  p-2 " type="text" name="name" id="name" autocomplete="off" maxlength="50" v-model="createAccForm.name">
                    <p :class="{'text-sl-blue':formActives.name==true, 'text-slate-600':formActives.name==false}"  class="select-none text-xs absolute top-1 right-1">{{ createAccForm.name.length }} / 50 </p>
                </label>
                <!-- name End-->

                <!-- mail Start-->
                <label @click="clickFocus('mail')" :class="{'border-sl-blue':formActives.mail==true, 'border-slate-600 ':formActives.mail==false}" class="border relative cursor-text w-full group h-16 rounded-md overflow-hidden" for="mail">
                    <p :class="{'leading-4 text-xs text-sl-blue pt-1':formActives.mail==true, 'leading-[56px] text-xl text-slate-600':formActives.mail==false}" class="select-none px-2 transition-all ">E-posta</p>
                    <input :class="{'absolute bottom-0 left-0' : formActives.mail==true}" @focus="clickFocus('mail')" class="outline-none w-full delay-1000 bg-transparent text-white  p-2 " type="email" name="mail" id="mail" autocomplete="off"  v-model="createAccForm.mail">
                </label>
                <!-- mail End-->

                <!-- birthdate Start -->
                <p class="text-white font-semibold">Doğum tarihi</p>
                <p class="text-xs text-zinc-400">Bu, herkese açık olarak gösterilmeyecek. Bu hesap bir işletme, evcil hayvan veya başka bir şey için olsa bile kendi yaşını doğrulaman gerekir.</p>
                <div class="flex items-center justify-evenly w-full">

                <!-- day -->
                <label @click="clickFocus('day')" :class="{'border-sl-blue':formActives.day==true, 'border-slate-600 ':formActives.day==false}" class="border relative cursor-pointer rounded-md w-1/4 group h-12 overflow-hidden" for="day">
                    <p :class="{'text-sl-blue':formActives.day==true, 'text-slate-600':formActives.day==false}" class="leading-4 pt-1 text-xs select-none px-2 transition-all ">Gün</p>
                    <select @focus="clickFocus('day')"  class="cursor-pointer focus:!outline-none !border-0 focus:!ring-0 !border-transparent appearance-none w-full delay-1000 bg-transparent text-white px-2 " name="day" id="day" autocomplete="off" v-model="createAccForm.day"><option class="options" disabled="" value="" ></option><option class="options" value="1">1</option><option class="options" value="2" >2</option><option class="options" value="3" >3</option><option class="options" value="4" >4</option><option class="options" value="5" >5</option><option class="options" value="6" >6</option><option class="options" value="7" >7</option><option class="options" value="8" >8</option><option class="options" value="9" >9</option><option class="options" value="10" >10</option><option class="options" value="11" >11</option><option class="options" value="12" >12</option><option class="options" value="13" >13</option><option class="options" value="14" >14</option><option class="options" value="15" >15</option><option class="options" value="16" >16</option><option class="options" value="17" >17</option><option class="options" value="18" >18</option><option class="options" value="19" >19</option><option class="options" value="20" >20</option><option class="options" value="21" >21</option><option class="options" value="22" >22</option><option class="options" value="23" >23</option><option class="options" value="24" >24</option><option class="options" value="25" >25</option><option class="options" value="26" >26</option><option class="options" value="27" >27</option><option class="options" value="28" >28</option><option class="options" value="29" >29</option><option class="options" value="30" >30</option></select>
                    <svg :class="{'text-sl-blue':formActives.day==true, 'text-slate-600':formActives.day==false}" class="absolute right-0 top-1/2 -translate-y-1/2" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 16.001a1 1 0 0 1-.64-.23l-6-5a1.001 1.001 0 0 1 1.28-1.54l5.36 4.48 5.36-4.32a1 1 0 0 1 1.41.15 1 1 0 0 1-.14 1.46l-6 4.83a1 1 0 0 1-.63.17Z"></path>
    </svg>
                </label>
                <!-- month -->
                <label @click="clickFocus('month')" :class="{'border-sl-blue':formActives.month==true, 'border-slate-600 ':formActives.month==false}" class="border relative cursor-pointer rounded-md w-1/4 group h-12 overflow-hidden" for="month">
                    <p :class="{'text-sl-blue':formActives.month==true, 'text-slate-600':formActives.month==false}" class="leading-4 pt-1 text-xs select-none px-2 transition-all ">Ay</p>
                    <select @focus="clickFocus('month')"  class="cursor-pointer focus:!outline-none !border-0 focus:!ring-0 !border-transparent appearance-none w-full delay-1000 bg-transparent text-white px-2 " name="month" id="month" autocomplete="off" v-model="createAccForm.month"><option class="options" disabled="" value="" ></option><option class="options" value="1" >Ocak</option><option class="options" value="2" >Şubat</option><option class="options" value="3" >Mart</option><option class="options" value="4" >Nisan</option><option class="options" value="5" >Mayıs</option><option class="options" value="6" >Haziran</option><option class="options" value="7" >Temmuz</option><option class="options" value="8" >Ağustos</option><option class="options" value="9" >Eylül</option><option class="options" value="10" >Ekim</option><option class="options" value="11" >Kasım</option><option class="options" value="12" >Aralık</option></select>
                    <svg :class="{'text-sl-blue':formActives.month==true, 'text-slate-600':formActives.month==false}" class="absolute right-0 top-1/2 -translate-y-1/2" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 16.001a1 1 0 0 1-.64-.23l-6-5a1.001 1.001 0 0 1 1.28-1.54l5.36 4.48 5.36-4.32a1 1 0 0 1 1.41.15 1 1 0 0 1-.14 1.46l-6 4.83a1 1 0 0 1-.63.17Z"></path>
    </svg>
                </label>
                <!-- year -->
                <label @click="clickFocus('year')" :class="{'border-sl-blue':formActives.year==true, 'border-slate-600 ':formActives.year==false}" class="border relative cursor-pointer rounded-md w-1/4 group h-12 overflow-hidden" for="year">
                    <p :class="{' text-sl-blue':formActives.year==true, 'text-slate-600':formActives.year==false}" class="leading-4 pt-1 text-xs select-none px-2 transition-all ">Yıl</p>
                    <select @focus="clickFocus('year')"  class="cursor-pointer focus:!outline-none !border-0 focus:!ring-0 !border-transparent appearance-none w-full delay-1000 bg-transparent text-white px-2 " name="year" id="year" autocomplete="off" v-model="createAccForm.year"><option class="options" disabled="" value="" ></option><option class="options" value="2023" >2023</option><option class="options" value="2022" >2022</option><option class="options" value="2021" >2021</option><option class="options" value="2020" >2020</option><option class="options" value="2019" >2019</option><option class="options" value="2018" >2018</option><option class="options" value="2017" >2017</option><option class="options" value="2016" >2016</option><option class="options" value="2015" >2015</option><option class="options" value="2014" >2014</option><option class="options" value="2013" >2013</option><option class="options" value="2012" >2012</option><option class="options" value="2011" >2011</option><option class="options" value="2010" >2010</option><option class="options" value="2009" >2009</option><option class="options" value="2008" >2008</option><option class="options" value="2007" >2007</option><option class="options" value="2006" >2006</option><option class="options" value="2005" >2005</option><option class="options" value="2004" >2004</option><option class="options" value="2003" >2003</option><option class="options" value="2002" >2002</option><option class="options" value="2001" >2001</option><option class="options" value="2000" >2000</option><option class="options" value="1999" >1999</option><option class="options" value="1998" >1998</option><option class="options" value="1997" >1997</option><option class="options" value="1996" >1996</option><option class="options" value="1995" >1995</option><option class="options" value="1994" >1994</option><option class="options" value="1993" >1993</option><option class="options" value="1992" >1992</option><option class="options" value="1991" >1991</option><option class="options" value="1990" >1990</option><option class="options" value="1989" >1989</option><option class="options" value="1988" >1988</option><option class="options" value="1987" >1987</option><option class="options" value="1986" >1986</option><option class="options" value="1985" >1985</option><option class="options" value="1984" >1984</option><option class="options" value="1983" >1983</option><option class="options" value="1982" >1982</option><option class="options" value="1981" >1981</option><option class="options" value="1980" >1980</option><option class="options" value="1979" >1979</option><option class="options" value="1978" >1978</option><option class="options" value="1977" >1977</option><option class="options" value="1976" >1976</option><option class="options" value="1975" >1975</option><option class="options" value="1974" >1974</option><option class="options" value="1973" >1973</option><option class="options" value="1972" >1972</option><option class="options" value="1971" >1971</option><option class="options" value="1970" >1970</option><option class="options" value="1969" >1969</option><option class="options" value="1968" >1968</option><option class="options" value="1967" >1967</option><option class="options" value="1966" >1966</option><option class="options" value="1965" >1965</option><option class="options" value="1964" >1964</option><option class="options" value="1963" >1963</option><option class="options" value="1962" >1962</option><option class="options" value="1961" >1961</option><option class="options" value="1960" >1960</option><option class="options" value="1959" >1959</option><option class="options" value="1958" >1958</option><option class="options" value="1957" >1957</option><option class="options" value="1956" >1956</option><option class="options" value="1955" >1955</option><option class="options" value="1954" >1954</option><option class="options" value="1953" >1953</option><option class="options" value="1952" >1952</option><option class="options" value="1951" >1951</option><option class="options" value="1950" >1950</option><option class="options" value="1949" >1949</option><option class="options" value="1948" >1948</option><option class="options" value="1947" >1947</option><option class="options" value="1946" >1946</option><option class="options" value="1945" >1945</option><option class="options" value="1944" >1944</option><option class="options" value="1943" >1943</option><option class="options" value="1942" >1942</option><option class="options" value="1941" >1941</option><option class="options" value="1940" >1940</option><option class="options" value="1939" >1939</option><option class="options" value="1938" >1938</option><option class="options" value="1937" >1937</option><option class="options" value="1936" >1936</option><option class="options" value="1935" >1935</option><option class="options" value="1934" >1934</option><option class="options" value="1933" >1933</option><option class="options" value="1932" >1932</option><option class="options" value="1931" >1931</option><option class="options" value="1930" >1930</option><option class="options" value="1929" >1929</option><option class="options" value="1928" >1928</option><option class="options" value="1927" >1927</option><option class="options" value="1926" >1926</option><option class="options" value="1925" >1925</option><option class="options" value="1924" >1924</option><option class="options" value="1923" >1923</option><option class="options" value="1922" >1922</option><option class="options" value="1921" >1921</option><option class="options" value="1920" >1920</option><option class="options" value="1919" >1919</option><option class="options" value="1918" >1918</option><option class="options" value="1917" >1917</option><option class="options" value="1916" >1916</option><option class="options" value="1915" >1915</option><option class="options" value="1914" >1914</option><option class="options" value="1913" >1913</option><option class="options" value="1912" >1912</option><option class="options" value="1911" >1911</option><option class="options" value="1910" >1910</option><option class="options" value="1909" >1909</option><option class="options" value="1908" >1908</option><option class="options" value="1907" >1907</option><option class="options" value="1906" >1906</option><option class="options" value="1905" >1905</option><option class="options" value="1904" >1904</option><option class="options" value="1903" >1903</option></select>
                    <svg :class="{' text-sl-blue':formActives.year==true, 'text-slate-600':formActives.year==false}" class="absolute right-0 top-1/2 -translate-y-1/2" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 16.001a1 1 0 0 1-.64-.23l-6-5a1.001 1.001 0 0 1 1.28-1.54l5.36 4.48 5.36-4.32a1 1 0 0 1 1.41.15 1 1 0 0 1-.14 1.46l-6 4.83a1 1 0 0 1-.63.17Z"></path>
</svg>
                </label>
                </div>
                <!-- birthdate End -->

            </div>
            <!-- PAGE1 form  End-->

            <!-- PAGE2 privacy  Start-->
            <div v-if="step==2" class=" w-full h-full px-2 md:px-16 py-2 md:py-2 flex items-start justify-start gap-6 md:gap-3 flex-col ">
                <p class="text-3xl font-bold text-white/90 mt-8">Gizlilik ve gerekli izinler</p>
                <p class="text-zinc-300 text-xs">
                    Kaydolarak <span class="text-sl-blue">Koşullarımızı</span>, <span class="text-sl-blue">Gizlilik Politikamızı</span> ve <span class="text-sl-blue">Çerez Kullanımımızı</span> kabul etmiş olursun. Slyweester, e-posta adresin ve telefon numaran dahil olmak üzere iletişim bilgilerini ve profil bilgilerini Gizlilik Politikamızda belirtilen amaçlar doğrultusunda kullanabilir, erişebilir ve görüntüleyebilir.
                </p>
                <p class="text-zinc-300 text-xs">
                    Detaylı bilgi almak için bizimle ileşime geçmekten çekinme. İletişim adreslerimiz sana daima açıktır.
                </p>
            </div>
            <!-- PAGE2 privacy  End-->

            <!--PAGE3 password  Start-->
            <div v-if="step==3"  class=" w-full h-full px-2 md:px-16 py-2 md:py-2 flex items-start justify-center gap-3 flex-col ">
                <!-- user accepted info Start -->
                <ul  class="w-full h-fit flex flex-col items-start justify-center gap-2">
                <!-- name display Start-->
                <li class="flex items-center justify-center gap-3">
                    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0-6a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z"></path>
                        <path d="M12 13a7 7 0 0 0-7 7 1 1 0 1 0 2 0 5 5 0 1 1 10 0 1 1 0 0 0 2 0 7 7 0 0 0-7-7Z"></path>
                    </svg>
                    <p class="text-white/80 font-bold text-start text-2xl">
                       {{createAccForm.name}}
                   </p>
                </li>
                <!-- name display End-->
                <!-- mail display Start-->
                <li class="flex items-center justify-center gap-3">
                    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 4H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm-.67 2L12 10.75 5.67 6h12.66ZM19 18H5a1 1 0 0 1-1-1V7.25l7.4 5.55a1 1 0 0 0 1.2 0L20 7.25V17a1 1 0 0 1-1 1Z"></path>
                    </svg>
                    <p class="text-white/80 font-semibold text-start text-xl">
                    {{createAccForm.mail}}
                   </p>
                </li>
                <!-- mail display End-->
                <!-- birthdate display Start-->
                <li class="flex items-center justify-center gap-3">
                    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 4h-1V3a1 1 0 0 0-2 0v1H9V3a1 1 0 0 0-2 0v1H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3ZM6 6h1v1a1 1 0 0 0 2 0V6h6v1a1 1 0 0 0 2 0V6h1a1 1 0 0 1 1 1v4H5V7a1 1 0 0 1 1-1Zm12 14H6a1 1 0 0 1-1-1v-6h14v6a1 1 0 0 1-1 1Z"></path>
                        <path d="M8 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path>
                        <path d="M16 15h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2Z"></path>
                    </svg>
                    <p class="text-white/80 font-medium text-start text-lg">
                        {{createAccForm.day <=9 ? '0'+createAccForm.day : createAccForm.day}}/{{createAccForm.month <=9 ? '0'+ createAccForm.month:createAccForm.month}}/{{createAccForm.year}}
                   </p>

                </li>
                <!-- birthdate display End-->
            
                </ul>
                <!-- user accepted info End -->
            <!-- user id @ Start -->
            <label @click="clickFocus('userid')" :class="{'border-sl-blue':formActives.userid==true, 'border-slate-600 ':formActives.userid==false}" class="border shrink-0 relative cursor-text w-full group h-16 rounded-md overflow-hidden" for="userid">
                <p :class="{'leading-4 text-xs text-sl-blue pt-1':formActives.userid==true, 'leading-[56px] text-xl text-slate-600':formActives.userid==false}" class="select-none px-2 transition-all ">Kullanıcı adı</p>
                <input :class="{'absolute bottom-0 left-0' : formActives.userid==true}" @focus="clickFocus('userid')" class="outline-none w-full delay-1000 bg-transparent text-white  p-2 " type="text" name="userid" id="userid" autocomplete="off" maxlength="50" v-model="createAccForm.userid">
            </label>
            <!-- user id @ End -->

            <!-- password Start-->
            <label @click="clickFocus('password')" :class="{'border-sl-blue':formActives.password==true, 'border-slate-600 ':formActives.password==false}" class="border shrink-0 relative cursor-text w-full group h-16 rounded-md overflow-hidden" for="password">
                <p :class="{'leading-4 text-xs text-sl-blue pt-1':formActives.password==true, 'leading-[56px] text-xl text-slate-600':formActives.password==false}" class="select-none px-2 transition-all ">Şifre</p>
                <input :class="{'absolute bottom-0 left-0' : formActives.password==true}" @focus="clickFocus('password')" class="outline-none w-full delay-1000 bg-transparent text-white  p-2 " type="password" name="password" id="password" autocomplete="off" maxlength="50" v-model="createAccForm.password">
            </label>
            <!-- password End-->

        </div>
            <!--PAGE3 password  End-->
            
            <!-- PAGE4 result  Start-->
            <div v-if="step==4" class=" w-full h-full px-2 md:px-16 py-2 md:py-2 flex items-start justify-start gap-6 md:gap-3 flex-col ">
                <div class="w-full h- relative ">
                    <img draggable="false" loading="eager" class=" w-full h-full mix-blend-screen" src="/src/assets/confetti.gif" alt="confetti">
                    <h1 class="text-white/90 absolute bottom-0 left-0 bg-gradient-to-t from-sl-black via-sl-black to-transparent py-10 w-full text-center select-none text-3xl font-bold"> <strong class="text-sl-blue">Slyweester</strong>'a hoşgeldin</h1>
                </div>
            </div>
            <!-- PAGE4 result  End-->

            <!--bottom button area Start -->
            <div class="border-t-shadow w-full h-1/6 flex items-center justify-center">
                <button v-if="step<=3" @click="nextStep" :disabled="checkform" class="text-black bg-white w-9/12 py-2 font-bold tracking-wider rounded-full hover:bg-zinc-300 disabled:pointer-events-none disabled:bg-zinc-500">İleri</button>
                <button v-if="step==4" @click="goHome" class="text-black bg-white w-9/12 py-2 font-bold tracking-wider rounded-full hover:bg-zinc-300 disabled:pointer-events-none disabled:bg-zinc-500">Keşfet</button>
            </div>
            <!--bottom button area End -->
        </div>

    </div>
</template>
<style scoped>
.border-t-shadow{

    -webkit-box-shadow: 0px -4px 7px -3px rgb(255 255 255 / 20%);
-moz-box-shadow: 0px -4px 7px -3px rgb(255 255 255 / 20%);
box-shadow: 0px -4px 7px -3px rgb(255 255 255 / 20%);
}

.options{
    @apply
    bg-sl-black
}
</style>