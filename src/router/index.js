import { createRouter, createWebHistory} from "vue-router";    
import loginpage from "/src/router/views/LoginPage.vue"
import store from "/src/store"
 const routes=[ 
     {                                                  
         path:'/',                                                 
         name:'Login',                                              
         component: loginpage 
        },
        {                                                  
            path:'/home',                                                 
            name:'Home',                                              
            component: ()=> import ("/src/router/views/HomePage.vue")       
        },
        {                                                  
            path:'/tags',                                                 
            name:'Tags',                                              
            component: ()=> import ("/src/router/views/TagsPage.vue")      
        },
        {                                                  
            path:'/slywerify',                                                 
            name:'Slywerify',                                              
            component: ()=> import ("/src/router/views/SlywerifyPage.vue")      
        },
        {                                                  
            path:'/tag/:tagname',                  
            name:'TagDetail',                                              
            component: ()=> import ("/src/router/views/TagdetailPage.vue")   
        },
        {                                                  
            path:'/:username',                                                 
            name:'Profile',                                              
            component: ()=> import ("/src/router/views/ProfilePage.vue")       
        },
]                                                            
 const router =createRouter({                                      
     history:createWebHistory(),                               
     routes,      
                                                      
 })       
 
 
 router.beforeEach((to, from, next) => {

    if(to.name=='Login')
    {
        store.state.activePage=false
        console.log('logine eşit menu göster :>> ', store.state.activePage);
        next(); // Router işlemini devam ettir
    }

    else{
        store.state.activePage=true
        console.log('logine eşit menu göster else:>> ', store.state.activePage);
        next(); // Router işlemini devam ettir
    }
    
  });

 export default router; 