<template>
    <div>
        <div class="map">
            <!--        <input v-model="addressKeyword" placeholder="请输入地址来直接查找相关位置"></input>-->
            <!-- 给地图加点击事件getLocationPoint，点击地图获取位置相关的信息，经纬度啥的 -->
            <!-- scroll-wheel-zoom：是否可以用鼠标滚轮控制地图缩放，zoom是视图比例 -->
            <ul class="map-nav orangeColor">
                <li class="big-li">
                    <div class="row-1 YaSiBlank" @click="addressKeywordChange(121.271075,31.240358)">
                        <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 53.9 56.7"><g fill="none" stroke="#c9c9c9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"><path d="M52.4 34.6c-2.9 11.3-13.1 19.6-25.3 19.6C12.7 54.3 1 42.6 1 28.1S12.7 2 27.1 2c11.9 0 22 8 25.1 18.9"/><path d="M31.8 25.8c.5-.9.9-1.9.9-3 0-3.1-2.5-5.7-5.7-5.7s-5.7 2.5-5.7 5.7c0 .8.2 1.6.5 2.4l5.2 9.7 4.8-9.1z"/><path d="M25.9 32.9h-4.6l-5.4 5.5h21.9l-5.5-5.5H28"/><circle cx="26.9" cy="22.9" r="2.4"/></g></svg>
                        <div class="icon-right AvantGarde">
                            <p class="title YaSiBlank" style="">Shanghai Trayton Furniture Co., Ltd. </p>
                            <p class="address p AvantGarde">No. 1999 Lianyou Road, Minhang District, <br> 201107, Shanghai, China </p>
                        </div>
                    </div>
                    <div class="row-2 AvantGarde">
                        <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 53.9 56.7"><path fill="none" stroke="#c9c9c9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M52.4 34.6c-2.9 11.3-13.1 19.6-25.3 19.6C12.7 54.3 1 42.6 1 28.1S12.7 2 27.1 2c11.9 0 22 8 25.1 18.9"/><path fill="none" stroke="#c9c9c9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M31.8 43.3h-8.6c-2 0-3.5-1.6-3.5-3.5V17.1c0-2 1.6-3.5 3.5-3.5h8.6c2 0 3.5 1.6 3.5 3.5v22.7c.1 2-1.5 3.5-3.5 3.5zM15.1 30.6c-1.3-1.2-2.1-2.9-2.1-4.8s.8-3.6 2.2-4.8M17.8 28.6c-.8-.6-1.3-1.6-1.3-2.7s.5-2.1 1.3-2.8M40.2 30.6c1.3-1.2 2.1-2.9 2.1-4.8s-.8-3.6-2.2-4.8M37.5 28.6c.8-.7 1.3-1.7 1.3-2.8 0-1.1-.5-2.1-1.3-2.8M19.7 37.6h15.7M26.1 40.2h3"/></svg>
                        <p class="address">+86 21 6296 1999</p>
                    </div>
                </li>
                <li class="big-li-2">
                    <div class="row-1 AvantGarde" @click="addressKeywordChange(-80.003813,35.957545)">
                        <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 53.9 56.7"><g fill="none" stroke="#c9c9c9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"><path d="M52.4 34.6c-2.9 11.3-13.1 19.6-25.3 19.6C12.7 54.3 1 42.6 1 28.1S12.7 2 27.1 2c11.9 0 22 8 25.1 18.9"/><path d="M31.8 25.8c.5-.9.9-1.9.9-3 0-3.1-2.5-5.7-5.7-5.7s-5.7 2.5-5.7 5.7c0 .8.2 1.6.5 2.4l5.2 9.7 4.8-9.1z"/><path d="M25.9 32.9h-4.6l-5.4 5.5h21.9l-5.5-5.5H28"/><circle cx="26.9" cy="22.9" r="2.4"/></g></svg>
                        <div class="icon-right">
                            <p class="title YaSiBlank">Trayton America lnc.</p>
                            <p class="address">211 East Commerce Avenue,<br class="br1440">Suite 4200 High Point, NC </p>
                        </div>
                    </div>
                    <div class="row-2 AvantGarde">
                        <svg class="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 53.9 56.7"><path fill="none" stroke="#c9c9c9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M52.4 34.6c-2.9 11.3-13.1 19.6-25.3 19.6C12.7 54.3 1 42.6 1 28.1S12.7 2 27.1 2c11.9 0 22 8 25.1 18.9"/><defs><path id="a" d="M13.4 14.1h27.8v28.4H13.4z"/></defs><clipPath id="b"><use xlink:href="#a" overflow="visible"/></clipPath><path clip-path="url(#b)" fill="none" stroke="#c9c9c9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M18.2 20.6L14 23.8v18.1h26.6V23.4l-4.2-2.8"/><path fill="none" stroke="=#c9c9c9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M36.3 27.7V17.3H18.6v10.4"/><defs><path id="c" d="M13.4 14.1h27.8v28.4H13.4z"/></defs><clipPath id="d"><use xlink:href="#c" overflow="visible"/></clipPath><path clip-path="url(#d)" fill="none" stroke="#c9c9c9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M23.9 17.3l3.6-2.7 3.5 2.7"/><path fill="none" stroke="#c9c9c9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M22.3 20.6h10M22.3 23.8h10M22.3 27.1h10"/><g><defs><path id="e" d="M13.4 14.1h27.8v28.4H13.4z"/></defs><clipPath id="f"><use xlink:href="#e" overflow="visible"/></clipPath><path clip-path="url(#f)" fill="none" stroke="#c9c9c9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M14 24.8l11.2 8.3h4.6l10.3-8.3M14 40.3l10.4-7.2M40.6 40.3l-10.4-7.5"/></g></svg>
                        <p class="address">help@simonli.com</p>
                    </div>
                </li>
            </ul>
            <ul class="map-nav">
                <li >
                    <div class="row-1 AvantGarde" @click="addressKeywordChange(121.438251,31.1916)">
                        <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 53.9 56.7"><g fill="none" stroke="#c9c9c9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"><path d="M52.4 34.6c-2.9 11.3-13.1 19.6-25.3 19.6C12.7 54.3 1 42.6 1 28.1S12.7 2 27.1 2c11.9 0 22 8 25.1 18.9"/><path d="M31.8 25.8c.5-.9.9-1.9.9-3 0-3.1-2.5-5.7-5.7-5.7s-5.7 2.5-5.7 5.7c0 .8.2 1.6.5 2.4l5.2 9.7 4.8-9.1z"/><path d="M25.9 32.9h-4.6l-5.4 5.5h21.9l-5.5-5.5H28"/><circle cx="26.9" cy="22.9" r="2.4"/></g></svg>
                        <div class="icon-right">
                            <p class="title special-title">Simon Li Flagship Store </p>
                            <p class="address p YaSiRegular">A103-203, Wending Living Style Plaza, No. 258 Wending Road, Xuhui District, 200030, Shanghai, China </p>
                        </div>
                    </div>
                    <div class="row-2 AvantGarde" @click="addressKeywordChange(121.438251,31.1916)">
                        <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 53.9 56.7"><path fill="none" stroke="#c9c9c9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M52.4 34.6c-2.9 11.3-13.1 19.6-25.3 19.6C12.7 54.3 1 42.6 1 28.1S12.7 2 27.1 2c11.9 0 22 8 25.1 18.9"/><path fill="none" stroke="#c9c9c9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M31.8 43.3h-8.6c-2 0-3.5-1.6-3.5-3.5V17.1c0-2 1.6-3.5 3.5-3.5h8.6c2 0 3.5 1.6 3.5 3.5v22.7c.1 2-1.5 3.5-3.5 3.5zM15.1 30.6c-1.3-1.2-2.1-2.9-2.1-4.8s.8-3.6 2.2-4.8M17.8 28.6c-.8-.6-1.3-1.6-1.3-2.7s.5-2.1 1.3-2.8M40.2 30.6c1.3-1.2 2.1-2.9 2.1-4.8s-.8-3.6-2.2-4.8M37.5 28.6c.8-.7 1.3-1.7 1.3-2.8 0-1.1-.5-2.1-1.3-2.8M19.7 37.6h15.7M26.1 40.2h3"/></svg>
                        <p class="address">+86 21 6428 2950（2953）</p>
                    </div>
                </li>
                <li>
                    <div class="row-1 AvantGarde" @click="addressKeywordChange(120.951983,30.891197)">
                        <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 53.9 56.7"><g fill="none" stroke="#c9c9c9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"><path d="M52.4 34.6c-2.9 11.3-13.1 19.6-25.3 19.6C12.7 54.3 1 42.6 1 28.1S12.7 2 27.1 2c11.9 0 22 8 25.1 18.9"/><path d="M31.8 25.8c.5-.9.9-1.9.9-3 0-3.1-2.5-5.7-5.7-5.7s-5.7 2.5-5.7 5.7c0 .8.2 1.6.5 2.4l5.2 9.7 4.8-9.1z"/><path d="M25.9 32.9h-4.6l-5.4 5.5h21.9l-5.5-5.5H28"/><circle cx="26.9" cy="22.9" r="2.4"/></g></svg>
                        <div class="icon-right">
                            <p class="title special-title">Trayton Furniture Jiaxing Co., Ltd. </p>
                            <p class="address p YaSiRegular">No. 199 Nanxing Road, Jiashan County, 314100,Zhejiang Province, China </p>
                        </div>
                    </div>
                    <div class="row-2 AvantGarde">
                        <svg class="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 53.9 56.7"><path fill="none" stroke="#c9c9c9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M52.4 34.6c-2.9 11.3-13.1 19.6-25.3 19.6C12.7 54.3 1 42.6 1 28.1S12.7 2 27.1 2c11.9 0 22 8 25.1 18.9"/><defs><path id="a" d="M13.4 14.1h27.8v28.4H13.4z"/></defs><clipPath id="b"><use xlink:href="#a" overflow="visible"/></clipPath><path clip-path="url(#b)" fill="none" stroke="#c9c9c9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M18.2 20.6L14 23.8v18.1h26.6V23.4l-4.2-2.8"/><path fill="none" stroke="=#c9c9c9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M36.3 27.7V17.3H18.6v10.4"/><defs><path id="c" d="M13.4 14.1h27.8v28.4H13.4z"/></defs><clipPath id="d"><use xlink:href="#c" overflow="visible"/></clipPath><path clip-path="url(#d)" fill="none" stroke="#c9c9c9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M23.9 17.3l3.6-2.7 3.5 2.7"/><path fill="none" stroke="#c9c9c9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M22.3 20.6h10M22.3 23.8h10M22.3 27.1h10"/><g><defs><path id="e" d="M13.4 14.1h27.8v28.4H13.4z"/></defs><clipPath id="f"><use xlink:href="#e" overflow="visible"/></clipPath><path clip-path="url(#f)" fill="none" stroke="#c9c9c9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M14 24.8l11.2 8.3h4.6l10.3-8.3M14 40.3l10.4-7.2M40.6 40.3l-10.4-7.5"/></g></svg>
                        <p class="address">info@trayton.com</p>
                    </div>
                </li>
                <li>
                    <div class="row-1 AvantGarde" @click="addressKeywordChange(120.952,30.891227)">
                        <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 53.9 56.7"><g fill="none" stroke="#c9c9c9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"><path d="M52.4 34.6c-2.9 11.3-13.1 19.6-25.3 19.6C12.7 54.3 1 42.6 1 28.1S12.7 2 27.1 2c11.9 0 22 8 25.1 18.9"/><path d="M31.8 25.8c.5-.9.9-1.9.9-3 0-3.1-2.5-5.7-5.7-5.7s-5.7 2.5-5.7 5.7c0 .8.2 1.6.5 2.4l5.2 9.7 4.8-9.1z"/><path d="M25.9 32.9h-4.6l-5.4 5.5h21.9l-5.5-5.5H28"/><circle cx="26.9" cy="22.9" r="2.4"/></g></svg>
                        <div class="icon-right">
                            <p class="title special-title">Jiaxing Motion Furniture Co., Ltd. </p>
                            <p class="address p YaSiRegular">No. 166 Zhenguo Road, Jiashan County, 314100, Zhejiang Province, China <br></p>
                        </div>
                    </div>
                    <div class="row-2 AvantGarde">
                        <svg class="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 53.9 56.7"><path fill="none" stroke="#c9c9c9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M52.4 34.6c-2.9 11.3-13.1 19.6-25.3 19.6C12.7 54.3 1 42.6 1 28.1S12.7 2 27.1 2c11.9 0 22 8 25.1 18.9"/><defs><path id="a" d="M13.4 14.1h27.8v28.4H13.4z"/></defs><clipPath id="b"><use xlink:href="#a" overflow="visible"/></clipPath><path clip-path="url(#b)" fill="none" stroke="#c9c9c9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M18.2 20.6L14 23.8v18.1h26.6V23.4l-4.2-2.8"/><path fill="none" stroke="=#c9c9c9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M36.3 27.7V17.3H18.6v10.4"/><defs><path id="c" d="M13.4 14.1h27.8v28.4H13.4z"/></defs><clipPath id="d"><use xlink:href="#c" overflow="visible"/></clipPath><path clip-path="url(#d)" fill="none" stroke="#c9c9c9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M23.9 17.3l3.6-2.7 3.5 2.7"/><path fill="none" stroke="#c9c9c9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M22.3 20.6h10M22.3 23.8h10M22.3 27.1h10"/><g><defs><path id="e" d="M13.4 14.1h27.8v28.4H13.4z"/></defs><clipPath id="f"><use xlink:href="#e" overflow="visible"/></clipPath><path clip-path="url(#f)" fill="none" stroke="#c9c9c9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M14 24.8l11.2 8.3h4.6l10.3-8.3M14 40.3l10.4-7.2M40.6 40.3l-10.4-7.5"/></g></svg>
                        <p class="address">info@trayton.com</p>
                    </div>
                </li>
                <li>
                    <div class="row-1 AvantGarde" @click="addressKeywordChange(114.181502,22.281861)">
                        <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 53.9 56.7"><g fill="none" stroke="#c9c9c9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"><path d="M52.4 34.6c-2.9 11.3-13.1 19.6-25.3 19.6C12.7 54.3 1 42.6 1 28.1S12.7 2 27.1 2c11.9 0 22 8 25.1 18.9"/><path d="M31.8 25.8c.5-.9.9-1.9.9-3 0-3.1-2.5-5.7-5.7-5.7s-5.7 2.5-5.7 5.7c0 .8.2 1.6.5 2.4l5.2 9.7 4.8-9.1z"/><path d="M25.9 32.9h-4.6l-5.4 5.5h21.9l-5.5-5.5H28"/><circle cx="26.9" cy="22.9" r="2.4"/></g></svg>
                        <div class="icon-right ">
                            <p class="title special-title">Trayton Furniture Hong Kong Ltd. </p>
                            <p class="address p YaSiRegular">Room 1610, F16, Harcourt House, No. 39 Gloucester Road, Wan Chai District, Hong Kong </p>
                        </div>
                    </div>
                    <div class="row-2 AvantGarde">
                        <svg class="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 53.9 56.7"><path fill="none" stroke="#c9c9c9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M52.4 34.6c-2.9 11.3-13.1 19.6-25.3 19.6C12.7 54.3 1 42.6 1 28.1S12.7 2 27.1 2c11.9 0 22 8 25.1 18.9"/><defs><path id="a" d="M13.4 14.1h27.8v28.4H13.4z"/></defs><clipPath id="b"><use xlink:href="#a" overflow="visible"/></clipPath><path clip-path="url(#b)" fill="none" stroke="#c9c9c9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M18.2 20.6L14 23.8v18.1h26.6V23.4l-4.2-2.8"/><path fill="none" stroke="=#c9c9c9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M36.3 27.7V17.3H18.6v10.4"/><defs><path id="c" d="M13.4 14.1h27.8v28.4H13.4z"/></defs><clipPath id="d"><use xlink:href="#c" overflow="visible"/></clipPath><path clip-path="url(#d)" fill="none" stroke="#c9c9c9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M23.9 17.3l3.6-2.7 3.5 2.7"/><path fill="none" stroke="#c9c9c9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M22.3 20.6h10M22.3 23.8h10M22.3 27.1h10"/><g><defs><path id="e" d="M13.4 14.1h27.8v28.4H13.4z"/></defs><clipPath id="f"><use xlink:href="#e" overflow="visible"/></clipPath><path clip-path="url(#f)" fill="none" stroke="#c9c9c9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M14 24.8l11.2 8.3h4.6l10.3-8.3M14 40.3l10.4-7.2M40.6 40.3l-10.4-7.5"/></g></svg>
                        <p class="address">info@trayton.com</p>
                    </div>
                </li>
            </ul>
            <baidu-map
                    class="bmView"
                    :scroll-wheel-zoom="true"
                    :center="location"
                    :zoom="zoom"
                    ak="PwIDq0bGCCR4ewKXreNQz710IvNYOvfN"
                    ref="baidu-map"
            >
                <bm-view class="baidu-map"></bm-view>
                <!--            <bm-local-search :keyword="addressKeyword" :auto-viewport="true" style="display: none"></bm-local-search>-->
                <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
                <!--            120.951983,30.891197-->
                <bm-marker :position="location" :dragging="false" animation="BMAP_ANIMATION_BOUNCE" >
                    <!--                <bm-info-window :show="show" @close="infoWindowClose" >我爱北京天安门</bm-info-window>-->
                </bm-marker>
            </baidu-map>
        </div>
        <ul class="map-nav-mobile">
            <li>
                <div class="row-1 AvantGarde" @click="addressKeywordChange(121.271075,31.240358)">
                    <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 53.9 56.7"><g fill="none" stroke="#c9c9c9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"><path d="M52.4 34.6c-2.9 11.3-13.1 19.6-25.3 19.6C12.7 54.3 1 42.6 1 28.1S12.7 2 27.1 2c11.9 0 22 8 25.1 18.9"/><path d="M31.8 25.8c.5-.9.9-1.9.9-3 0-3.1-2.5-5.7-5.7-5.7s-5.7 2.5-5.7 5.7c0 .8.2 1.6.5 2.4l5.2 9.7 4.8-9.1z"/><path d="M25.9 32.9h-4.6l-5.4 5.5h21.9l-5.5-5.5H28"/><circle cx="26.9" cy="22.9" r="2.4"/></g></svg>
                    <div class="icon-right ">
                        <p class="title YaSiBlank">Shanghai Trayton Furniture Co., Ltd. </p>
                        <p class="address p ">No. 1999 Lianyou Road, Minhang District, 201107, Shanghai, China </p>
                    </div>
                </div>
                <div class="row-2 AvantGarde">
                    <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 53.9 56.7"><path fill="none" stroke="#c9c9c9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M52.4 34.6c-2.9 11.3-13.1 19.6-25.3 19.6C12.7 54.3 1 42.6 1 28.1S12.7 2 27.1 2c11.9 0 22 8 25.1 18.9"/><path fill="none" stroke="#c9c9c9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M31.8 43.3h-8.6c-2 0-3.5-1.6-3.5-3.5V17.1c0-2 1.6-3.5 3.5-3.5h8.6c2 0 3.5 1.6 3.5 3.5v22.7c.1 2-1.5 3.5-3.5 3.5zM15.1 30.6c-1.3-1.2-2.1-2.9-2.1-4.8s.8-3.6 2.2-4.8M17.8 28.6c-.8-.6-1.3-1.6-1.3-2.7s.5-2.1 1.3-2.8M40.2 30.6c1.3-1.2 2.1-2.9 2.1-4.8s-.8-3.6-2.2-4.8M37.5 28.6c.8-.7 1.3-1.7 1.3-2.8 0-1.1-.5-2.1-1.3-2.8M19.7 37.6h15.7M26.1 40.2h3"/></svg>
                    <p class="address">+86 21 6296 1999</p>
                </div>
            </li>
            <li>
                <div class="row-1 AvantGarde" @click="addressKeywordChange(-80.003813,35.957545)">
                    <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 53.9 56.7"><g fill="none" stroke="#c9c9c9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"><path d="M52.4 34.6c-2.9 11.3-13.1 19.6-25.3 19.6C12.7 54.3 1 42.6 1 28.1S12.7 2 27.1 2c11.9 0 22 8 25.1 18.9"/><path d="M31.8 25.8c.5-.9.9-1.9.9-3 0-3.1-2.5-5.7-5.7-5.7s-5.7 2.5-5.7 5.7c0 .8.2 1.6.5 2.4l5.2 9.7 4.8-9.1z"/><path d="M25.9 32.9h-4.6l-5.4 5.5h21.9l-5.5-5.5H28"/><circle cx="26.9" cy="22.9" r="2.4"/></g></svg>
                    <div class="icon-right">
                        <p class="title YaSiBlank">Trayton America lnc.</p>
                        <p class="address ">211 East Commerce Avenue,<br class="br1440">Suite 4200 High Point, NC </p>
                    </div>
                </div>
                <div class="row-2 AvantGarde">
                    <svg class="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 53.9 56.7"><path fill="none" stroke="#c9c9c9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M52.4 34.6c-2.9 11.3-13.1 19.6-25.3 19.6C12.7 54.3 1 42.6 1 28.1S12.7 2 27.1 2c11.9 0 22 8 25.1 18.9"/><defs><path id="a" d="M13.4 14.1h27.8v28.4H13.4z"/></defs><clipPath id="b"><use xlink:href="#a" overflow="visible"/></clipPath><path clip-path="url(#b)" fill="none" stroke="#c9c9c9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M18.2 20.6L14 23.8v18.1h26.6V23.4l-4.2-2.8"/><path fill="none" stroke="=#c9c9c9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M36.3 27.7V17.3H18.6v10.4"/><defs><path id="c" d="M13.4 14.1h27.8v28.4H13.4z"/></defs><clipPath id="d"><use xlink:href="#c" overflow="visible"/></clipPath><path clip-path="url(#d)" fill="none" stroke="#c9c9c9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M23.9 17.3l3.6-2.7 3.5 2.7"/><path fill="none" stroke="#c9c9c9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M22.3 20.6h10M22.3 23.8h10M22.3 27.1h10"/><g><defs><path id="e" d="M13.4 14.1h27.8v28.4H13.4z"/></defs><clipPath id="f"><use xlink:href="#e" overflow="visible"/></clipPath><path clip-path="url(#f)" fill="none" stroke="#c9c9c9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M14 24.8l11.2 8.3h4.6l10.3-8.3M14 40.3l10.4-7.2M40.6 40.3l-10.4-7.5"/></g></svg>
                    <p class="address">help@simonli.com</p>
                </div>
            </li>
            <li>
                <div class="row-1 AvantGarde" @click="addressKeywordChange(121.438251,31.1916)">
                    <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 53.9 56.7"><g fill="none" stroke="#c9c9c9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"><path d="M52.4 34.6c-2.9 11.3-13.1 19.6-25.3 19.6C12.7 54.3 1 42.6 1 28.1S12.7 2 27.1 2c11.9 0 22 8 25.1 18.9"/><path d="M31.8 25.8c.5-.9.9-1.9.9-3 0-3.1-2.5-5.7-5.7-5.7s-5.7 2.5-5.7 5.7c0 .8.2 1.6.5 2.4l5.2 9.7 4.8-9.1z"/><path d="M25.9 32.9h-4.6l-5.4 5.5h21.9l-5.5-5.5H28"/><circle cx="26.9" cy="22.9" r="2.4"/></g></svg>
                    <div class="icon-right">
                        <p class="title special-title">Simon Li Flagship Store </p>
                        <p class="address p ">A103-203, Wending Living Style Plaza, No. 258 Wending Road, Xuhui District, 200030, Shanghai, China </p>
                    </div>
                </div>
                <div class="row-2 AvantGarde" @click="addressKeywordChange(121.438251,31.1916)">
                    <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 53.9 56.7"><path fill="none" stroke="#c9c9c9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M52.4 34.6c-2.9 11.3-13.1 19.6-25.3 19.6C12.7 54.3 1 42.6 1 28.1S12.7 2 27.1 2c11.9 0 22 8 25.1 18.9"/><path fill="none" stroke="#c9c9c9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M31.8 43.3h-8.6c-2 0-3.5-1.6-3.5-3.5V17.1c0-2 1.6-3.5 3.5-3.5h8.6c2 0 3.5 1.6 3.5 3.5v22.7c.1 2-1.5 3.5-3.5 3.5zM15.1 30.6c-1.3-1.2-2.1-2.9-2.1-4.8s.8-3.6 2.2-4.8M17.8 28.6c-.8-.6-1.3-1.6-1.3-2.7s.5-2.1 1.3-2.8M40.2 30.6c1.3-1.2 2.1-2.9 2.1-4.8s-.8-3.6-2.2-4.8M37.5 28.6c.8-.7 1.3-1.7 1.3-2.8 0-1.1-.5-2.1-1.3-2.8M19.7 37.6h15.7M26.1 40.2h3"/></svg>
                    <p class="address">021-6428 2950（2953）</p>
                </div>
            </li>
            <li>
                <div class="row-1 AvantGarde" @click="addressKeywordChange(120.951983,30.891197)">
                    <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 53.9 56.7"><g fill="none" stroke="#c9c9c9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"><path d="M52.4 34.6c-2.9 11.3-13.1 19.6-25.3 19.6C12.7 54.3 1 42.6 1 28.1S12.7 2 27.1 2c11.9 0 22 8 25.1 18.9"/><path d="M31.8 25.8c.5-.9.9-1.9.9-3 0-3.1-2.5-5.7-5.7-5.7s-5.7 2.5-5.7 5.7c0 .8.2 1.6.5 2.4l5.2 9.7 4.8-9.1z"/><path d="M25.9 32.9h-4.6l-5.4 5.5h21.9l-5.5-5.5H28"/><circle cx="26.9" cy="22.9" r="2.4"/></g></svg>
                    <div class="icon-right">
                        <p class="title special-title">Trayton Furniture Jiaxing Co., Ltd. </p>
                        <p class="address p ">No. 199 Nanxing Road, Jiashan County, 314100, Zhejiang Province, China </p>
                    </div>
                </div>
                <div class="row-2 AvantGarde">
                    <svg class="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 53.9 56.7"><path fill="none" stroke="#c9c9c9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M52.4 34.6c-2.9 11.3-13.1 19.6-25.3 19.6C12.7 54.3 1 42.6 1 28.1S12.7 2 27.1 2c11.9 0 22 8 25.1 18.9"/><defs><path id="a" d="M13.4 14.1h27.8v28.4H13.4z"/></defs><clipPath id="b"><use xlink:href="#a" overflow="visible"/></clipPath><path clip-path="url(#b)" fill="none" stroke="#c9c9c9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M18.2 20.6L14 23.8v18.1h26.6V23.4l-4.2-2.8"/><path fill="none" stroke="=#c9c9c9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M36.3 27.7V17.3H18.6v10.4"/><defs><path id="c" d="M13.4 14.1h27.8v28.4H13.4z"/></defs><clipPath id="d"><use xlink:href="#c" overflow="visible"/></clipPath><path clip-path="url(#d)" fill="none" stroke="#c9c9c9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M23.9 17.3l3.6-2.7 3.5 2.7"/><path fill="none" stroke="#c9c9c9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M22.3 20.6h10M22.3 23.8h10M22.3 27.1h10"/><g><defs><path id="e" d="M13.4 14.1h27.8v28.4H13.4z"/></defs><clipPath id="f"><use xlink:href="#e" overflow="visible"/></clipPath><path clip-path="url(#f)" fill="none" stroke="#c9c9c9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M14 24.8l11.2 8.3h4.6l10.3-8.3M14 40.3l10.4-7.2M40.6 40.3l-10.4-7.5"/></g></svg>
                    <p class="address">info@trayton.com</p>
                </div>
            </li>
            <li>
                <div class="row-1 AvantGarde" @click="addressKeywordChange(120.952,30.891227)">
                    <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 53.9 56.7"><g fill="none" stroke="#c9c9c9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"><path d="M52.4 34.6c-2.9 11.3-13.1 19.6-25.3 19.6C12.7 54.3 1 42.6 1 28.1S12.7 2 27.1 2c11.9 0 22 8 25.1 18.9"/><path d="M31.8 25.8c.5-.9.9-1.9.9-3 0-3.1-2.5-5.7-5.7-5.7s-5.7 2.5-5.7 5.7c0 .8.2 1.6.5 2.4l5.2 9.7 4.8-9.1z"/><path d="M25.9 32.9h-4.6l-5.4 5.5h21.9l-5.5-5.5H28"/><circle cx="26.9" cy="22.9" r="2.4"/></g></svg>
                    <div class="icon-right">
                        <p class="title special-title">Jiaxing Motion Furniture Co., Ltd. </p>
                        <p class="address p">No. 166 Zhenguo Road, Jiashan County, 314100, Zhejiang Province, China</p>
                    </div>
                </div>
                <div class="row-2 AvantGarde">
                    <svg class="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 53.9 56.7"><path fill="none" stroke="#c9c9c9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M52.4 34.6c-2.9 11.3-13.1 19.6-25.3 19.6C12.7 54.3 1 42.6 1 28.1S12.7 2 27.1 2c11.9 0 22 8 25.1 18.9"/><defs><path id="a" d="M13.4 14.1h27.8v28.4H13.4z"/></defs><clipPath id="b"><use xlink:href="#a" overflow="visible"/></clipPath><path clip-path="url(#b)" fill="none" stroke="#c9c9c9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M18.2 20.6L14 23.8v18.1h26.6V23.4l-4.2-2.8"/><path fill="none" stroke="=#c9c9c9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M36.3 27.7V17.3H18.6v10.4"/><defs><path id="c" d="M13.4 14.1h27.8v28.4H13.4z"/></defs><clipPath id="d"><use xlink:href="#c" overflow="visible"/></clipPath><path clip-path="url(#d)" fill="none" stroke="#c9c9c9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M23.9 17.3l3.6-2.7 3.5 2.7"/><path fill="none" stroke="#c9c9c9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M22.3 20.6h10M22.3 23.8h10M22.3 27.1h10"/><g><defs><path id="e" d="M13.4 14.1h27.8v28.4H13.4z"/></defs><clipPath id="f"><use xlink:href="#e" overflow="visible"/></clipPath><path clip-path="url(#f)" fill="none" stroke="#c9c9c9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M14 24.8l11.2 8.3h4.6l10.3-8.3M14 40.3l10.4-7.2M40.6 40.3l-10.4-7.5"/></g></svg>
                    <p class="address">info@trayton.com</p>
                </div>
            </li>
            <li>
                <div class="row-1 AvantGarde" @click="addressKeywordChange(114.181502,22.281861)">
                    <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 53.9 56.7"><g fill="none" stroke="#c9c9c9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"><path d="M52.4 34.6c-2.9 11.3-13.1 19.6-25.3 19.6C12.7 54.3 1 42.6 1 28.1S12.7 2 27.1 2c11.9 0 22 8 25.1 18.9"/><path d="M31.8 25.8c.5-.9.9-1.9.9-3 0-3.1-2.5-5.7-5.7-5.7s-5.7 2.5-5.7 5.7c0 .8.2 1.6.5 2.4l5.2 9.7 4.8-9.1z"/><path d="M25.9 32.9h-4.6l-5.4 5.5h21.9l-5.5-5.5H28"/><circle cx="26.9" cy="22.9" r="2.4"/></g></svg>
                    <div class="icon-right ">
                        <p class="title special-title">Trayton Furniture Hong Kong Ltd. </p>
                        <p class="address p ">Room 1610, F16, Harcourt House, No. 39 Gloucester Road, Wan Chai District, Hong Kong </p>
                    </div>
                </div>
                <div class="row-2 AvantGarde">
                    <svg class="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 53.9 56.7"><path fill="none" stroke="#c9c9c9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M52.4 34.6c-2.9 11.3-13.1 19.6-25.3 19.6C12.7 54.3 1 42.6 1 28.1S12.7 2 27.1 2c11.9 0 22 8 25.1 18.9"/><defs><path id="a" d="M13.4 14.1h27.8v28.4H13.4z"/></defs><clipPath id="b"><use xlink:href="#a" overflow="visible"/></clipPath><path clip-path="url(#b)" fill="none" stroke="#c9c9c9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M18.2 20.6L14 23.8v18.1h26.6V23.4l-4.2-2.8"/><path fill="none" stroke="=#c9c9c9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M36.3 27.7V17.3H18.6v10.4"/><defs><path id="c" d="M13.4 14.1h27.8v28.4H13.4z"/></defs><clipPath id="d"><use xlink:href="#c" overflow="visible"/></clipPath><path clip-path="url(#d)" fill="none" stroke="#c9c9c9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M23.9 17.3l3.6-2.7 3.5 2.7"/><path fill="none" stroke="#c9c9c9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M22.3 20.6h10M22.3 23.8h10M22.3 27.1h10"/><g><defs><path id="e" d="M13.4 14.1h27.8v28.4H13.4z"/></defs><clipPath id="f"><use xlink:href="#e" overflow="visible"/></clipPath><path clip-path="url(#f)" fill="none" stroke="#c9c9c9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M14 24.8l11.2 8.3h4.6l10.3-8.3M14 40.3l10.4-7.2M40.6 40.3l-10.4-7.5"/></g></svg>
                    <p class="address">info@trayton.com</p>
                </div>
            </li>
        </ul>
    </div>
