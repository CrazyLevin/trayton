<template>
    <div class="home-wrapper">
        <swiper ref="mySwiper" :options="swiperOptions" >
            <swiper-slide >
                <router-link to="/AboutUs">
                    <img class="swiper-img" src="../../../assets/images/home_swiper_01.jpg" alt=""/>
                    <img class="swiper-img-model" src="../../../assets/images/home_swiper_01_mobile.jpg" alt="home_swiper_01_mobile"/>
                    <span class="banner-model"></span>
                    <div class="swiper-content">
                        <h2 class="AvantGarde home-swiper-h2">
                            FOCUS ON CREATING<br>
                            A COMFORTABLE WORLD
                        </h2>
                        <h3 class="YaSiBlank home-swiper-h3">致力于创造一个舒适世界</h3>
                        <h4 class="YaSiRegular home-swiper-h4">打造品质、风格和舒适度俱佳的环境</h4>
                    </div>
                    <router-link to="/AboutUs" class="home-swiper-read AvantGarde">READ MORE</router-link>
                </router-link>
            </swiper-slide>
            <swiper-slide >
                <router-link to="/Competencies?id=rd">
                    <img class="swiper-img" src="../../../assets/images/home_swiper_02.jpg" alt=""/>
                    <img class="swiper-img-model" src="../../../assets/images/home_swiper_02_mobile.jpg" alt="home_swiper_02_mobile"/>
                    <span class="banner-model"></span>
                    <div class="swiper-content">
                        <h2 class="AvantGarde home-swiper-h2">
                            R&D CAPABILITIES
                        </h2>
                        <h3 class="YaSiBlank home-swiper-h3" content="">20余年沙发制造历程，<br class="br500add">提炼一套独特有效的新品开发方法</h3>
                    </div>
                    <router-link to="/Competencies?id=rd" class="home-swiper-read AvantGarde">READ MORE</router-link>
                </router-link>
            </swiper-slide>
            <swiper-slide >
                <router-link to="/csr">
                <img class="swiper-img" src="../../../assets/images/home_swiper_03.jpg" alt=""/>
                <img class="swiper-img-model" src="../../../assets/images/home_swiper_03_mobile.jpg" alt="home_swiper_03_mobile"/>
                <span class="banner-model"></span>
                <div class="swiper-content">
                    <h2 class="AvantGarde home-swiper-h2">
                        PEOPLE AND<br>
                        PLANET CARE
                    </h2>
                    <h3 class="YaSiBlank home-swiper-h3">人文和地球关怀</h3>
                </div>
                <router-link to="/csr" class="home-swiper-read AvantGarde">READ MORE</router-link>
                </router-link>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        <router-link class="home-logo" to="/">
            <svg class="home-logo-img" fill="#fff" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 813.3 121.5"><path d="M0 .7v12h23.1v52.2h16.1V12.7h23.1V.7z"/><defs><path id="a" d="M0 0h813.3v121.5H0z"/></defs><clipPath id="b"><use xlink:href="#a" overflow="visible"/></clipPath><path clip-path="url(#b)" d="M72 .7h28c6.3 0 11.2 2.1 15.4 5.6C118.9 9.8 121 14 121 19c0 7.1-3.5 12.7-11.2 16.3 3.5 1.4 6.3 4.9 9.1 11.3 2.8 7.1 5.6 12.7 8.4 18.4h-17.5c-.7-2.1-2.8-6.3-4.9-12-2.8-5.6-4.9-9.9-7-11.3-1.4-2.1-3.5-2.8-5.6-2.8h-4.9v26.2H72V.7zm15.4 12v14.8h8.4c2.8 0 4.9-.7 6.3-2.1 2.1-1.5 2.8-3.5 2.8-5.6 0-4.9-3.5-7.1-9.1-7.1h-8.4zM172 .7l28 64.2h-16.7l-4.9-12.7h-28.7l-4.9 12.7H128L153.9.7H172zm1.4 40.2L163 16.2l-9.1 24.7h19.5zM215.4 64.9V35.3L190.2.7h19.6l13.3 20.5 14-20.5h19.6l-25.2 34.6v29.6zM321 .7v12h-23.1v52.2h-16V12.7h-23.1V.7zM358.1 0c11.2 0 19.6 3.5 26.6 9.9 7 6.3 9.8 14.1 9.8 23.3 0 8.5-2.8 16.3-9.8 22.6-7 7-15.4 9.9-26.6 9.9-10.5 0-19.6-2.8-25.9-9.2-7-7-10.5-14.8-10.5-23.3 0-9.2 3.5-16.9 10.5-23.3 6.3-6.4 15.4-9.9 25.9-9.9m0 52.9c6.3 0 11.2-2.1 14.6-5.6 3.5-3.5 5.6-8.5 5.6-14.1 0-6.3-2.1-10.6-5.6-14.1-3.5-3.5-8.4-5.6-14.6-5.6-5.6 0-10.5 2.2-14.7 5.6-3.5 3.5-4.9 7.8-4.9 14.1 0 5.6 1.4 10.6 4.9 14.1 4.2 3.5 9.1 5.6 14.7 5.6M470.6.7v64.2h-13.2l-35-40.9v40.9h-16.1V.7H421l33.6 39.5V.7zM545.5 33.1h21v27.6c-7.7 3.5-15.4 4.9-23.1 4.9-10.5 0-18.9-2.8-25.2-9.2-6.3-6.3-9.8-14.1-9.8-23.3 0-9.2 3.5-16.9 9.8-23.3 7-6.4 14.7-9.9 24.5-9.9 3.5 0 7 .7 10.5 1.4 2.8.7 7 2.1 11.9 4.2v9.2c-7.7-4.2-14.7-6.4-22.4-6.4-7 0-12.5 2.2-17.5 7.1-4.9 4.9-7 10.6-7 17.6 0 7.1 2.1 13.4 7 17.7 4.9 4.9 10.5 7 18.2 7 3.5 0 8.4-.7 13.3-2.8h.7V41.6h-11.9v-8.5zM580.4 64.9V.7h15.3c7 0 11.9 1.4 15.4 4.9 4.2 3.5 5.6 7.7 5.6 13.4 0 3.5-.7 6.4-2.8 9.2-1.4 2.8-4.2 4.9-7.7 6.4 2.1 1.4 4.2 2.8 6.3 5.6 1.4 2.1 4.2 6.3 7.7 12 2.8 3.5 4.2 6.4 5.6 8.5l3.5 4.2h-11.2l-2.8-4.2V60l-2.1-2.2-2.8-4.9-2.8-4.9c-2.1-2.8-4.2-4.9-5.6-6.3-1.4-1.4-2.9-2.8-4.3-3.5-1.4-.7-3.5-.7-6.3-.7h-2.1v27.6h-8.9zm11.9-56.5h-2.8v20.5h3.5c4.2 0 7.8-.7 9.1-1.4 2.1-.7 3.5-2.1 4.2-3.5.7-1.4 1.4-3.5 1.4-5.6 0-1.4-.7-3.5-1.4-4.9-1.4-2.1-2.8-2.8-4.9-3.5-1.4-.9-4.9-1.6-9.1-1.6M661.5 0c9.8 0 18.2 2.8 25.2 9.1 6.3 6.4 9.8 14.1 9.8 24 0 9.2-3.5 17-10.5 23.3-6.3 6.3-14.7 9.2-24.5 9.2S644 62.8 637 56.4c-6.3-6.3-9-14.1-9-23.3 0-9.9 2.8-17.6 9.8-24 6.3-6.3 14-9.1 23.7-9.1m.7 8.4c-7.7 0-13.3 2.2-18.2 7.1-4.2 4.2-7 10.6-7 17.6 0 7.1 2.8 12.7 7 17 4.9 4.9 10.5 7 18.2 7 7 0 12.5-2.1 17.5-7 4.9-4.2 7-10.6 7-17.7 0-6.3-2.1-12-7-16.9-4.9-4.9-10.5-7.1-17.5-7.1M751.8.7h9.1v36.7c0 4.9 0 8.5-1.4 11.3l-2.1 6.3-4.2 4.2c-4.9 4.2-11.2 6.3-19.6 6.3-8.4 0-14.7-2.1-20.3-6.3-1.4-1.5-2.8-2.8-3.5-4.2-1.4-2.2-2.1-4.2-2.8-6.3-.7-2.8-.7-6.4-.7-11.3V.7h9.1v36.7c0 5.6.7 9.9 2.1 12.7 1.4 2.1 3.5 4.2 6.3 5.6 2.9 1.4 5.6 2.1 9.8 2.1 5.6 0 9.8-1.4 13.3-4.2 1.4-1.5 2.8-3.5 3.5-5.7.8-2.1 1.4-5.6 1.4-10.6V.7zM772.7 64.9V.7H793c6.3 0 11.2 2.1 14.7 4.9 3.5 3.5 5.6 7.7 5.6 13.4 0 3.5-1.4 7.1-2.8 9.9-2.1 2.8-4.2 4.9-7.7 6.4-3.5 1.4-7.7 2.1-14 2.1h-7V65h-9.1zm18.9-55.8h-9.8v19.8h10.5c3.5 0 6.3-.7 8.4-2.8 2.1-1.4 2.8-4.2 2.8-7.1 0-7-4.2-9.9-11.9-9.9M7.7 83.3c2.1 0 2.8.7 4.2.7 0 .7-.7 2.8-1.4 4.9h4.2v-12h4.2c-.7 2.2-.7 4.2-.7 5.6V89h4.9v3.5h-4.9v8.5c2.1-.7 3.5-1.4 4.9-2.1 0 1.4 0 2.1.7 3.5-1.4.8-3.5 1.5-5.6 2.2v16.9h-3.5v-16.2c-3.5 1.4-5.6 2.8-7 3.5-.7-1.5-1.4-2.8-2.1-4.2 1.4 0 4.9-.7 9.1-2.8v-9.2H9.8c-.7 2.1-.7 4.2-1.4 5.7-1.4-.8-2.1-1.5-3.5-1.5.7-1.4 1.4-3.5 2.1-6.3.7-3 .7-5.8.7-7.2m16.8 9.1h9.8v-6.3H25.9v-3.5H34.3c0-2.1 0-4.2-.7-5.6h4.2v5.6h9.8v3.5h-9.8v6.3h12.6V96h-7v5.6c2.8 0 4.9 0 6.3-.7v3.5h-6.3v12.7c0 1.5-.7 2.8-1.4 2.8-1.4.7-3.5 1.4-6.3 1.4 0-1.4-.7-2.8-1.4-4.2h4.9c.7 0 .7-.7.7-1.4v-11.3H25.2v-3.5c1.5.7 3.5.7 5.6.7h9.1V96H24.5v-3.6zm2.8 16.3c1.4 0 2.1-.7 3.5-1.5 1.4 2.8 2.1 4.9 2.8 7.1-.7 0-2.1.7-3.5 1.4-.7-2.7-2.1-4.9-2.8-7"/><path clip-path="url(#b)" d="M7.7 83.3c2.1 0 2.8.7 4.2.7 0 .7-.7 2.8-1.4 4.9h4.2v-12h4.2c-.7 2.2-.7 4.2-.7 5.6V89h4.9v3.5h-4.9v8.5c2.1-.7 3.5-1.4 4.9-2.1 0 1.4 0 2.1.7 3.5-1.4.8-3.5 1.5-5.6 2.2v16.9h-3.5v-16.2c-3.5 1.4-5.6 2.8-7 3.5-.7-1.5-1.4-2.8-2.1-4.2 1.4 0 4.9-.7 9.1-2.8v-9.2H9.8c-.7 2.1-.7 4.2-1.4 5.7-1.4-.8-2.1-1.5-3.5-1.5.7-1.4 1.4-3.5 2.1-6.3.7-3 .7-5.8.7-7.2m16.8 9.1h9.8v-6.3H25.9v-3.5H34.3c0-2.1 0-4.2-.7-5.6h4.2v5.6h9.8v3.5h-9.8v6.3h12.6V96h-7v5.6c2.8 0 4.9 0 6.3-.7v3.5h-6.3v12.7c0 1.5-.7 2.8-1.4 2.8-1.4.7-3.5 1.4-6.3 1.4 0-1.4-.7-2.8-1.4-4.2h4.9c.7 0 .7-.7.7-1.4v-11.3H25.2v-3.5c1.5.7 3.5.7 5.6.7h9.1V96H24.5v-3.6zm2.8 16.3c1.4 0 2.1-.7 3.5-1.5 1.4 2.8 2.1 4.9 2.8 7.1-.7 0-2.1.7-3.5 1.4-.7-2.7-2.1-4.9-2.8-7"/><path clip-path="url(#b)" fill="none" stroke="#000" stroke-width=".14" stroke-miterlimit="10" d="M7.7 83.3c2.1 0 2.8.7 4.2.7 0 .7-.7 2.8-1.4 4.9h4.2v-12h4.2c-.7 2.2-.7 4.2-.7 5.6V89h4.9v3.5h-4.9v8.5c2.1-.7 3.5-1.4 4.9-2.1 0 1.4 0 2.1.7 3.5-1.4.8-3.5 1.5-5.6 2.2v16.9h-3.5v-16.2c-3.5 1.4-5.6 2.8-7 3.5-.7-1.5-1.4-2.8-2.1-4.2 1.4 0 4.9-.7 9.1-2.8v-9.2H9.8c-.7 2.1-.7 4.2-1.4 5.7-1.4-.8-2.1-1.5-3.5-1.5.7-1.4 1.4-3.5 2.1-6.3.7-3 .7-5.8.7-7.2zm16.8 9.1h9.8v-6.3H25.9v-3.5H34.3c0-2.1 0-4.2-.7-5.6h4.2v5.6h9.8v3.5h-9.8v6.3h12.6V96h-7v5.6c2.8 0 4.9 0 6.3-.7v3.5h-6.3v12.7c0 1.5-.7 2.8-1.4 2.8-1.4.7-3.5 1.4-6.3 1.4 0-1.4-.7-2.8-1.4-4.2h4.9c.7 0 .7-.7.7-1.4v-11.3H25.2v-3.5c1.5.7 3.5.7 5.6.7h9.1V96H24.5v-3.6zm2.8 16.3c1.4 0 2.1-.7 3.5-1.5 1.4 2.8 2.1 4.9 2.8 7.1-.7 0-2.1.7-3.5 1.4-.7-2.7-2.1-4.9-2.8-7z"/><path clip-path="url(#b)" d="M239.9 84.7c0 .7-.7 2.1-.7 4.2s.7 3.5.7 4.2h-4.2v-5.7h-15.4v12h-3.5v-12h-15.4v5.7h-4.2v-8.3h19.6v-3.5H201.4v-2.8h34.3v2.8H220.3v3.5h19.6zm-37.7 16.2H235c-.7 2.8-.7 4.9-.7 7.1v6.3c0 2.8 0 4.9.7 7h-4.2v-2.8h-25.2v2.8h-3.5v-20.4zm2-5.6h9.1v2.8h-9.1v-2.8zm0-5.7h9.1v2.8h-9.1v-2.8zm1.4 19.1h11.2v-4.9h-11.2v4.9zm0 7.1h11.2v-4.9h-11.2v4.9zm14.7-7.1h10.5v-4.9h-10.5v4.9zm0 7.1h10.5v-4.9h-10.5v4.9zm2.8-26.2h9.8v2.8h-9.8v-2.8zm.7 5.7h9.1v2.8h-9.1v-2.8z"/><path clip-path="url(#b)" d="M239.9 84.7c0 .7-.7 2.1-.7 4.2s.7 3.5.7 4.2h-4.2v-5.7h-15.4v12h-3.5v-12h-15.4v5.7h-4.2v-8.3h19.6v-3.5H201.4v-2.8h34.3v2.8H220.3v3.5h19.6zm-37.7 16.2H235c-.7 2.8-.7 4.9-.7 7.1v6.3c0 2.8 0 4.9.7 7h-4.2v-2.8h-25.2v2.8h-3.5v-20.4zm2-5.6h9.1v2.8h-9.1v-2.8zm0-5.7h9.1v2.8h-9.1v-2.8zm1.4 19.1h11.2v-4.9h-11.2v4.9zm0 7.1h11.2v-4.9h-11.2v4.9zm14.7-7.1h10.5v-4.9h-10.5v4.9zm0 7.1h10.5v-4.9h-10.5v4.9zm2.8-26.2h9.8v2.8h-9.8v-2.8zm.7 5.7h9.1v2.8h-9.1v-2.8z"/><path clip-path="url(#b)" fill="none" stroke="#000" stroke-width=".14" stroke-miterlimit="10" d="M239.9 84.7c0 .7-.7 2.1-.7 4.2s.7 3.5.7 4.2h-4.2v-5.7h-15.4v12h-3.5v-12h-15.4v5.7h-4.2v-8.3h19.6v-3.5H201.4v-2.8h34.3v2.8H220.3v3.5h19.6zm-37.7 16.2H235c-.7 2.8-.7 4.9-.7 7.1v6.3c0 2.8 0 4.9.7 7h-4.2v-2.8h-25.2v2.8h-3.5v-20.4zm2-5.6h9.1v2.8h-9.1v-2.8zm0-5.7h9.1v2.8h-9.1v-2.8zm1.4 19.1h11.2v-4.9h-11.2v4.9zm0 7.1h11.2v-4.9h-11.2v4.9zm14.7-7.1h10.5v-4.9h-10.5v4.9zm0 7.1h10.5v-4.9h-10.5v4.9zm2.8-26.2h9.8v2.8h-9.8v-2.8zm.7 5.7h9.1v2.8h-9.1v-2.8z"/><path clip-path="url(#b)" d="M387.4 93.9h8.4c0 2.1-.7 4.2-.7 6.3v12c3.5 2.8 9.1 4.2 17.5 4.2s14.7-.7 18.9-1.4c-1.4 1.4-1.4 2.8-1.4 4.2-10.5.7-18.2.7-22.4 0-4.2 0-7-.7-9.8-2.8-2.1-1.4-3.5-1.4-4.9 0-.7 1.5-2.1 2.8-3.5 4.2-.7-.7-2.1-2.1-3.5-2.8 2.1-2.2 4.2-3.5 6.3-4.9V96.7h-4.9v-2.8zm2.1-13.4c.7-.7 2.1-1.4 2.8-2.1 2.1 3.5 4.2 5.6 5.6 7.7-1.4.7-2.8 1.4-3.5 2.1-.7-1.4-2.8-4.2-4.9-7.7m11.2-2.1H428c-2.1 2.1-4.3 3.5-5.6 5.6-2.1 1.4-4.2 3.5-5.6 4.9H428V110c0 1.4-.7 2.1-1.4 2.9-1.5 0-2.9.7-4.9 1.4 0-1.4-.7-2.8-1.4-4.2h3.5c.7-.7.7-2.1.7-4.2h-8.4v7.8h-3.5v-7.8h-8.4v7.8h-3.5V89h11.2c-.7-1.5-2.1-2.8-4.2-4.2.7-.7 2.1-1.4 2.8-2.2 2.1 1.5 3.5 2.8 4.2 3.5 2.1-2.1 4.2-3.5 4.9-4.9h-11.9c-2.8 0-4.9 0-7 .7v-3.5zm3.5 17.6h8.4v-4.2h-8.4V96zm0 7.1h8.4v-4.2h-8.4v4.2zm11.9-7.1h8.4v-4.2h-8.4V96zm0 7.1h8.4v-4.2h-8.4v4.2z"/><path clip-path="url(#b)" d="M387.4 93.9h8.4c0 2.1-.7 4.2-.7 6.3v12c3.5 2.8 9.1 4.2 17.5 4.2s14.7-.7 18.9-1.4c-1.4 1.4-1.4 2.8-1.4 4.2-10.5.7-18.2.7-22.4 0-4.2 0-7-.7-9.8-2.8-2.1-1.4-3.5-1.4-4.9 0-.7 1.5-2.1 2.8-3.5 4.2-.7-.7-2.1-2.1-3.5-2.8 2.1-2.2 4.2-3.5 6.3-4.9V96.7h-4.9v-2.8zm2.1-13.4c.7-.7 2.1-1.4 2.8-2.1 2.1 3.5 4.2 5.6 5.6 7.7-1.4.7-2.8 1.4-3.5 2.1-.7-1.4-2.8-4.2-4.9-7.7m11.2-2.1H428c-2.1 2.1-4.3 3.5-5.6 5.6-2.1 1.4-4.2 3.5-5.6 4.9H428V110c0 1.4-.7 2.1-1.4 2.9-1.5 0-2.9.7-4.9 1.4 0-1.4-.7-2.8-1.4-4.2h3.5c.7-.7.7-2.1.7-4.2h-8.4v7.8h-3.5v-7.8h-8.4v7.8h-3.5V89h11.2c-.7-1.5-2.1-2.8-4.2-4.2.7-.7 2.1-1.4 2.8-2.2 2.1 1.5 3.5 2.8 4.2 3.5 2.1-2.1 4.2-3.5 4.9-4.9h-11.9c-2.8 0-4.9 0-7 .7v-3.5zm3.5 17.6h8.4v-4.2h-8.4V96zm0 7.1h8.4v-4.2h-8.4v4.2zm11.9-7.1h8.4v-4.2h-8.4V96zm0 7.1h8.4v-4.2h-8.4v4.2z"/><path clip-path="url(#b)" fill="none" stroke="#000" stroke-width=".14" stroke-miterlimit="10" d="M387.4 93.9h8.4c0 2.1-.7 4.2-.7 6.3v12c3.5 2.8 9.1 4.2 17.5 4.2s14.7-.7 18.9-1.4c-1.4 1.4-1.4 2.8-1.4 4.2-10.5.7-18.2.7-22.4 0-4.2 0-7-.7-9.8-2.8-2.1-1.4-3.5-1.4-4.9 0-.7 1.5-2.1 2.8-3.5 4.2-.7-.7-2.1-2.1-3.5-2.8 2.1-2.2 4.2-3.5 6.3-4.9V96.7h-4.9v-2.8zm2.1-13.4c.7-.7 2.1-1.4 2.8-2.1 2.1 3.5 4.2 5.6 5.6 7.7-1.4.7-2.8 1.4-3.5 2.1-.7-1.4-2.8-4.2-4.9-7.7zm11.2-2.1H428c-2.1 2.1-4.3 3.5-5.6 5.6-2.1 1.4-4.2 3.5-5.6 4.9H428V110c0 1.4-.7 2.1-1.4 2.9-1.5 0-2.9.7-4.9 1.4 0-1.4-.7-2.8-1.4-4.2h3.5c.7-.7.7-2.1.7-4.2h-8.4v7.8h-3.5v-7.8h-8.4v7.8h-3.5V89h11.2c-.7-1.5-2.1-2.8-4.2-4.2.7-.7 2.1-1.4 2.8-2.2 2.1 1.5 3.5 2.8 4.2 3.5 2.1-2.1 4.2-3.5 4.9-4.9h-11.9c-2.8 0-4.9 0-7 .7v-3.5zm3.5 17.6h8.4v-4.2h-8.4V96zm0 7.1h8.4v-4.2h-8.4v4.2zm11.9-7.1h8.4v-4.2h-8.4V96zm0 7.1h8.4v-4.2h-8.4v4.2z"/><path clip-path="url(#b)" d="M588.1 76.2c1.4 0 2.8 1.4 4.9 2.1l-2.1 2.1c0 .7-.7 1.4-1.4 2.1H618.9V86c-2.8-.7-4.9-.7-6.3-.7h-10.5V89h7.7c2.1 0 3.5 0 5.6-.7v3.5h-13.3v2.8h14v2.8h-14v2.8h16.1v2.9h-30.1v2.1h-4.2V89.7c-.7 1.4-.7 2.1-1.4 2.8-.7.8-1.4 1.5-2.1 2.2-.7-.7-2.1-1.4-3.5-2.8 1.4-.7 2.1-1.4 3.5-2.8.7-1.5 2.1-2.2 2.8-3.5 1.4-1.4 2.1-2.8 2.8-4.9.7-1.6 1.4-3.1 2.1-4.5m-9 32.5H598c0-1.5 0-2.8-.7-4.2h4.3v4.2h18.9v2.8h-14c2.1 1.5 3.5 2.8 6.3 3.5 2.1.7 4.9 1.4 8.4 2.1-1.4 1.5-2.1 2.8-2.1 4.2-2.8-.7-4.9-2.1-6.3-2.8-1.4-.7-2.8-1.5-4.2-2.2-1.4-.7-2.1-1.4-3.5-2.1-.7-.7-1.4-2.2-2.8-2.8h-.7v4.2c0 2.2 0 4.2.7 5.6h-5c.7-1.4.7-3.5.7-5.6v-4.2h-.7c-1.4 1.5-2.1 2.1-3.5 3.5-.7.7-2.1 1.4-3.5 2.8-1.4.7-2.8 1.4-4.2 1.4-1.4.7-3.5 1.4-4.9 2.1-.7-.7-1.4-2.1-2.8-3.5 2.8 0 5.6-.8 8.4-2.2 2.8-1.4 4.9-2.8 6.3-4.2h-14v-2.6zm9-19.7h10.5v-3.5h-10.5V89zm0 5.6h10.5v-2.8h-10.5v2.8zm0 5.6h10.5v-2.8h-10.5v2.8zm10.5-21.8c1.4-.8 2.1-1.5 3.5-2.1l1.4 1.4c.7 1.5 1.4 2.2 2.1 2.8-.7.7-2.1 1.4-3.5 2.1-.7-.7-1.4-2.1-1.4-2.8-.7-.7-1.4-1.4-2.1-1.4"/><path clip-path="url(#b)" d="M588.1 76.2c1.4 0 2.8 1.4 4.9 2.1l-2.1 2.1c0 .7-.7 1.4-1.4 2.1H618.9V86c-2.8-.7-4.9-.7-6.3-.7h-10.5V89h7.7c2.1 0 3.5 0 5.6-.7v3.5h-13.3v2.8h14v2.8h-14v2.8h16.1v2.9h-30.1v2.1h-4.2V89.7c-.7 1.4-.7 2.1-1.4 2.8-.7.8-1.4 1.5-2.1 2.2-.7-.7-2.1-1.4-3.5-2.8 1.4-.7 2.1-1.4 3.5-2.8.7-1.5 2.1-2.2 2.8-3.5 1.4-1.4 2.1-2.8 2.8-4.9.7-1.6 1.4-3.1 2.1-4.5m-9 32.5H598c0-1.5 0-2.8-.7-4.2h4.3v4.2h18.9v2.8h-14c2.1 1.5 3.5 2.8 6.3 3.5 2.1.7 4.9 1.4 8.4 2.1-1.4 1.5-2.1 2.8-2.1 4.2-2.8-.7-4.9-2.1-6.3-2.8-1.4-.7-2.8-1.5-4.2-2.2-1.4-.7-2.1-1.4-3.5-2.1-.7-.7-1.4-2.2-2.8-2.8h-.7v4.2c0 2.2 0 4.2.7 5.6h-5c.7-1.4.7-3.5.7-5.6v-4.2h-.7c-1.4 1.5-2.1 2.1-3.5 3.5-.7.7-2.1 1.4-3.5 2.8-1.4.7-2.8 1.4-4.2 1.4-1.4.7-3.5 1.4-4.9 2.1-.7-.7-1.4-2.1-2.8-3.5 2.8 0 5.6-.8 8.4-2.2 2.8-1.4 4.9-2.8 6.3-4.2h-14v-2.6zm9-19.7h10.5v-3.5h-10.5V89zm0 5.6h10.5v-2.8h-10.5v2.8zm0 5.6h10.5v-2.8h-10.5v2.8zm10.5-21.8c1.4-.8 2.1-1.5 3.5-2.1l1.4 1.4c.7 1.5 1.4 2.2 2.1 2.8-.7.7-2.1 1.4-3.5 2.1-.7-.7-1.4-2.1-1.4-2.8-.7-.7-1.4-1.4-2.1-1.4"/><path clip-path="url(#b)" fill="none" stroke="#000" stroke-width=".14" stroke-miterlimit="10" d="M588.1 76.2c1.4 0 2.8 1.4 4.9 2.1l-2.1 2.1c0 .7-.7 1.4-1.4 2.1H618.9V86c-2.8-.7-4.9-.7-6.3-.7h-10.5V89h7.7c2.1 0 3.5 0 5.6-.7v3.5h-13.3v2.8h14v2.8h-14v2.8h16.1v2.9h-30.1v2.1h-4.2V89.7c-.7 1.4-.7 2.1-1.4 2.8-.7.8-1.4 1.5-2.1 2.2-.7-.7-2.1-1.4-3.5-2.8 1.4-.7 2.1-1.4 3.5-2.8.7-1.5 2.1-2.2 2.8-3.5 1.4-1.4 2.1-2.8 2.8-4.9.7-1.6 1.4-3.1 2.1-4.5zm-9 32.5H598c0-1.5 0-2.8-.7-4.2h4.3v4.2h18.9v2.8h-14c2.1 1.5 3.5 2.8 6.3 3.5 2.1.7 4.9 1.4 8.4 2.1-1.4 1.5-2.1 2.8-2.1 4.2-2.8-.7-4.9-2.1-6.3-2.8-1.4-.7-2.8-1.5-4.2-2.2-1.4-.7-2.1-1.4-3.5-2.1-.7-.7-1.4-2.2-2.8-2.8h-.7v4.2c0 2.2 0 4.2.7 5.6h-5c.7-1.4.7-3.5.7-5.6v-4.2h-.7c-1.4 1.5-2.1 2.1-3.5 3.5-.7.7-2.1 1.4-3.5 2.8-1.4.7-2.8 1.4-4.2 1.4-1.4.7-3.5 1.4-4.9 2.1-.7-.7-1.4-2.1-2.8-3.5 2.8 0 5.6-.8 8.4-2.2 2.8-1.4 4.9-2.8 6.3-4.2h-14v-2.6zm9-19.7h10.5v-3.5h-10.5V89zm0 5.6h10.5v-2.8h-10.5v2.8zm0 5.6h10.5v-2.8h-10.5v2.8zm10.5-21.8c1.4-.8 2.1-1.5 3.5-2.1l1.4 1.4c.7 1.5 1.4 2.2 2.1 2.8-.7.7-2.1 1.4-3.5 2.1-.7-.7-1.4-2.1-1.4-2.8-.7-.7-1.4-1.4-2.1-1.4z"/><path clip-path="url(#b)" d="M770.6 79.1h38.5v41.7h-4.2V118h-30.1v3.5h-4.2c.7-3.5.7-7.7.7-11.3V89.6c0-3.5 0-7-.7-10.5m4.2 35.3h30.1V82.6h-30.1v31.8zm4.2-24.1h13.3c0-2.1 0-4.2-.7-5.6h4.2v5.6h6.3v3.5h-6.3V108c0 2.1-.7 3.5-2.1 3.5-1.4.7-3.5.7-5.6.7 0-.7 0-2.1-.7-4.2 2.1.7 3.5.7 4.2 0 0 0 .7-.8.7-2.2V95.3c-2.1 3.5-3.5 6.3-5.6 8.5-2.1 2.1-4.2 4.2-7 6.3-.7-.7-1.4-2.1-2.8-2.8 3.5-2.1 5.6-4.2 7.7-6.3 2.1-2.1 3.5-4.2 4.9-7H779v-3.7z"/><path clip-path="url(#b)" d="M770.6 79.1h38.5v41.7h-4.2V118h-30.1v3.5h-4.2c.7-3.5.7-7.7.7-11.3V89.6c0-3.5 0-7-.7-10.5m4.2 35.3h30.1V82.6h-30.1v31.8zm4.2-24.1h13.3c0-2.1 0-4.2-.7-5.6h4.2v5.6h6.3v3.5h-6.3V108c0 2.1-.7 3.5-2.1 3.5-1.4.7-3.5.7-5.6.7 0-.7 0-2.1-.7-4.2 2.1.7 3.5.7 4.2 0 0 0 .7-.8.7-2.2V95.3c-2.1 3.5-3.5 6.3-5.6 8.5-2.1 2.1-4.2 4.2-7 6.3-.7-.7-1.4-2.1-2.8-2.8 3.5-2.1 5.6-4.2 7.7-6.3 2.1-2.1 3.5-4.2 4.9-7H779v-3.7z"/><path clip-path="url(#b)" fill="none" stroke="#000" stroke-width=".14" stroke-miterlimit="10" d="M770.6 79.1h38.5v41.7h-4.2V118h-30.1v3.5h-4.2c.7-3.5.7-7.7.7-11.3V89.6c0-3.5 0-7-.7-10.5zm4.2 35.3h30.1V82.6h-30.1v31.8zm4.2-24.1h13.3c0-2.1 0-4.2-.7-5.6h4.2v5.6h6.3v3.5h-6.3V108c0 2.1-.7 3.5-2.1 3.5-1.4.7-3.5.7-5.6.7 0-.7 0-2.1-.7-4.2 2.1.7 3.5.7 4.2 0 0 0 .7-.8.7-2.2V95.3c-2.1 3.5-3.5 6.3-5.6 8.5-2.1 2.1-4.2 4.2-7 6.3-.7-.7-1.4-2.1-2.8-2.8 3.5-2.1 5.6-4.2 7.7-6.3 2.1-2.1 3.5-4.2 4.9-7H779v-3.7z"/></svg>
        </router-link>
        <div class="change-language">
            <a class="YaSiRegular" href="javascript:">
                中文
            </a>
            |
            <router-link class="YaSiRegular" to="/en">
                ENGLISH
            </router-link>
        </div>
        <a href="javascript:" class="home-menu"  @click="menuClick">
            <img class="home-menu-img" src="../../../assets/images/home_menu.png" alt="home_menu"/>
        </a>
        <svg class="home-swier-tip-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 73.7 73.7"><path class="home-arrow-dow" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M31.2 34l5.6 5.7 5.7-5.7"/><circle fill="none" stroke="#fff" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" cx="36.9" cy="36.9" r="34.5"/></svg>
    </div>
