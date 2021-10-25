module.exports = ({ file }) => {
    let rootValue;
    // 若为vant组件 则根fz为37.5 其他则设置为75
    if (file && file.dirname && file.dirname.indexOf("vant") > -1) {
        rootValue = 37.5;
    } else {
        rootValue = 75;
    }
    return {
      plugins: {
        'postcss-pxtorem':{
            rootValue: rootValue,
             propList: ["*"] 
        }
      }
    };
  };