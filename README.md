# 配置环境
## ESLint
- 安装ESLint extension
- 安装ESLint package (nextjs 自带)
- 添加配置文件
```ts
// 添加官方配置: "eslint:recommended"
const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript", "eslint:recommended"),
];

export default eslintConfig;
```
## Prettier
- 安装prettier package
```bash
pnpm install -D prettier prettier-plugin-tailwindcss
```
- 添加配置文件 (.prettierrc)
```json
{
  "plugins": ["prettier-plugin-tailwindcss"]
}

```

# Mock server
## 常见mock 方法
- setTimeout 写死数据
- <mark> nextjsAPI/node + mock.js</mark>
- Postman 
## mockjs生成随机 
```ts
 const mockdata = mock({
        // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
        'list|1-5': [
            {
                // 属性 id 是一个自增数，起始值为 1，每次增 1
                id: Random.id(),
                // 属性 name 在['小明', '小红', '小刚']中随机选取一个
                'name|1': [Random.cname(), Random.cname(), Random.cname()],
                birthday: Random.date('yyyy-MM-dd'),
                address: Random.county(true),
            },
        ],
    })
```
# Nextjs route handler
- 具体参考: [nextjs route handler](https://nextjs.org/blog/building-apis-with-nextjs) 创建GET handler 并返回mock数据

# 验证码登录
- 联云容云服务: [开发文档](https://doc.yuntongxun.com/pe/5a533de33b8496dd00dce07c)配置请求参数
> 注意: 在nextjs中, 通过API处理.env 信息 (e.g 通过process.env. ENV_NAME 获取), 需要在.env 文件中添加 NEXT_PUBLIC_前缀)
- 验证逻辑: server端(redis/session) 保存并做对比
  - session:[ iron-session](https://github.com/vvo/iron-session)
> Nextjs 无状态, 不支持session


# 表设计
- table 1: 用户信息表: 记录基本信息
- table 2: 登录授权表: 登录类型和授权
