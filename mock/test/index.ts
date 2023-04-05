import mockJS, { Random } from "mockjs"
const userList = mockJS.mock({
    "data|34": [{
        name: "@cname",  //  随机生成姓名, 并且不重复
        "id|+1": 1,  // id自增一
        "sex|1": ["男", "女"],  // 性别
        "entryData": Random.date('yyyy-MM-dd'),
        "postion|1": ["研发部经理", "前端开发工程师", "后端开发工程师", "测试工程师", "产品经理", "UI设计师", "架构师", "运维工程师"],
        "age|18-60": 18,  // 年龄
        "salary|10-50": 21,  // 薪资
    }]
})

module.exports = [
    {
        method: "get",
        url: "/api/test",
        response: ({ body }) => {
            return {
                code: 200,
                msg: "success",
                data: userList
            }
        }
    }
]
