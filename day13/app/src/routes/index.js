import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Home from '../paes/home.vue'
import Indetabar from '../paes/indetabar.vue'
import Find from '../paes/find.vue'
import Eatcar from '../paes/eatcar.vue'
import Myhome from '../paes/myhome.vue'
import empty from '../paes/empty.vue'
import Login from '../components/login.vue'
import Mine from '../components/mine.vue'
import orderbottom from "../components/orderbodybottom.vue";
import orders from "../components/orders.vue";
import detail from "../components/detail.vue";
import search from "../components/searchfood.vue";
import searchHot from "../components/searchHot.vue";
import searchRes from "../components/searchRes.vue";
import orderdetail from "../components/orderdatail.vue";
import getcookie from './getcookie.js'
// import deme from "../components/deme.vue";
const router = new VueRouter({
    routes: [{
            path: '/',
            name: 'indetabar',
            component: Indetabar,
            children: [{
                    path: '',
                    name: 'home',
                    component: Home
                },
                {
                    path: 'find',
                    name: 'find',
                    component: Find
                },
                {
                    path: 'empty',
                    name: 'empty',
                    component: empty
                },
                {
                    path: '/eatcar',
                    name: 'eatcar',
                    component: Eatcar,
                    children: [{
                            path: 'oldorders',
                            component: orders,

                        },
                        {
                            path: 'orders',
                            component: orderbottom
                        }
                    ],
                    beforeEnter: (to, from, next) => {
                        if (getcookie('uid')) {
                            next();
                        } else {
                            router.push({
                                name: 'empty'
                            })
                        }
                    }
                },
                {
                    path: '/mine',
                    component: Myhome,
                    children: [{
                            path: 'myhome',
                            component: Mine
                        },
                        {
                            path: 'login',
                            name: 'login',
                            component: Login
                        },

                    ]
                }
            ]
        },
        {
            path: '/detail/:id',
            name: 'detail',
            component: detail
        },
        {
            path: '/search',
            name: 'search',
            component: search,
            children: [{
                path: '',
                component: searchHot,
            }, {
                path: 'seares',
                component: searchRes,
            }],
            beforeEnter: (to, from, next) => {
                if (getcookie('uid')) {
                    next();
                } else {
                    router.push({
                        name: 'login'
                    })
                }
            }
        },
        {
            path: '/orderdetail',
            name: 'orderdetail',
            component: orderdetail
        }
    ]
})
export default router