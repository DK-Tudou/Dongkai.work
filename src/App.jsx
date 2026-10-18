import { ArrowDownRight, ArrowLeft, ArrowRight, ArrowUp, ArrowUpRight, Blocks, Check, Download, Layers3, Mail, Menu, MoveUpRight, PenTool, Sparkles, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

const assetPath = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`

const projects = [
  {
    number: '01', id: 'fire6', type: 'consumer', title: '火绒安全 6.0', enTitle: 'Huorong Security 6.0', subtitle: '以清晰体验，构建可靠的数字安全产品', enSubtitle: 'A clear, reassuring experience for digital security', category: 'C 端产品 · 体验设计', enCategory: 'CONSUMER PRODUCT · EXPERIENCE DESIGN', period: '2024.06 — 2026.05', image: assetPath('/project-thumbnails/fire6.webp'), className: 'card-fire', galleryCount: 14,
  },
  {
    number: '02', id: 'enterprise', type: 'b2b', title: '火绒安全企业版中心 2.0', enTitle: 'Huorong Enterprise Center 2.0', subtitle: '让复杂的安全管理更清晰、高效', enSubtitle: 'Clearer, more efficient security operations', category: 'B 端产品 · 设计系统', enCategory: 'B2B PRODUCT · DESIGN SYSTEM', period: '2025.08 — 2026.05', image: assetPath('/project-thumbnails/enterprise.webp'), className: 'card-enterprise', galleryCount: 17,
  },
  {
    number: '12', id: 'huorong-crm', type: 'b2b', title: '火绒安全 CRM 系统', enTitle: 'Huorong Security CRM', subtitle: '项目仍在设计推进中，内容持续更新', enSubtitle: 'Design is in progress; more updates to come', category: 'B 端产品 · 客户关系管理', enCategory: 'B2B PRODUCT · CUSTOMER RELATIONSHIP MANAGEMENT', tag: '持续更新', enTag: 'IN PROGRESS', tagTone: 'green', inProgress: true, period: '', image: assetPath('/projects/huorong-crm-progress.svg'), galleryCount: 1,
  },
  {
    number: '03', id: 'wu', type: 'consumer', title: '无二之旅 2.0', enTitle: 'UniqueWay Travel 2.0', subtitle: '为个性化旅行，打造流畅的数字体验', enSubtitle: 'A seamless digital experience for personal travel', category: '旅行产品 · App / 小程序', enCategory: 'TRAVEL · APP / MINI PROGRAM', period: '2019 — 2021', image: assetPath('/project-thumbnails/wu.webp'), className: 'card-travel', galleryCount: 8,
  },
  {
    number: '09', id: 'task-dingdong', type: 'consumer', title: '任务叮咚', enTitle: 'Task Dingdong', subtitle: '连接灵活用工需求与多元人才', enSubtitle: 'Connecting flexible work opportunities with talent', category: '灵活用工 · 微信小程序', enCategory: 'FLEXIBLE WORK · WECHAT MINI PROGRAM', period: '2019 — 2021', image: assetPath('/project-thumbnails/task-dingdong.webp'), media: Array.from({ length: 7 }, (_, index) => assetPath(`/project-media/task-dingdong/${String(index + 1).padStart(2, '0')}.webp`)), galleryCount: 7,
  },
  {
    number: '08', id: 'wechat-assistant', type: 'consumer', title: '微信助手', enTitle: 'WeChat Assistant', subtitle: '为客服与客户沟通提效的微信插件', enSubtitle: 'A WeChat plugin for more efficient customer support', category: '沟通工具 · 微信插件', enCategory: 'COMMUNICATION · WECHAT PLUGIN', tag: '早期作品', enTag: 'EARLY WORK', period: '2019 — 2021', image: assetPath('/project-thumbnails/wechat-assistant.webp'), media: Array.from({ length: 4 }, (_, index) => assetPath(`/project-media/wechat-assistant/${String(index + 1).padStart(2, '0')}.webp`)), galleryCount: 4,
  },
  {
    number: '04', id: 'website', type: 'website', title: '火绒安全官网首页', enTitle: 'Huorong Security Website', subtitle: '以清晰的信息与视觉传达产品价值', enSubtitle: 'Communicating product value through clear design', category: '品牌官网 · Web', enCategory: 'BRAND WEBSITE · WEB', period: '2021.03 — 2026.05', image: assetPath('/project-thumbnails/website.webp'), className: 'card-site', galleryCount: 1,
  },
  {
    number: '05', id: 'fire6-home', type: 'website', title: '火绒安全 6.0 首页', enTitle: 'Huorong Security 6.0 Website', subtitle: '呈现轻量、可靠的安全防护体验', enSubtitle: 'A lightweight, dependable security experience', category: '品牌官网 · Web', enCategory: 'BRAND WEBSITE · WEB', period: '2021.03 — 2026.05', image: assetPath('/project-thumbnails/fire6-home.webp'), className: 'card-site', galleryCount: 1,
  },
  {
    number: '13', id: 'wu-sakura-train', type: 'website', title: '无二之旅樱花专列', enTitle: 'UniqueWay Sakura Train', subtitle: '樱花季日本主题旅行专题与赏樱攻略', enSubtitle: 'A Japan cherry blossom travel guide and campaign page', category: '品牌官网 · 旅行专题', enCategory: 'BRAND WEBSITE · TRAVEL CAMPAIGN', tag: '早期作品', enTag: 'EARLY WORK', period: '2019 — 2021', image: assetPath('/project-thumbnails/wu-sakura-train.webp'), media: [assetPath('/project-media/wu-sakura/01.webp'), assetPath('/project-media/wu-sakura/02.webp')], className: 'card-site', galleryCount: 2,
  },
  {
    number: '06', id: 'visual', type: 'visual', title: '火绒 IP 设计', enTitle: 'Huorong Brand Character Design', subtitle: '以亲和的角色表达，建立品牌记忆', enSubtitle: 'Building brand recognition through character design', category: 'IP 设计', enCategory: 'CHARACTER DESIGN', period: '2021.03 — 2026.05', image: assetPath('/project-thumbnails/visual.webp'), className: 'card-visual', galleryCount: 1,
  },
  {
    number: '07', id: 'h5', type: 'visual', title: 'H5 互动设计', enTitle: 'Interactive H5 Experience', subtitle: '以轻量互动连接品牌与用户', enSubtitle: 'Connecting brands and audiences through interaction', category: 'H5 互动', enCategory: 'INTERACTIVE EXPERIENCE', period: '2019 — 2021', image: assetPath('/project-thumbnails/h5.webp'), className: 'card-visual', galleryCount: 1,
  },
  {
    number: '10', id: 'vi-manual', type: 'materials', title: '火绒安全 VI 手册', enTitle: 'Huorong Security Visual Identity Manual', subtitle: '以统一的视觉识别，建立清晰连贯的品牌表达', enSubtitle: 'A cohesive visual identity for a clear, consistent brand presence', category: '品牌物料视觉 · VI 手册', enCategory: 'BRAND MATERIALS · VISUAL IDENTITY MANUAL', period: '2021 — 2026', image: assetPath('/project-thumbnails/vi-manual.webp'), media: Array.from({ length: 46 }, (_, index) => assetPath(`/project-media/vi-manual/page-${String(index + 1).padStart(2, '0')}.webp`)), galleryCount: 46, flipbook: true,
  },
  {
    number: '11', id: 'wu-vi-manual', type: 'materials', title: '无二之旅 VI 画册', enTitle: 'UniqueWay Travel Brand Book', subtitle: '以旅行体验为核心，构建统一的品牌视觉表达', enSubtitle: 'A unified visual identity built around the travel experience', category: '品牌物料视觉 · VI 画册', enCategory: 'BRAND MATERIALS · VISUAL IDENTITY BOOK', tag: '早期作品', enTag: 'EARLY WORK', period: '2019 — 2021', image: assetPath('/project-thumbnails/wu-vi-manual.webp'), media: Array.from({ length: 36 }, (_, index) => assetPath(`/project-media/wu-vi-manual/page-${String(index + 1).padStart(2, '0')}.webp`)), galleryCount: 36, flipbook: true,
  },
]

const projectGroups = [
  { id: 'b2b', title: 'B 端产品', enTitle: 'B2B PRODUCT' },
  { id: 'consumer', title: 'C 端产品', enTitle: 'CONSUMER PRODUCT' },
  { id: 'website', title: '品牌官网', enTitle: 'WEBSITE' },
  { id: 'visual', title: '品牌与运营视觉', enTitle: 'BRAND & CAMPAIGN VISUALS' },
  { id: 'materials', title: '品牌物料视觉', enTitle: 'BRAND MATERIALS & VISUAL IDENTITY' },
]

const practiceArtworks = [
  { number: '01', title: 'Panamera 4S', maker: 'PORSCHE', image: assetPath('/practice-gallery/porsche-panamera-4s.webp'), enTitle: 'Panamera 4S', folder: '汽车鼠绘', enFolder: 'Car Sketches', background: '#f5f5f3' },
  { number: '02', title: '纽约', maker: 'UNIQUE WAY', image: assetPath('/practice-gallery/travel-new-york.webp'), enTitle: 'New York', folder: '无二之旅', enFolder: 'Unique Way', background: '#b5cbd2' },
  { number: '03', title: 'F-150 Raptor', maker: 'FORD', image: assetPath('/practice-gallery/ford-f150-raptor.webp'), enTitle: 'F-150 Raptor', folder: '汽车鼠绘', enFolder: 'Car Sketches', background: '#f5f5f3' },
  { number: '04', title: '日本', maker: 'UNIQUE WAY', image: assetPath('/practice-gallery/travel-japan.webp'), enTitle: 'Japan', folder: '无二之旅', enFolder: 'Unique Way', background: '#fff0d4' },
  { number: '05', title: '鼠绘练习', maker: 'DONG KAI', image: assetPath('/practice-gallery/personal-sketch.webp'), enTitle: 'Digital sketch', folder: '个人作品', enFolder: 'Personal Works', background: '#e9aac1' },
  { number: '06', title: 'RS 6 Avant', maker: 'AUDI', image: assetPath('/practice-gallery/audi-rs6.webp'), enTitle: 'RS 6 Avant', folder: '汽车鼠绘', enFolder: 'Car Sketches', background: '#f5f5f3' },
  { number: '07', title: '圣诞', maker: 'UNIQUE WAY', image: assetPath('/practice-gallery/travel-christmas.webp'), enTitle: 'Christmas', folder: '无二之旅', enFolder: 'Unique Way', background: '#bd1731' },
  { number: '08', title: '911 GT2 RS', maker: 'PORSCHE', image: assetPath('/practice-gallery/porsche-911-gt2-rs.webp'), enTitle: '911 GT2 RS', folder: '汽车鼠绘', enFolder: 'Car Sketches', background: '#f5f5f3' },
  { number: '09', title: '北海道', maker: 'UNIQUE WAY', image: assetPath('/practice-gallery/travel-hokkaido.webp'), enTitle: 'Hokkaido', folder: '无二之旅', enFolder: 'Unique Way', background: '#cbd8d5' },
  { number: '10', title: '赛道练习', maker: 'LAMBORGHINI', image: assetPath('/practice-gallery/lamborghini-study.webp'), enTitle: 'Track study', folder: '汽车鼠绘', enFolder: 'Car Sketches', background: '#f5f5f3' },
  { number: '11', title: '罗瓦涅米', maker: 'UNIQUE WAY', image: assetPath('/practice-gallery/travel-rovaniemi.webp'), enTitle: 'Rovaniemi', folder: '无二之旅', enFolder: 'Unique Way', background: '#303c5c' },
  { number: '12', title: 'G-Class', maker: 'MERCEDES-BENZ', image: assetPath('/practice-gallery/mercedes-g-class.webp'), enTitle: 'G-Class', folder: '汽车鼠绘', enFolder: 'Car Sketches', background: '#f5f5f3' },
  { number: '13', title: '威尼斯', maker: 'UNIQUE WAY', image: assetPath('/practice-gallery/travel-venice.webp'), enTitle: 'Venice', folder: '无二之旅', enFolder: 'Unique Way', background: '#efe0da' },
  { number: '14', title: 'C4D 场景插画', maker: 'UNIQUE WAY', image: assetPath('/practice-gallery/travel-c4d.webp'), enTitle: 'C4D illustration', folder: '无二之旅', enFolder: 'Unique Way', background: '#45c6c9' },
  { number: '15', title: '手机主题', maker: 'DONG KAI', image: assetPath('/practice-gallery/mobile-theme.webp'), enTitle: 'Mobile theme', folder: '个人作品', enFolder: 'Personal Works', background: '#1ac9d5' },
  { number: '16', title: '鼠绘 2', maker: 'DONG KAI', image: assetPath('/practice-gallery/personal-sketch-02.webp'), enTitle: 'Digital sketch 02', folder: '个人作品', enFolder: 'Personal Works', background: '#ffffff' },
]

function PracticeGalleryPage({ english }) {
  const [activeIndex, setActiveIndex] = useState(null)
  const activeArtwork = activeIndex === null ? null : practiceArtworks[activeIndex]
  useEffect(() => {
    if (!activeArtwork) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKeyDown = event => {
      if (event.key === 'Escape') setActiveIndex(null)
      if (event.key === 'ArrowRight') setActiveIndex(index => (index + 1) % practiceArtworks.length)
      if (event.key === 'ArrowLeft') setActiveIndex(index => (index - 1 + practiceArtworks.length) % practiceArtworks.length)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [activeArtwork])

  return <section className="practice-page auto-gallery-page" aria-labelledby="practice-title">
    <div className="auto-gallery-topline"><span>DAILY PRACTICE · SKETCHBOOK</span><span>PERSONAL WORKS&nbsp; / &nbsp;CONTINUOUSLY UPDATED</span></div>
    <div className="auto-gallery-grid" aria-label={english ? 'Personal practice gallery' : '日常练习作品'}>
      {practiceArtworks.map((artwork, index) => <button className="auto-art-card" key={artwork.number} type="button" style={{ '--art-background': artwork.background }} onClick={() => setActiveIndex(index)} aria-label={`${english ? 'View' : '查看'} ${artwork.maker} ${english ? artwork.enTitle : artwork.title}`}>
        <img src={artwork.image} alt={`${artwork.maker} ${artwork.enTitle}`} loading={index < 3 ? 'eager' : 'lazy'} fetchPriority={index === 0 ? 'high' : undefined}/>
        <span className="auto-art-folder">#{english ? artwork.enFolder : artwork.folder}</span>
        <span className="auto-art-caption"><span className="auto-art-number">{artwork.number}</span><span><strong>{artwork.maker}</strong><small>{english ? artwork.enTitle : artwork.title}</small></span><ArrowUpRight size={16} aria-hidden="true"/></span>
      </button>)}
    </div>
    <div className="auto-gallery-headline">
      <p className="work-kicker">{english ? 'PERSONAL PRACTICE · IN PROGRESS' : '日常练习 · 持续更新'}</p>
      <h1 id="practice-title">{english ? <>Taking it easy, <span>more soon…</span></> : <>有点偷懒，<span>持续更新...</span></>}</h1>
    </div>
    {activeArtwork && <div className="auto-lightbox" role="dialog" aria-modal="true" aria-labelledby="auto-lightbox-title" onClick={() => setActiveIndex(null)}>
      <button className="auto-lightbox-close" type="button" onClick={() => setActiveIndex(null)} aria-label={english ? 'Close image' : '关闭大图'}><X size={21}/></button>
      <button className="auto-lightbox-nav auto-lightbox-prev" type="button" aria-label={english ? 'Previous image' : '上一张'} onClick={event => { event.stopPropagation(); setActiveIndex(index => (index - 1 + practiceArtworks.length) % practiceArtworks.length) }}><ArrowLeft size={19}/></button>
      <figure className="auto-lightbox-figure" onClick={event => event.stopPropagation()}>
        <img src={activeArtwork.image} alt={`${activeArtwork.maker} ${activeArtwork.enTitle}`}/>
        <figcaption id="auto-lightbox-title"><span>{activeArtwork.number} / {String(practiceArtworks.length).padStart(2, '0')}</span><strong>{activeArtwork.maker}</strong><span>{english ? activeArtwork.enTitle : activeArtwork.title}</span></figcaption>
      </figure>
      <button className="auto-lightbox-nav auto-lightbox-next" type="button" aria-label={english ? 'Next image' : '下一张'} onClick={event => { event.stopPropagation(); setActiveIndex(index => (index + 1) % practiceArtworks.length) }}><ArrowRight size={19}/></button>
    </div>}
  </section>
}

const strengths = [
  { icon: PenTool, index: '01', title: '从问题定义到体验落地', enTitle: 'From problem framing to delivery', text: '围绕业务目标、用户反馈与现有数据识别关键问题，梳理核心任务和使用场景；通过信息架构、流程设计与原型验证方案，再推进视觉设计、开发协同、验收与上线复盘。', enText: 'I use business goals, user feedback, and available data to frame the problem and define key tasks. Information architecture, user flows, and prototypes validate the direction before visual design, development collaboration, QA, and launch review.', tags: ['体验策略', '交互设计', '视觉设计'], enTags: ['Experience strategy', 'Interaction', 'Visual design'] },
  { icon: Layers3, index: '02', title: '复杂业务与系统体验', enTitle: 'Complex products, made clear', text: '面向安全、CRM、销售与数据分析等业务，梳理角色权限、状态逻辑及异常流程，明确高密度信息与关键操作路径；通过一致的导航、反馈和交互规则，降低使用成本，提升跨模块协同效率。', enText: 'Across security, CRM, sales, and analytics products, I clarify roles, permissions, system states, and edge cases. Consistent navigation, feedback, and interaction patterns make dense workflows easier to understand and use.', tags: ['企业级产品', '信息架构', '业务系统'], enTags: ['Enterprise products', 'Information architecture', 'Business systems'] },
  { icon: Blocks, index: '03', title: '设计体系与组件建设', enTitle: 'Scalable design systems', text: '从零搭建企业级组件库与设计规范，统一常用页面结构、组件变体和交互状态；通过规范文档与协作约定沉淀可复用资产，提升多产品间的一致性与交付效率。', enText: 'I build enterprise component libraries and design guidelines, aligning page patterns, component variants, and interaction states. Clear documentation and team conventions make these shared assets easier to adopt and maintain.', tags: ['组件库', '设计规范', '跨团队协作'], enTags: ['Component library', 'Guidelines', 'Collaboration'] },
  { icon: Sparkles, index: '04', title: '新技术融入设计流程', enTitle: 'Practical use of emerging tools', text: '将 AIGC 与 Codex 用于概念探索、方案比较、原型验证及组件搭建，在真实项目中提升验证与协作效率；减少重复整理，加快从想法到可评审方案的推进。', enText: 'I apply AIGC and Codex to concept exploration, design comparisons, prototyping, and component work. Integrated into real projects, these tools help teams validate ideas sooner and move efficiently toward review-ready solutions.', tags: ['AIGC', 'Codex', '快速验证'], enTags: ['AIGC', 'Codex', 'Rapid prototyping'] },
]

function WeChatIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
    <path d="M9.3 3.2C5.1 3.2 1.7 5.9 1.7 9.2c0 1.9 1.1 3.6 2.8 4.7l-.8 2.6 3.1-1.4c.8.2 1.6.3 2.5.3h.4a5.3 5.3 0 0 1-.6-2.4c0-3.5 3.4-6.3 7.6-6.3h.4C15.9 4.7 12.9 3.2 9.3 3.2Zm-3 6.9a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm5.7 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"/>
    <path d="M22.3 12.9c0-3-3-5.4-6.7-5.4s-6.7 2.4-6.7 5.4 3 5.4 6.7 5.4c.8 0 1.6-.1 2.3-.4l2.8 1.3-.7-2.3c1.4-1 2.3-2.4 2.3-4Zm-9.1.8a.9.9 0 1 1 0-1.8.9.9 0 0 1 0 1.8Zm4.7 0a.9.9 0 1 1 0-1.8.9.9 0 0 1 0 1.8Z"/>
  </svg>
}

function ProjectDetailPage({ project, english, contactOpen, contactSource, setContactOpen, setContactSource, navActionsRef, clearContactCloseTimer, closeContact, scheduleContactClose, copyWechat, contactCopyStatus }) {
  const title = english ? project.enTitle : project.title
  const subtitle = english ? project.enSubtitle : project.subtitle
  const category = english ? project.enCategory : project.category
  const pageNumbers = Array.from({ length: project.galleryCount }, (_, index) => index + 1)
  const [activePage, setActivePage] = useState(1)
  const [turnAnimation, setTurnAnimation] = useState(null)
  const touchStartX = useRef(null)
  const pendingFlipRef = useRef(null)
  useEffect(() => {
    if (!project.flipbook) return
    ;[activePage - 1, activePage, activePage + 1].forEach(index => {
      const src = project.media?.[index]
      if (!src) return
      const image = new Image()
      image.src = src
    })
  }, [project.id, project.flipbook, project.media, activePage])
  const flipToPage = page => {
    if (page < 1 || page > project.galleryCount || page === activePage) return
    let transitioned = false
    const showPage = () => {
      if (transitioned || (project.flipbook && pendingFlipRef.current !== page)) return
      transitioned = true
      if (project.flipbook) setTurnAnimation({ from: activePage, to: page, direction: page > activePage ? 'next' : 'previous' })
      setActivePage(page)
    }
    if (project.flipbook && project.media?.[page - 1]) {
      pendingFlipRef.current = page
      const image = new Image()
      image.onload = showPage
      image.onerror = showPage
      image.src = project.media[page - 1]
      if (image.complete) showPage()
      return
    }
    showPage()
  }
  useEffect(() => {
    if (project.galleryCount < 2 || project.flipbook) return
    const frames = document.querySelectorAll('.project-detail-frame')
    const observer = new IntersectionObserver(entries => {
      const current = entries.find(entry => entry.isIntersecting)
      if (current) setActivePage(Number(current.target.dataset.page))
    }, { rootMargin: '-49% 0px -49% 0px', threshold: 0 })
    frames.forEach(frame => observer.observe(frame))
    return () => observer.disconnect()
  }, [project.id, project.galleryCount])
  useEffect(() => {
    if (!project.flipbook) return
    const onKeyDown = event => {
      if (event.altKey || event.ctrlKey || event.metaKey || (event.target instanceof Element && event.target.closest('input, button, a, textarea, select, [contenteditable="true"]'))) return
      if (event.key === 'ArrowRight' || event.key === ' ') {
        event.preventDefault()
        flipToPage(activePage + 1)
      } else if (event.key === 'ArrowLeft') {
        event.preventDefault()
        flipToPage(activePage - 1)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [project.flipbook, project.galleryCount, activePage])
  return <main className="project-detail-page">
    <header className="topbar is-scrolled project-detail-topbar">
      <div className="topbar-inner">
        <a className="wordmark" href="#top"><span className="brand-mark"><img src={assetPath('/brand-mark.png')} alt="" aria-hidden="true" /></span><span className="brand-name">dongkai.work<span>UI / UX · DESIGN PORTFOLIO</span></span></a>
        <div className="project-detail-actions" ref={navActionsRef}>
          <a className="detail-back-link" href="#work"><ArrowLeft className="arrow-icon arrow-left" size={15}/>{english ? 'Project index' : '返回项目目录'}</a>
          <button className="nav-contact" type="button" aria-haspopup="dialog" aria-expanded={contactOpen && contactSource === 'nav'} aria-controls="contact-popover" onClick={() => { clearContactCloseTimer(); setContactSource('nav'); setContactOpen(open => contactSource === 'nav' ? !open : true) }}>{english ? 'Let’s talk' : '联系我'} <MoveUpRight className="arrow-icon arrow-up-right" size={14}/></button>
          {contactOpen && contactSource === 'nav' && <div className="contact-popover" id="contact-popover" role="dialog" aria-modal="false" aria-labelledby="contact-popover-title" onPointerEnter={clearContactCloseTimer} onPointerLeave={scheduleContactClose}>
            <div className="contact-popover-heading"><div><p className="work-kicker">CONTACT</p><h2 id="contact-popover-title">{english ? 'Get in touch' : '联系我'}</h2></div><button className="contact-popover-close" type="button" aria-label={english ? 'Close contact card' : '关闭联系方式'} onClick={closeContact}><X size={16}/></button></div>
            <button className="contact-popover-item contact-popover-copy" type="button" aria-label={`${english ? 'Copy WeChat ID' : '复制微信号'} 13121558989`} onClick={copyWechat}><WeChatIcon/><span><small>{english ? 'WeChat · click to copy' : '微信号 · 点击复制'}</small><strong>13121558989</strong></span>{contactCopyStatus && <span className="contact-copy-tooltip" role="status">{contactCopyStatus}</span>}</button>
            <a className="contact-popover-item" href="mailto:1035607423@qq.com"><Mail/><span><small>{english ? 'Email' : '邮箱'}</small><strong>1035607423@qq.com</strong></span><ArrowUpRight className="contact-popover-arrow arrow-icon arrow-up-right"/></a>
          </div>}
        </div>
      </div>
    </header>
    <section className="project-detail-intro wrap">
      <p className="work-kicker">{category}</p>
      <h1>{title}</h1>
      <p className="project-detail-subtitle">{subtitle}</p>
        <div className="project-detail-meta">{project.period && <span>{project.period}</span>}<span>{String(project.galleryCount).padStart(2, '0')} {project.flipbook ? (english ? 'PAGES' : '页手册') : (english ? 'SCREENS' : '张项目页面')}</span></div>
    </section>
    {project.flipbook ? <section className="manual-viewer wrap" aria-label={english ? `${title} pages` : `${title}翻页预览`}>
      <div className="manual-page-stage" onTouchStart={event => { touchStartX.current = event.changedTouches[0].clientX }} onTouchEnd={event => {
        if (touchStartX.current === null) return
        const delta = event.changedTouches[0].clientX - touchStartX.current
        if (Math.abs(delta) > 48) flipToPage(activePage + (delta < 0 ? 1 : -1))
        touchStartX.current = null
      }}>
        <figure className="manual-page">
          <div className="manual-page-art">
            <img src={project.media[activePage - 1]} alt={`${title} · ${english ? 'page' : '第'} ${activePage}${english ? '' : ' 页'}`} loading="eager" decoding="async" fetchPriority="high" />
            {project.id === 'vi-manual' && activePage === 1 && <span className="manual-cover-date">Visual Brand Guidelines @ 2024 VIS</span>}
            {turnAnimation && <div className={`manual-turn-sheet turn-${turnAnimation.direction}`} aria-hidden="true" onAnimationEnd={() => setTurnAnimation(null)}>
              <div className="manual-turn-face is-front"><img src={project.media[turnAnimation.from - 1]} alt="" />{project.id === 'vi-manual' && turnAnimation.from === 1 && <span className="manual-cover-date">Visual Brand Guidelines @ 2024 VIS</span>}</div>
              <div className="manual-turn-face is-back"><img src={project.media[turnAnimation.to - 1]} alt="" />{project.id === 'vi-manual' && turnAnimation.to === 1 && <span className="manual-cover-date">Visual Brand Guidelines @ 2024 VIS</span>}</div>
            </div>}
          </div>
          <figcaption><span>{project.id === 'wu-vi-manual' ? (english ? 'UNIQUEWAY · BRAND BOOK' : '无二之旅 · 品牌视觉画册') : (english ? 'VISUAL IDENTITY SYSTEM' : '火绒安全 · 品牌视觉识别系统')}</span><span>{String(activePage).padStart(2, '0')} / {String(project.galleryCount).padStart(2, '0')}</span></figcaption>
        </figure>
      </div>
      <nav className="manual-controls" aria-label={english ? 'Manual page controls' : '手册翻页控制'}>
        <button type="button" className="manual-page-button" onClick={() => flipToPage(activePage - 1)} disabled={activePage === 1} aria-label={english ? 'Previous page' : '上一页'}><ArrowLeft size={17}/><span>{english ? 'Previous' : '上一页'}</span></button>
        <div className="manual-page-position"><span>{String(activePage).padStart(2, '0')}</span><input type="range" min="1" max={project.galleryCount} value={activePage} aria-label={english ? 'Choose manual page' : '选择手册页码'} onChange={event => flipToPage(Number(event.target.value))}/><span>{String(project.galleryCount).padStart(2, '0')}</span></div>
        <button type="button" className="manual-page-button" onClick={() => flipToPage(activePage + 1)} disabled={activePage === project.galleryCount} aria-label={english ? 'Next page' : '下一页'}><span>{english ? 'Next' : '下一页'}</span><ArrowRight size={17}/></button>
      </nav>
      <p className="manual-hint">{english ? 'Use ← → keys or swipe to turn pages' : '使用键盘 ← → 或左右滑动翻页'}</p>
    </section> : <section className="project-detail-gallery" aria-label={english ? `${title} project screens` : `${title}项目作品图`}>
      {pageNumbers.map(page => <figure id={`project-page-${project.id}-${page}`} data-page={page} className="project-detail-frame" key={page}>
        <img src={project.media?.[page - 1] || assetPath(`/project-media/${project.id}/${String(page).padStart(2, '0')}.webp`)} alt={`${title} · ${english ? 'screen' : '作品'} ${page}`} loading={page === 1 ? 'eager' : 'lazy'} decoding="async" fetchPriority={page === 1 ? 'high' : 'auto'} />
        <figcaption><span>{english ? 'SCREEN' : '作品图'} {String(page).padStart(2, '0')}</span><span>{String(page).padStart(2, '0')} — {String(project.galleryCount).padStart(2, '0')}</span></figcaption>
      </figure>)}
    </section>}
    {project.galleryCount > 1 && !project.flipbook && <nav className="project-progress" aria-label={english ? 'Project screen progress' : '作品图进度'}>
      <span className="project-progress-count">{String(activePage).padStart(2, '0')}</span>
      <div className="project-progress-steps">{pageNumbers.map(page => <button
        className={activePage === page ? 'is-active' : ''}
        type="button"
        key={page}
        aria-label={english ? `Go to screen ${page} of ${project.galleryCount}` : `跳转到第 ${page} 张作品图`}
        aria-current={activePage === page ? 'step' : undefined}
        onClick={() => document.getElementById(`project-page-${project.id}-${page}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
      />)}</div>
      <span className="project-progress-total">{String(project.galleryCount).padStart(2, '0')}</span>
    </nav>}
    {project.galleryCount > 1 && activePage > 1 && <button className="project-first-page" type="button" onClick={() => project.flipbook ? flipToPage(1) : document.getElementById(`project-page-${project.id}-1`)?.scrollIntoView({ behavior: 'smooth', block: 'center' })}>
      <ArrowUp size={15}/><span>{english ? 'Back to first page' : '回到第一页'}</span>
    </button>}
      <footer className="project-detail-footer wrap"><a href="#work"><ArrowLeft className="arrow-icon arrow-left" size={15}/>{english ? 'Back to project index' : '返回项目目录'}</a><span>© 2026 DONG KAI · DESIGN WITH INTENTION</span></footer>
  </main>
}

