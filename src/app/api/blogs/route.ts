import { NextResponse } from 'next/server';
import { readBlogs, writeBlogs, createBlog } from '@/lib/blogs';

export const dynamic = 'force-dynamic';

export async function GET() {
  const blogs = await readBlogs();
  return NextResponse.json(blogs);
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const { title, imageLink, content } = body ?? {};

  if (!title || !imageLink || !content) {
    return NextResponse.json(
      { error: 'title, imageLink and content are required' },
      { status: 400 }
    );
  }

  const blogs = await readBlogs();
  const newBlog = createBlog({ title, imageLink, content });
  blogs.unshift(newBlog);
  await writeBlogs(blogs);

  return NextResponse.json(newBlog, { status: 201 });
}
