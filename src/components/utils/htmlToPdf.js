// 导出页面为PDF格式
import html2Canvas from 'html2canvas'
import JsPDF from 'jspdf'
import $ from 'jquery'
export default {
    install(Vue, options) {
        Vue.prototype.getPdf = function(pdfPrint, title) {
            let content_html = document.querySelector('#' + pdfPrint) // 这个dom元素是要导出pdf的div容器
            let width = content_html.offsetWidth
            let height = content_html.offsetHeight
            let offsetTop = content_html.offsetTop
            let canvas = document.createElement('canvas')
            let context = canvas.getContext('2d')
            var scaleBy = 1
            canvas.width = width * scaleBy
            canvas.height = height * scaleBy // +offsetTop
            canvas.style.width = width + 'px'
            canvas.style.height = height + 'px'
            context.scale(scaleBy, scaleBy)
            setTimeout(() => {
                var opts = {
                    useCORS: true,
                    allowTaint: true, // 允许加载跨域的图片
                    scale: scaleBy, // 添加的scale 参数
                    canvas: canvas, // 自定义 canvas
                    width: width, // dom 原始宽度
                    height: 1000, // dom 原始高度,
                    scrollY: 0 // 纵向偏移量 写死0 可以避免滚动造成偶尔偏移的现象
                }
                html2Canvas(content_html, opts).then(function(canvas) {
                    var contentWidth = canvas.width
                    var contentHeight = canvas.height

                    // 一页pdf显示html页面生成的canvas高度;
                    var pageHeight = contentWidth / 592.28 * 841.89
                    // 未生成pdf的html页面高度
                    var leftHeight = contentHeight
                    // 页面偏移
                    var position = 0
                    // a4纸的尺寸[595.28,841.89]，html页面生成的canvas在pdf中图片的宽高
                    var imgWidth = 595.28
                    var imgHeight = 592.28 / contentWidth * contentHeight

                    var pageData = canvas.toDataURL('image/jpeg', 1.0)

                    var pdf = new JsPDF('', 'pt', 'a4')

                    // 有两个高度需要区分，一个是html页面的实际高度，和生成pdf的页面高度(841.89)
                    // 当内容未超过pdf一页显示的范围，无需分页
                    if (leftHeight < pageHeight) {
                        pdf.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight)
                    } else {
                        while (leftHeight > 0) {
                            pdf.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight)
                            leftHeight -= pageHeight
                            position -= 841.89
                            // 避免添加空白页
                            if (leftHeight > 0) {
                                pdf.addPage()
                            }
                        }
                    }
                    pdf.save(title + '.pdf')
                })
            }, 0)
        }
    }
}
