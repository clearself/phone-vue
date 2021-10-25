// fix 路由切换时弹窗不消失的 bug
export default {
    data() {
        return {
            fieldNull: '',
            fields: {},
            fieldsCache: {
                lid: '事件ID',
                lrecepttime: '事件接收时间',
                cusername: '用户名称',
                csrcip: '源地址',
                isrcport: '源端口',
                coperation: '操作',
                cdstip: '目的地址',
                idstport: '目的端口',
                cobject: '对象',
                iresult: '结果',
                lduration: '持续时间',
                ireponse: '响应信息',
                lsend: '发送流量',
                lreceive: '接收流量',
                imergecount: '归并数目',
                ceventname: '事件名称',
                ceventdigest: '事件摘要',
                ceventtype: '事件分类',
                icollecttype: '采集类型',
                ieventlevel: '等级',
                corilevel: '原始等级',
                coritype: '原始类型',
                loccurtime: '产生时间',
                dmonitorvalue: '监控数值',
                iprotocol: '网络协议',
                iappprotocol: '网络应用协议',
                csrctip: '源转换IP地址',
                csrcname: '源名称',
                csrcmac: '源MAC地址',
                isrctport: '源转换端口',
                cdstname: '目的名称',
                cdstmac: '目的MAC地址',
                cdsttip: '目的转换IP地址',
                idsttport: '目的转换端口',
                cdevip: '设备地址',
                cdevname: '设备名称',
                cdevtype: '设备类型',
                cprogram: '程序名称',
                ccollectorip: '采集器IP地址',
                crequestmsg: '请求内容',
                ceventmsg: '原始消息'
            },
            allFieldsDialog: false,
            pickerOptions2: {
                disabledDate(time) {
                    return time.getTime() > Date.now()
                },
                shortcuts: [{
                    text: '最近一周',
                    onClick(picker) {
                        const end = new Date()
                        const start = new Date()
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
                        picker.$emit('pick', [start, end])
                    }
                }, {
                    text: '最近一个月',
                    onClick(picker) {
                        const end = new Date()
                        const start = new Date()
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
                        picker.$emit('pick', [start, end])
                    }
                }, {
                    text: '最近三个月',
                    onClick(picker) {
                        const end = new Date()
                        const start = new Date()
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
                        picker.$emit('pick', [start, end])
                    }
                }]
            }
        }
    },
    computed: {
        bankType() {
            return this.$getsessionStorage('bankType')
        }
    },
    methods: {
        handleZhuiShu(row) {
            this.fields = {}
            this.fieldNull = row.sub_code
            console.log('row', row)
            for (let attr in row.attackLog) {
                if (this.fieldsCache[attr]) {
                    this.fields[this.fieldsCache[attr]] = row.attackLog[attr]
                }
            }
            console.log('this.fields', this.fields)
            this.allFieldsDialog = true
        }
    }

}
