import mockJS from "mockjs"

const userList = mockJS.mock({
    "data|100": [ {
        name: "@cname",  //  随机生成姓名, 并且不重复
        "id|+1": 1,  // id自增一
        time: "@time",
        data: "@date"
    } ]
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
