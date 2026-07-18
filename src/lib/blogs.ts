import { list, put } from '@vercel/blob';
import { randomUUID } from 'crypto';

export interface BlogPost {
  id: string;
  title: string;
  imageLink: string;
  content: string;
  date: string;
}

const BLOB_PATH = 'blogs.json';

export async function readBlogs(): Promise<BlogPost[]> {
  const { blobs } = await list({ prefix: BLOB_PATH, limit: 1 });
  const match = blobs.find((b) => b.pathname === BLOB_PATH);
  if (!match) return [];

  const res = await fetch(match.url, { cache: 'no-store' });
  if (!res.ok) return [];
  return res.json();
}

export async function writeBlogs(blogs: BlogPost[]): Promise<void> {
  await put(BLOB_PATH, JSON.stringify(blogs, null, 2), {
    access: 'public',
    contentType: 'application/json',
    addRandomSuffix: false,
    allowOverwrite: true,
  });
}

export function createBlog(data: { title: string; imageLink: string; content: string }): BlogPost {
  return {
    id: randomUUID(),
    title: data.title,
    imageLink: data.imageLink,
    content: data.content,
    date: new Date().toLocaleDateString(),
  };
}
