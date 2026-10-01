// ============================================================================
// All site content lives here. Edit this file to update the website.
// Fields marked TODO need your input (links, thumbnails, exact titles/dates).
// ============================================================================

const PROFILE = {
  name: "Xinglong (Alex) Sun",
  title: "Research Scientist, NVIDIA",
  affiliation: "Physical AI",
  photo: "assets/img/profile.jpg",
  bio: [
    `I am a Research Scientist at <b>NVIDIA</b>, working on <b>Physical AI and world modeling</b>.
     My research focuses on human-aligned evaluation, reward modeling, VLM-as-a-judge, and
     post-training pipelines for world foundation models, world-action models (WAMs), and
     embodied policies.`,
    `I received my M.S. in Computer Science from <b>Stanford University</b>, where I worked with
     Leonidas Guibas in the <a href="https://geometry.stanford.edu/">Geometric Computation Group</a>, and my B.S. in Computer Engineering from
     the <b>University of Illinois Urbana-Champaign</b>, graduating first in my class with Bronze
     Tablet honors. Previously, I worked on efficient deep learning and visual perception with
     <a href="https://www.humphreyshi.com/">Humphrey Shi</a>, <a href="https://yxw.cs.illinois.edu/">Yuxiong Wang</a>, and NVIDIA’s <a href="https://research.nvidia.com/labs/av-applied-research/">AV Applied Research Lab</a>.`,
  ],
  links: [
    { label: "Email", url: "mailto:alexsxl417@gmail.com" },
    { label: "CV", url: "assets/Xinglong_Sun_CV.pdf" },
    { label: "Google Scholar", url: "https://scholar.google.com/citations?user=7_ziRTsAAAAJ&hl=en" },
    { label: "GitHub", url: "" },         // TODO
    { label: "LinkedIn", url: "https://www.linkedin.com/in/xinglong-sun-4584b2174" },
    { label: "X / Twitter", url: "" },    // TODO (optional)
  ],
};

// Research categories used for filtering. `color` tints the chip and the fallback thumbnail.
const CATEGORIES = {
  policy:     { label: "Policy Models",             color: "#76b900" },
  foundation: { label: "Foundation Models",         color: "#8a5cf5" },
  rl:         { label: "RL & Post-Training",        color: "#14a3a3" },
  judge:      { label: "Evaluation & VLM Judge",    color: "#e8793a" },
  efficient:  { label: "Efficient Learning",        color: "#2f8fdd" },
  perception: { label: "Perception & Tracking",     color: "#d6457a" },
};

// Newest first. Dates are free-form strings.
const NEWS = [
  { date: "Sep 2026", text: `<b>Large Discrete Policy</b> accepted to <b>NeurIPS 2026</b>.` },
  { date: "Jun 2026", text: `<b>HAD</b> and <b>ZTRS</b> accepted to <b>ECCV 2026</b>.` },
  { date: "Jun 2026", text: `<b>DriveJudge</b> released on arXiv.` },
  { date: "Jan 2026", text: `<b>DriveCritic</b> accepted to <b>IROS 2026</b>.` },
  { date: "Nov 2025", text: `<b>DriveSuprim</b> accepted to <b>AAAI 2026</b>.` },
  { date: "Oct 2025", text: `Won the <b>Runner-up Award</b> and <b>Innovation Award</b> at the <a href="https://realadsim.github.io/2025/">RealADSim Workshop Challenge</a>, ICCV 2025.` },
  { date: "Jun 2025", text: `<b>AllTracker</b> accepted to <b>ICCV 2025</b>; collision-scenario work accepted to <b>IROS 2025</b>.` },
  { date: "Jun 2025", text: `Our team won <b>1st place</b> in the CVPR 2025 End-to-End Driving Challenge.` },
  { date: "Mar 2025", text: `<b>Cosmos-Transfer1</b> released.` },
  { date: "Feb 2025", text: `<b>MDP</b> accepted to <b>CVPR 2025</b>; sparsification work accepted to <b>WACV 2025</b>.` },
  { date: "May 2024", text: `Joined NVIDIA as a Research Scientist.` },
];

