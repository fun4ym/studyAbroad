# studyAbroad

一站式出国留学服务平台 — 面向中国学生的留学、游学、旅游业务

## 目录结构

```
studyAbroad/
├── index.html                  # 门户首页（公司简介 + 目的地导航 + 游学 + 旅游）
├── schools/                    # 各国家留学详情页
│   ├── uk.html                 # 英国留学
│   ├── us.html                 # 美国留学
│   ├── au.html                 # 澳大利亚留学
│   ├── ca.html                 # 加拿大留学
│   ├── sg.html                 # 新加坡留学
│   ├── jp.html                 # 日本留学
│   └── kr.html                 # 韩国留学
├── css/
│   └── style.css               # 全局样式（门户 + 国家页共享）
├── js/
│   └── main.js                 # 全局脚本（语言切换 / 导航 / 分析）
├── assets/                     # 图片等静态资源
├── docs/                       # 内部文档（.gitignore 排除）
├── .gitignore
└── README.md
```

## 网站部署

- **托管平台**: 腾讯云 EdgeOne Pages / CloudStudio
- **加速区域**: 全球（面向中国学生及海外使用）
- **自动部署**: git push 后自动拉取部署

## 日常更新

```bash
cd /path/to/studyAbroad
git add . && git commit -m "更新内容" && git push
```

## SEO & 追踪

- GA4 分析脚本预留接口（`js/main.js`）
- 所有页面含 Open Graph 标签 + 结构化数据（JSON-LD）
- 门户首页含 `<meta name="description">` 中英文关键词

## 重要提醒

- `docs/` 目录已在 .gitignore 中排除
- 内部资料绝不在对外页面中包含
- 双语支持：中文（默认）+ 英文切换
