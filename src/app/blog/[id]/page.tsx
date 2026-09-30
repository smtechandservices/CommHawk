"use client";

import React from 'react';
import { useParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import ScrollToTop from '@/components/ScrollToTop';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Section } from '@/components/ui/Frame';
import { BlogPost } from '@/lib/blogs';
import blogsData from '@/data/blogs.json';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800';

export default function SingleBlogPage() {
  const { id } = useParams();

  const blog = (blogsData as BlogPost[]).find((b) => b.id === id) ?? null;

  return (
    <main className="min-h-screen">
      <Navbar />

      <Section innerClassName="px-5 pb-16 pt-12 md:px-8 md:pb-24 md:pt-16">
        <div className="mx-auto max-w-[760px]">
          <Link
            href="/blog"
            className="group mb-10 inline-flex items-center gap-2 text-sm text-body transition-colors hover:text-ink"
          >
            <ArrowLeft size={15} className="transition-transform group-hover:-translate-x-1" />
            Back to blog
          </Link>

          {!blog ? (
            <div className="border border-line bg-surface px-6 py-20 text-center">
              <p className="mb-6 text-body">Blog post not found.</p>
              <Link href="/blog" className="btn-secondary">
                Browse all articles
              </Link>
            </div>
          ) : (
            <article>
              <p className="mb-5 text-sm text-subtle">{blog.date}</p>
              <h1 className="mb-10 font-display text-[2.2rem] font-medium capitalize leading-[1.1] tracking-[-0.03em] text-ink md:text-[3.2rem]">
                {blog.title.toLowerCase()}
              </h1>

              <div className="mb-12 border border-line bg-surface p-2">
                <div className="relative h-64 w-full overflow-hidden md:h-[420px]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={blog.imageLink}
                    alt={blog.title}
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = FALLBACK_IMAGE;
                    }}
                  />
                </div>
              </div>

              <div className="max-w-none">
                {/* Splitting content by newlines to render paragraphs properly */}
                {blog.content.split('\n').map((paragraph, index) => (
                  <p key={index} className="mb-6 text-[1.075rem] leading-[1.8] text-body">
                    {paragraph}
                  </p>
                ))}
              </div>
            </article>
          )}
        </div>
      </Section>

      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