// Publications (parsed from Google Scholar). Fields:
//   title, authors, venue, year, type: "conference" | "preprint",
//   categories: [keys of CATEGORIES],
//   thumb: path to .jpg/.png/.gif/.webp/.mp4 in assets/img/thumbs/ (empty -> auto placeholder)
//   links: { paper, arxiv, pdf, project, code, video } (empty ones are hidden)
//   short: optional name for the placeholder thumbnail (defaults to text before ":")
//   bibAuthors: optional full author list for the generated BibTeX (defaults to authors)
//   comingSoon: true -> badge says "Coming Soon" and the Cite link is hidden until links exist
//   award: optional highlighted note (awardUrl: optional link for it)
// "Xinglong Sun" in authors is bolded automatically.
const PUBLICATIONS = [
  {
    title: "AffordDrive3D: Affordance-Aware World-Action Modeling with Spatial Understanding",
    authors: "Tianhui Cai, Xinglong Sun, Chao Fang, Zhenxin Li, Rui Song, Jose M. Alvarez, Yunxiang Mao, Jiaqi Ma, Langechuan Liu",
    venue: "arXiv", year: 2026, type: "preprint", comingSoon: true,
    categories: ["policy", "foundation"],
    thumb: "assets/img/thumbs/afforddrive.webp", links: {},
  },
  {
    short: "LDP",
    title: "Large Discrete Policy: Advancing Explicit Behavior Modeling with Stochastic Iterative Scoring",
    authors: "Zhenxin Li, Nadine Chang, Xinglong Sun, Jingde Chen, Wenhao Yao, Zi Wang, Maying Shen, Yu-Gang Jiang, Zuxuan Wu, Shiyi Lan, Jose M. Alvarez",
    venue: "NeurIPS", year: 2026, type: "conference",
    categories: ["policy"],
    thumb: "assets/img/thumbs/ldp.webp", links: { arxiv: "https://arxiv.org/abs/2609.07049" },
  },
  {
    title: "DriveJudge: Rethinking Autonomous Driving Evaluation with Vision-Language Models",
    authors: "Xinglong Sun, Kevin Xie, Jenny Schmalfuss, Despoina Paschalidou, Xiuming Zhang, Sanja Fidler, Kashyap Chitta, Jose M. Alvarez",
    venue: "arXiv", year: 2026, type: "preprint",
    categories: ["judge"],
    thumb: "assets/img/thumbs/drivejudge.webp", links: { arxiv: "https://arxiv.org/abs/2606.17362" },
  },
  {
    title: "HAD: Combining Hierarchical Diffusion with Metric-Decoupled RL for End-to-End Driving",
    authors: "Wenhao Yao, Xinglong Sun, Zhenxin Li, Shiyi Lan, Zi Wang, Jose M. Alvarez, Zuxuan Wu",
    venue: "ECCV", year: 2026, type: "conference",
    categories: ["policy", "rl"],
    thumb: "assets/img/thumbs/had.webp", links: { arxiv: "https://arxiv.org/abs/2604.03581" },
  },
  {
    title: "ZTRS: Zero-Imitation End-to-End Autonomous Driving with Trajectory Scoring",
    authors: "Zhenxin Li, Wenhao Yao, Zi Wang, Xinglong Sun, Jingde Chen, Nadine Chang, Maying Shen, Jingyu Song, Zuxuan Wu, Shiyi Lan, Jose M. Alvarez",
    venue: "ECCV", year: 2026, type: "conference",
    categories: ["policy", "rl"],
    thumb: "assets/img/thumbs/ztrs.webp", links: { arxiv: "https://arxiv.org/abs/2510.24108" },
  },
  {
    title: "DriveSuprim: Towards Precise Trajectory Selection for End-to-End Planning",
    authors: "Wenhao Yao, Zhenxin Li, Shiyi Lan, Zi Wang, Xinglong Sun, Jose M. Alvarez, Zuxuan Wu",
    venue: "AAAI", year: 2026, type: "conference",
    categories: ["policy"],
    thumb: "assets/img/thumbs/drivesuprim.webp", links: { paper: "https://ojs.aaai.org/index.php/AAAI/article/view/38178" },
  },
  {
    title: "DriveCritic: Towards Context-Aware, Human-Aligned Evaluation for Autonomous Driving with Vision-Language Models",
    authors: "Jingyu Song, Zhenxin Li, Shiyi Lan, Xinglong Sun, Nadine Chang, Maying Shen, Joshua Chen, Katherine A. Skinner, Jose M. Alvarez",
    venue: "IROS", year: 2026, type: "conference",
    categories: ["judge"],
    thumb: "assets/img/thumbs/drivecritic.webp", links: { arxiv: "https://arxiv.org/abs/2510.13108" },
  },
  {
    title: "Cosmos-Transfer1: Conditional World Generation with Adaptive Multimodal Control",
    authors: "NVIDIA (incl. Xinglong Sun)",
    // Full author list for BibTeX (from arXiv).
    bibAuthors: "NVIDIA, Hassan Abu Alhaija, Jose Alvarez, Maciej Bala, Tiffany Cai, Tianshi Cao, Liz Cha, Joshua Chen, Mike Chen, Francesco Ferroni, Sanja Fidler, Dieter Fox, Yunhao Ge, Jinwei Gu, Ali Hassani, Michael Isaev, Pooya Jannaty, Shiyi Lan, Tobias Lasser, Huan Ling, Ming-Yu Liu, Xian Liu, Yifan Lu, Alice Luo, Qianli Ma, Hanzi Mao, Fabio Ramos, Xuanchi Ren, Tianchang Shen, Xinglong Sun, Shitao Tang, Ting-Chun Wang, Jay Wu, Jiashu Xu, Stella Xu, Kevin Xie, Yuchong Ye, Xiaodong Yang, Xiaohui Zeng, Yu Zeng",
    venue: "arXiv", year: 2025, type: "preprint",
    categories: ["foundation"],
    thumb: "assets/img/thumbs/cosmos-transfer1.mp4", links: {
      arxiv: "https://arxiv.org/abs/2503.14492",
      project: "https://research.nvidia.com/labs/dir/cosmos-transfer1/",
      code: "https://github.com/nvidia-cosmos/cosmos-transfer1",
    },
  },
  {
    title: "AllTracker: Efficient Dense Point Tracking at High Resolution",
    authors: "Adam W. Harley, Yang You, Xinglong Sun, Yang Zheng, Nikhil Raghuraman, Yunqi Gu, Sheldon Liang, Wen-Hsuan Chu, Achal Dave, Pavel Tokmakov, Suya You, Rares Ambrus, Katerina Fragkiadaki, Leonidas Guibas",
    venue: "ICCV", year: 2025, type: "conference",
    categories: ["foundation", "perception"],
    thumb: "assets/img/thumbs/alltracker.mp4", links: {
      paper: "https://ieeexplore.ieee.org/abstract/document/11445929/",
      arxiv: "https://arxiv.org/abs/2506.07310",
      project: "https://alltracker.github.io",
      code: "https://github.com/aharley/alltracker",
    },
  },
  {
    title: "MDP: Multidimensional Vision Model Pruning with Latency Constraint",
    authors: "Xinglong Sun, Barath Lakshmanan, Maying Shen, Shiyi Lan, Jingde Chen, Jose M. Alvarez",
    venue: "CVPR", year: 2025, type: "conference",
    categories: ["efficient"],
    thumb: "assets/img/thumbs/mdp.webp", links: {
      paper: "https://ieeexplore.ieee.org/abstract/document/11095055/",
      arxiv: "https://arxiv.org/abs/2504.02168",
    },
  },
  {
    title: "Generalized Trajectory Scoring for End-to-End Multimodal Planning",
    short: "GTRS",
    authors: "Zhenxin Li, Wenhao Yao, Zi Wang, Xinglong Sun, Joshua Chen, Nadine Chang, Maying Shen, Zuxuan Wu, Shiyi Lan, Jose M. Alvarez",
    venue: "arXiv", year: 2025, type: "preprint",
    categories: ["policy"],
    award: "1st Place, CVPR 2025 End-to-End Driving Challenge",
    awardUrl: "https://opendrivelab.com/challenge2025/",
    thumb: "assets/img/thumbs/gtrs.webp", links: {
      arxiv: "https://arxiv.org/abs/2506.06664",
      code: "https://github.com/NVlabs/GTRS",
    },
  },
  {
    title: "Enhancing Autonomous Driving Safety with Collision Scenario Integration",
    authors: "Zi Wang, Shiyi Lan, Xinglong Sun, Nadine Chang, Zhenxin Li, Zhiding Yu, Jose M. Alvarez",
    venue: "IROS", year: 2025, type: "conference",
    categories: ["policy"],
    thumb: "assets/img/thumbs/collision.webp", links: {
      paper: "https://ieeexplore.ieee.org/abstract/document/11246713/",
      arxiv: "https://arxiv.org/abs/2503.03957",
    },
  },
  {
    title: "Advancing Weight and Channel Sparsification with Enhanced Saliency",
    authors: "Xinglong Sun, Maying Shen, Hongxu Yin, Lei Mao, Pavlo Molchanov, Jose M. Alvarez",
    venue: "WACV", year: 2025, type: "conference",
    categories: ["efficient"],
    thumb: "assets/img/thumbs/sparsification.webp", links: {
      paper: "https://ieeexplore.ieee.org/abstract/document/10944036/",
      arxiv: "https://arxiv.org/abs/2502.03658",
    },
  },
  {
    title: "Refining Pre-Trained Motion Models",
    authors: "Xinglong Sun, Adam W. Harley, Leonidas J. Guibas",
    venue: "ICRA", year: 2024, type: "conference",
    categories: ["perception"],
    thumb: "assets/img/thumbs/refining-motion.mp4", links: {
      paper: "https://ieeexplore.ieee.org/abstract/document/10610900/",
      arxiv: "https://arxiv.org/abs/2401.00850",
    },
  },
  {
    title: "TAG: Tracking at Any Granularity",
    authors: "Adam Harley, Yang You, Yang Zheng, Xinglong Sun, Nikhil Raghuraman, Sheldon Liang, Wen-Hsuan Chu, Suya You, Achal Dave, Pavel Tokmakov, Rares Ambrus, Katerina Fragkiadaki, Leonidas Guibas",
    venue: "Preprint", year: 2024, type: "preprint",
    categories: ["perception"],
    thumb: "assets/img/thumbs/tag.webp", links: { pdf: "https://adamharley.com/tag/tag_draft.pdf" },
  },
  {
    title: "Towards Better Structured Pruning Saliency by Reorganizing Convolution",
    authors: "Xinglong Sun, Humphrey Shi",
    venue: "WACV", year: 2024, type: "conference",
    categories: ["efficient"],
    thumb: "assets/img/thumbs/pruning-saliency.webp", links: {
      paper: "https://openaccess.thecvf.com/content/WACV2024/papers/Sun_Towards_Better_Structured_Pruning_Saliency_by_Reorganizing_Convolution_WACV_2024_paper.pdf",
    },
  },
  {
    title: "Revisiting Deformable Convolution for Depth Completion",
    authors: "Xinglong Sun, Jean Ponce, Yu-Xiong Wang",
    venue: "IROS", year: 2023, type: "conference",
    categories: ["perception"],
    thumb: "assets/img/thumbs/depth-completion.webp", links: {
      paper: "https://ieeexplore.ieee.org/abstract/document/10342026/",
      arxiv: "https://arxiv.org/abs/2308.01905",
    },
  },
  {
    title: "Hardware-Aware Latency Pruning for Real-Time 3D Object Detection",
    authors: "Maying Shen, Lei Mao, Joshua Chen, Justin Hsu, Xinglong Sun, Oliver Knieps, Carmen Maxim, Jose M. Alvarez",
    venue: "IEEE IV", year: 2023, type: "conference",
    categories: ["efficient", "perception"],
    thumb: "", links: { paper: "https://ieeexplore.ieee.org/abstract/document/10186732/" },
  },
  {
    title: "Pruning for Better Domain Generalizability",
    authors: "Xinglong Sun",
    venue: "arXiv", year: 2023, type: "preprint",
    categories: ["efficient"],
    thumb: "", links: { arxiv: "https://arxiv.org/abs/2306.13237" },
  },
  {
    title: "DiSparse: Disentangled Sparsification for Multitask Model Compression",
    authors: "Xinglong Sun, Ali Hassani, Zhangyang Wang, Gao Huang, Humphrey Shi",
    venue: "CVPR", year: 2022, type: "conference",
    categories: ["efficient"],
    thumb: "assets/img/thumbs/disparse.webp", links: {
      paper: "https://ieeexplore.ieee.org/abstract/document/9878711/",
      arxiv: "https://arxiv.org/abs/2206.04662",
      code: "https://github.com/SHI-Labs/DiSparse-Multitask-Model-Compression",
    },
  },
];

