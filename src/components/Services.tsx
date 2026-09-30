'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
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

const CYCLE_MS = 6000;

const splitItem = (item: string) => {
    const [title, ...rest] = item.split(' – ');
    return { title, detail: rest.join(' – ') };
};

const ItemList = ({ items }: { items: string[] }) => (
    <ul className="divide-y divide-line-soft">
        {items.map((item, i) => {
            const { title, detail } = splitItem(item);
            return (
                <motion.li
                    key={item}
                    className="flex gap-4 py-3.5"
                    initial={{ opacity: 0, x: 8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.35 }}
                >
                    <span className="mt-[3px] font-mono text-[0.7rem] text-subtle">{String(i + 1).padStart(2, '0')}</span>
                    <span>
                        <span className="block text-[0.95rem] text-ink">{title}</span>
                        {detail && <span className="mt-0.5 block text-sm text-body">{detail}</span>}
                    </span>
                </motion.li>
            );
        })}
    </ul>
);

const Services = () => {
    const [active, setActive] = useState(0);
    const [paused, setPaused] = useState(false);

    useEffect(() => {
        // Auto-advance only on desktop; on mobile the list is an accordion and cycling would shift the page.
        if (paused || !window.matchMedia('(min-width: 768px)').matches) return;
        const t = setTimeout(() => setActive((a) => (a + 1) % serviceCategories.length), CYCLE_MS);
        return () => clearTimeout(t);
    }, [active, paused]);

    const current = serviceCategories[active];

    return (
        <Section id="services">
            <div className="px-5 pb-12 pt-20 md:px-8 md:pb-16 md:pt-28">
                <Eyebrow className="mb-4">Capabilities</Eyebrow>
                <Heading title="Full-stack solutions" muted="for modern enterprise" />
                <p className="mt-6 max-w-[620px] text-[1.05rem] leading-relaxed text-body">
                    From design and development to data, AI, cloud, and security, one team covering
                    every layer your product needs to launch and scale.
                </p>
            </div>

            <div
                className="grid grid-cols-1 border-t border-line md:grid-cols-[380px_1fr]"
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
            >
                {/* Category list */}
                <div className="md:border-r md:border-line">
                    {serviceCategories.map((category, index) => {
                        const isActive = index === active;
                        return (
                            <div key={category.title} className="relative border-b border-line last:border-b-0 md:last:border-b">
                                <button
                                    onClick={() => { setActive(index); setPaused(true); }}
                                    aria-expanded={isActive}
                                    className={`flex w-full items-center gap-4 px-5 py-5 text-left transition-colors md:px-8 ${isActive ? 'bg-surface' : 'hover:bg-surface/60'}`}
                                >
                                    <span className="font-mono text-[0.7rem] text-subtle">{String(index + 1).padStart(2, '0')}</span>
                                    <span className={`font-display text-[1.15rem] font-medium tracking-[-0.02em] transition-colors ${isActive ? 'text-ink' : 'text-subtle'}`}>
                                        {category.title}
                                    </span>
                                </button>

                                {isActive && (
                                    <span className="absolute bottom-[-1px] left-0 h-px w-full bg-line">
                                        <motion.span
                                            key={`${index}-${paused}`}
                                            className="block h-full bg-ink"
                                            initial={{ width: paused ? '100%' : '0%' }}
                                            animate={{ width: '100%' }}
                                            transition={{ duration: paused ? 0 : CYCLE_MS / 1000, ease: 'linear' }}
                                        />
                                    </span>
                                )}

                                {/* Mobile: inline panel */}
                                <AnimatePresence initial={false}>
                                    {isActive && (
                                        <motion.div
                                            className="overflow-hidden bg-surface px-5 md:hidden"
                                            initial={{ height: 0 }}
                                            animate={{ height: 'auto' }}
                                            exit={{ height: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="pb-4">
                                                <ItemList items={category.items} />
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>

                {/* Desktop detail panel */}
                <div className="relative hidden p-10 md:block lg:p-14">
                    <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_70%)]" />
                    <div className="sticky top-28 border border-line bg-surface p-8 lg:p-10">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={current.title}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="mb-6 flex items-baseline justify-between gap-4 border-b border-line pb-6">
                                    <h3 className="font-display text-[1.9rem] font-medium tracking-[-0.03em] text-ink">{current.title}</h3>
                                    <span className="font-mono text-xs text-subtle">
                                        {String(active + 1).padStart(2, '0')} / {String(serviceCategories.length).padStart(2, '0')}
                                    </span>
                                </div>
                                <ItemList items={current.items} />
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Services;
