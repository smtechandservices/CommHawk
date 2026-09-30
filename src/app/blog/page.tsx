"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import ScrollToTop from '@/components/ScrollToTop';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Section, Eyebrow, Heading, FadeIn } from '@/components/ui/Frame';
import { BlogPost } from '@/lib/blogs';
import blogsData from '@/data/blogs.json';

const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800';

export default function BlogPage() {
  const blogs = blogsData as BlogPost[];

  return (
    <main className="min-h-screen">
      <Navbar />

      <Section innerClassName="px-5 pb-14 pt-20 md:px-8 md:pb-16 md:pt-28">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:items-end">
          <div>
            <Eyebrow className="mb-4">Insights</Eyebrow>
            <Heading as="h1" title="Our blog" muted="& latest articles" />
          </div>
          <p className="max-w-[420px] text-[1.05rem] leading-relaxed text-body md:justify-self-end">
            Guides and perspectives on building websites, apps, and digital products for growing businesses.
          </p>
        </div>
      </Section>

      <Section innerClassName="px-5 py-12 md:px-8 md:py-16">
        {blogs.length === 0 ? (
          <div className="border border-line bg-surface py-20 text-center text-body">
            <p>No blog posts available yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog, i) => (
              <FadeIn key={blog.id} delay={(i % 3) * 0.08}>
                <Link
                  href={`/blog/${blog.id}`}
                  className="group flex h-full flex-col border border-line bg-surface transition-colors duration-300 hover:border-[#CCCCCC]"
                >
                  <div className="relative m-2 h-52 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={blog.imageLink}
                      alt={blog.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = FALLBACK_IMAGE;
                      }}
                    />
                  </div>
                  <div className="flex flex-grow flex-col p-6">
                    <div className="mb-3 flex items-center justify-between text-sm text-subtle">
                      <span>{blog.date}</span>
                      <ArrowUpRight size={16} className="text-ink transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </div>
                    <h3 className="mb-3 line-clamp-2 font-display text-[1.25rem] font-medium capitalize leading-snug tracking-[-0.02em] text-ink">
                      {blog.title.toLowerCase()}
                    </h3>
                    <p className="line-clamp-3 flex-grow text-[0.95rem] leading-relaxed text-body">
                      {blog.content}
                    </p>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        )}
      </Section>

      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
