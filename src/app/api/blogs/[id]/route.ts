import { NextResponse } from 'next/server';
import { readBlogs, writeBlogs } from '@/lib/blogs';

export const dynamic = 'force-dynamic';

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const blogs = await readBlogs();
  const blog = blogs.find((b) => b.id === id);

  if (!blog) {
    return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
  }
  return NextResponse.json(blog);
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body = await request.json().catch(() => null);
  const { title, imageLink, content } = body ?? {};

  if (!title || !imageLink || !content) {
    return NextResponse.json(
      { error: 'title, imageLink and content are required' },
      { status: 400 }
    );
  }

  const blogs = await readBlogs();
  const index = blogs.findIndex((b) => b.id === id);

  if (index === -1) {
    return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
  }

  blogs[index] = { ...blogs[index], title, imageLink, content };
  await writeBlogs(blogs);

  return NextResponse.json(blogs[index]);
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const blogs = await readBlogs();
  const filtered = blogs.filter((b) => b.id !== id);

  if (filtered.length === blogs.length) {
    return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
  }

  await writeBlogs(filtered);
  return NextResponse.json({ success: true });
}