</template>
<!--  先在vue的index.html里面引入腾讯地图包-->

<script>
    import {BaiduMap, BmView, BmLocalSearch, BmNavigation, BmMarker, BmInfoWindow} from 'vue-baidu-map'

    export default {
        name: 'ContactMap',
        components: {BaiduMap, BmView, BmLocalSearch,BmNavigation, BmMarker, BmInfoWindow},
        data () {
            return {
                location: {
                    lng: 121.271075,
                    lat: 31.240358
                },
                zoom: 18,
                // addressKeyword: "特雷通家具(嘉兴)有限公司",
                geoCoder: '',
                show: true
            };
        },
        methods:{
            // 获取坐标
            getLocationPoint(e) {

                this.lng = e.point.lng;
                this.lat = e.point.lat;
                /* 创建地址解析器的实例 */
                // this.geoCoder = new BMap.Geocoder();
                // /* 获取位置对应的坐标 */
                // this.geoCoder.getPoint(this.addressKeyword, point => {
                //     this.selectedLng = point.lng;
                //     this.selectedLat = point.lat;
                // });
                // // /* 利用坐标获取地址的详细信息 */
                // this.geoCoder.getLocation(e.point, res=>{
                //     console.log(res);
                // })
            },
            // 切换坐标
            addressKeywordChange (lng, lat) {

                this.location.lng = lng,
                this.location.lat = lat
                // console.log(1)
                const cW = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth

                document.body.scrollTop = document.documentElement.scrollTop = this.$refs['baidu-map'].$el.offsetTop - 20;

                // console.log(this.addressKeyword)
            },
            infoWindowClose () {
                this.show = false
            },
            infoWindowOpen () {
                // console.log(1)
                this.show = true
            },
            infoWindow () {
                this.show = true
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '~styles/varibles';
    @import '~styles/common';
    .map {
        margin: 0 auto 10rem;
        width: 1326px;
    }
    .bmView {
        margin-top: 6rem;
    }
    .baidu-map {
        margin: 0 auto;
        height: 400px;
        border-radius: 10px;
    }
    .map-nav, .map-nav-mobile {
        display: flex;
        flex-wrap: wrap;
    }
    .map-nav li {
        display: flex;
        flex-wrap: wrap;
        align-items: baseline;
        margin-top: 6rem;
        width: 25%;
    }
    .map-nav-mobile li {
        margin-top: 6rem;
        width: 25%;
    }
    .row-1 {
        margin-top: 1rem;
        display: flex;
        align-items: flex-start;
        cursor: pointer;
    }
    .row-2 {
        margin-top: 1rem;
        display: flex;
        align-items: center;
    }
    .icon {
        margin-right: 3%;
        width: 14%;
    }
    .title {
        font-size: $contentFontSize;
        font-weight: bold;
        /*line-height: $lineHeight;*/
        line-height: 1.6;
    }
    .address {
        font-size: 12px;
        line-height: 1.2;
        color: #656565;
    }
    .icon-right {
        width: 77%;
        height: 72px;
    }
    .map-nav-mobile {
        display: none;
    }
    li.big-li, li.big-li-2 {
        width: 50%;
    }
    .big-li .row-1 .icon,
    .big-li-2 .row-1 .icon
    {
        width: 7%;
    }
    .big-li .row-2 .icon {
        width: 9%;
    }
    .big-li-2 .row-2 .icon {
        width: 8%;
    }
    .orangeColor .title,
    .orangeColor .address,
    {
        font-size: 16px;
    }
    .special-title {
        color: #656565;
    }
    @media screen and (max-width: 1440px) {
        .map {
            width: 1000px;
        }
        .address {
            font-size: 12px;
        }
        .br1440 {
            display: none;
        }
    }
    @media screen and (max-width: 1024px) {
        .map {
            margin: 0 auto 3rem;
            width: 90%
        }
        .baidu-map {
            height: 400px;
            border-radius: 0;
        }
        .map-nav {
            display: none;
        }
        .map-nav-mobile {
            display: block;
            margin: 0 auto 5rem;
            width: 90%;
        }
        .map-nav-mobile li {
            margin: 0 0 1rem 0;
            padding-top: 1rem;
            width: auto;
            /*border-bottom: 1px solid #dcdcdc;*/
        }
        .map-nav-mobile li + li {
            border-top: 1px solid #dcdcdc;
        }
        .icon {
            width: 8%;
        }
    }
    @media screen and (max-width: 750px) {
        .map {
            margin: 0 auto 3rem;
            width: 100%
        }
        .baidu-map {
            height: 300px;
            border-radius: 0;
        }
        .title {
            font-size: 14px;
        }
        .icon-right {
            height: auto;
        }
    }
</style>