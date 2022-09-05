
import {
    getTime,
    isClick,
    setsessionStorage,
    removesessionStorage,
    getQueryString,
    getsessionStorage,
    removelocalStorage,
    setlocalStorage,
    getlocalStorage,
    typeOf,
    hasClass,
    addClass,
    removeClass,
    uni,
    numChange,
    setCookie,
    getCookie,
    formatJSON,
    accMul,
    curBrowser,
    uuid,
    isMobile
} from './public_fun.js'
export default {
    version: '0.0.1',
    install: function (Vue) {
        Vue.prototype.$getTime = getTime;
        Vue.prototype.$isClick = isClick;
        Vue.prototype.$setsessionStorage = setsessionStorage;
        Vue.prototype.$removesessionStorage = removesessionStorage;
        Vue.prototype.$getQueryString = getQueryString;
        Vue.prototype.$getsessionStorage = getsessionStorage;
        Vue.prototype.$removelocalStorage = removelocalStorage;
        Vue.prototype.$setlocalStorage = setlocalStorage;
        Vue.prototype.$getlocalStorage = getlocalStorage;
        Vue.prototype.$typeOf = typeOf;
        Vue.prototype.$uni = uni;
        Vue.prototype.$uuid = uuid;
        Vue.prototype.$accMul = accMul;
        Vue.prototype.$curBrowser = curBrowser;
        Vue.prototype.$isMobile = isMobile;


        Vue.prototype.$hasClass = hasClass;
        Vue.prototype.$addClass = addClass;
        Vue.prototype.$removeClass = removeClass;
        Vue.prototype.$numChange = numChange;
        Vue.prototype.$getCookie = getCookie;
        Vue.prototype.$setCookie = setCookie;
        Vue.prototype.$formatJSON = formatJSON;

        Vue.prototype.$deepCopy = (obj) => {
            let strObj = JSON.stringify(obj);
            return JSON.parse(strObj);
        };
        Vue.prototype.$NullStr = (str) => {
            if ((str + '' === '') || (str == null) || (str == undefined)) {
                return '--';
            } else {
                return str;
            }
        };
        Vue.prototype.$NullToStr = (obj) => {
            if (obj == null) {
                return '';
            } else {
                return obj;
            }
        };
        Vue.prototype.$userAgen = function () {
            var os = (function () {
                var ua = navigator.userAgent
                var isWindowsPhone = /(?:Windows Phone)/.test(ua)
                var isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone
                var isAndroid = /(?:Android)/.test(ua)
                var isFireFox = /(?:Firefox)/.test(ua)
                var isTablet = /(?:iPad|PlayBook)/.test(ua) || (isAndroid && !/(?:Mobile)/.test(ua)) || (isFireFox &&
                    /(?:Tablet)/.test(ua))
                var isPhone = /(?:iPhone)/.test(ua) && !isTablet
                var isPc = !isPhone && !isAndroid && !isSymbian
                return {
                    isTablet: isTablet,
                    isPhone: isPhone,
                    isAndroid: isAndroid,
                    isPc: isPc
                }
            }())
            if (os.isAndroid || os.isPhone) {
                return '手机'
            } else if (os.isTablet) {
                return '平板'
            } else if (os.isPc) {
                return '电脑'
            }
        }
    },
}
