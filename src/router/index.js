import { createRouter, createWebHistory} from "vue-router";    
import loginpage from "/src/router/views/LoginPage.vue"
 const routes=[ {                                                  
    path:'/home',                                                 
    name:'Home',                                              
    component: ()=> import ("/src/router/views/HomePage.vue")       
},{                                                  
    path:'/',                                                 
    name:'Login',                                              
    component: loginpage 
}]                                                            
 const router =createRouter({                                      
     history:createWebHistory(),                               
     routes,                                                       
 })                                                                
 export default router; 