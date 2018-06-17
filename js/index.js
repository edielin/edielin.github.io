// v-bind: 屬性是冒號
// v-on @是事件
let headerStr = `
    <header>
        <a href="index.html"><img :src='imgSrc' class="logo"></a>
        <ul>
            <a href="index.html">Work Projects</a>
            <a href="about.html">About</a>
        </ul>
    </header>
`;
let footerStr =`
    <footer>
        <a href="index.html"><img :src='imgSrc' class="logo"></a>
        <a href="mailto: edielin.led@gmail.com">edielin.led@gmail.com</a>
    </footer>
`;
Vue.component('header-component', {
    data: function () {
        return {
            imgSrc: '../images/ededed.svg'
        }
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
    data: function () {
        return {
            imgSrc: '../images/ededed.svg'
        }
    },
    template: footerStr
});

new Vue ({
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
            interest_list: []
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