// Invited talks, newest first. The section is hidden while this list is empty.
//   { date: "Jun 2026", title: "Talk title", venue: "Host / event, Location", url: "" }
const TALKS = [
  { date: "Jun 2026", title: "VLM Judge for Physical AI", venue: "NVIDIA RL Workshop", url: "" },
  { date: "Feb 2026", title: "Foundation Models for Autonomous Driving", venue: "Nuro, Mountain View", url: "" },
  { date: "Nov 2025", title: "End-to-End Driving in the Era of Foundation Models", venue: "FMAD @ ITSC 2025, Gold Coast", url: "" },
  { date: "Jun 2025", title: "Full-Stack, GPU-based Acceleration of Deep Learning (Tutorial)", venue: "CVPR 2025, Nashville", url: "https://nvlabs.github.io/EfficientDL/" },
];

// Small institution logos shown in the Experience timeline (keys used by `logos` below).
const LOGOS = {
  nvidia: "assets/img/logos/nvidia.png",
  stanford: "assets/img/logos/stanford.png",
  illinois: "assets/img/logos/illinois.png",
  inria: "assets/img/logos/inria.png",
  gatech: "assets/img/logos/gatech.png",
  apple: "assets/img/logos/apple.png",
};

const EXPERIENCE = [
  { org: "NVIDIA", logos: ["nvidia"], role: "Research Scientist, Physical AI", dates: "May 2024 – Present", place: "Santa Clara, CA",
    note: "Physical AI and world modeling." },
  { org: "Stanford University", logos: ["stanford"], role: "Researcher, Geometric Computation Group (Prof. Leonidas Guibas)", dates: "Dec 2022 – Present", place: "Stanford, CA",
    note: "Visual tracking and video understanding." },
  { org: "Stanford University", logos: ["stanford"], role: "M.S. in Computer Science (GPA 4.0/4.0)", dates: "Aug 2022 – May 2024", place: "Stanford, CA" },
  { org: "NVIDIA", logos: ["nvidia"], role: "Research Intern, AV Applied Research Lab", dates: "Mar 2022 – Dec 2022; Jun – Sep 2023", place: "Santa Clara, CA",
    note: "Efficiency and model acceleration." },
  { org: "INRIA & UIUC", logos: ["inria", "illinois"], role: "Researcher, WILLOW Group & UIUC Computer Vision Group", dates: "Jul 2021 – Sep 2022", place: "Urbana, IL",
    note: "3D vision." },
  { org: "NVIDIA", logos: ["nvidia"], role: "Architecture Energy Modeling Intern", dates: "May 2021 – Sep 2021", place: "Santa Clara, CA" },
  { org: "GaTech & UIUC", logos: ["gatech", "illinois"], role: "Researcher, SHI Lab (Prof. Humphrey Shi)", dates: "Dec 2020 – Present", place: "Urbana, IL",
    note: "Efficiency and model compression." },
  { org: "Apple", logos: ["apple"], role: "Hardware Technology Intern, SEG-CPU Team", dates: "Jun 2020 – Sep 2020", place: "Austin, TX" },
  { org: "University of Illinois Urbana-Champaign", logos: ["illinois"], role: "B.S. in Computer Engineering (Rank 1st in class, GPA 4.0/4.0)", dates: "Aug 2018 – Dec 2021", place: "Urbana, IL" },
];

// Newest first. `url` (optional) links the award text.
const AWARDS = [
  { text: "Runner-up Award and Innovation Award, RealADSim Workshop Challenge, ICCV 2025", url: "https://realadsim.github.io/2025/" },
  { text: "1st Place, CVPR 2025 End-to-End Driving Challenge", url: "https://opendrivelab.com/challenge2025/" },
];

const HONORS = [
  "Bronze Tablet (Highest Graduation Honor), UIUC",
  "Henry O. Koehler Merit Scholarship",
  "Oakley Award in Electrical and Computer Engineering (2019–20, 2020–21)",
  "Tan Family Education Foundation Scholarship",
  "Frank C. Mock Scholarship",
  "Yunni and Maxine Pao Memorial Scholarship",
  "James Scholar; Dean's List",
];

const SERVICE = [
  "Conference Reviewer: NeurIPS, CVPR, ICRA, IROS, IJCAI, WACV",
  "Journal Reviewer: TPAMI, T-ITS, RA-L",
  "Teaching Assistant, Stanford: CS103, CS330",
];
