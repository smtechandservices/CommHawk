"use client";

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import BackgroundEffects from '@/components/BackgroundEffects';
import ScrollToTop from '@/components/ScrollToTop';
import { BlogPost } from '../blog/page';

export default function AddBlogPage() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [mounted, setMounted] = useState(false);
  const [isEditing, setIsEditing] = useState<number | null>(null);

  const [title, setTitle] = useState('');
  const [imageLink, setImageLink] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    setMounted(true);
    const storedBlogs = localStorage.getItem('commhawk_blogs');
    if (storedBlogs) {
      try {
        setBlogs(JSON.parse(storedBlogs));
      } catch (e) {
        setBlogs([]);
      }
    }
  }, []);

  const saveToStorage = (updatedBlogs: BlogPost[]) => {
    setBlogs(updatedBlogs);
    localStorage.setItem('commhawk_blogs', JSON.stringify(updatedBlogs));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !imageLink || !content) return;

    if (isEditing !== null) {
      // Update existing
      const updatedBlogs = blogs.map(b => 
        b.id === isEditing 
          ? { ...b, title, imageLink, content } 
          : b
      );
      saveToStorage(updatedBlogs);
      setIsEditing(null);
    } else {
      // Add new
      const newBlog: BlogPost = {
        id: Date.now(),
        title,
        imageLink,
        content,
        date: new Date().toLocaleDateString(),
      };
      saveToStorage([newBlog, ...blogs]);
    }

    setTitle('');
    setImageLink('');
    setContent('');
  };

  const handleEdit = (blog: BlogPost) => {
    setIsEditing(blog.id);
    setTitle(blog.title);
    setImageLink(blog.imageLink);
    setContent(blog.content);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this blog post?")) {
      const updatedBlogs = blogs.filter(b => b.id !== id);
      saveToStorage(updatedBlogs);
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
            <div className="flex gap-4 pt-4">
              <button
                type="submit"
                className="px-8 py-3 bg-white text-black font-bold uppercase tracking-widest text-[0.8rem] rounded-full hover:bg-neon hover:text-black transition-colors duration-300"
              >
                {isEditing ? 'Save Changes' : 'Publish Blog'}
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
