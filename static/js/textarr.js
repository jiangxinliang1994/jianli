
/*
*项目名: 个人简历
*创建者: Edit
*创建时间:2020.2.15 20:40:41
*联系方式:15622749328(微信同号)
*描述: 酷炫个人简历
*/

let textArr = [
    {
        name: 'h2',
        class: 'inten',
        text: '求职意向：前端开发工程师'
    }, {
        name: 'h4',
        class: 'text-title',
        text: '基本信息'
    }, {
        name: 'div',
        class: 'base-info',
        children: [{
            name: 'div',
            children: [{
                name: 'div',
                text: '姓名：蒋新亮'
            },{
                name: 'div',
                text: '年龄：27'
            }]
        }, {
            name: 'div',
            children: [{
                name: 'div',
                text: '毕业院校：华北电力大学科技学院'
            },{
                name: 'div',
                text: '联系电话：17631547600'
            }]
        }]
    }, {
        name: 'h4',
        class: 'text-title',
        text: '教育背景'
    }, {
        name: 'div',
        class: 'school',
        children: [{
            name: 'span',
            class: 'mr',
            text: '学校：华北电力大学科技学院'
        }, {
            name: 'span',
            text: '专业：软件工程'
        }, {
            name: 'div',
            text: '主修课程：数据结构、计算机导论、计算机操作系统、数据库系统概论、c++程序设计教程、Java语言与面向对象程序设计、汇编语言、计算机应用等',
        }]
    }, {
        name: 'h4',
        class: 'text-title',
        text: '专业技能'
    },{
        name: 'ul',
        class: 'ul-list',
        children: [{
            name: 'li',
            text:'1.熟悉项目开发流程，拥有多个项目经验,独立解决各大主流浏览器的兼容性问题。'
        }, {
            name: 'li',
            text:'2.熟悉HTML5+CSS3新特性，并应用到移动页面开发中，独立解决屏幕适配问题。'
        }, {
            name: 'li',
            text:'3.运用Chrome DevTools、Firebug进行代码调试，能够有效的定位、分析和解决BUG及问题。'
        }, {
            name: 'li',
            text:'4.精通HTML5，css3，jquery，echarts，ajax等前端技术。'
        },{
            name: 'li',
            text:'5.精通JQuery、Vue、Easyui、Elementui等前端主流框架和组件库、类库。'
        },{
            name: 'li',
            text:'6.掌握移动端app开发，微信小程序开发，node.js，express框架开发。'
        },{
            name: 'li',
            text:'7.精通Flex布局，弹性盒子布局和流布局。'
        },{
            name: 'li',
            text:'8.掌握spring boot，struts，spring cloud，spring,springMVC，mybatis后端框架技术。'
        },{
            name: 'li',
            text:'9.掌握mysql,oracle数据库和数据存储结构。'
        },{
            name: 'li',
            text:'10.掌握git版本和svn版本代码管理工具。'
        }]
    },
    
    {
        name: 'h4',
        class: 'text-title',
        text: '工作经历'
    }, {
        name: 'div',
        class: 'work', 
        children:[{
            name: 'span',
            class: 'mr',
            text: '2019.01 — 2021.04'
        }, {
            name: 'span',
            class: 'mr',
            text: '北京华路时代信息技术股份有限公司'
        }, {
            name: 'span',
            text: 'web前端开发'
        }]
    }, {
        name: 'ul',
        class: 'ul-list',
        children: [{
            name: 'li',
            text:'担任项目组前端技术部小组长，负责',
            children: [{
                name: 'span',
                text: '带领新人、项目安排、BUG解决、产品优化、跟进项目进度。'
            }]
        }, {
            name: 'li',
            text: '负责国家电网项目开发，如PC端，企业响应式网站，APP开发。'
        },{
            name: 'li',
            text: '负责前端项目维护更新、优化等。'
        },{
            name: 'li',
            text: '负责使用Vue全家桶、Element UI、Echarts搭建项目，实现网页动态效果以及页面间的跳转和数据交互。'
        },{
            name: 'li',
            text: '配合产品和UI设计前端页面的规划布局。'
        }
    ]
    }, {
        name: 'div',
        class: 'work', 
        children:[{
            name: 'span',
            class: 'mr',
            text: '2018.07-2018.12'
        }, {
            name: 'span',
            class: 'mr',
            text: '庚顿河北信息科技有限公司'
        }, {
            name: 'span',
            text: 'web前端开发'
        }]
    },
    {
        name: 'ul',
        class: 'ul-list',
        children: [{
            name: 'li',
            text:'负责运用工业化HT for Web框架，构建2D和3D模型。',
        }, {
            name: 'li',
            text: '负责ECharts框架构建图表。'
        },{
            name: 'li',
            text: '负责使用JavaScript、JQuery实现网页动态效果以及页面间的跳转。'
        },{
            name: 'li',
            text: '负责页面布局以及前后台数据交互。'
        },{
            name: 'li',
            text: '负责用Ajax技术与后台工程师合作实现后台数据交互。'
        },{
            name: 'li',
            text: '配合产品和UI设计前端页面的规划布局。'
        }
    ]
    },{
        name: 'div',
        class: 'work', 
        children:[{
            name: 'span',
            class: 'mr',
            text: '2017.07-2018.04'
        }, {
            name: 'span',
            class: 'mr',
            text: '北京新华多媒体数据有限公司'
        }, {
            name: 'span',
            text: 'web前端开发'
        }]
    },{
        name: 'ul',
        class: 'ul-list',
        children: [{
            name: 'li',
            text:'责使用css加div实现静态页面布局。',
        }, {
            name: 'li',
            text: '用jQuery、JavaScript实现动态效果，并且对页面和项 目进行优化。'
        },{
            name: 'li',
            text: '图片懒加载功能显示商品提高页面的响应速度，对页面和项目进行化。'
        },{
            name: 'li',
            text: '和后台合作实现网页之间的MQ推送即实时消息推送。'
        },{
            name: 'li',
            text: '负责用Ajax技术与后台工程师合作实现后台数据交互。'
        },{
            name: 'li',
            text: '配合产品和UI设计前端页面的规划布局。'
        }
    ]
    },
    
    {
        name: 'h4',
        class: 'text-title',
        text: '项目经验'
    }, {
        name: 'div',
        class: 'item-lv',
        children: [{
            name: 'ul',
            class: 'ul-list',
            children: [{
                name: 'li',
                class: 'project-title',
                text: '项目一：敏感性分析系统（PC端）+ 移动端（APP）'
            }, {
                name: 'li',
                text: '使用技术栈：spring boot框架、Vue全家桶、ApiCloud跨多端打包、layui组件库、vant组件库',
            }, {
                name: 'li',
                text: '项目描述：'
            },{
                name:'li',
                text:'主要应用于中大型能源用户综合能效评估指标，评测用能经济性指标，评测用能灵活性指标，评测用能环保性指标，评测用能风险性指标。'
            }]
        }, {
            name: 'ul',
            class: 'ul-list',
            children: [{
                name: 'li',
                class: 'project-title',
                text: '项目二：绿色国网省级综合能源平台（PC端）+ 移动端（APP）'
            }, {
                name: 'li',
                text: '使用技术栈：Vue全家桶、Element ui组件库、Vant组件库、ApiCloud跨多端打包、Echarts图表',
            }, {
                name: 'li',
                text: '项目描述：'
            },{
                name: 'li',
                text: '1. Vue-cli脚手架搭建项目。'
            },{
                name: 'li',
                text: '2. 使用Vue-Router做应用页面跳转，路由导航守卫权限控制,params、query传参'
            }, {
                name: 'li',
                text: '3. Axios用做Ajax数据交互，dev环境下配置代理解决跨域，使用createAPI配置baseURL。'
            }, {
                name: 'li',
                text: '4. 使用CSS预处理器stylus简化CSS代码编写，浏览器兼容前缀，rem函数封装。'
            }, {
                name: 'li',
                text: '5. 使用UI框架YDUI，减少不必要的造轮子，提高代码编写效率，用户体验。'
            }, {
                name: 'li',
                text: '6. 使用vue-awesome-swiper轮播图插件。'
            }]
        }, {
            name: 'ul',
            class: 'ul-list',
            children: [{
                name: 'li',
                class: 'project-title',
                text: '项目三：金湖县智慧农业项目'
            }, {
                name: 'li',
                text: '使用技术栈：Vue全家桶、Element ui、Echarts'
            }, {
                name: 'li',
                text: '项目描述：'
            }, {
                name: 'li',
                text: '该项目是一款为金湖县农业发展而产生的项目，主要用于金湖县智慧农业发展中的鱼塘、大棚、智能灌溉、莲藕产业加工等领域。支持鱼塘、大棚、灌溉的观察、启停、溶氧量、增氧、湿度、酸碱度、PH值、设备故障以及收益等功能，莲藕产业的加工流程与收益。'
            }]
        }, {
            name: 'ul',
            class: 'ul-list',
            children: [{
                name: 'li',
                class: 'project-title',
                text: '项目四：省电力公司智慧楼宇项目'
            }, {
                name: 'li',
                text: '使用技术栈：Vue全家桶、Element ui、Echarts、Three.js、Svg'
            }, {
                name: 'li',
                text: '项目描述：'
            },{
                name: 'li',
                text: '该项目是一款由省公司内部使用的项目，主要用于控制楼层的空调机组、新风系统、照明灯、电梯的开关、启停用能、节能等操作，计算楼层之间用电、用水的情况，对楼层用电、用水情况进行排序、超标提醒、故障提醒等。'
            }]
        },{
            name: 'ul',
            class: 'ul-list',
            children: [{
                name: 'li',
                class: 'project-title',
                text: '项目五：综合能源省平台电力二期项目'
            }, {
                name: 'li',
                text: '使用技术栈：Struts、Jquery、Echarts、Easy ui、MyBatis、Oracle、Svg'
            }, {
                name: 'li',
                text: '项目描述：'
            },{
                name: 'li',
                text: '该项目是一款网上智能电力、热力、风力、水力的综合能源平台，支持电能、热能、风能、水能使用、计算以及以及使用费用的计算，热能发电、风力发电的生产成本计算。'
            }]
        },{
            name: 'ul',
            class: 'ul-list',
            children: [{
                name: 'li',
                class: 'project-title',
                text: '项目六：红豆电力二期项目'
            }, {
                name: 'li',
                text: '使用技术栈：Struts、Jquery、Echarts、Easy ui、MyBatis、Oracle、Svg'
            }, {
                name: 'li',
                text: '项目描述：'
            },{
                name: 'li',
                text: '该项目是一款网上智能电力和热力平台，支持电能、热能使用、计算以及以及使用费用的计算，热能发电、风力发电的生产成本计算。'
            }]
        },{
            name: 'ul',
            class: 'ul-list',
            children: [{
                name: 'li',
                class: 'project-title',
                text: '项目七：红豆电力二期项目'
            }, {
                name: 'li',
                text: '使用技术栈：Struts、Jquery、Echarts、Easy ui、MyBatis、Oracle、Svg'
            }, {
                name: 'li',
                text: '项目描述：'
            },{
                name: 'li',
                text: '该项目是一款网上智能电力和热力平台，支持电能、热能使用、计算以及以及使用费用的计算，热能发电、风力发电的生产成本计算。'
            }]
        },{
            name: 'ul',
            class: 'ul-list',
            children: [{
                name: 'li',
                class: 'project-title',
                text: '项目八：中冶焦耐焦化耐火scada项目'
            }, {
                name: 'li',
                text: '使用技术栈：HT for Web商业框架、Echarts、Jquery、Ajax'
            }, {
                name: 'li',
                text: '项目描述：'
            },{
                name: 'li',
                text: '该项目应用于河北国家电网，用于查看电量综合报表，查看综合煤炭消耗报表，查看每日每月每年电量消耗情况。'
            }]
        },{
            name: 'ul',
            class: 'ul-list',
            children: [{
                name: 'li',
                class: 'project-title',
                text: '项目九：新华多媒体数据有限公司官网系统项目'
            }, {
                name: 'li',
                text: '使用技术栈：Yii2框架、Echarts、Jquery、Ajax、H5'
            }, {
                name: 'li',
                text: '项目描述：'
            },{
                name: 'li',
                text: '该项目介绍公司现状和发展，主要服务于新华社，数据业务主要是整合海量数据资源，深度挖掘数据价值，包括数据加工、核验、风控等服务；技术业务主要包括媒体、舆情、信用、财经、电商等领域的系统研发；新媒体业务主要包括移动增值业务，微信公众号和抖音短视频的平台建设与运营。以上业务体系互融互通，全面服务于各级政府或企事业单位。'
            }]
        }]
    }, 
    {
        name: 'h4',
        class: 'text-title',
        text: '自我评价'
    }, {
        name: 'ul',
        class: 'ul-list',
        children: [{
            name: 'li',
            text:'具有',
            children: [{
                name: 'span',
                text: '团队管理经验'
            }, {
                name: 'span',
                text: '，拥有良好的'
            }, {
                name: 'span',
                text: '团队协调能力'
            }, {
                name: 'span',
                text: '，工作当中和同事融洽相处'
            }]
        },{
            name: 'li',
            text:'热爱前端、思维活跃、学习能力强，抗压能力强。'
        }, {
            name: 'li',
            text:'性格随和、诚恳稳重、身体素质较好、能够很快地适应新环境。'
        }]
    }
]
let style = `
    /*
    * 面试官你好，我是蒋新亮，来自新疆额敏县乌什水镇168团
    * 为您精心准备一份不一样的简历来介绍自己
    * 首先准备一些样式
    */
    *{
        transition: all .8s;
    }
    /* 稍等，在容器上添加点样式 */
    #codeEdit{
        color: #fff;
        background: #1E1E1E;
    }
    #resume{
        box-shadow: -1px 4px 9px 3px rgba(0, 0, 0, .15);
    }
    /* 我需要一点代码高亮 */
    pre#codeEdit{
        color: #CE9e78;
    }
    .token.selector{
        color: rgb(230, 155, 43);
    }
    .token.comment{
        color: #6A9955;
        font-size: 14px;
    }
    .token.property{
        color: #60C8FE;
    }
    .token.function {
        color: #DD4A68;
    }
    /* 接下来请欣赏我的个人简历吧 */
`
let balloon = `
    <div class="balloon-wrap">
        <img src="static/images/balloon.png" id="bg-balloon-small">
        <img src="static/images/balloon.png" id="bg-balloon-large">
        <img src="static/images/logo.png" id="bg-balloon-logo">
    </div>
    <div class="connect" style="width: 100%; display: flex;"></div>`
let line = `
    <div class="line-wrap">
        <div class="line-left"></div>
        <div class="line-right">
            <p class="line-defColor line-item1"></p>
            <p class="line-darkColor line-item2"></p>
            <p class="line-defColor line-item3"></p>
            <p class="line-midColor line-item4"></p>
            <p class="line-darkColor line-item5"></p>
            <p class="line-midColor line-item6"></p>
            <p class="line-darkColor line-item7"></p>
            <p class="line-midColor line-item7"></p>
        </div>
    </div>
    <div class="connect"></div>`
let text = `
    <div class="text-wrap"></div>
`


