/* eslint-disable */
import Vue from 'vue'
import VueRouter, { Route } from 'vue-router'

declare module 'vue/types/vue' {
  interface Vue {
    $router: VueRouter; // 这表示this下有这个东西
    $route: Route;
  }
}
declare module 'vue-router' {
  interface RouteMeta {
    // 每个路由都必须声明
    title: string,
    // 图标显示在侧边栏中
    icon?: string,
    // 如果设置为false，项目将隐藏在面包屑中(默认为true)
    breadcrumb?: boolean
    //  如果设置路径，侧边栏将突出显示您设置的路径
    activeMenu?: string


  }
  interface _RouteRecordBase{
    // 如果设置为true，项目将不会显示在侧边栏中(默认为false)
    hidden?: boolean,
    // 如果没有设置alwaysShow，当项目有多个子路径时，它将变成嵌套模式，否则不会显示根菜单
    alwaysShow?: boolean,
    // 如果设置了noRedirect将不会在面包屑中重定向
    redirect?: string
  }
}

