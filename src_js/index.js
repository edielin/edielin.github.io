// v-bind: 屬性是冒號
// v-on @是事件
let headerStr = `
    <header>
        <a href="."><img :src='imgSrc' class="logo"></a>
        <ul>
            <a href=".">Work Projects</a>
            <a href="about.html">About</a>
        </ul>
    </header>
`;
let footerStr =`
    <footer>
        <a href="."><img :src='imgSrc' class="logo"></a>
        <a href="mailto:edielin.led@gmail.com">edielin.led@gmail.com</a>
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
            app_design_high_light:'',
            ljc_intro: '',
            mockup: '',
            deploy: '',
            web_6c_desc: '',
            web_6p_desc: '',
            web_letter_desc: '',
            web_hoyo_desc: '',
            introduce_6c_6p: '',
            before_beginning: '',
            redesign_note_list: [],
            redesign_note_conclusion: '',
            redesign_phase1_title: '',
            redesign_phase1_content: '',
            redesign_phase2_title: '',
            redesign_phase2_content: '',
            redesign_phase3_title: '',
            redesign_phase3_content: '',
            case_result1_carousel: []
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
        },
        scroll_to_top: function (event) {
            event.preventDefault();
            $('body, html').animate({
                scrollTop: 0,
            }, 700);
        }
    }, mounted: function () {
        if (this.lang_zh) {
            this.temp = this.lang.zh;
        } else {
            this.temp = this.lang.en;
        }
    }
});

const rangeBar = document.querySelector('#ba-bar');
const beforePic = document.querySelector('#before-after-box .before');

function dragBar () {
    let wid = this.value;
    beforePic.style.width = wid + '%';
}

if (rangeBar) {
    rangeBar.addEventListener('input', dragBar, false);
} 