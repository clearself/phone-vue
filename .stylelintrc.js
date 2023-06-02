module.exports = {
    extends: [
      'stylelint-config-standard',
      'stylelint-config-prettier',
      'stylelint-config-html/vue',
      'stylelint-config-recommended-vue/scss',
      'stylelint-config-recommended-less',
      'stylelint-config-recommended-scss',
   
    ],
    plugins: ['stylelint-order'],
    overrides: [
      {
        "files": ["**/*.vue"],
        "customSyntax": "postcss-html"
      }
    ],
    ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts', '**/*.json', ],
    rules: {
      indentation: 4,
      'selector-pseudo-element-no-unknown': [
        true,
        {
          ignorePseudoElements: ['v-deep', ':deep']
        }
      ],
      'number-leading-zero': 'always',//不去掉小数点前面的 0
      "length-zero-no-unit": true,//属性值 0 后面不加单位
      "declaration-block-trailing-semicolon": "always",//每个属性声明末尾都要加分号
      'no-descending-specificity': null,
      'function-url-quotes': 'always',
      'string-quotes': 'single',//使用双引号
      "no-eol-whitespace": true,//每行句末不允许有多余空格
      "declaration-block-semicolon-space-before": "never",//声明属性末尾 ";" 前不能有空格
      "declaration-colon-space-before": "never",//属性名 ":" 前不能有空格
      "declaration-colon-space-after": "always",//属性名 ":" 后必须有空格
      "function-comma-space-after": "always",//属性值中的 "," 后必须有空格
      "comment-whitespace-inside": "always",//注释 "/*" 后和 "*/" 前必须有空格
      "media-feature-colon-space-after": "always",//媒体查询中设置断点宽度里的 ":" 后必须有空格
      "media-feature-colon-space-before": "never",//媒体查询中设置断点宽度里的 ":" 前不能有空格
      'unit-case': null,
      'color-hex-case': 'lower',
      'color-hex-length': 'long',
      'rule-empty-line-before': 'never',
      'font-family-no-missing-generic-family-keyword': null,
      'selector-type-no-unknown': null,
      'block-opening-brace-space-before': 'always',
      'at-rule-no-unknown': null,
      'no-duplicate-selectors': null,
      'property-no-unknown': null,
      'no-empty-source': null,
      'selector-class-pattern': null,
      'keyframes-name-pattern': null,
      "block-closing-brace-empty-line-before": [ "never" ],//在结尾 "}" 之前不允许有空行
      'selector-pseudo-class-no-unknown': [
        true,
        { ignorePseudoClasses: ['global', 'deep'] }
      ],
      'function-no-unknown': null,
      'order/properties-order': [
        'position',
        'top',
        'right',
        'bottom',
        'left',
        'z-index',
        'display',
        'justify-content',
        'align-items',
        'float',
        'clear',
        'overflow',
        'overflow-x',
        'overflow-y',
        'margin',
        'margin-top',
        'margin-right',
        'margin-bottom',
        'margin-left',
        'padding',
        'padding-top',
        'padding-right',
        'padding-bottom',
        'padding-left',
        'width',
        'min-width',
        'max-width',
        'height',
        'min-height',
        'max-height',
        'font-size',
        'font-family',
        'font-weight',
        'border',
        'border-style',
        'border-width',
        'border-color',
        'border-top',
        'border-top-style',
        'border-top-width',
        'border-top-color',
        'border-right',
        'border-right-style',
        'border-right-width',
        'border-right-color',
        'border-bottom',
        'border-bottom-style',
        'border-bottom-width',
        'border-bottom-color',
        'border-left',
        'border-left-style',
        'border-left-width',
        'border-left-color',
        'border-radius',
        'text-align',
        'text-justify',
        'text-indent',
        'text-overflow',
        'text-decoration',
        'white-space',
        'color',
        'background',
        'background-position',
        'background-repeat',
        'background-size',
        'background-color',
        'background-clip',
        'opacity',
        'filter',
        'list-style',
        'outline',
        'visibility',
        'box-shadow',
        'text-shadow',
        'resize',
        'transition'
      ]
    }
  };