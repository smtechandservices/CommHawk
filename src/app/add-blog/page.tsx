"use client";

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import BackgroundEffects from '@/components/BackgroundEffects';
import ScrollToTop from '@/components/ScrollToTop';
import { BlogPost } from '../blog/page';

export default function AddBlogPage() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [mounted, setMounted] = useState(false);
  const [isEditing, setIsEditing] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const [title, setTitle] = useState('');
  const [imageLink, setImageLink] = useState('');
  const [content, setContent] = useState('');

  const loadBlogs = () => {
    fetch('/api/blogs')
      .then((res) => res.json())
      .then((data) => setBlogs(Array.isArray(data) ? data : []))
      .catch(() => setBlogs([]));
  };

  useEffect(() => {
    setMounted(true);
    loadBlogs();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !imageLink || !content) return;

    setSubmitting(true);
    setError('');

    try {
      const res = await fetch(
        isEditing !== null ? `/api/blogs/${isEditing}` : '/api/blogs',
        {
          method: isEditing !== null ? 'PUT' : 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ title, imageLink, content }),
        }
      );

      if (!res.ok) throw new Error('Request failed');

      loadBlogs();
      setIsEditing(null);
      setTitle('');
      setImageLink('');
      setContent('');
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleEdit = (blog: BlogPost) => {
    setIsEditing(blog.id);
    setTitle(blog.title);
    setImageLink(blog.imageLink);
    setContent(blog.content);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this blog post?")) return;
    try {
      const res = await fetch(`/api/blogs/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Request failed');
      loadBlogs();
    } catch (err) {
      setError('Failed to delete the blog post. Please try again.');
    }
  };

  const handleCancel = () => {
    setIsEditing(null);
    setTitle('');
    setImageLink('');
    setContent('');
  };

  if (!mounted) return null;

  return (
    <main className="min-h-screen relative text-white bg-black">
      <BackgroundEffects />
      <Navbar />
      
      <div className="pt-32 pb-20 px-6 lg:px-[60px] max-w-4xl mx-auto relative z-10">
        <div className="mb-12">
          <span className="text-neon text-[0.6rem] md:text-[0.7rem] uppercase tracking-[0.3em] block mb-4">Secret Admin</span>
          <h1 className="text-3xl md:text-5xl font-bold uppercase text-white tracking-wider">
            Manage <span className="text-neon">Blogs</span>
          </h1>
        </div>

        {/* Form */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-2xl mb-16">
          <h2 className="text-xl font-bold mb-6 text-white uppercase tracking-widest">
            {isEditing ? 'Update Blog Post' : 'Add New Blog Post'}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="title" className="text-white/60 text-[0.6rem] uppercase tracking-widest font-bold">Title *</label>
              <input
                id="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="bg-transparent border-b border-white/10 py-2.5 outline-none focus:border-neon transition-colors text-white text-lg font-light placeholder:text-white/20"
                placeholder="Enter blog title"
                required
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="imageLink" className="text-white/60 text-[0.6rem] uppercase tracking-widest font-bold">Image Link (URL) *</label>
              <input
                id="imageLink"
                type="url"
                value={imageLink}
                onChange={(e) => setImageLink(e.target.value)}
                className="bg-transparent border-b border-white/10 py-2.5 outline-none focus:border-neon transition-colors text-white text-lg font-light placeholder:text-white/20"
                placeholder="https://example.com/image.jpg"
                required
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="content" className="text-white/60 text-[0.6rem] uppercase tracking-widest font-bold">Content *</label>
              <textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={5}
                className="bg-transparent border border-white/10 p-4 rounded-lg outline-none focus:border-neon transition-colors text-white text-sm font-light placeholder:text-white/20 resize-none mt-2"
                placeholder="Write your blog content here..."
                required
              />
            </div>
            {error && (
              <p className="text-red-400 text-sm">{error}</p>
            )}
            <div className="flex gap-4 pt-4">
              <button
                type="submit"
                disabled={submitting}
                className="px-8 py-3 bg-white text-black font-bold uppercase tracking-widest text-[0.8rem] rounded-full hover:bg-neon hover:text-black transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? 'Saving...' : isEditing ? 'Save Changes' : 'Publish Blog'}
              </button>
              {isEditing && (
                <button
                  type="button"
                  onClick={handleCancel}
                  className="px-8 py-3 border border-white/20 text-white font-bold uppercase tracking-widest text-[0.8rem] rounded-full hover:border-white transition-colors duration-300"
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Existing Blogs List */}
        <div>
          <h2 className="text-xl font-bold mb-6 text-white uppercase tracking-widest border-b border-white/10 pb-4">
            Existing Posts
          </h2>
          {blogs.length === 0 ? (
            <p className="text-white/50 text-sm">No blogs found.</p>
          ) : (
            <div className="space-y-4">
              {blogs.map((blog) => (
                <div key={blog.id} className="bg-white/[0.02] border border-white/5 rounded-xl p-4 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
                  <div className="flex items-center gap-4">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={blog.imageLink} alt="" className="w-16 h-16 object-cover rounded-lg bg-white/10" />
                    <div>
                      <h3 className="font-bold text-white text-lg">{blog.title}</h3>
                      <span className="text-neon text-[0.6rem] uppercase tracking-widest">{blog.date}</span>
                    </div>
                  </div>
                  <div className="flex gap-3 mt-4 md:mt-0">
                    <button 
                      onClick={() => handleEdit(blog)}
                      className="px-4 py-2 border border-white/10 text-white/80 text-xs uppercase tracking-widest rounded-full hover:border-neon hover:text-neon transition-colors"
                    >
                      Edit
                    </button>
                    <button 
                      onClick={() => handleDelete(blog.id)}
                      className="px-4 py-2 border border-red-500/30 text-red-400 text-xs uppercase tracking-widest rounded-full hover:bg-red-500 hover:text-white transition-colors"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      
      <ScrollToTop />
    </main>
  );
}