function ResumeIntro({ english }) {
  return <section className="about section-pad resume-intro" id="resume-intro">
    <div className="wrap">
      <div className="about-simple">
        <div className="about-simple-head"><p className="overline">{english ? '7 YEARS · PRODUCT DESIGN' : '7 年 UI/UX 设计实践'}</p><h2>{english ? <>Building clarity<br/><span>into complex products.</span></> : <>以系统思维，<br/><span>推动复杂产品持续进化。</span></>}</h2></div>
        <div className="about-simple-copy"><p>{english ? 'Across enterprise security products, consumer experiences, and travel services, I connect user needs and business goals—from problem framing and information architecture to interaction, visual design, and design systems—turning complex requirements into clear, deliverable product experiences.' : '从企业级安全产品到消费体验与旅行服务，我以用户需求和业务目标为起点，贯通问题定义、信息架构、交互视觉与设计体系建设，让复杂产品清晰易用，并持续交付落地。'}</p></div>
        <div className="about-scene"><img className="about-visual" src={assetPath('/about-mountain-browser-blend.webp')} alt={english ? 'A lone designer looking toward a luminous browser window above a dark mountain landscape' : '黑色山脊上的设计师仰望发出珊瑚红与青绿色光芒的巨幅浏览器窗口'} loading="lazy" decoding="async" /></div>
      </div>
    </div>
  </section>
}

