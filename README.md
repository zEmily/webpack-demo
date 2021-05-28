# 包模块导入导出 Demo

## 文件结构

```
.
└── packages/
    ├── demo -------------------- 主动调用各种子包的代码
    ├── package ----------------- 包：子路径导出相关
    ├── conditional_package ----- 包：条件导出相关
    ├── nested_condition -------- 包：嵌套导出相关
    └── only_cjs ---------------- 包：仅使用 cjs
```

## 初始化

- clone 代码 -> 打开到根目录
- `yarn install`
- `cd packages/demo`
- `yarn build`
- 打开浏览器 console，就能看到 webpack 的表现了
