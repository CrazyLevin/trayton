import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../html/home/Home'
import HomeEn from '../html-en/home/Home'
import AboutUs from '../html/AboutUs/AboutUs'
import AboutUsEn from '../html-en/AboutUs/AboutUs'
import Competencies from '../html/Competencies/Competencies'
import CompetenciesEn from '../html-en/Competencies/Competencies'
import OverView from '../html/OverView/OverView'
import OverViewEn from '../html-en/OverView/OverView'
import Csr from '../html/csr/Csr'
import CsrEn from '../html-en/csr/Csr'
import ContactUs from '../html/ContactUs/ContactUs'
import ContactUsEn from '../html-en/ContactUs/ContactUs'


Vue.use(VueRouter)

const router =  new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      beforeEnter: (to, from, next) => {
        console.log(from, to)
        // 中切英
        if (/En$/.test(from.path) && to.path === '/') {
          let s = from.path; // 源字符串抄
          let p = /En/g;                  // 正则表达式，匹配字符a，其中zdg为全局查找标记。若 var p=/a/; 只能替换第一个a。
          let v = s.replace(p,"");        //替换。也可直接 s.replace(/a/g,"");
          next(v)
        }
        next()
      }
    },
    {
      path: '/en',
      name: 'HomeEn',
      component: HomeEn,
      beforeEnter: (to, from, next) => {
        // console.log(from, to)
        // 英切中
        if(from.path !== '/' && !/En$/.test(from.path) && to.path === '/en') {
          const p = from.path + 'En'
          next(p)
        }
        next()
      }
    },
    {
      path: '/AboutUs',
      name: 'AboutUs',
      component: AboutUs
    },
    {
      path: '/AboutUsEn',
      name: 'AboutUsEn',
      component: AboutUsEn
    },
    {
      path: '/Competencies',
      name: 'Competencies',
      component: Competencies
    },
    {
      path: '/CompetenciesEn',
      name: 'CompetenciesEn',
      component: CompetenciesEn
    },
    {
      path: '/OverView',
      name: 'OverView',
      component: OverView
    },
    {
      path: '/OverViewEn',
      name: 'OverViewEn',
      component: OverViewEn
    },
    {
      path: '/csr',
      name: 'Csr',
      component: Csr
    },
    {
      path: '/csrEn',
      name: 'CsrEn',
      component: CsrEn
    },
    {
      path: '/ContactUs',
      name: 'ContactUs',
      component: ContactUs
    },
    {
      path: '/ContactUsEn',
      name: 'ContactUsEn',
      component: ContactUsEn
    },
  ],
  scrollBehavior (to, from, savedPosition) {
    // savedPosition 会在你使用浏览器前进或后退按钮时候生效
    // 这个跟你使用 router.go() 或 router.back() 效果一致
    // 这也是为什么我在 tab 栏结构中放入了一个 点击回退 的按钮
    // console.log(savedPosition)
    // if (savedPosition) {
    //   return savedPosition
    // } else {
    //
    // }
    // console.log(window.history.length)
    // 跳转到Competencies页的ourquality位置
    if(from.name === 'Home' || from.name === 'HomeEn' && to.query.id === '1') {
      return to.meta
    }
    // 从首页跳转到OverView页的相应OURBRAND位置
    if(from.name === 'Home' || from.name === 'HomeEn' && to.query.id === '2') {
      return to.meta
    }
    // 从首页跳转到AboutUs页的SOFA MAKER位置
    if(from.name === 'Home' || from.name === 'HomeEn' && to.query.id === '3') {
      return to.meta
    }
    // 从首页轮播图第二章跳转到Competencies页的OUR R&D位置
    if(from.name === 'Home' || from.name === 'HomeEn' && to.query.id === 'rd') {
      return to.meta
    }
    return {x: 0, y: 0}
    // console.log(savedPosition)
    // 如果不是通过上述行为切换组件，就会让页面回到顶部


  }
})

export default router

