import React from 'react';
import { Calendar, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Image from 'next/image';

// This would come from an API in a real app
const blogPost = {
  id: 1,
  title: 'The Skincare Routine That Works: Expert Tips for Every Skin Type',
  author: 'Dr. Sarah Johnson',
  authorImage: '/lovable-uploads/39c21b4b-f413-47ea-bf60-8070594191fe.png',
  authorRole: 'Dermatologist',
  date: 'May 17, 2023',
  readTime: '8 min read',
  category: 'Skincare',
  tags: ['Skincare', 'Beauty', 'Self-care', 'Health'],
  heroImage: '/lovable-uploads/39c21b4b-f413-47ea-bf60-8070594191fe.png',
  content: [
    {
      type: 'paragraph',
      text: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      type: 'heading',
      text: 'Unlocking the Secrets of Sustainable Fashion: Eco-Friendly Choices for a Stylish and Responsible Wardrobe',
    },
    {
      type: 'paragraph',
      text: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      type: 'images',
      images: [
        '/lovable-uploads/39c21b4b-f413-47ea-bf60-8070594191fe.png',
        '/lovable-uploads/39c21b4b-f413-47ea-bf60-8070594191fe.png',
        '/lovable-uploads/39c21b4b-f413-47ea-bf60-8070594191fe.png',
      ],
    },
    {
      type: 'paragraph',
      text: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      type: 'image',
      image: '/lovable-uploads/39c21b4b-f413-47ea-bf60-8070594191fe.png',
    },
    {
      type: 'paragraph',
      text: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
  ],
};

const BlogDetailsPage = () => {

  // In a real app, we would fetch the blog post based on the ID
  // For now, we'll just use our sample data

  return (
    <div className='bg-blog-background min-h-screen py-10'>
      <div className='container mx-auto px-4 max-w-4xl'>
        {/* Back button */}
        <Button
          variant='ghost'
          className='mb-6 text-gray-600 hover:text-blog-primary'
        >
          <ArrowLeft className='mr-2 h-4 w-4' />
          Back to Blog
        </Button>

        {/* Blog post header */}
        <div className='mb-8'>
          <div className='flex items-center gap-2 text-sm text-blog-primary mb-3'>
            <span className='bg-blog-primary/10 px-3 py-1 rounded-full'>
              {blogPost.category}
            </span>
            <span>•</span>
            <span className='flex items-center'>
              <Calendar className='h-4 w-4 mr-1' />
              {blogPost.date}
            </span>
            <span>•</span>
            <span>{blogPost.readTime}</span>
          </div>

          <h1 className='text-3xl md:text-4xl font-bold text-gray-900 mb-6'>
            {blogPost.title}
          </h1>

          <div className='flex items-center gap-4'>
            <Avatar className='h-12 w-12 border-2 border-white shadow-sm'>
              <AvatarImage src={blogPost.authorImage} alt={blogPost.author} />
              <AvatarFallback>{blogPost.author.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <p className='font-medium text-gray-900'>{blogPost.author}</p>
              <p className='text-sm text-gray-600'>{blogPost.authorRole}</p>
            </div>
          </div>
        </div>

        {/* Hero image */}
        <div className='mb-8 rounded-xl overflow-hidden'>
          <img
            src={blogPost.heroImage}
            alt={blogPost.title}
            className='w-full h-auto object-cover'
          />
        </div>

        {/* Blog content */}
        <div className='prose prose-lg max-w-none'>
          {blogPost.content.map((section, index) => {
            if (section.type === 'paragraph') {
              return (
                <p key={index} className='mb-6 text-gray-700 leading-relaxed'>
                  {section.text}
                </p>
              );
            }

            if (section.type === 'heading') {
              return (
                <h2
                  key={index}
                  className='text-2xl font-bold text-gray-900 mt-10 mb-6'
                >
                  {section.text}
                </h2>
              );
            }

            if (section.type === 'images') {
              return (
                <div key={index} className='grid grid-cols-3 gap-4 my-8'>
                  {section.images.map((image, imgIndex) => (
                    <div key={imgIndex} className='rounded-lg overflow-hidden'>
                      <img
                        src={image}
                        alt={`Blog image ${imgIndex + 1}`}
                        className='w-full h-48 object-cover'
                      />
                    </div>
                  ))}
                </div>
              );
            }

            if (section.type === 'image') {
              return (
                <div key={index} className='my-8 rounded-lg overflow-hidden'>
                  <Image
                  width={500}
                  height={500}
                    src={section.image}
                    alt={`Blog image`}
                    className='w-full h-auto object-cover'
                  />
                </div>
              );
            }

            return null;
          })}
        </div>

        {/* Tags */}
        <div className='mt-10 mb-8'>
          <h3 className='text-lg font-semibold mb-4'>Tags</h3>
          <div className='flex flex-wrap gap-2'>
            {blogPost.tags.map((tag) => (
              <span key={tag} className='blog-tag'>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsPage;
