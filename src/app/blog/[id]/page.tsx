"use client";

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import BackgroundEffects from '@/components/BackgroundEffects';
import ScrollToTop from '@/components/ScrollToTop';
import Contact from '@/components/Contact';
import { BlogPost } from '../page';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function SingleBlogPage() {
  const { id } = useParams();
  const router = useRouter();
  
  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setMounted(true);
    if (!id) {
      setLoading(false);
      return;
    }
    fetch(`/api/blogs/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error('Blog not found');
        return res.json();
      })
      .then((data) => setBlog(data))
      .catch(() => setBlog(null))
      .finally(() => setLoading(false));
  }, [id]);

  if (!mounted) return null;

  return (
    <main className="min-h-screen relative text-white bg-black">
      <BackgroundEffects />
      <Navbar />
      
      <div className="pt-32 pb-20 px-6 lg:px-[60px] max-w-4xl mx-auto relative z-10 min-h-[70vh]">
        <Link 
          href="/blog"
          className="inline-flex items-center gap-2 text-white/50 hover:text-neon transition-colors mb-8 group uppercase tracking-widest text-xs font-bold"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Blogs
        </Link>

        {loading ? (
          <div className="text-center text-white/50 py-20">Loading...</div>
        ) : !blog ? (
          <div className="text-center text-white/50 py-20 border border-white/5 rounded-2xl bg-white/5 backdrop-blur-sm">
            <p className="mb-4">Blog post not found.</p>
            <button 
              onClick={() => router.push('/blog')}
              className="px-6 py-2 border border-white/20 text-white text-xs uppercase tracking-widest rounded-full hover:border-neon hover:text-neon transition-colors"
            >
              Return Home
            </button>
          </div>
        ) : (
          <article className="bg-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
            <div className="h-64 md:h-96 w-full relative border-b border-white/10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={blog.imageLink}
                alt={blog.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800'; // Fallback image
                }}
              />
            </div>
            
            <div className="p-8 md:p-12">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-neon text-[0.7rem] uppercase tracking-[0.3em] font-bold">
                  {blog.date}
                </span>
                <span className="w-12 h-[1px] bg-white/20"></span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-bold mb-10 text-white leading-tight">
                {blog.title}
              </h1>
              
              <div className="prose prose-invert prose-lg max-w-none">
                {/* Splitting content by newlines to render paragraphs properly */}
                {blog.content.split('\n').map((paragraph, index) => (
                  <p key={index} className="text-white/70 leading-relaxed mb-6 font-light">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </article>
        )}
      </div>
      
      <Contact />
      <ScrollToTop />
    </main>
  );
}
