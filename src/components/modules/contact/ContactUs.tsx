import React from 'react';
import { Mail, MapPin, Phone, Clock, ArrowUpRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';



const ContactUs = () => {

  return (
    <div className='container mx-auto px-4 py-12 max-w-6xl'>
      <div className='text-center mb-8'>
        <h1 className='text-3xl md:text-4xl font-bold text-[#0a2156] mb-4'>
          Connect With Us For
          <br />
          Your Healthcare Needs
        </h1>
        <p className='text-gray-600 max-w-2xl mx-auto'>
          Reach out for support, feedback, or to schedule an appointment. Fill
          out the form, and we will promptly assist you and confirm your visit
          with our healthcare professionals.
        </p>
      </div>

      <div className='flex flex-col md:flex-row gap-8 mb-12'>

        <div className='md:w-1/2 space-y-6'>
          <div className='bg-[#f8f9fc] p-6 rounded-xl'>
            <div className='flex items-center mb-4'>
              <div className='flex -space-x-3 mr-4'>
                <Image
                width={100}
                height={100}
                  src='/lovable-uploads/9bf584a4-1f2e-4539-b14f-d9b30ef3727b.png'
                  alt='Doctors'
                  className='h-12 w-auto'
                />
              </div>
              <div>
                <div className='font-medium'>Talk to over 215 doctors</div>
              </div>
              <Button variant='ghost' size='icon' className='ml-auto'>
                <ArrowUpRight className='h-5 w-5 text-blog-primary' />
              </Button>
            </div>
            <div className='flex items-center'>
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className='w-4 h-4 fill-yellow-400 text-yellow-400'
                />
              ))}
              <span className='font-medium ml-2'>(4.8)</span>
              <span className='text-sm text-gray-500 ml-2'>
                12k+ ratings on google
              </span>
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <ContactCard
              icon={<MapPin className='h-6 w-6 text-blog-primary' />}
              title='Address'
              content='234 Oak Drive, Villagetown, USA'
            />
            <ContactCard
              icon={<Phone className='h-6 w-6 text-blog-primary' />}
              title='Call Us'
              content='+1 123 456 7890'
            />
            <ContactCard
              icon={<Mail className='h-6 w-6 text-blog-primary' />}
              title='Send us a Mail'
              content={
                <>
                  info@example.com
                  <br />
                  clinicmaster@example.com
                </>
              }
            />
            <ContactCard
              icon={<Clock className='h-6 w-6 text-blog-primary' />}
              title='Opening Time'
              content={
                <>
                  Mon-Thu: 8:00am-5:00pm
                  <br />
                  Fri: 8:00am-1:00pm
                </>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
}

const ContactCard = ({ icon, title, content }: ContactCardProps) => {
  return (
    <div className='bg-[#f8f9fc] p-4 rounded-xl flex items-start'>
      <div className='bg-white p-3 rounded-full mr-3'>{icon}</div>
      <div>
        <h3 className='font-semibold text-[#0a2156]'>{title}</h3>
        <p className='text-gray-600 text-sm'>{content}</p>
      </div>
    </div>
  );
};

export default ContactUs;
