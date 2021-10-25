<template>
    <div class="date-pickers">
        <el-select
            v-model="currentDate.year"
            class="year select"
            placeholder="年"
            @change="judgeDay">
            <el-option
                v-for="item in years"
                :key="item"
                :label="item"
                :value="item"/>
        </el-select>
        <el-select
            v-model="currentDate.month"
            class="month select"
            placeholder="月"
            @change="judgeDay">
            <el-option
                v-for="item in months"
                :key="item"
                :label="String(item).length==1?String('0'+item):String(item)"
                :value="item"/>
        </el-select>
        <el-select
            :class="{'error':hasError}"
            v-model="currentDate.day"
            class="day select"
            placeholder="日">
            <el-option
                v-for="item in days"
                :key="item"
                :label="String(item).length==1?String('0'+item):String(item)"
                :value="item"/>
        </el-select>
    </div>
</template>
<script>
import 'element-ui/lib/theme-chalk/index.css'
import Vue from 'vue'
import { Select, Option } from 'element-ui'
Vue.component(Select.name, Select)
Vue.component(Option.name, Option)
export default {
    name: 'DatePickers',
    props: {
    // eslint-disable-next-line vue/require-default-prop
        sourceDate: {
            type: [String, Number]
        }
    },
    data() {
        return {
            currentDate: {
                year: '',
                month: '',
                day: ''
            },
            maxYear: new Date().getFullYear(),
            minYear: 1910,
            years: [],
            months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            normalMaxDays: 31,
            days: [],
            hasError: false
        }
    },
    watch: {
        sourceDate() {
            if (this.sourceDate) {
                this.currentDate = this.timestampToTime(this.sourceDate)
            }
        },
        normalMaxDays() {
            this.getFullDays()
            if (this.currentDate.year && this.currentDate.day > this.normalMaxDays) {
                this.currentDate.day = ''
            }
        },
        currentDate: {
            handler(newValue, oldValue) {
                this.judgeDay()
                if (newValue.year && newValue.month && newValue.day) {
                    this.hasError = false
                } else {
                    this.hasError = true
                }
                this.emitDate()
            },
            deep: true
        }
    },
    created() {
        this.getFullYears()
        this.getFullDays()
    },
    methods: {
        emitDate() {
            let timestamp // 暂默认传给父组件时间戳形式
            if (this.currentDate.year && this.currentDate.month && this.currentDate.day) {
                const month = this.currentDate.month < 10 ? ('0' + this.currentDate.month) : this.currentDate.month
                const day = this.currentDate.day < 10 ? ('0' + this.currentDate.day) : this.currentDate.day
                const dateStr = this.currentDate.year + '-' + month + '-' + day
                timestamp = new Date(dateStr).getTime()
            } else {
                timestamp = ''
            }
            this.$emit('dateSelected', timestamp)
        },
        timestampToTime(timestamp) {
            const dateObject = {}
            if (typeof timestamp === 'number') {
                dateObject.year = new Date(timestamp).getFullYear()
                dateObject.month = new Date(timestamp).getMonth() + 1
                dateObject.day = new Date(timestamp).getDate()
                return dateObject
            }
        },
        getFullYears() {
            for (let i = this.minYear; i <= this.maxYear; i++) {
                this.years.unshift(i)
            }
        },
        getFullDays() {
            this.days = []
            for (let i = 1; i <= this.normalMaxDays; i++) {
                this.days.push(i)
            }
        },
        judgeDay() {
            if ([4, 6, 9, 11].indexOf(this.currentDate.month) !== -1) {
                this.normalMaxDays = 30 // 小月30天

                // eslint-disable-next-line eqeqeq
                if (this.currentDate.day && this.currentDate.day == 31) {
                    this.currentDate.day = ''
                }

                // eslint-disable-next-line eqeqeq
            } else if (this.currentDate.month == 2) {
                if (this.currentDate.year) {
                    if (

                    // eslint-disable-next-line eqeqeq
                        (this.currentDate.year % 4 == 0 &&

            // eslint-disable-next-line eqeqeq
            this.currentDate.year % 100 != 0) ||

            // eslint-disable-next-line eqeqeq
            this.currentDate.year % 400 == 0
                    ) {
                        this.normalMaxDays = 29 // 闰年2月29天
                    } else {
                        this.normalMaxDays = 28 // 闰年平年28天
                    }
                } else {
                    this.normalMaxDays = 28// 闰年平年28天
                }
            } else {
                this.normalMaxDays = 31// 大月31天
            }
        }
    }
}
</script>
<style lang="scss">
.date-pickers {
    margin-left: 26px;
    .select {
        margin-right: 10px;
        width: 110px;
        text-align: center;
        .el-input{
            font-size:0;
        }
        .el-input__inner{
            background-color: rgba(0,0,0,0);
            border-radius:0;
            height:50px;
            border: 1PX solid #D1C2A3;
            color: #D1C2A3;
            font-size: 26px;
            vertical-align: middle;
        }
        .el-input__inner:focus{
            border: 1PX solid #D1C2A3;
        }
        .el-input__inner::placeholder{
            color: gray;
            font-size: 26px;
            height:50px;
            position: relative;
            top: 1px;
        }
        .el-input__suffix{
            vertical-align: middle;
            i{
                color: #D1C2A3;
                font-size: 24px;
                vertical-align: middle;
            }

        }

    }
    .year {
        width: 110px;
    }
    .error {
        .el-input__inner {
            border: 1PX solid #D1C2A3;
            // border-radius: 4px;
        }
    }
}
.el-select-dropdown__item{
    font-size: 36px;
    padding: 0 50px;
    height:65px;
    line-height: 65px;
    text-align: center;
}
// .el-select-dropdown{
//     background-color: #31333C;
//     border-radius:0;
//     border: 1px solid #D1C2A3;
//   }
//  横屏样式
@media screen and (orientation: landscape) and (min-width:375px) {	/* 横屏 */
    .home-index .date-pickers {
        margin-left: 16px;
        .select {
            margin-right: 10px;
            width: 80px;
            text-align: center;
            .el-input__inner{
                background-color: rgba(0,0,0,0);
                border-radius:0;
                height:32px;
                border: 1px solid #D1C2A3;
                color: #D1C2A3;
                font-size: 17px;
                border-radius: 0;
            }
            .el-input__inner:focus{
                border: 1px solid #D1C2A3;
            }
            .el-input__inner::placeholder{
                color: gray;
                font-size: 16px;
            }
            .el-input__suffix-inner{
                i{
                    color: #D1C2A3;
                    font-size: 15px;
                    line-height: 15px;
                }

            }

        }
        .year {
            width: 110px;
        }
        .error {
            .el-input__inner {
                border: 1px solid #D1C2A3;
                border-radius: 4px;
            }
        }
    }
    .el-select-dropdown__item{
        font-size: 22px;
        padding: 0 18px;
        height:50px;
        line-height: 50px;
        box-sizing: border-box;
    }
}
</style>
