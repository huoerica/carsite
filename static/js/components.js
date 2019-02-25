// 导航栏
Vue.component('header-navbar', {
    data: function () {
        return {
            menus: [
                {id: 1, name: '首页', url: 'index.html', index: '1'},
                {id: 2, name: '车型专区', index: '2'},
                {id: 3, name: '购车指南', url: 'buy.html', index: '3'},
                {
                    id: 4, name: '活动资讯',
                    url: 'index.html',
                    index: '4',
                    children: [
                        {id: 41, name: '优惠活动', url: 'index.html', index: '4-1'},
                        {id: 42, name: '保养维修', url: 'index.html', index: '4-2'},
                        {id: 43, name: '新车到点', url: 'index.html', index: '4-3'}
                    ]
                },
                {id: 5, name: '关于我们', url: 'about.html', index: '5'},
                {id: 6, name: '联系我们', url: 'contact.html', index: '6'}
            ]
        }
    },
    model: {
        prop: 'navid',
        event: 'change'
    },
    props: {
        navid: {
            type: String,
            default() {
                return ''
            }
        }
    },
    created: function () {
        // console.log(this.navid)
    },
    methods: {
    },
    template: `<header class="page-header">
        <el-row class="container">
            <el-row class="header-logo">
                <a href="index.html"><img src="http://www.shxunri.com/template/default/images/logo.png" /></a>
            </el-row>
            <el-menu class="el-menu-demo" mode="horizontal" background-color="#27292E" text-color="#e4e4e4"
                     active-text-color="#de0000"
                     :default-active="navid">
                <template v-for="menu in menus">
                    <template v-if="menu.children">
                        <el-submenu :index="menu.index">
                            <template slot="title">
                                <a :href="menu.url">{{menu.name}}</a>
                            </template>
                            <template v-for="child in menu.children">
                                <template v-if="child.children">
                                    <el-submenu :index="child.index">
                                        <template slot="title">
                                            <a :href="child.url">{{child.name}}</a>
                                        </template>
                                        <el-menu-item v-for="cchild in child.children"
                                                      :index="cchild.index">
                                            <a :href="cchild.url">{{cchild.name}}</a>
                                        </el-menu-item>
                                    </el-submenu>
                                </template>
                                <template v-else>
                                    <el-menu-item :index="child.index">
                                        <a :href="child.url">{{child.name}}</a>
                                    </el-menu-item>
                                </template>
                            </template>
                        </el-submenu>
                    </template>
                    <template v-else>
                        <el-menu-item :index="menu.index">
                            <a :href="menu.url">{{menu.name}}</a>
                        </el-menu-item>
                    </template>
                </template>
            </el-menu>
        </el-row>
    </header>`
});