</template>

<script>
    export default {
        name: 'HomeSwiper',
        data () {
            return {
                swiperOptions: {
                    pagination: '.swiper-pagination',
                    paginationClickable :true,
                    autoplayDisableOnInteraction : false,
                    loop: true,
                    autoplay : 3000,
                    speed: 1000,
                    effect : 'fade',
                }
            }
        },
        methods: {
            menuClick () {
                // console.log('menuClick')
                this.$emit('change')
            }
        }
    }
</script>

<style scoped>
    .home-wrapper {
        position: relative;
        overflow: hidden;
        height: 0;
        padding-bottom: 40.2%;
        /*margin-bottom: 13rem;*/
    }
    /*重置轮播图的焦点*/
    .home-wrapper >>> .swiper-pagination {
        top: 90%;
        left: 18%;
        display: flex;
        align-items: center;
    }
    .home-wrapper >>> .swiper-pagination-bullet {
        display: flex;
        padding: 10px;
        width: auto;
        height: auto;
        background: none;
        opacity: 1;
    }
    .home-wrapper >>> .swiper-pagination-bullet .self-pagination {
        display: inline-block;
        width: .3rem;
        height: .3rem;
        border-radius: 50%;
        background: #fff;
        opacity: 1;
    }
    .home-wrapper >>> .swiper-pagination-bullet-active {
        width: auto;
        height: auto;
        border: none;
        background: none;
    }
    .home-wrapper >>> .swiper-pagination-bullet-active .self-pagination {
        display: inline-block;
        width: .7rem;
        height: .7rem;
        border: 1px solid #fff;
        background: none;
    }
    .swiper-img {
        width: 100%;
    }
    .swiper-img-model {
        display: none;
    }
    .home-logo {
        z-index: 1;
        position: absolute;
        top: 35px;
        left: 5%;      
     }
    .home-logo-img {
        width: 100%;
    }
    .change-language {
        z-index: 1;
        position: absolute;
        top: 35px;
        right: 35px;
        display: flex;
        justify-content: space-between;
        width: 108px;
        color: #fff;
    }
    .change-language a {
        color: #fff;
    }
    .home-menu {
        z-index: 1;
        position: absolute;
        top: 50%;
        /*display: flex;*/
        transform: translateY(-50%);
        left: 3%;
        /*left: 5%;*/
        width: 2%;
    }
    .home-menu-img {
        width: 100%;
    }
    .home-swiper-read {
        position: absolute;
        bottom: 12%;
        left: 18.5%;
        /*margin-top: 31%;*/
    }
    .home-swier-tip-arrow {
        z-index: 1;
        position: absolute;
        bottom: 10%;
        right: 2%;
        width: 3%;
    }
    .home-arrow-dow {
        animation: DownArrowRepeat 2s linear infinite;
    }
    .br500add {
        display: none;
    }
    @media screen and (max-width: 1440px) {
        .home-swiper-read {
            left: 19%;
        }
    }
    @media screen and (max-width: 1024px) {
        .change-language {
            display: none;
        }
        .home-logo {
            top: 9%;
            left: 5%;
        }
        .home-menu {
            top: 12%;
            left: auto;
            right: 5%;
            width: 3%;
        }
        .swiper-content {
            top: 30%;
            left: 5%;
        }
        .home-wrapper >>> .swiper-pagination {
            top: 90%;
            left: 3.5%;
        }
        .home-swiper-read {
            left: 5%;
        }
    }
    @media screen and (max-width: 750px) {
        .home-wrapper {
            padding-bottom: 70.9%;
        }
        .home-swier-tip-arrow {
            display: none;
        }
        .swiper-img {
            display: none;
        }
        .swiper-img-model {
            display: block;
            width: 100%;
        }
        .home-menu {
            width: 30px;
        }
        .home-swiper-h3 {
            margin-top: 1rem;
        }
        .home-swiper-read {
            display: none;
        }
        .swiper-content {
            top: 38%;
        }
        .home-wrapper >>> .swiper-pagination {
            top: 45%;
        }
        .home-wrapper >>> .swiper-pagination-bullet {
            padding: 5px;
        }
    }
    @media screen and (max-width: 500px) {
        .home-logo {
            top: 17%;
        }
        .home-menu {
            top: 20%;
            width: 25px;
        }
        .br500add {
            display: block;
        }
        .home-swiper-h3 {
            line-height: 1.5;
        }
        .home-wrapper >>> .swiper-pagination {
            top: 65%;
        }
        .home-wrapper >>> .swiper-pagination-bullet-active .self-pagination {
            width: .5rem;
            height: .5rem;
        }
    }
</style>
<style lang="scss" >
    @import '~styles/varibles';

    .change-language a {
        font-size: $contentFontSize
    }
    .home-swiper-h2 {
        font-size: $BigSwiperFontSize;
        line-height: 1.2;
    }
    .home-swiper-h3 {
        margin-top: 5%;
        font-size: $homeSwiperH3;
        font-weight: bold;
    }
    .home-swiper-h4 {
        margin-top: 2%;
        font-size: $homeSwiperH4;
    }
    .home-swiper-read {
        display: inline-block;
        margin-top: 5%;
        font-size: $swiperRead;
        color: #fff;
        padding-bottom: 5px;
        border-bottom: 1px solid #fff;
    }

</style>