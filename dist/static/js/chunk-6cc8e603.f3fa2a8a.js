(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-6cc8e603"],{"258d":function(t,a,n){"use strict";n("786a")},"786a":function(t,a,n){},bc13:function(t,a,n){"use strict";n.r(a);n("8cd7");var e=n("0c3a"),s=(n("2de4"),n("7c84")),i=(n("883b"),n("92ce")),o=(n("b137"),n("00e79")),c=(n("e4d9"),n("ae9b")),l=(n("5c6b"),n("9737")),u=(n("fb38"),n("2ff1")),r=n("57bc");n("2c46").a.use(e.a).use(s.a).use(i.a).use(o.a).use(c.a).use(l.a).use(u.a);var d={name:"Home",data:function(){return{areaList:r.a,show:!1,list:[],loading:!1,finished:!1}},mounted:function(){},methods:{onLoad:function(){var t=this;setTimeout((function(){for(var a=0;a<10;a++)t.list.push(t.list.length+1);t.loading=!1,t.list.length>=40&&(t.finished=!0)}),1e3)}}},f=(n("258d"),n("cba8")),h=Object(f.a)(d,(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"main home"},[n("div",{staticClass:"box border-bottom"},[t._v(" 车生活是上海市 ")]),n("van-button",{attrs:{type:"warning",text:"显示遮罩层"},on:{click:function(a){t.show=!0}}}),n("van-area",{attrs:{title:"标题","area-list":t.areaList,"columns-placeholder":["请选择","请选择","请选择"]}}),n("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(a){t.loading=a},expression:"loading"}},t._l(t.list,(function(t){return n("van-cell",{key:t,attrs:{title:t}})})),1),n("van-overlay",{attrs:{"class-name":t.$isMobile()?"":"is-pc",show:t.show},on:{click:function(a){t.show=!1}}},[n("div",{staticClass:"wrapper",on:{click:function(t){t.stopPropagation()}}},[n("div",{staticClass:"block"})])])],1)}),[],!1,null,"4b152634",null);a.default=h.exports}}]);