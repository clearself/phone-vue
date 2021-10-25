export default {
    data() {
        return {
            myConfig: {
                toolbars: [
                    ['source', '|', 'undo', 'redo', '|',
                        'bold', 'italic', 'underline', 'strikethrough', 'removeformat',
                        'formatmatch', 'blockquote', '|', 'forecolor', 'backcolor', 'insertorderedlist',
                        'insertunorderedlist', '|',
                        'customstyle', 'paragraph', 'fontfamily', 'fontsize', '|',
                        'justifyleft', 'justifycenter', 'justifyright', 'justifyjustify', '|',
                        'link', '|',
                        'simpleupload', 'attachment'
                        // , 'snapscreen', '|',
                        // 'inserttable', 'deletetable', 'insertparagraphbeforetable', 'insertrow', 'deleterow', 'insertcol', 'deletecol',
                        // 'mergecells', 'mergeright', 'mergedown', 'splittocells', 'splittorows', 'splittocols', '|',
                        // 'searchreplace'
                    ]
                ],
                // 禁用编辑器
                // readonly: true,
                // 编辑器不自动被内容撑高
                autoHeightEnabled: false,
                autoFloatEnabled: false,
                // 是否工具栏可浮动
                // 初始容器高度
                initialFrameHeight: 300,
                zIndex: 100,
                // 初始容器宽度
                initialFrameWidth: '100%',
                // 上传文件接口（这个地址是我为了方便各位体验文件上传功能搭建的临时接口，请勿在生产环境使用！！！）
                BaseUrl: '',
                // serverUrl: 'http://35.201.165.105:8000/controller.php',
                // UEditor 资源文件的存放路径，如果你使用的是 vue-cli 生成的项目，通常不需要设置该选项，vue-ueditor-wrap 会自动处理常见的情况，如果需要特殊配置，参考下方的常见问题2
                UEDITOR_HOME_URL: '/static/ueditor/'
            }
        }
    }
}
