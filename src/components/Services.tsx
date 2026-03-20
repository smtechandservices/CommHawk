'use client';
import { motion } from 'framer-motion';

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
            'Frontend Development – HTML, CSS, JavaScript, React, Vue, Angular',
            'Backend Development – Node.js, Python, PHP, Java, .NET',
            'Full-Stack Development – End-to-end web application development',
            'CMS Development – WordPress, Webflow, Contentful, Strapi',
            'E-Commerce Development – Shopify, WooCommerce, Magento',
            'Web Portals – Customer/vendor/employee portals',
            'Progressive Web Apps (PWA) – App-like web experiences'
        ]
    },
    {
        title: 'Mobile App Development',
        items: [
            'iOS Development – Native Swift/Objective-C apps',
            'Android Development – Native Kotlin/Java apps',
            'Cross-Platform Apps – Flutter, React Native, Xamarin',
            'Wearable & IoT Apps – Apple Watch, Android Wear'
        ]
    },
    {
        title: 'Software Development',
        items: [
            'Custom Software Development – Tailor-made business applications',
            'ERP Systems – Enterprise Resource Planning solutions',
            'CRM Systems – Customer Relationship Management platforms',
            'SaaS Product Development – Cloud-based software products',
            'API Development & Integration – REST, GraphQL, SOAP APIs',
            'Legacy System Modernization – Upgrading outdated systems'
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
    return (
        <section className="py-[120px] px-[60px] bg-black" id="services">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    className="mb-[100px]"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-neon text-[0.7rem] uppercase tracking-[0.3em] block mb-4">Capabilities</span>
                    <h2 className="text-[3.5rem] font-bold leading-tight max-w-[600px] uppercase text-white">
                        Full-Stack <span className="text-neon">Solutions</span> for Modern Enterprise
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
                    {serviceCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            className="flex flex-col"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05, duration: 0.6 }}
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <span className="text-[0.6rem] font-mono text-neon border border-neon/30 px-2 py-1 rounded">
                                    {(index + 1).toString().padStart(2, '0')}
                                </span>
                                <h3 className="text-lg font-bold uppercase tracking-widest text-white">{category.title}</h3>
                            </div>
                            <ul className="space-y-3">
                                {category.items.map((item, itemIndex) => (
                                    <li
                                        key={itemIndex}
                                        className="text-sm text-white/40 border-l border-white/10 pl-4 hover:border-neon hover:text-white transition-all cursor-default"
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
