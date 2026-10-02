/* ============================================================
   全站中英双语文案字典
   想修改网站内容？直接编辑本文件即可，改完重新 push 就生效。
   ============================================================ */

const I18N = {
  /* ---------------- 中文 ---------------- */
  zh: {
    meta: {
      title: "叶乐萱 Ye Lexuan Elise | 个人介绍",
      desc: "叶乐萱（YE Lexuan Elise）个人介绍：香港理工大学会计及金融分析硕士，拥有众安银行、广发证券、厦门银行、国泰君安实习经历与 AI 项目实践，可立即到岗。",
    },
    brand: "叶乐萱 · Elise",
    nav: { about: "关于我", education: "教育", internships: "实习", projects: "项目", skills: "技能", menu: "打开菜单" },

    hero: {
      name: "叶乐萱",
      tagline: "数据驱动的产品与运营人 · 金融 × AI",
      sub: "香港理工大学 会计及金融分析硕士 · 可立即到岗",
      email: "邮件联系我",
      resume: "中文简历 PDF",
      resumeEn: "English CV",
      stats: [
        { num: "5", label: "段实习" },
        { num: "4", label: "个项目" },
        { num: "90.24", label: "本科均分" },
        { num: "第 1", label: "专业排名" },
      ],
    },

    about: {
      heading: "关于我",
      p1: "我是叶乐萱，香港理工大学会计及金融分析硕士（2026 年 11 月毕业），金融工程本科均分 90.24、专业第一。",
      p2: "我参与过产品运营、用户调研、新媒体运营及 AI 数字化项目：在众安银行做跨境理财通竞品调研与运营优化，在广发证券用 Python 与 SPSS 做风控建模和用户画像，并独立开发了 AI 驱动的交易后审核平台。我习惯基于数据识别用户需求与运营机会，把创新想法真正落地。",
      p3: "目前正在求职中，可立即到岗，欢迎联系。",
      tags: ["产品运营", "用户调研", "数据分析", "AI 数字化", "新媒体运营"],
    },

    education: {
      heading: "教育经历",
      honorsTitle: "学业荣誉",
      honors: "国家奖学金 · 校一等奖学金 · 优秀学生干部 · 三好学生 · 全国市场调研竞赛国家级三等奖 · 福建省互联网+省级二等奖 · 福建省企业模拟经营大赛省级银奖",
      list: [
        {
          school: "香港理工大学",
          degree: "会计及金融分析硕士 · 商学院",
          note: "QS 50",
          period: "2025.09 – 2026.11",
        },
        {
          school: "剑桥大学 · 丘吉尔学院",
          degree: "Summer Exchange",
          note: "",
          period: "2026.05",
        },
        {
          school: "厦门理工学院",
          degree: "金融工程学士 · 经管学院（均分 90.24/100 · 专业第 1）",
          note: "",
          period: "2021.09 – 2025.06",
        },
      ],
    },

    internships: {
      heading: "实习经历",
      list: [
        {
          org: "众安银行 ZA Bank（香港第一数字银行）",
          role: "暑期实习生 · 产品发展部",
          place: "中国香港",
          period: "2026.06 – 2026.08",
          badge: "Z",
          points: [
            "产品研究与 GTM 支持：围绕跨境理财通业务开展同业竞品调研，分析产品定位、用户群体与推广策略，梳理 52 只南向通基金产品信息，支持推广策略制定及一线销售赋能",
            "需求分析与运营优化：结合客户需求及业务数据开展产品运营分析，优化培训材料、营销话术及客户触达方案，提升产品认知与用户转化效率",
            "项目流程优化：参与 Stockback、ZA Card 及财富管理业务流程分析，完成 120+ 笔业务样本测试，优化监控清单与操作模板，业务处理效率提升 30%",
            "AI 应用探索：参与 AI 驱动审核工具设计，将大模型能力应用于业务流程优化，探索智能化工具提升运营效率",
          ],
        },
        {
          org: "广发证券",
          role: "暑期实习生 · 财富管理部",
          place: "福建厦门",
          period: "2024.06 – 2024.08",
          badge: "广",
          points: [
            "风控建模优化：通过 Wind 提取 12 省份 50 地市宏观财政数据，用 Python 完成清洗与建模，构建区域信用评估数据集，识别 2 个高风险区域，协助优化固收产品配置策略",
            "用户画像分析：使用 SPSS 对数百万级用户数据聚类分析，搭建新进与回流用户画像，识别 3 类高价值回流人群，完成 20+ 位高净值客户需求画像与 10+ 份商业方案书",
            "资产配置搭建：协助搭建客户资产配置测算模型，结合风险等级、投资周期与市场趋势完成多组收益测算与压力测试",
          ],
        },
        {
          org: "厦门银行",
          role: "暑期实习生 · 客户关系部",
          place: "福建厦门",
          period: "2023.06 – 2023.08",
          badge: "厦",
          points: [
            "客户服务优化：日均接待 100+ 位客户咨询，精准分流提升前台业务处理效率 20%+，收集用户反馈优化服务流程",
            "客户维护跟进：对 300+ 位存量客户电话随访，收集服务体验与潜在需求，形成客户反馈报告",
            "数据风控核查：核对 300+ 笔贷款合同信息，发现并修正 10 处数据偏差，确保信贷数据准确性",
          ],
        },
        {
          org: "国泰君安证券",
          role: "暑期实习生 · 营业部",
          place: "福建厦门",
          period: "2022.06 – 2022.08",
          badge: "国",
          points: [
            "用户数据分析：独立采集清洗股票、基金及客户数据 2000+ 条，用 Excel 数据透视表分析销售趋势与客户偏好，精准定位高潜力客户群体",
            "财报点评洞察：编撰《每日市场快讯》30 期，整合市场要闻与业务洞察，每日 9 点前送达投资顾问团队",
          ],
        },
        {
          org: "中国投资贸易洽谈会组委会",
          role: "展会运营实习生",
          place: "福建厦门",
          period: "2022.08 – 2022.09",
          badge: "投",
          points: [
            "活动策划与执行：参与投洽会大型商务活动筹备，负责现场物料、客户接待及流程协调，快速响应现场需求，保障活动顺利落地",
            "客户沟通与需求洞察：面向企业客户开展现场沟通与接待，主动了解客户需求及关注重点，及时整理反馈并协调后续跟进",
            "现场运营优化：根据现场客流及客户反馈动态调整接待安排，优化沟通流程与现场体验，积累大型活动运营及项目执行经验",
          ],
        },
      ],
    },

    projects: {
      heading: "项目经历",
      linkLabel: "查看代码 ↗",
      list: [
        {
          tag: "AI 项目实践",
          title: "AI 驱动的交易后审核平台",
          period: "2026.06 – 2026.09",
          link: "https://github.com/yelexuan1108-bit/contract-audit-platform",
          desc: "独立开发基于 Web 的审核工具（Flask + Python）：将业务规则校验、官方模板自动比对与 Claude API 辅助复核相结合，覆盖 4 类产品、3 种语言的审核场景，支持成交单据解析与并发批量上传，从需求梳理到实际使用全流程独立完成。",
        },
        {
          tag: "ZA Bank 实习成果",
          title: "南向通同业调研",
          period: "2026.06 – 2026.08",
          desc: "围绕跨境理财通开展同业竞品调研，梳理 52 只南向通基金产品信息，分析同业银行产品定位、用户群体与推广策略，输出调研报告与 PPT，支持产品推广策略制定及一线销售赋能。",
        },
        {
          tag: "国家级大创",
          title: "绿碳星球——智慧垃圾分类回收平台",
          period: "2022.09 – 2023.09",
          desc: "主导设计「大安态智能垃圾分类软件系统」，集成知识科普、积分兑换、投放预约等核心功能；联动微信视频号与校园社群策划内容，发布 20 篇、触达 2000+ 人，吸引 500 名新用户注册。",
        },
        {
          tag: "创新大赛",
          title: "L'Oréal BRANDSTORM 创新大赛",
          period: "2024.09 – 2025.01",
          desc: "分析 200+ 份问卷与社媒反馈，挖掘美发消费者在服务形式、产品使用与个性化上的需求；提出「上门美发服务 + L'Oréal Prat 小程序」一体化方案，设计端到端服务流程与用户体验，并给出商业化建议。",
        },
      ],
    },

    skills: {
      heading: "专业技能",
      certTitle: "证书与语言",
      toolsTitle: "工具与技能",
      certs: ["IELTS 6.5", "CET-6", "CFA Level 1", "HKSI 香港证券及期货从业资格", "UI/UX 设计", "普通话（母语）", "粤语（基础）", "英语（工作语言）"],
      tools: ["Python", "SQL", "SPSS", "Stata", "Power BI", "Tableau", "Excel", "Word", "PowerPoint", "AI 工具（Claude 等）"],
    },

    footer: {
      line: "欢迎通过邮件联系我",
    },
  },

  /* ---------------- English ---------------- */
  en: {
    meta: {
      title: "YE Lexuan Elise | Portfolio",
      desc: "Portfolio of YE Lexuan (Elise): Master of Accounting and Finance Analytics at The Hong Kong Polytechnic University, with internships at ZA Bank, GF Securities, Xiamen Bank and Guotai Jun'an, plus hands-on AI projects. Available immediately.",
    },
    brand: "Elise · 叶乐萱",
    nav: { about: "About", education: "Education", internships: "Internships", projects: "Projects", skills: "Skills", menu: "Open menu" },

    hero: {
      name: "叶乐萱",
      tagline: "Data-driven Product & Operations · Finance × AI",
      sub: "Master of Accounting and Finance Analytics, PolyU HK · Available Immediately",
      email: "Email Me",
      resume: "Résumé (中文)",
      resumeEn: "English CV",
      stats: [
        { num: "5", label: "Internships" },
        { num: "4", label: "Projects" },
        { num: "90.24", label: "Avg. /100" },
        { num: "Top 1", label: "Class Rank" },
      ],
    },

    about: {
      heading: "About Me",
      p1: "I'm Lexuan (Elise) Ye, a Master's student in Accounting and Finance Analytics at The Hong Kong Polytechnic University (graduating Nov 2026), with a Bachelor's in Financial Engineering — average 90.24/100, ranked 1st.",
      p2: "I've worked across product operations, user research, new media and AI digitalisation: benchmarking Wealth Management Connect competitors and optimising operations at ZA Bank, building risk models and user profiles with Python and SPSS at GF Securities, and independently developing an AI-powered post-trade audit platform. I use data to spot user needs and operating opportunities — and turn ideas into practice.",
      p3: "I'm open to opportunities and available immediately — let's talk.",
      tags: ["Product Operations", "User Research", "Data Analytics", "AI Digitalisation", "New Media"],
    },

    education: {
      heading: "Education",
      honorsTitle: "Honors",
      honors: "National Scholarship · First-class Scholarship · Outstanding Graduate Award · National Second Prize, National College Students Business Elite Challenge · Provincial First Prize & Best Creative Award, China National Undergraduate Innovation, Creativity and Entrepreneurship Challenge",
      list: [
        {
          school: "The Hong Kong Polytechnic University",
          degree: "Master of Accounting and Finance Analytics · Faculty of Business",
          note: "QS 50",
          period: "09/2025 – 11/2026",
        },
        {
          school: "University of Cambridge · Churchill College",
          degree: "Summer Exchange",
          note: "",
          period: "05/2026",
        },
        {
          school: "Xiamen University of Technology",
          degree: "Bachelor of Economics in Financial Engineering (Avg. 90.24/100 · Ranked 1st)",
          note: "",
          period: "09/2021 – 06/2025",
        },
      ],
    },

    internships: {
      heading: "Internship Experience",
      list: [
        {
          org: "ZA Bank (HK's No. 1 Virtual Bank)",
          role: "Summer Intern · Product Development",
          place: "Hong Kong",
          period: "06/2026 – 08/2026",
          badge: "Z",
          points: [
            "Product research & GTM support: benchmarked peer banks on the Greater Bay Area Wealth Management Connect — product positioning, user segments and promotion strategies — and compiled fund-level data on 52 Southbound funds to support go-to-market planning and front-line sales enablement",
            "Demand analysis & ops optimisation: analysed product operations against customer needs and business data; refined training materials, sales scripts and customer touchpoints to lift product awareness and conversion",
            "Process optimisation: tested 120+ business samples across Stockback, ZA Card and wealth management flows; streamlined monitoring checklists and templates, improving processing efficiency by 30%",
            "AI exploration: helped design an AI-driven review tool, applying LLM capabilities to optimise business processes",
          ],
        },
        {
          org: "GF Securities",
          role: "Summer Intern · Wealth Management",
          place: "Xiamen, Fujian",
          period: "06/2024 – 08/2024",
          badge: "G",
          points: [
            "Used Wind and Python to process macroeconomic data from 10+ provinces and 50+ cities, creating a credit assessment dataset to support fixed-income investments and manage regional risks",
            "Supported customized wealth management for high-net-worth clients, developed profiles for 20+ clients and prepared business proposals; coordinated a high-end securities and options training program",
            "Summarized macro-strategy and industry research reports, extracting key insights for wealth management clients",
          ],
        },
        {
          org: "Xiamen Bank",
          role: "Assistant Lobby Manager",
          place: "Xiamen, Fujian",
          period: "07/2023 – 08/2023",
          badge: "X",
          points: [
            "Independently handled client reception and service flow, processing 40+ customer inquiries and transactions daily; improved front desk efficiency by 20% and customer satisfaction",
            "Assisted account managers in organising post-loan documents including certificate requests and early repayments; supported personal loan managers in archiving credit files",
          ],
        },
        {
          org: "Guotai Jun'an Securities",
          role: "Assistant Account Manager · Securities Business Dept.",
          place: "Xiamen, Fujian",
          period: "07/2022 – 08/2022",
          badge: "GJ",
          points: [
            "Analysed client needs and guided 15 clients to show investment interest, reactivating 5 dormant clients with new assets; assisted in financial product promotion and client event planning",
            "Collected and cleaned stock/fund data with Excel PivotTables to identify trends and preferences; created the Daily Market Bulletin with key insights for the investment team",
          ],
        },
        {
          org: "China International Fair for Investment and Trade (CIFIT) · Organizing Committee",
          role: "Exhibition Operations Intern",
          place: "Xiamen, Fujian",
          period: "08/2022 – 09/2022",
          badge: "C",
          points: [
            "Event planning & execution: supported the preparation of a large-scale business event — on-site materials, client reception and process coordination; responded quickly to on-site needs to ensure smooth delivery",
            "Client communication & insight: communicated with corporate clients on site, proactively understanding their needs and priorities, compiling feedback and coordinating follow-ups",
            "On-site operations optimisation: dynamically adjusted reception arrangements based on footfall and client feedback, refining the communication flow and on-site experience",
          ],
        },
      ],
    },

    projects: {
      heading: "Projects",
      linkLabel: "View Code ↗",
      list: [
        {
          tag: "AI Practice",
          title: "AI-Powered Post-Trade Audit Platform",
          period: "06/2026 – 09/2026",
          link: "https://github.com/yelexuan1108-bit/contract-audit-platform",
          desc: "Independently designed and built a web-based audit tool (Flask + Python) that combines business-rule validation, official-template comparison and Claude API-assisted review — covering 4 product types in 3 languages, with document parsing and concurrent batch upload. Owned the full journey from requirement discovery to production use.",
        },
        {
          tag: "ZA Bank Internship Output",
          title: "Southbound Connect Competitor Research",
          period: "06/2026 – 08/2026",
          desc: "Benchmarked peer banks on the Greater Bay Area Wealth Management Connect, compiled fund-level data on 52 Southbound funds, and analysed product positioning, user segments and promotion strategies; delivered a research report and deck supporting go-to-market planning and front-line sales enablement.",
        },
        {
          tag: "National Innovation Project",
          title: "Smart Waste Sorting & Recycling Platform",
          period: "09/2022 – 09/2023",
          desc: "Led the design of a smart waste-sorting software system (education, points redemption, drop-off booking) plus AI-powered sorting devices; ran WeChat video campaigns and campus community content — 20 posts reaching 2,000+ people and bringing in 500 new users. Won the provincial Challenge Cup Third Prize and the university First Prize.",
        },
        {
          tag: "Innovation Competition",
          title: "L'Oréal BRANDSTORM",
          period: "09/2024 – 01/2025",
          desc: "Analysed 200+ survey responses and social media feedback to uncover haircare consumers' needs in service formats, product usage and personalisation; proposed an integrated 'at-home hairdressing service + L'Oréal Prat mini-program' model with end-to-end service flow and UX design, plus commercialisation suggestions.",
        },
      ],
    },

    skills: {
      heading: "Skills",
      certTitle: "Certificates & Languages",
      toolsTitle: "Tools & Skills",
      certs: ["IELTS 6.5", "CET-6", "CFA Level 1", "HKSI", "National Teacher's Qualification", "Mandarin (Native)", "Cantonese (Basic)", "English (Working Proficiency)"],
      tools: ["Python", "SQL", "SPSS", "Stata", "Power BI", "Tableau", "Excel", "Word", "PowerPoint", "Photoshop", "Canva", "AI Tools (Claude, etc.)"],
    },

    footer: {
      line: "Let's connect — reach me by email",
    },
  },
};
