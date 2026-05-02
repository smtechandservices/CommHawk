'use client';
import { motion, useMotionValue, useSpring, useTransform, useAnimationFrame } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const serviceCategories = [
    {
        title: 'Design Services',
        items: [
            'UI/UX Design – User interface & experience design for apps and websites',
            'Web Design – Visual design, layouts, and branding for websites',
            'Graphic Design – Logos, banners, marketing materials',
            'Motion Design – Animations, explainer videos, micro-interactions',
            'Prototyping & Wireframing – Clickable mockups before development'
        ]
    },
    {
        title: 'Web Development',
        items: [
            'CMS Development – WordPress, Webflow, Contentful, Strapi',
            'E-Commerce Development – Shopify, WooCommerce, Magento',
            'Web Portals – Customer/vendor/employee portals',
            'ERP Systems – Enterprise Resource Planning solutions',
            'CRM Systems – Customer Relationship Management platforms',
            'SaaS Product Development – Cloud-based software products',
            'API Development & Integration – REST, GraphQL, SOAP APIs',
            'Legacy System Modernization – Upgrading outdated systems'
        ]
    },
    {
        title: 'Mobile App Development',
        items: [
            'iOS Development – Native Swift/Objective-C apps',
            'Android Development – Native Kotlin/Java apps',
            'Cross-Platform Apps – Flutter, React Native, Xamarin',
            'Wearable & IoT Apps – Apple Watch, Android Wear',
            'Progressive Web Apps (PWA) – App-like web experiences'
        ]
    },
    {
        title: 'Data & Analytics',
        items: [
            'Web Scraping – Automated data extraction from websites',
            'Data Engineering – Pipelines, ETL, data warehousing',
            'Business Intelligence (BI) – Dashboards, Power BI, Tableau',
            'Big Data Solutions – Hadoop, Spark, data lakes',
            'Data Visualization – Interactive charts and reporting tools',
            'Predictive Analytics – Forecasting using historical data'
        ]
    },
    {
        title: 'AI & Machine Learning',
        items: [
            'AI Consulting & Strategy',
            'Machine Learning Model Development',
            'Natural Language Processing (NLP) – Chatbots, sentiment analysis',
            'Computer Vision – Image recognition, OCR',
            'Recommendation Engines',
            'AI-Powered Automation',
            'Generative AI Integration – GPT, Stable Diffusion, etc.'
        ]
    },
    {
        title: 'Cloud & Hosting Services',
        items: [
            'Cloud Consulting – AWS, Azure, Google Cloud strategy',
            'Cloud Migration – Moving on-prem systems to the cloud',
            'Web Hosting & Management – Shared, VPS, dedicated servers',
            'Managed Cloud Services – Monitoring, scaling, maintenance',
            'CDN Setup – Content Delivery Network configuration',
            'Serverless Architecture – Lambda, Cloud Functions',
            'Database Hosting – MySQL, PostgreSQL, MongoDB, Firebase'
        ]
    },
    {
        title: 'Cybersecurity Services',
        items: [
            'Penetration Testing – Ethical hacking to find vulnerabilities',
            'Security Audits & Compliance – GDPR, ISO 27001, SOC 2',
            'Firewall & Network Security Setup',
            'Endpoint Security Solutions',
            'Identity & Access Management (IAM)',
            'Incident Response & Recovery',
            'SSL/TLS Certificate Management'
        ]
    },
    {
        title: 'DevOps & Infrastructure',
        items: [
            'CI/CD Pipeline Setup – Automated build & deployment',
            'Containerization – Docker, Kubernetes',
            'System Monitoring & Alerting – Grafana, Datadog, New Relic',
            'Site Reliability Engineering (SRE)',
            'Load Balancing & Auto-scaling'
        ]
    },
    {
        title: 'Digital Marketing & SEO',
        items: [
            'Search Engine Optimization (SEO)',
            'Pay-PPC Advertising – Google Ads, Meta Ads',
            'Social Media Marketing',
            'Email Marketing Automation',
            'Content Marketing Strategy',
            'Conversion Rate Optimization (CRO)',
            'Analytics Setup – Google Analytics, Hotjar'
        ]
    },
    {
        title: 'IT Support & Managed Services',
        items: [
            'IT Help Desk Support – L1, L2, L3 support tiers',
            'Network Setup & Management',
            'Remote IT Support',
            'Backup & Disaster Recovery',
            'IT Asset Management'
        ]
    },
    {
        title: 'Integration & Automation',
        items: [
            'Third-Party API Integrations – Payment gateways, CRMs, ERPs',
            'Robotic Process Automation (RPA) – UiPath, Automation Anywhere',
            'Workflow Automation – Zapier, Make (Integromat), n8n',
            'IoT Integration – Connecting smart devices to systems'
        ]
    },
    {
        title: 'Quality Assurance & Testing',
        items: [
            'Manual Testing',
            'Automated Testing – Selenium, Cypress, Playwright',
            'Performance Testing – Load, stress, scalability testing',
            'Mobile App Testing',
            'Security Testing',
            'UAT (User Acceptance Testing)'
        ]
    },
    {
        title: 'IT Consulting',
        items: [
            'Technology Roadmap Planning',
            'Digital Transformation Strategy',
            'IT Architecture Design',
            'Vendor Selection & Management',
            'Startup Tech Advisory'
        ]
    }
];

