"use client";

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import BackgroundEffects from '@/components/BackgroundEffects';
import ScrollToTop from '@/components/ScrollToTop';
import Contact from '@/components/Contact';
import Link from 'next/link';

export interface BlogPost {
  id: string;
  title: string;
  imageLink: string;
  content: string;
  date: string;
}

export default function BlogPage() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    fetch('/api/blogs')
      .then((res) => res.json())
      .then((data) => setBlogs(Array.isArray(data) ? data : []))
      .catch(() => setBlogs([]));
  }, []);

  if (!mounted) return null; // Prevent hydration errors

  return (
    <main className="min-h-screen relative text-white bg-black">
      <BackgroundEffects />
      <Navbar />

      <div className="pt-32 pb-20 px-6 lg:px-[60px] max-w-7xl mx-auto relative z-10 min-h-[70vh]">
        <div className="flex justify-between items-center mb-12">
          <div>
            <span className="text-neon text-[0.6rem] md:text-[0.7rem] uppercase tracking-[0.3em] block mb-4">Insights</span>
            <h1 className="text-3xl md:text-5xl font-bold uppercase text-white tracking-wider">
              Our <span className="text-neon">Blog</span>
            </h1>
          </div>

        </div>

        {blogs.length === 0 ? (
          <div className="text-center text-white/50 py-20 border border-white/5 rounded-2xl bg-white/5 backdrop-blur-sm">
            <p>No blog posts available yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <Link href={`/blog/${blog.id}`} key={blog.id} className="bg-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-neon/50 transition-colors group flex flex-col">
                <div className="h-56 overflow-hidden relative border-b border-white/10">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={blog.imageLink}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800'; // Fallback image
                    }}
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <div className="text-[0.7rem] uppercase tracking-widest text-neon mb-3">{blog.date}</div>
                  <h3 className="text-xl font-bold mb-3 text-white line-clamp-2 leading-snug">{blog.title}</h3>
                  <p className="text-white/60 line-clamp-3 text-sm leading-relaxed mb-4 flex-grow">
                    {blog.content}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      <Contact />
      <ScrollToTop />
    </main>
  );
}
