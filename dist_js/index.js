'use strict';

// v-bind: 屬性是冒號
// v-on @是事件
var headerStr = '\n    <header>\n        <a href="."><img :src=\'imgSrc\' class="logo"></a>\n        <ul>\n            <a href=".">Work Projects</a>\n            <a href="about.html">About</a>\n        </ul>\n    </header>\n';
var footerStr = '\n    <footer>\n        <a href="."><img :src=\'imgSrc\' class="logo"></a>\n        <a href="mailto:edielin.led@gmail.com">edielin.led@gmail.com</a>\n    </footer>\n';
Vue.component('header-component', {
    data: function data() {
        return {
            imgSrc: '../images/ededed.svg'
        };
    },
    template: headerStr
    // methods: {
    //     chiao: function () {
    //         console.log('wahahaha');
    //     }
    // },
    // mounted: function () { 
    // }
});

Vue.component('footer-component', {
    data: function data() {
        return {
            imgSrc: '../images/ededed.svg'
        };
    },
    template: footerStr
});

new Vue({
    el: '#app',
    data: {
        temp: {
            index_sentence1: '',
            index_sentence2: '',
            index_sentence3: '',
            experience_6pm: '',
            experience_6pm_list: [],
            experience_iii: '',
            experience_iii_list: [],
            education: '',
            skill_uiux: '',
            skill_f2e: '',
            f2e_description: '',
            skill_collaboration: '',
            collaboration_description: '',
            interest_list: [],
            app_introduce: '',
            app_5w1h: '',
            app_who: '',
            app_what_how: '',
            app_why: '',
            app_where_when: '',
            app_5w1h_goodgood: '',
            flow_chart: '',
            wireframe: '',
            prototyping: '',
            app_design_high_light: '',
            ljc_intro: '',
            mockup: '',
            deploy: '',
            web_6c_desc: '',
            web_6p_desc: '',
            web_letter_desc: '',
            web_hoyo_desc: ''
        },
        lang_zh: true,
        lang: {
            'zh': zh,
            'en': en
        }
    }, methods: {
        change_lang: function change_lang() {
            this.lang_zh = !this.lang_zh;
            if (this.lang_zh) {
                this.temp = this.lang.zh;
            } else {
                this.temp = this.lang.en;
            }
        },
        scroll_to_top: function scroll_to_top(event) {
            event.preventDefault();
            $('body, html').animate({
                scrollTop: 0
            }, 700);
        }
    }, mounted: function mounted() {
        if (this.lang_zh) {
            this.temp = this.lang.zh;
        } else {
            this.temp = this.lang.en;
        }
    }
});

var rangeBar = document.querySelector('#ba-bar');
var beforePic = document.querySelector('#before-after-box .before');

function dragBar() {
    var wid = this.value;
    beforePic.style.width = wid + '%';
}

if (rangeBar) {
    rangeBar.addEventListener('input', dragBar, false);
}