const Services = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const [itemWidth, setItemWidth] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [isDragging, setIsDragging] = useState(false);

    // Duplicate items for the infinite feel
    const extendedCategories = [...serviceCategories, ...serviceCategories, ...serviceCategories];

    useEffect(() => {
        if (containerRef.current) {
            // Width of one full set of items (including gaps)
            const gap = window.innerWidth < 768 ? 24 : 32;
            const cardWidth = window.innerWidth < 768 ? 280 : 350;
            const fullSetWidth = (cardWidth + gap) * serviceCategories.length;
            setItemWidth(fullSetWidth);

            // Start in the middle set
            x.set(-fullSetWidth);
        }
    }, [x]);

    const handleDrag = () => {
        const currentX = x.get();
        if (currentX <= -itemWidth * 2) {
            x.set(currentX + itemWidth);
        } else if (currentX >= 0) {
            x.set(currentX - itemWidth);
        }
    };

    // Auto-scroll logic
    useAnimationFrame((time, delta) => {
        if (!isHovered && !isDragging && itemWidth > 0) {
            // Move slowly (e.g., 0.5px per frame)
            const slowSpeed = 0.5; // (0.5 * 60 = 30px per second)
            const currentX = x.get();
            const nextX = currentX - slowSpeed;

            // Handle wrap-around
            if (nextX <= -itemWidth * 2) {
                x.set(nextX + itemWidth);
            } else {
                x.set(nextX);
            }
        }
    });

    return (
        <section className="pt-[10px] bg-black overflow-hidden" id="services">
            <div className="px-6 md:px-[60px]">
                <motion.div
                    className="mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-neon text-[0.6rem] md:text-[0.7rem] uppercase tracking-[0.3em] block mb-4">Capabilities</span>
                    <h2 className="text-3xl md:text-[3.5rem] font-bold leading-tight uppercase text-white">
                        Full-Stack <span className="text-neon">Solutions</span> <br className="hidden md:block" /> for Modern Enterprise
                    </h2>
                </motion.div>
            </div>

            <div
                className="relative group"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Visual context for dragging */}
                <div className="absolute top-[-30px] md:top-[-40px] right-6 md:right-[60px] flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="text-[0.5rem] md:text-[0.6rem] text-white/70 uppercase tracking-widest">[ DRAG TO EXPLORE ]</span>
                </div>

                <motion.div
                    ref={containerRef}
                    drag="x"
                    style={{ x, width: 'max-content' }}
                    onDragStart={() => setIsDragging(true)}
                    onDragEnd={() => setIsDragging(false)}
                    onDrag={handleDrag}
                    dragElastic={0.1}
                    className="flex gap-6 md:gap-12 px-6 md:px-[60px] cursor-grab active:cursor-grabbing select-none"
                >
                    {extendedCategories.map((category, index) => (
                        <motion.div
                            key={`${category.title}-${index}`}
                            className="flex flex-col shrink-0 w-[280px] md:w-[350px] p-6 md:p-8 rounded-2xl md:rounded-3xl border border-white/5 bg-[#080808] hover:border-neon/30 transition-all duration-500 group/card"
                            whileHover={{ y: -5 }}
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <span className="text-[0.6rem] font-mono text-neon border border-neon/30 px-2 py-1 rounded">
                                    {((index % serviceCategories.length) + 1).toString().padStart(2, '0')}
                                </span>
                                <h3 className="text-lg font-bold uppercase tracking-widest text-white group-hover/card:text-neon transition-colors">
                                    {category.title}
                                </h3>
                            </div>
                            <ul className="space-y-4">
                                {category.items.map((item, itemIndex) => (
                                    <li
                                        key={itemIndex}
                                        className="text-sm text-white/60 border-l border-white/10 pl-4 hover:border-neon hover:text-white transition-all cursor-default leading-relaxed"
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            {/* Decorative bottom element */}
                            <div className="mt-auto pt-8 flex justify-end opacity-0 group-hover/card:opacity-100 transition-opacity">
                                <div className="w-12 h-px bg-gradient-to-r from-transparent to-neon" />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Horizontal Fade Overlays */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-[120px] bg-gradient-to-r from-black to-transparent z-10" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-[120px] bg-gradient-to-l from-black to-transparent z-10" />
            </div>
        </section>
    );
};

export default Services;