function ResumePage({ english, navScrolled, menuOpen, setMenuOpen, contactOpen, contactSource, setContactOpen, setContactSource, navActionsRef, clearContactCloseTimer, closeContact, scheduleContactClose, copyWechat, contactCopyStatus, closeMenu }) {
  const [copied, setCopied] = useState('')
  const copyContact = async (type, value) => {
    let success = false
    try {
      await navigator.clipboard.writeText(value)
      success = true
    } catch {
      const input = document.createElement('textarea')
      input.value = value
      input.style.position = 'fixed'
      input.style.opacity = '0'
      document.body.append(input)
      input.select()
      success = document.execCommand('copy')
      input.remove()
    }
    setCopied(success ? type : 'failed')
    window.setTimeout(() => setCopied(''), 1800)
  }
  const wechatLabel = copied === 'wechat' ? '已复制微信号' : copied === 'failed' ? '复制失败' : '复制微信号'
  const emailLabel = copied === 'email' ? '已复制邮箱' : copied === 'failed' ? '复制失败' : '复制邮箱'
  return <main className="resume-page">
    <header className={`topbar${navScrolled ? ' is-scrolled' : ''}`}>
      <div className="topbar-inner">
        <a className="wordmark" href="#top" onClick={closeMenu}><span className="brand-mark"><img src={assetPath('/brand-mark.png')} alt="" aria-hidden="true" /></span><span className="brand-name">dongkai.work<span>UI / UX · DESIGN PORTFOLIO</span></span></a>
        <button className="menu-toggle" aria-label={menuOpen ? (english ? 'Close navigation' : '关闭导航') : (english ? 'Open navigation' : '打开导航')} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? 'nav-links is-open' : 'nav-links'} aria-label={english ? 'Main navigation' : '主导航'}>
          <a href="#top" onClick={closeMenu}>{english ? 'Home' : '首页'}</a><a href="#work" onClick={closeMenu}>{english ? 'Selected work' : '作品项目'}</a><a className="is-active" aria-current="page" href="#resume-intro" onClick={event => { closeMenu(); event.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>{english ? 'Profile' : '个人介绍'}</a>
        </nav>
        <div className="nav-actions" ref={navActionsRef}>
          <button className="nav-contact" type="button" aria-haspopup="dialog" aria-expanded={contactOpen && contactSource === 'nav'} aria-controls="contact-popover" onClick={() => { closeMenu(); clearContactCloseTimer(); setContactSource('nav'); setContactOpen(open => contactSource === 'nav' ? !open : true) }}>{english ? 'Let’s talk' : '联系我'} <MoveUpRight className="arrow-icon arrow-up-right" size={14}/></button>
          {contactOpen && contactSource === 'nav' && <div className="contact-popover" id="contact-popover" role="dialog" aria-modal="false" aria-labelledby="contact-popover-title" onPointerEnter={clearContactCloseTimer} onPointerLeave={scheduleContactClose}>
            <div className="contact-popover-heading"><div><p className="work-kicker">CONTACT</p><h2 id="contact-popover-title">{english ? 'Get in touch' : '联系我'}</h2></div><button className="contact-popover-close" type="button" aria-label={english ? 'Close contact card' : '关闭联系方式'} onClick={closeContact}><X size={16}/></button></div>
            <button className="contact-popover-item contact-popover-copy" type="button" aria-label={`${english ? 'Copy WeChat ID' : '复制微信号'} 13121558989`} onClick={copyWechat}><WeChatIcon/><span><small>{english ? 'WeChat · click to copy' : '微信号 · 点击复制'}</small><strong>13121558989</strong></span>{contactCopyStatus && <span className="contact-copy-tooltip" role="status">{contactCopyStatus}</span>}</button>
            <a className="contact-popover-item" href="mailto:1035607423@qq.com"><Mail/><span><small>{english ? 'Email' : '邮箱'}</small><strong>1035607423@qq.com</strong></span><ArrowUpRight className="contact-popover-arrow arrow-icon arrow-up-right"/></a>
          </div>}
        </div>
      </div>
    </header>
    <div className="resume-wrap">
      <aside className="resume-sidebar">
        <section className="resume-profile">
          <img className="resume-portrait" src={assetPath('/portrait.webp')} alt="董凯" loading="eager" fetchPriority="high" decoding="async" />
          <p className="work-kicker">PROFILE / DONG KAI</p>
          <h1>董凯 <span>Dong Kai</span></h1>
          <p className="resume-role">UI/UX 设计师 · 产品体验与设计体系建设</p>
          <p className="resume-summary">拥有 7 年 UI/UX 设计经验，覆盖企业级安全产品、消费产品、旅行服务与设计体系建设。擅长复杂业务梳理、端到端体验设计及组件体系搭建，持续推动设计方案从问题定义走向产品上线。</p>
          <div className="resume-actions">
            <a className="resume-download" href={assetPath('/resume-dong-kai.pdf')} download="董凯-个人简历.pdf"><Download size={17}/>下载 PDF</a>
            <button className="resume-copy-button" type="button" aria-label={wechatLabel} title={wechatLabel} data-tooltip={wechatLabel} onClick={() => copyContact('wechat', '13121558989')}><WeChatIcon/></button>
            <button className="resume-copy-button" type="button" aria-label={emailLabel} title={emailLabel} data-tooltip={emailLabel} onClick={() => copyContact('email', '1035607423@qq.com')}><Mail size={18}/></button>
          </div>
        </section>
        <nav className="resume-nav" aria-label="简历目录">
          <a href="#resume-intro">个人介绍</a><a href="#resume-education">教育背景</a><a href="#resume-work">工作经历</a><a href="#resume-strengths">核心优势</a><a href="#resume-projects">项目经历</a><a href="#resume-skills">专业技能</a><a href="#resume-capabilities">设计能力</a>
        </nav>
      </aside>
      <div className="resume-main">
        <section className="resume-section resume-education-section" id="resume-education">
          <div className="resume-section-title"><h2>教育背景</h2><i>EDUCATION</i></div>
          <div className="resume-education-grid">
            <article className="resume-education"><time>2019.09 — 2023.06</time><div><h3>云南大学</h3><p>视觉传达设计专业 · 本科</p></div></article>
            <article className="resume-education"><time>2016.09 — 2019.06</time><div><h3>北京培黎学院</h3><p>视觉传达设计 / 工程造价 · 双专业</p></div></article>
          </div>
        </section>
        <section className="resume-section" id="resume-work">
          <div className="resume-section-title"><h2>工作经历</h2><i>WORK EXPERIENCE</i></div>
        <div className="resume-entry">
          <div className="resume-entry-top"><div><h3>北京火绒安全科技有限公司</h3><p>UI/UX 设计师 · 企业产品 / 消费产品 / 设计体系</p></div><time>2021.03 — 2026.05</time></div>
          <div className="resume-entry-tags"><span>企业级产品</span><span>Web 设计</span><span>App 与小程序</span><span>交互设计</span><span>设计体系</span></div>
          <ul><li>负责火绒安全多条产品线的 UI/UX 设计，覆盖需求分析、业务梳理、信息架构、交互与视觉设计，并跟进开发协同、验收及上线。</li><li>独立负责火绒安全中心 2.0、销售系统、CRM、分析系统、代理商系统及企业版 2.0 等企业产品；结合业务角色与使用场景，梳理流程、信息架构和关键任务路径。</li><li>从零搭建火绒安全企业产品组件库，沉淀跨系统通用组件与设计规范，提升多产品间的一致性与协作效率。</li><li>负责火绒安全 6.0、火绒口令小程序等消费端产品设计，结合产品定位与用户需求完成交互及视觉方案。</li><li>独立完成火绒安全官网、VI 手册及易拉宝等品牌与宣传物料设计；探索 AIGC 在设计流程中的应用，并借助 Codex 提升组件搭建效率。</li></ul>
        </div>
        <div className="resume-entry">
          <div className="resume-entry-top"><div><h3>北京无二之旅科技有限公司</h3><p>UI 设计师 · 旅行产品 / 官网 / 品牌视觉</p></div><time>2019.03 — 2020.11</time></div>
          <div className="resume-entry-tags"><span>App 产品</span><span>小程序</span><span>官网设计</span><span>交互设计</span><span>品牌视觉</span></div>
          <ul><li>独立完成无二之旅客户系统、无二之旅 2.0 及路书小程序的 UI/UX 设计，覆盖客户管理、旅行服务与小程序等产品形态，并推动相关产品上线。</li><li>负责无二之旅官网的信息架构、交互体验与整体视觉设计。</li><li>设计无二之旅 VI 手册、易拉宝等品牌与线下宣传物料，保持产品、官网与品牌传播的一致性。</li></ul>
        </div>
      </section>

      <section className="resume-section" id="resume-strengths">
        <div className="resume-section-title"><h2>核心优势</h2><i>STRENGTHS</i></div>
        <div className="resume-strength-list">
          <article className="resume-strength"><span>01</span><div><h3>端到端设计与项目交付</h3><p>具备完整的 UI/UX 设计能力及从零搭建设计体系的经验，可独立推进需求梳理、业务分析、交互规划、视觉设计与开发落地。曾独立负责火绒安全及无二之旅的多项产品与官网设计并推动上线。</p></div></article>
          <article className="resume-strength"><span>02</span><div><h3>复杂业务与多端产品经验</h3><p>项目覆盖企业级系统、消费产品、小程序及官网，涉及 CRM、销售、数据分析、代理商管理与企业安全等场景。善于结合业务角色和使用任务梳理流程，将复杂需求转化为清晰、可执行的产品方案。</p></div></article>
          <article className="resume-strength"><span>03</span><div><h3>体验细节与品牌表达</h3><p>重视信息层级、版式结构、交互细节与视觉一致性；具备动效设计及 VI 手册、宣传物料等品牌设计经验，能够依据产品定位建立连贯的体验表达。</p></div></article>
          <article className="resume-strength"><span>04</span><div><h3>工具实践与团队协作</h3><p>熟练使用 Figma、Sketch、Photoshop、Illustrator、Principle 与 After Effects；持续探索 AIGC 与 Codex 在设计探索、原型验证和组件搭建中的应用。注重沟通协作与执行推进，能够跟进方案落地。</p></div></article>
        </div>
      </section>

      <section className="resume-section" id="resume-projects">
        <div className="resume-section-title"><h2>项目经历</h2><i>SELECTED PROJECTS</i></div>
        <a className="resume-project" href="#project/fire6"><div><h3>火绒安全 6.0</h3><p>体验设计 · 独立负责并跟进上线</p></div><time>2024.06 — 2026.05</time><ArrowUpRight className="arrow-icon arrow-up-right" size={16}/><span className="resume-project-note">项目累计用户达千万级；5.0 至 6.0 升级转化率为 80%，上线 10 天新增用户 8.5 万。</span></a>
        <a className="resume-project" href="#project/enterprise"><div><h3>火绒安全企业版中心 2.0</h3><p>体验设计 · 纳入企业产品组件体系</p></div><time>2025.08 — 2026.05</time><ArrowUpRight className="arrow-icon arrow-up-right" size={16}/><span className="resume-project-note">独立负责产品交互与界面设计，协同推进产品上线。</span></a>
      </section>

      <section className="resume-section" id="resume-skills">
        <div className="resume-section-title"><h2>专业技能</h2><i>SKILLS</i></div>
        <div className="resume-skills"><span>UI/UX 全流程设计</span><span>企业级产品与 CRM 系统</span><span>消费产品与小程序</span><span>交互设计与信息架构</span><span>设计体系与组件库</span><span>官网与品牌视觉</span><span>AIGC 设计应用</span><span>Codex 辅助原型与组件搭建</span></div>
      </section>
      </div>
    </div>
    <section className="strengths section-pad resume-capabilities" id="resume-capabilities">
      <div className="wrap">
        <div className="section-heading"><div><p className="overline">THOUGHTFUL BY DESIGN</p><h2>{english ? 'Design that moves products forward.' : '以设计推动产品进步。'}</h2></div><p className="heading-note">{english ? <>I connect business goals and real user needs across strategy, interaction, visual design, and delivery.<br/>The result: clear, validated experiences built to evolve with the product.</> : <>从业务目标与真实场景出发，贯通策略、交互、视觉与交付协同。<br/>将复杂需求转化为清晰、可验证并能持续迭代的产品体验。</>}</p></div>
        <div className="strength-grid">{strengths.map(({ index, title, enTitle, text, enText, tags, enTags }) => <article className="strength-card" key={index}><div className="strength-visual"><span className="strength-art-index">{index}</span><img src={assetPath(`/strengths/${index}.webp`)} alt="" loading="lazy" decoding="async"/></div><div className="strength-copy"><h3>{english ? enTitle : title}</h3><p>{english ? enText : text}</p><div className="strength-tags">{(english ? enTags : tags).map(tag => <span key={tag}>{tag}</span>)}</div></div></article>)}</div>
        <div className="principle-row"><p>{english ? 'Good experiences make complex things clear.' : '好的体验，是复杂问题被理解后的样子。'}</p></div>
      </div>
    </section>
    <ResumeIntro english={english}/>
  </main>
}

function DisplayControls({ english, setEnglish }) {
  return <div className="utility-controls" aria-label={english ? 'Display settings' : '显示设置'}>
    <div className="segmented language-switch" role="group" aria-label={english ? 'Language' : '语言'}>
      <button className={!english ? 'is-active' : ''} aria-pressed={!english} onClick={() => setEnglish(false)}>中</button>
      <button className={english ? 'is-active' : ''} aria-pressed={english} onClick={() => setEnglish(true)}>EN</button>
    </div>
  </div>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [contactOpen, setContactOpen] = useState(false)
  const [contactSource, setContactSource] = useState('nav')
  const [contactCopyStatus, setContactCopyStatus] = useState('')
  const [english, setEnglish] = useState(false)
  const navActionsRef = useRef(null)
  const contactCloseTimerRef = useRef(null)
  const clearContactCloseTimer = () => {
    if (contactCloseTimerRef.current) window.clearTimeout(contactCloseTimerRef.current)
    contactCloseTimerRef.current = null
  }
  const closeContact = () => {
    clearContactCloseTimer()
    setContactOpen(false)
  }
  const scheduleContactClose = () => {
    clearContactCloseTimer()
    contactCloseTimerRef.current = window.setTimeout(closeContact, 2000)
  }
  const [activeSection, setActiveSection] = useState(() => {
    const hash = window.location.hash
    if (hash === '#work' || hash.startsWith('#project/')) return 'work'
    if (hash === '#practice') return 'practice'
    if (hash.startsWith('#resume')) return 'profile'
    return 'top'
  })
  const [navScrolled, setNavScrolled] = useState(false)
  const [showPractice, setShowPractice] = useState(() => window.location.hash === '#practice')
  const [showPortfolio, setShowPortfolio] = useState(() => Boolean(window.location.hash && window.location.hash !== '#top' && window.location.hash !== '#practice'))
  const [projectFilter, setProjectFilter] = useState('all')
  const [projectNotice, setProjectNotice] = useState(false)
  const projectNoticeTimerRef = useRef(null)
  const [selectedProjectId, setSelectedProjectId] = useState(() => window.location.hash.match(/^#project\/([a-z0-9-]+)$/)?.[1] || null)
  const [showResume, setShowResume] = useState(() => window.location.hash.startsWith('#resume'))
  const visibleProjects = projectFilter === 'all' ? projects : projects.filter(project => project.type === projectFilter)
  useEffect(() => {
    document.documentElement.lang = english ? 'en' : 'zh-CN'
  }, [english])
  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion || !('IntersectionObserver' in window)) return

    const selector = [
      '.hero-bottom',
      '#work .work-intro .work-kicker', '#work .work-intro h2', '#work .work-intro-note',
      '#work .project-filter-row', '#work .project-group-head', '#work .project-card',
      '#resume-intro .about-simple-head > *', '#resume-intro .about-simple-copy > *', '#resume-intro .about-scene',
      '#resume-capabilities .section-heading .overline', '#resume-capabilities .section-heading h2', '#resume-capabilities .heading-note',
      '#resume-capabilities .strength-card', '#resume-capabilities .principle-row',
      '#contact .contact-main > *', '#contact .contact-scene', '#contact .contact-details', '#contact .site-footer',
      '.resume-section:not(#resume-education) .resume-section-title > *',
      '.resume-entry', '.resume-strength', '.resume-project', '.resume-skills > *',
      '.project-detail-intro > *', '.project-detail-frame', '.project-detail-footer',
    ].join(',')
    const headingSelector = [
      '#work .work-intro h2', '#resume-intro .about-simple-head h2',
      '#resume-capabilities .section-heading h2', '#contact .contact-main h2', '.resume-profile h1',
      '.resume-section-title h2', '.project-detail-intro h1',
    ].join(',')
    const observed = new Set()
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => entry.target.classList.toggle('is-in-view', entry.isIntersecting))
    }, { threshold: 0.04, rootMargin: '-2% 0px -2% 0px' })
    let mutationFrame = 0
    const watchContent = () => {
      document.querySelectorAll(selector).forEach(element => {
        if (observed.has(element)) return
        observed.add(element)
        const siblingIndex = Array.from(element.parentElement?.children || []).indexOf(element)
        element.style.setProperty('--scroll-reveal-delay', `${Math.min(Math.max(siblingIndex, 0), 7) * 55}ms`)
        element.classList.add('scroll-reveal')
        if (element.matches(headingSelector)) element.classList.add('scroll-reveal-heading')
        observer.observe(element)
      })
    }
    const scheduleWatchContent = () => {
      if (mutationFrame) return
      mutationFrame = window.requestAnimationFrame(() => {
        mutationFrame = 0
        watchContent()
      })
    }

    watchContent()
    document.documentElement.classList.add('motion-ready')
    const mutations = new MutationObserver(scheduleWatchContent)
    const root = document.getElementById('root')
    if (root) mutations.observe(root, { childList: true, subtree: true })
    return () => {
      mutations.disconnect()
      window.cancelAnimationFrame(mutationFrame)
      observer.disconnect()
      observed.forEach(element => {
        element.classList.remove('scroll-reveal', 'scroll-reveal-heading', 'is-in-view')
        element.style.removeProperty('--scroll-reveal-delay')
      })
      document.documentElement.classList.remove('motion-ready')
    }
  }, [])
  useEffect(() => {
    if (!contactOpen) return
    const closeOnOutsideClick = event => {
      if (!navActionsRef.current?.contains(event.target)) closeContact()
    }
    const closeOnEscape = event => {
      if (event.key === 'Escape') closeContact()
    }
    document.addEventListener('pointerdown', closeOnOutsideClick)
    document.addEventListener('keydown', closeOnEscape)
    return () => {
      document.removeEventListener('pointerdown', closeOnOutsideClick)
      document.removeEventListener('keydown', closeOnEscape)
    }
  }, [contactOpen, contactSource])
  useEffect(() => {
    const sectionIds = ['top', 'work', 'contact']
    let scrollFrame = 0
    const updateNavigation = () => {
      setNavScrolled(window.scrollY > 18)
      const marker = window.innerHeight * 0.35
      const current = sectionIds
        .map(id => document.getElementById(id))
        .filter(Boolean)
        .filter(section => section.getBoundingClientRect().top <= marker)
        .at(-1)
      if (current) setActiveSection(current.id)
    }
    const onScroll = () => {
      if (scrollFrame) return
      scrollFrame = window.requestAnimationFrame(() => {
        scrollFrame = 0
        updateNavigation()
      })
    }
    const initialSyncFrame = window.requestAnimationFrame(updateNavigation)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.cancelAnimationFrame(initialSyncFrame)
      window.cancelAnimationFrame(scrollFrame)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])
  useEffect(() => {
    const updateProjectRoute = () => {
      const hash = window.location.hash
      const projectId = window.location.hash.match(/^#project\/([a-z0-9-]+)$/)?.[1] || null
      if (hash === '#work' || projectId) setActiveSection('work')
      else if (hash === '#practice') setActiveSection('practice')
      else if (hash.startsWith('#resume')) setActiveSection('profile')
      else if (!hash || hash === '#top') setActiveSection('top')
      setSelectedProjectId(projectId)
      setShowPractice(hash === '#practice')
      setShowResume(hash.startsWith('#resume'))
      setShowPortfolio(Boolean(hash && hash !== '#top' && hash !== '#practice'))
      if (projectId) {
        closeContact()
        window.scrollTo({ top: 0, behavior: 'instant' })
      }
      if (hash === '#resume' || hash === '#practice') {
        closeContact()
        window.scrollTo({ top: 0, behavior: 'instant' })
      }
    }
    window.addEventListener('hashchange', updateProjectRoute)
    return () => window.removeEventListener('hashchange', updateProjectRoute)
  }, [])
  useEffect(() => {
    if (!showPortfolio || showResume || selectedProjectId) return
    const targetId = window.location.hash.slice(1)
    if (!targetId || targetId === 'top' || targetId.startsWith('project/')) return
    requestAnimationFrame(() => document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth', block: 'start' }))
  }, [showPortfolio, showResume, selectedProjectId])
  useEffect(() => {
    if (!showPortfolio || showResume || selectedProjectId) window.scrollTo({ top: 0, behavior: 'instant' })
  }, [showPortfolio, showResume, selectedProjectId])
  const closeMenu = () => setMenuOpen(false)
  const showProjectInProgressNotice = () => {
    setProjectNotice(true)
    window.clearTimeout(projectNoticeTimerRef.current)
    projectNoticeTimerRef.current = window.setTimeout(() => setProjectNotice(false), 2200)
  }
  const copyWechat = async () => {
    let success = false
    try {
      await navigator.clipboard.writeText('13121558989')
      success = true
    } catch {
      const input = document.createElement('textarea')
      input.value = '13121558989'
      input.style.position = 'fixed'
      input.style.opacity = '0'
      document.body.append(input)
      input.select()
      success = document.execCommand('copy')
      input.remove()
    }
    setContactCopyStatus(success ? (english ? 'Copied' : '已复制') : (english ? 'Copy failed' : '复制失败'))
    window.setTimeout(() => setContactCopyStatus(''), 1800)
  }

  const selectedProject = projects.find(project => project.id === selectedProjectId)
  if (showResume) return <><ResumePage english={english} navScrolled={navScrolled} menuOpen={menuOpen} setMenuOpen={setMenuOpen} contactOpen={contactOpen} contactSource={contactSource} setContactOpen={setContactOpen} setContactSource={setContactSource} navActionsRef={navActionsRef} clearContactCloseTimer={clearContactCloseTimer} closeContact={closeContact} scheduleContactClose={scheduleContactClose} copyWechat={copyWechat} contactCopyStatus={contactCopyStatus} closeMenu={closeMenu}/><DisplayControls english={english} setEnglish={setEnglish}/></>
  if (selectedProject) return <><ProjectDetailPage project={selectedProject} english={english} contactOpen={contactOpen} contactSource={contactSource} setContactOpen={setContactOpen} setContactSource={setContactSource} navActionsRef={navActionsRef} clearContactCloseTimer={clearContactCloseTimer} closeContact={closeContact} scheduleContactClose={scheduleContactClose} copyWechat={copyWechat} contactCopyStatus={contactCopyStatus}/><DisplayControls english={english} setEnglish={setEnglish}/></>

  return <main className={showPractice ? 'practice-open' : showPortfolio ? 'portfolio-open' : 'landing-only'}>
    <div className={`main-topbar-shell${navScrolled ? ' is-scrolled' : ''}`}>
    <header className={`topbar${navScrolled ? ' is-scrolled' : ''}`}>
      <div className="topbar-inner">
        {showPractice
          ? <><div className="wordmark" aria-label="dongkai.work · UI/UX Design Portfolio"><span className="brand-mark"><img src={assetPath('/brand-mark.png')} alt="" aria-hidden="true" /></span><span className="brand-name">dongkai.work<span>UI / UX · DESIGN PORTFOLIO</span></span></div><a className="practice-back-link" href="#work"><ArrowLeft className="arrow-icon arrow-left" size={15}/>{english ? 'Back to projects' : '返回作品集'}</a></>
          : <>
            <a className="wordmark" href="#top" onClick={closeMenu}><span className="brand-mark"><img src={assetPath('/brand-mark.png')} alt="" aria-hidden="true" /></span><span className="brand-name">dongkai.work<span>UI / UX · DESIGN PORTFOLIO</span></span></a>
            <button className="menu-toggle" aria-label={menuOpen ? (english ? 'Close navigation' : '关闭导航') : (english ? 'Open navigation' : '打开导航')} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
            <nav className={menuOpen ? 'nav-links is-open' : 'nav-links'} aria-label={english ? 'Main navigation' : '主导航'}>
              <a className={activeSection === 'top' && !showResume ? 'is-active' : ''} aria-current={activeSection === 'top' && !showResume ? 'page' : undefined} href="#top" onClick={closeMenu}>{english ? 'Home' : '首页'}</a><a className={activeSection === 'work' ? 'is-active' : ''} aria-current={activeSection === 'work' ? 'location' : undefined} href="#work" onClick={closeMenu}>{english ? 'Selected work' : '作品项目'}</a><a className={activeSection === 'profile' ? 'is-active' : ''} aria-current={activeSection === 'profile' ? 'page' : undefined} href="#resume-intro" onClick={closeMenu}>{english ? 'Profile' : '个人介绍'}</a>
            </nav>
            <div className="nav-actions" ref={navActionsRef}>
              <button className="nav-contact" type="button" aria-haspopup="dialog" aria-expanded={contactOpen && contactSource === 'nav'} aria-controls="contact-popover" onClick={() => { closeMenu(); clearContactCloseTimer(); setContactSource('nav'); setContactOpen(open => contactSource === 'nav' ? !open : true) }}>{english ? 'Let’s talk' : '联系我'} <MoveUpRight className="arrow-icon arrow-up-right" size={14}/></button>
              {contactOpen && contactSource === 'nav' && <div className="contact-popover" id="contact-popover" role="dialog" aria-modal="false" aria-labelledby="contact-popover-title" onPointerEnter={clearContactCloseTimer} onPointerLeave={scheduleContactClose}>
                <div className="contact-popover-heading"><div><p className="work-kicker">CONTACT</p><h2 id="contact-popover-title">{english ? 'Get in touch' : '联系我'}</h2></div><button className="contact-popover-close" type="button" aria-label={english ? 'Close contact card' : '关闭联系方式'} onClick={closeContact}><X size={16}/></button></div>
                <button className="contact-popover-item contact-popover-copy" type="button" aria-label={`${english ? 'Copy WeChat ID' : '复制微信号'} 13121558989`} onClick={copyWechat}><WeChatIcon/><span><small>{english ? 'WeChat · click to copy' : '微信号 · 点击复制'}</small><strong>13121558989</strong></span>{contactCopyStatus && <span className="contact-copy-tooltip" role="status">{contactCopyStatus}</span>}</button>
                <a className="contact-popover-item" href="mailto:1035607423@qq.com"><Mail/><span><small>{english ? 'Email' : '邮箱'}</small><strong>1035607423@qq.com</strong></span><ArrowUpRight className="contact-popover-arrow arrow-icon arrow-up-right"/></a>
              </div>}
            </div>
          </>}
      </div>
    </header>
    {showPortfolio && activeSection === 'work' && <a className="nav-practice" href="#practice" aria-label={english ? 'Daily practice' : '日常练习'} title={english ? 'Daily practice' : '日常练习'} onClick={closeMenu}><Sparkles size={20} aria-hidden="true"/></a>}
    </div>
    {showPractice ? <PracticeGalleryPage english={english}/> : <>
    <section className="hero" id="top">
      <div className="hero-grain" aria-hidden="true" />
      <div className="hero-light-flow" aria-hidden="true" />
      <div className="hero-content wrap">
        <div className="hero-copy-column">
          <h1 className="hero-name">DONG <span className="name-accent">KAI</span><span className="name-period">.</span></h1>
          <div className="hero-copy">
            <p className="hero-claim">{english ? <>Clarity for<br/><span>complex products.</span></> : <>为复杂产品，<br/><span>设计清晰体验。</span></>}</p>
            <p className="hero-desc">{english ? <>I’m Dong Kai, a UI/UX designer.<br/>I focus on product experience, enterprise platforms, and design systems.</> : <>你好，我是董凯，一名 UI/UX 设计师。<br/>专注企业级产品体验与设计体系建设。</>}</p>
            <div className="hero-actions"><a href="#work" className="button button-primary">{english ? 'View selected work' : '查看项目案例'} <ArrowDownRight className="arrow-icon arrow-down-right" size={17}/></a><a href="#resume" className="button button-secondary">{english ? 'View my resume' : '个人简历'} <ArrowUpRight className="arrow-icon arrow-up-right" size={16}/></a></div>
          </div>
        </div>
        <div className="hero-scene">
          <svg className="hero-visual" viewBox="0 0 800 560" role="img" aria-label={english ? 'A luminous amber and cyan orbital interface sculpture' : '红橙色光环环绕的 UI/UX 设计科技主视觉'}>
            <defs>
              <radialGradient id="visual-core" cx="38%" cy="32%" r="72%"><stop stopColor="#263945"/><stop offset=".48" stopColor="#111a21"/><stop offset="1" stopColor="#080b0f"/></radialGradient>
              <radialGradient id="visual-glow"><stop stopColor="#f04a35" stopOpacity=".24"/><stop offset=".58" stopColor="#ef5140" stopOpacity=".08"/><stop offset="1" stopColor="#ef5140" stopOpacity="0"/></radialGradient>
              <linearGradient id="orbit-warm" x1=".1" y1=".15" x2=".9" y2=".8"><stop stopColor="#ef5140" stopOpacity="0"/><stop offset=".25" stopColor="#f04a35"/><stop offset=".57" stopColor="#ffb3a5"/><stop offset=".78" stopColor="#ef5140"/><stop offset="1" stopColor="#ef5140" stopOpacity="0"/></linearGradient>
              <linearGradient id="orbit-cool" x1="0" y1="1" x2="1" y2="0"><stop stopColor="#6bc6c4" stopOpacity="0"/><stop offset=".32" stopColor="#7bd9d4"/><stop offset=".62" stopColor="#c4f2e8"/><stop offset=".83" stopColor="#f04a35"/><stop offset="1" stopColor="#f04a35" stopOpacity="0"/></linearGradient>
              <filter id="visual-blur" x="-80%" y="-80%" width="260%" height="260%"><feGaussianBlur stdDeviation="18"/></filter>
              <filter id="visual-glow" x="-60%" y="-60%" width="220%" height="220%"><feGaussianBlur stdDeviation="4" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
            </defs>
            <ellipse cx="408" cy="300" rx="290" ry="190" fill="url(#visual-glow)" filter="url(#visual-blur)"/>
            <g className="visual-guides" fill="none" stroke="#91a4aa" strokeOpacity=".18"><circle cx="405" cy="278" r="206" strokeDasharray="2 10"/><circle cx="405" cy="278" r="178" strokeDasharray="1 8"/><path d="M75 278h160M575 278h150M405 36v105M405 416v108"/><path d="M118 115l74 74m426 178 74 74M692 115l-74 74M192 367l-74 74"/></g>
            <g fill="none" stroke="#dce6e4" strokeOpacity=".13"><ellipse cx="405" cy="278" rx="285" ry="74"/><ellipse cx="405" cy="278" rx="255" ry="55" transform="rotate(-28 405 278)"/><ellipse cx="405" cy="278" rx="226" ry="44" transform="rotate(34 405 278)"/></g>
            <circle cx="405" cy="278" r="145" fill="url(#visual-glow)"/><circle cx="405" cy="278" r="112" fill="url(#visual-core)" stroke="#9fb8bb" strokeOpacity=".3"/>
            <g className="visual-sphere-mesh" fill="none" stroke="#8dc5c4" strokeOpacity=".25"><ellipse cx="405" cy="278" rx="106" ry="35"/><ellipse cx="405" cy="278" rx="106" ry="68"/><ellipse cx="405" cy="278" rx="37" ry="108"/><ellipse cx="405" cy="278" rx="74" ry="108"/><path d="M302 250c57 24 149 24 206 0M302 306c57-24 149-24 206 0M331 204c32 47 32 102 0 148m148-148c-32 47-32 102 0 148"/></g>
            <g className="visual-orbit visual-orbit-warm" fill="none" stroke="url(#orbit-warm)" strokeWidth="12" filter="url(#visual-glow)"><ellipse cx="405" cy="278" rx="286" ry="74" transform="rotate(-18 405 278)"/></g>
            <g className="visual-orbit visual-orbit-cool" fill="none" stroke="url(#orbit-cool)" strokeWidth="5" filter="url(#visual-glow)"><ellipse cx="405" cy="278" rx="258" ry="58" transform="rotate(27 405 278)"/></g>
            <g className="visual-orbit-detail" fill="none" stroke="#f04a35" strokeOpacity=".62" strokeWidth="1"><ellipse cx="405" cy="278" rx="286" ry="74" transform="rotate(-18 405 278)" strokeDasharray="1 8"/><path d="M158 358l-27 17m514-193 27-17M307 81h38m120 394h38"/></g>
            <g filter="url(#visual-glow)"><circle cx="162" cy="361" r="8" fill="#9de9dc"/><circle cx="651" cy="199" r="6" fill="#f04a35"/><circle cx="552" cy="379" r="5" fill="#eaf9ef"/><circle cx="279" cy="166" r="4" fill="#f04a35"/></g>
            <g fill="#d9e1de" fillOpacity=".62" fontFamily="monospace" fontSize="9" letterSpacing="2"><text x="601" y="451">PRODUCT SYSTEMS</text><text x="102" y="465">39°54' N · 116°24' E</text></g><g fill="#f04a35"><circle cx="586" cy="447" r="2"/></g>
            <g className="visual-scan" fill="none" stroke="#d8eee7" strokeOpacity=".38"><path d="M405 72v412"/><path d="M198 278h414"/></g>
          </svg>
        </div>
      </div>
      <div className="hero-coordinate" aria-hidden="true">39°54' N<br/>116°24' E</div>
    </section>

    <div className="portfolio-pages">
    <section className="work section-pad" id="work">
      <div className="wrap">
        <div className="work-intro">
          <div><p className="work-kicker">{english ? 'SELECTED WORK · 2019 — 2026' : '项目实践 · 2019 — 2026'}</p><h2>{english ? 'Designing for real needs.' : '以设计，回应真实需求'}</h2><p className="work-intro-note">{english ? 'Selected work across enterprise products, consumer experiences, and brand design—from problem framing and validation through delivery.' : '展示我在企业产品、消费体验与品牌视觉上的设计实践，覆盖问题定义、方案验证与交付落地。'}</p></div>
        </div>
        <div className="project-filter-row">
          <div className="project-filters" role="group" aria-label={english ? 'Filter projects by category' : '按项目类别筛选'}>
            {[{ id: 'all', title: '全部', enTitle: 'All' }, ...projectGroups].map(filter => <button
              className={`project-filter${projectFilter === filter.id ? ' is-active' : ''}`}
              type="button"
              key={filter.id}
              aria-pressed={projectFilter === filter.id}
              onClick={() => setProjectFilter(filter.id)}
            >{english ? filter.enTitle : filter.title}</button>)}
          </div>
        </div>
        <div className="project-groups">
          {projectGroups.filter(group => projectFilter === 'all' || group.id === projectFilter).map(group => <section className="project-group" key={group.id} aria-labelledby={`project-group-${group.id}`}>
            <div className="project-group-head"><h3 id={`project-group-${group.id}`}>{english ? group.enTitle : group.title}</h3></div>
            <div className="project-grid">
              {visibleProjects.filter(project => project.type === group.id).map(project => {
                const Card = project.inProgress ? 'div' : 'a'
                const cardProps = project.inProgress ? {
                  role: 'button', tabIndex: 0,
                  'aria-label': `${english ? project.enTitle : project.title} — ${english ? 'project in progress' : '制作中'}`,
                  onClick: showProjectInProgressNotice,
                  onKeyDown: event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); showProjectInProgressNotice() } },
                } : { href: `#project/${project.id}`, 'aria-label': `${english ? project.enTitle : project.title} — ${english ? 'view project details' : '查看项目详情'}` }
                return <Card className={`project-card ${project.className || ''}${project.inProgress ? ' is-in-progress' : ''}`} {...cardProps} key={project.id}>
                <div className="project-image"><img src={project.image} alt={`${english ? project.enTitle : project.title} ${english ? 'project preview' : '项目预览'}`} loading="lazy" decoding="async"/><span className="project-card-label">{english ? project.enCategory : project.category}</span></div>
                <div className="project-info"><div className="project-info-main"><div className="project-title-row"><h3>{english ? project.enTitle : project.title}</h3>{project.tag && <span className={`project-era-tag${project.tagTone ? ` project-era-tag-${project.tagTone}` : ''}`}>{english ? project.enTag : project.tag}</span>}</div><div className="project-meta"><span>{english ? project.enSubtitle : project.subtitle}</span>{project.period && <span>{project.period}</span>}</div></div>{!project.inProgress && <span className="project-visit">{english ? 'View case study' : '查看项目'} <ArrowUpRight className="arrow-icon arrow-up-right" size={14}/></span>}</div>
                </Card>
              })}
            </div>
          </section>)}
        </div>
        <p className="project-archive-note">{english ? 'This is a selection of my work, not the complete archive. More projects and process notes will be added over time.' : '以上仅为部分作品，更多项目与设计过程将持续整理更新。'}</p>
        {projectNotice && <div className="project-progress-notice" role="status" aria-live="polite">{english ? 'Project in progress' : '项目制作中，敬请期待'}</div>}
      </div>
    </section>

    <section className="contact" id="contact">
      <div className="wrap contact-inner">
        <div className="contact-hero">
          <div className="contact-main"><p className="overline">{english ? 'UI/UX DESIGN · PRODUCT EXPERIENCE' : '用户体验 · 交互设计 · 设计体系'}</p><h2>{english ? <>Clearer products,<br/><span>better experiences.</span></> : <>以清晰设计，<br/><span>让复杂产品更易用。</span></>}</h2><p className="contact-description">{english ? 'I translate user needs and business goals into clear information architecture, intuitive interactions, and cohesive visual systems—shaping digital products that are easier to use and built to evolve.' : '从用户需求与业务目标出发，梳理信息架构、交互流程与视觉语言，打造清晰、一致且可持续演进的数字产品体验。'}</p></div>
          <div className="contact-scene" aria-hidden="true"><img className="contact-visual" src={assetPath('/contact-door.webp')} alt="" loading="lazy" decoding="async" /></div>
        </div>
      </div>
    </section>
    </div>
    </>}

    <DisplayControls english={english} setEnglish={setEnglish}/>
  </main>
}

export default App
