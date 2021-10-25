import axios from 'axios'
import { getAjax, getAjaxSome, getAjaxFile } from '@/utils/http'

// 获取所有分组
export const getGroups = (data) => {
    return axios.request({
        url: 'base_info/manage/adminUser/getGroups',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        // console.log(result)
        return getAjax(result)
    })
}
// 获取所有角色
export const getRoles = (data) => {
    return axios.request({
        url: 'base_info/manage/adminUser/getAllRoles',
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
        url: 'base_info/manage/adminUser/getDeps',
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
        url: 'base_info/manage/adminUser/getValidUsers',
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
        url: 'base_info/manage/adminUser/getAllManufacturer',
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
        url: 'base_info/manage/adminUser/saveUser',
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
        url: 'base_info/manage/adminUser/delUser',
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
        url: 'base_info/manage/adminUser/page',
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
        url: 'base_info/manage/adminUser/getAllRoles',
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
        url: 'base_info/manage/manufacturer/saveManufacturer',
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
        url: 'base_info/manage/manufacturer/del',
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
        url: 'base_info/manage/manufacturer/page',
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
        url: 'base_info/manage/userRole/getAllResource',
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
        url: 'base_info/manage/userRole/saveRole',
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
        url: 'base_info/manage/userRole/del',
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
        url: 'base_info/manage/userRole/page',
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
        url: 'base_info/manage/client/addClientInfo',
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
        url: 'base_info/manage/client/updateClientInfo',
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
        url: 'base_info/manage/client/queryClientInfoList',
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
    return axios.delete('base_info/manage/client/deleteClientInfo', {
        params: data
    }).then(result => {
        console.log('result', result)
        return getAjax(result)
    })
}

// 获取客户列表
export const getCustomer = (data) => {
    return axios.request({
        url: 'base_info/manage/client/queryClientInfoList',
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
    return axios.get('base_info/manage/cntract/project/selectProject', {
        params: data
    }).then(result => {
        console.log('result', result)
        return getAjax(result)
    })
}

// 添加小组
export const addGroups = (data) => {
    return axios.request({
        url: 'base_info/manage/adminusergroup/saveGroup',
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
        url: 'base_info/manage/adminusergroup/delGroup',
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
        url: 'base_info/manage/adminusergroup/page',
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
        url: 'base_info/manage/adminusergroup/getValidUsers',
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
        url: 'base_info/manage/permission/getSysMenus',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        return getAjax(result)
    })
}
export const getNewSysMenus = (data) => {
    return axios.request({
        url: 'base_info/manage/permission/getNavigateList',
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
        url: 'base_info/manage/permission/getLoginUrl',
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
        url: 'base_info/manage/department/saveDepartment',
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
        url: 'base_info/manage/department/del',
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
        url: 'base_info/manage/department/page',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        // console.log(result);
        return getAjax(result)
    })
}

// 获取组织列表
export const getTissueList = (data) => {
    return axios.request({
        url: 'defense_drill/manage/tissue/findTissueList',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        // console.log(result);
        return getAjax(result)
    })
}

// 添加组织
export const addTissue = (data) => {
    return axios.request({
        url: 'defense_drill/manage/tissue/addTissue',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        // console.log(result);
        return getAjax(result)
    })
}

// 更新组织
export const editTissue = (data) => {
    return axios.request({
        url: 'defense_drill/manage/tissue/updateTissue',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        // console.log(result);
        return getAjax(result)
    })
}
// 删除组织
export const delTissue = (data) => {
    return axios.delete('defense_drill/manage/tissue/deleteTissue', {
        params: data
    }).then(result => {
        console.log('result', result)
        return getAjax(result)
    })
}

// 获取组织负责人
export const getValidUsers = (data) => {
    return axios.request({
        url: 'defense_drill/manage/tissue/getValidUsers',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        // console.log(result);
        return getAjax(result)
    })
}

// 获取选手列表
export const getAllPlayer = (data) => {
    return axios.request({
        url: 'defense_drill/manage/player/page',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        // console.log(result);
        return getAjax(result)
    })
}

// 添加选手
export const addPlayer = (data) => {
    return axios.request({
        url: 'defense_drill/manage/player/savePlayer',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        // console.log(result);
        return getAjax(result)
    })
}
// 删除选手
export const delPlayer = (data) => {
    return axios.request({
        url: 'defense_drill/manage/player/delById',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        // console.log(result);
        return getAjax(result)
    })
}
// 禁用选手
export const disPlayer = (data) => {
    return axios.request({
        url: 'defense_drill/manage/player/prohibit',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        // console.log(result);
        return getAjax(result)
    })
}
// 获取所有组织
export const getAllTissuse = (data) => {
    return axios.request({
        url: 'defense_drill/manage/player/getAllTissuse',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        // console.log(result);
        return getAjax(result)
    })
}
// 获取所有用户
export const getAllUsers = (data) => {
    return axios.request({
        url: 'defense_drill/manage/player/getValidUsers',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        // console.log(result);
        return getAjax(result)
    })
}

// 获取所有用户
export const getReferee = (data) => {
    return axios.request({
        url: 'defense_drill/manage/referee/getValidUsers',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        // console.log(result);
        return getAjax(result)
    })
}

// 获取裁判列表
export const getAllReferee = (data) => {
    return axios.request({
        url: 'defense_drill/manage/referee/page',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        // console.log(result);
        return getAjax(result)
    })
}

// 添加裁判
export const addReferee = (data) => {
    return axios.request({
        url: 'defense_drill/manage/referee/saveReferee',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        // console.log(result);
        return getAjax(result)
    })
}
// 删除裁判
export const delReferee = (data) => {
    return axios.request({
        url: 'defense_drill/manage/referee/delById',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        // console.log(result);
        return getAjax(result)
    })
}
// 禁用裁判
export const disReferee = (data) => {
    return axios.request({
        url: 'defense_drill/manage/referee/prohibit',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        // console.log(result);
        return getAjax(result)
    })
}

// 赛事获取厂商
export const getStoreList = (data) => {
    return axios.request({
        url: 'defense_drill/manage/gameEvent/getManfacturerList',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        // console.log(result);
        return getAjax(result)
    })
}
// 获取厂商下的人
export const getStoreUsers = (data) => {
    return axios.request({
        url: 'defense_drill/manage/gameEvent/getAllManfacturerUser',
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
        url: 'base_info/manage/modular/getSysMenus',
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
        url: 'base_info/manage/modular/updateStatus',
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
        url: 'base_info/manage/modular/updateUrl',
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
        url: 'base_info/manage/modular/saveModular',
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
        url: 'base_info/manage/navigate/getNavigateList',
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
        url: 'base_info/manage/modular/getNavigateList',
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
        url: 'base_info/manage/modular/linkNavigate',
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
        url: 'base_info/manage/navigate/modifyIcon',
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
        url: 'base_info/manage/modular/getAllMenu',
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
        url: 'base_info/manage/modular/saveMenu',
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
        url: 'base_info/manage/modular/getMenuGroup',
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
        url: 'base_info/manage/modular/prohibitMenu',
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
        url: 'base_info/manage/modular/menuSort',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        // console.log(result);
        return getAjax(result)
    })
}

// 批量设置角色
export const addMultiRoles = (data) => {
    return axios.request({
        url: 'base_info/manage/adminUser/updateRole',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        // console.log(result);
        return getAjax(result)
    })
}
// 批量设置部门
export const addMultiDep = (data) => {
    return axios.request({
        url: 'base_info/manage/adminUser/updateDep',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        // console.log(result);
        return getAjax(result)
    })
}
// 删除菜单
export const delete_menu = (data) => {
    return axios.request({
        url: 'base_info/manage/modular/deleteMenu',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        // console.log(result);
        return getAjax(result)
    })
}
export const moveMenu = (data) => {
    return axios.request({
        url: 'base_info/manage/modular/updateParentMenu',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    }).then(result => {
        // console.log(result);
        return getAjax(result)
    })
}

