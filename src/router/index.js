import Vue from 'vue'
import Router from 'vue-router'
import Layout from "../layout/Layout";
import ArticleList from "../views/article/ArticleList";
import About from "../views/about/About";
import ArticleDetail from "../views/article/ArticleDetail";
import Login from "../views/account/Login";
import Register from "../views/account/Register";
import Profile from "../views/account/Profile";
import SideBar from "../components/sidebar/SideBar";
import AccountSideBar from "../views/account/AccountSideBar";
import Settings from "../views/account/Settings";
import DashboardLayout from "../layout/DashboardLayout";
import Tag from "../views/tag/Tag";
import Monitor from "../views/monitor/Monitor";
import RedisMonitor from "../views/monitor/RedisMonitor";
import Entity from "../views/monitor/Entity";
import VisitCount from "../views/monitor/VisitCount";
import UserOperation from "../views/monitor/UserOperation";
import EventList from "../views/article/EventList";
import EventDetail from "../views/article/EventDetail";

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            //真正的后台
            path: '/dashboard',
            name: 'dashboard',
            redirect: '/dashboard/tag',
            component: DashboardLayout,
            children:[
                {
                    path: 'tag',
                    name: 'tag',
                    components: {
                        main: Tag,
                    }
                },
                {
                    path: 'monitor',
                    name: 'monitor',
                    components: {
                        main: Monitor,
                    }
                },
                {
                    path: 'redis',
                    name: 'redis',
                    components: {
                        main: RedisMonitor,
                    }
                },
                {
                    path: 'entity',
                    name: 'entity',
                    components: {
                        main: Entity,
                    }
                },
                {
                    path: 'vc',
                    name: 'visitCount',
                    components: {
                        main: VisitCount,
                    }
                },
                {
                    path: 'uo',
                    name: 'userOperation',
                    components: {
                        main: UserOperation,
                    }
                },
            ]
        },
        {
            //登录
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            //注册
            path: '/register',
            name: 'register',
            component: Register
        },
        {
            path: '/',
            name: 'root',
            redirect: 'event',
            component: Layout,
            children: [
                {
                    path: 'about',
                    name: 'about',
                    components: {
                        main: About,
                        sidebar: SideBar
                    }
                },
                {
                    //个人主页
                    path: 'profile',
                    name: 'profile',
                    components: {
                        main:Profile,
                        sidebar:AccountSideBar
                    }
                },
                {
                    //个人信息设置
                    path: 'settings',
                    name: 'settings',
                    components: {
                        main:Settings,
                        sidebar:AccountSideBar
                    }
                },
                {
                    //其实是一个文章列表啦
                    path: 'article',
                    name: 'article',
                    components: {
                        main: ArticleList,
                        sidebar: SideBar
                    }
                },
                {
                    //文章详细内容
                    path: 'article/:id',
                    name: 'detail',
                    components: {
                        main:ArticleDetail,
                        sidebar:SideBar
                    }
                },
                {
                    //其实是一个新闻事件列表啦
                    path: 'event',
                    name: 'event',
                    components: {
                        main: EventList,
                        sidebar: SideBar
                    }
                },
                {
                    //其实是一个新闻事件详情啦
                    path: 'event/:id',
                    name: 'event',
                    components: {
                        main: EventDetail,
                        sidebar: SideBar
                    }
                },
                
            ]
        },
    ]
})