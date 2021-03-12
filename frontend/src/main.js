import { createApp } from 'vue'
import App from './App.vue'
import 'es6-promise/auto'
import { createStore } from 'vuex';

const store = createStore({
    state(){
        return {
            msg: '',
            theme: false,
            show: false
        }
    },
    mutations: {
        enableToast(state, {show, theme, msg}){
            console.log(state, show, theme);
            state.show = show;
            state.msg = msg
            if(theme === 'error'){
                state.theme = { "slds-theme_error": true }
            } else if(theme === 'warning') {
                state.theme = { "slds-theme_warning": true }
            } else {
                state.theme = { "slds-theme_success": true }
            }

            setTimeout(() => {
                state.show = false;
                state.theme = false;
                state.msg = '';
            }, 3000)
        }
    }
})

createApp(App)
.use(store)
.mount('#app')
