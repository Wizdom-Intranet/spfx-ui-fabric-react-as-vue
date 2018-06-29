import {uiDatepicker} from "../dist/bundle.esm";
import Vue from "vue";
import { loadStyles } from '@microsoft/load-themed-styles';

loadStyles(".custom-class{ border: dashed 2px magenta !important");

new Vue({
    el: '#app',
    components : { uiDatepicker },
    data() {
        return {
            startDate : null
        };
    },
    template : `<div>
        <uiDatepicker v-model="startDate"></uiDatepicker>
    </div>`
});
