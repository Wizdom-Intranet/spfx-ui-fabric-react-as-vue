<template>
    <datepicker class="root" ref="instance" :passedProps="datePickerProps"></datepicker>
</template>
<script>
import { ReactInVue } from "vuera";
import { DatePicker } from "office-ui-fabric-react/lib/DatePicker";

export default {
    injectCss,
    components : {
        datepicker : ReactInVue(DatePicker)
    },
    props : ['value'],
    data : function(){
        return {
            selectedDate : null,
            datePickerProps : {
                initialPickerDate : this.value,
                value : this.value, 
                onSelectDate : (date)=>{
                    this.selectedDate = date;
                    this.datePickerProps.value = date;
                    this.$emit("input", date);
                }
            }
        };
    },
    watch: {
        value(val) {
            this.selectedDate = val;
            this.datePickerProps.value = val;
        }
    },
    // created(){
    //     setInterval(()=>console.log("instance", this.$refs.instance.$children[0].reactComponentRef.state), 1000);
    // }
}
</script>
<style lang="scss" scoped>
    .root /deep/ i[data-icon-name='Calendar']{
        &::after{
            content: url('data:image/svg+xml;utf8,<svg viewBox="0 -0 2048 2048" width="16" height="16" version="1.1" xmlns="http://www.w3.org/2000/svg"><path transform="translate(0, 2048) scale(1, -1)" d="M768 1280h128v-128h-128v128zM1152 512h128v-128h-128v128zM1536 1280h128v-128h-128v128zM1152 1280h128v-128h-128v128zM768 1024h128v-128h-128v128zM384 1024h128v-128h-128v128zM1536 1024h128v-128h-128v128zM1152 1024h128v-128h-128v128zM768 768h128v-128h-128v128zM384 768h128v-128h-128v128zM1536 768h128v-128h-128v128zM1152 768h128v-128h-128v128zM768 512h128v-128h-128v128zM384 512h128v-128h-128v128zM2048 1920v-1792h-2048v1792h384v128h128v-128h1024v128h128v-128h384zM128 1792v-256h1792v256h-256v-128h-128v128h-1024v-128h-128v128h-256zM1920 256v1152h-1792v-1152h1792z" fill="black" stroke="none"/></svg>');
        }
    }
</style>
<style lang="scss">
    i[data-icon-name='Up']{
        &::after{
            content: url('data:image/svg+xml;utf8,<svg viewBox="0 -0 2048 2048" width="16" height="16" version="1.1" xmlns="http://www.w3.org/2000/svg"><path transform="translate(0, 2048) scale(1, -1)" d="M1875 1011l-787 787v-1798h-128v1798l-787 -787l-90 90l941 941l941 -941z" fill="black" stroke="none"/></svg>');
        }
    }
    i[data-icon-name='Down']{
        &::after{
            content: url('data:image/svg+xml;utf8,<svg viewBox="0 -0 2048 2048" width="16" height="16" version="1.1" xmlns="http://www.w3.org/2000/svg"><path transform="translate(0, 2048) scale(1, -1)" d="M1965 947l-941 -941l-941 941l90 90l787 -787v1798h128v-1798l787 787z" fill="black" stroke="none"/></svg>');
        }
    }
</style>
