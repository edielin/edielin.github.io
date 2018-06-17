// v-bind: 屬性是冒號
// v-on @是事件
let headerStr = `
    <header><img :src='imgSrc' @click='chiao'></header>
`;
let footerStr =`
    <footer>footer</footer>
`;
Vue.component('header-component', {
    data: function () {
        return {
            imgSrc: '../images/ededed.svg'
        }
    },
    template: headerStr, 
    methods: {
        chiao: function () {
            console.log('wahahaha');
        }
    },
    mounted: function () { 
    }
});

Vue.component('footer-component', {
    data: function () {
        return {
            imgSrc: '../images/ededed.svg'
        }
    },
    template: footerStr
});

new Vue ({
    el: '#main',
    data: {
        temp: {
            title: '',
            list: []
        },
        lang_zh: true,
        lang: {
            'zh': zh,
            'en': en
        }
    }, methods: {
        change_lang: function () {
            this.lang_zh = !this.lang_zh;
            if (this.lang_zh) {
                this.temp = this.lang.zh;
            } else {
                this.temp = this.lang.en;
            }
        }
    }, mounted: function () {
        if (this.lang_zh) {
            this.temp = this.lang.zh;
        } else {
            this.temp = this.lang.en;
        }
    }
});