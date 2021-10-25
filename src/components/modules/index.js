import Vue from 'vue'
const components = [

]
const install = function(Vue) {
    components.map(component => {
        Vue.component(component.name, component)
    })
}

install(Vue)

export default {
    version: '0.0.1'
}
