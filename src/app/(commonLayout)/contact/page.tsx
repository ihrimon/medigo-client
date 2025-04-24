import ContactUs from '@/components/modules/contact/ContactUs';
import FindWithMap from '@/components/modules/contact/FindWithMap';
import React from 'react';

const ContactPage = () => {
  return (
    <div className='min-h-screen bg-blog-background'>
      <ContactUs />
      <FindWithMap />
    </div>
  );
};

export default ContactPage;
