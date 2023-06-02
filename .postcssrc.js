module.exports = ({ file }) => {
    let viewportWidth;
    // 若为vant组件 则根fz为37.5 其他则设置为75
    if (file && file.dirname && file.dirname.indexOf("vant") > -1) {
        viewportWidth = 375;
    } else {
        viewportWidth = 750;
    }
    return {
        plugins: {
            autoprefixer: {},
            "postcss-px-to-viewport": {
                unitToConvert: 'px',            //需要转换的单位
                viewportWidth: viewportWidth,           //设计稿的宽度
                unitPrecision: 5,                 //单位转换后保留的精度
                propList: ['*'],         //能转化为vw的属性列表，默认'*'
                viewportUnit: 'vw',              //转换后的视口单位
                fontViewportUnit: 'vw',      //字体使用的视口单位
                selectorBlackList: [],            //忽略的css选择器
                minPixelValue: 1,                //最小的转换数值
                mediaQuery: true,             //是否开启媒体查询
                replace: true,     //是否直接更换属性值，而不添加备用属性     
                exclude: [],          //忽略某些文件夹下的文件或特定文件
                landscape: true,  
                landscapeUnit: 'vw',  //横屏时使用的单位
                landscapeWidth: 1366   //横屏时使用的视口宽度
        }
      }
    };
  };

