import axios from 'axios'
import { Message, MessageBox } from 'element-ui'
import { getAjax, getAjaxSome, getAjaxFile } from '@/utils/http'
// 获取所有角色
export const getRoles = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/adminUser/getAllRoles',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        // console.log(result)
        return getAjax(result)
    })
}

// 获取所有厂商
export const getDeps = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/adminUser/getDeps',
        method: 'post',

        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        // console.log(result)
        return getAjax(result)
    })
}

// 获取上级
export const getParents = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/adminUser/getValidUsers',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        // console.log(result)
        return getAjax(result)
    })
}
// 获取厂商
export const getStore = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/adminUser/getAllManufacturer',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        // console.log(result)
        return getAjax(result)
    })
}

// 添加or修改用户
export const addUsers = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/adminUser/saveUser',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        // console.log(result)
        return getAjax(result)
    })
}

// 删除用户
export const delUsers = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/adminUser/delUser',
        method: 'post',

        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        console.log(result)
        return getAjax(result)
    })
}

// 用户列表数据
export const getAll = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/adminUser/page',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        // console.log(result)
        return getAjax(result)
    })
}

// 角色列表数据
export const getAllRoles = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/adminUser/getAllRoles',
        method: 'post',

        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        // console.log(result);
        return getAjax(result)
    })
}

// 添加厂商
export const addDeps = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/manufacturer/saveManufacturer',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        // console.log(result);
        return getAjax(result)
    })
}

// 删除厂商
export const delDeps = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/manufacturer/del',
        method: 'post',

        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        // console.log(result);
        return getAjax(result)
    })
}
// 获取厂商列表
export const getDepsAll = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/manufacturer/page',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        // console.log(result);
        return getAjax(result)
    })
}

// 获取所有角色权限
export const getAllResource = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/userRole/getAllResource',
        method: 'post',

        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        // console.log(result);
        return getAjax(result)
    })
}

// 添加角色
export const addRoles = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/userRole/saveRole',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        // console.log(result);
        return getAjax(result)
    })
}

// 删除角色
export const delRoles = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/userRole/del',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        // console.log(result);
        return getAjax(result)
    })
}
// 获取角色列表
export const getRolesAll = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/userRole/page',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        // console.log(result);
        return getAjax(result)
    })
}

// 添加客户
export const addCustomer = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/client/addClientInfo',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        // console.log(result);
        return getAjax(result)
    })
}

// 更新客户
export const updateCustomer = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/client/updateClientInfo',
        method: 'post',

        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        // console.log(result);
        return getAjax(result)
    })
}

// 搜索客户
export const searchCustomer = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/client/queryClientInfoList',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        // console.log(result);
        return getAjax(result)
    })
}

// 删除客户
export const delCustomer = (data) => {
    return axios.delete('reporting_platform/manage/client/deleteClientInfo', {
        params: data
    }).then(result => {
        console.log('result', result)
        return getAjax(result)
    })
}

// 获取客户列表
export const getCustomer = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/client/queryClientInfoList',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        // console.log(result);
        return getAjax(result)
    })
}

// 获取项目列表
export const getProject = (data) => {
    return axios.get('reporting_platform/manage/cntract/project/selectProject', {
        params: data
    }).then(result => {
        console.log('result', result)
        return getAjax(result)
    })
}

// 添加小组
export const addGroups = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/adminusergroup/saveGroup',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        // console.log(result);
        return getAjax(result)
    })
}

// 删除小组
export const delGroups = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/adminusergroup/delGroup',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        // console.log(result);
        return getAjax(result)
    })
}
// 获取小组列表
export const getGroupsAll = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/adminusergroup/page',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        return getAjax(result)
    })
}

// 获取所有user
export const getUserAll = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/adminusergroup/getValidUsers',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        return getAjax(result)
    })
}

// 获取用户登录成功后的系统入口列表
export const getSysMenus = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/permission/getSysMenus',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        return getAjax(result)
    })
}
export const getNewSysMenus = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/permission/getNavigateList',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        return getAjax(result)
    })
}

// 判断跳转地址
export const getHref = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/permission/getLoginUrl',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        return getAjax(result)
    })
}

// 添加部门
export const addDepartment = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/department/saveDepartment',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        // console.log(result);
        return getAjax(result)
    })
}

// 删除部门
export const delDepartment = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/department/del',
        method: 'post',

        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        // console.log(result);
        return getAjax(result)
    })
}
// 获取部门列表
export const getDepartmentAll = (data) => {
    return axios.request({
        url: 'reporting_platform/manage/department/page',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        // console.log(result);
        return getAjax(result)
    })
}

// 获取功能模块
export const getSysList = (data) => {
    return axios.request({
        url: 'manage/modular/getSysMenus',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        // console.log(result);
        return getAjax(result)
    })
}
// 功能模块禁用启用
export const updateStatus = (data) => {
    return axios.request({
        url: 'manage/modular/updateStatus',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        // console.log(result);
        return getAjax(result)
    })
}
export const changelink = (data) => {
    return axios.request({
        url: 'manage/modular/updateUrl',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        // console.log(result);
        return getAjax(result)
    })
}
export const addModular = (data) => {
    return axios.request({
        url: 'manage/modular/saveModular',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        // console.log(result);
        return getAjax(result)
    })
}
export const getNavList = (data) => {
    return axios.request({
        url: 'manage/navigate/getNavigateList',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        // console.log(result);
        return getAjax(result)
    })
}
export const getSysNavList = (data) => {
    return axios.request({
        url: 'manage/modular/getNavigateList',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        // console.log(result);
        return getAjax(result)
    })
}
export const changeNav = (data) => {
    return axios.request({
        url: 'manage/modular/linkNavigate',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        // console.log(result);
        return getAjax(result)
    })
}
export const changeIcon = (data) => {
    return axios.request({
        url: 'manage/navigate/modifyIcon',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        // console.log(result);
        return getAjax(result)
    })
}

// 菜单分页
export const getMenuPage = (data) => {
    return axios.request({
        url: 'manage/modular/getAllMenu',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        // console.log(result);
        return getAjax(result)
    })
}
// 菜单---添加,修改
export const saveMenu = (data) => {
    return axios.request({
        url: 'manage/modular/saveMenu',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        // console.log(result);
        return getAjax(result)
    })
}

// 菜单---select
export const getMenuGroup = (data) => {
    return axios.request({
        url: 'manage/modular/getMenuGroup',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        // console.log(result);
        return getAjax(result)
    })
}

// 菜单---启用,禁用
export const prohibitMenu = (data) => {
    return axios.request({
        url: 'manage/modular/prohibitMenu',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        // console.log(result);
        return getAjax(result)
    })
}

// 菜单---上移,下移
export const menuSort = (data) => {
    return axios.request({
        url: 'manage/modular/menuSort',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        // console.log(result);
        return getAjax(result)
    })
}
