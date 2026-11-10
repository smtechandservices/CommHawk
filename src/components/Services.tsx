'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Plus } from 'lucide-react';
import { Section, Eyebrow, Heading } from '@/components/ui/Frame';

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

const splitItem = (item: string) => {
    const [title, ...rest] = item.split(' – ');
    return { title, detail: rest.join(' – ') };
};

const Services = () => {
    const [open, setOpen] = useState(0);

    return (
        <Section id="services" innerClassName="px-5 py-16 md:px-8 md:py-24">
            <div className="mb-10 grid grid-cols-1 items-end gap-5 md:mb-12 md:grid-cols-12">
                <div className="md:col-span-8">
                    <Eyebrow className="mb-4">Capabilities</Eyebrow>
                    <Heading title="Full-stack solutions" muted="for modern enterprise" size="xl" />
                </div>
                <p className="text-[1.05rem] leading-relaxed text-body md:col-span-4">
                    From design and development to data, AI, cloud, and security, one team covering
                    every layer your product needs to launch and scale.
                </p>
            </div>

            <div className="border-t-2 border-navy">
                {serviceCategories.map((category, index) => {
                    const isOpen = index === open;
                    return (
                        <div key={category.title} className="border-b border-line">
                            <button
                                onClick={() => setOpen(isOpen ? -1 : index)}
                                aria-expanded={isOpen}
                                className="group flex w-full items-center gap-4 py-5 text-left md:gap-8 md:py-6"
                            >
                                <span className={`w-8 font-mono text-sm font-semibold transition-colors md:w-12 ${isOpen ? 'text-accent' : 'text-subtle'}`}>
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                                <span className={`flex-1 font-display text-[1.3rem] font-medium tracking-[-0.03em] transition-colors md:text-[1.9rem] ${isOpen ? 'text-accent' : 'text-ink group-hover:text-accent'}`}>
                                    {category.title}
                                </span>
                                <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${isOpen ? 'rotate-45 border-accent bg-accent text-white' : 'border-line text-ink group-hover:border-accent group-hover:text-accent'}`}>
                                    <Plus size={20} />
                                </span>
                            </button>

                            <AnimatePresence initial={false}>
                                {isOpen && (
                                    <motion.div
                                        className="overflow-hidden"
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                                    >
                                        <ul className="grid grid-cols-1 gap-x-12 gap-y-6 pb-8 md:grid-cols-2 md:pl-20">
                                            {category.items.map((item) => {
                                                const { title, detail } = splitItem(item);
                                                return (
                                                    <li key={item} className="flex gap-3">
                                                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                                                        <span>
                                                            <span className="block text-[1rem] font-medium text-ink">{title}</span>
                                                            {detail && <span className="mt-1 block text-sm leading-relaxed text-body">{detail}</span>}
                                                        </span>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    );
                })}
            </div>
        </Section>
    );
};

export default Services;
