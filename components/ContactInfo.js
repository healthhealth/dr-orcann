import React from 'react';

const ContactInfo = ({ icon: Icon, text, href }) => {
  const content = (
    <>
      <Icon className="w-6 h-6" aria-hidden="true" focusable="false" />
      <span>{text}</span>
    </>
  );

  return (
    <div className="flex items-center space-x-3 text-gray-600">
      {href ? (
        <a href={href} className="hover:text-gray-900">
          {content}
        </a>
      ) : (
        content
      )}
    </div>
  );
};

export default ContactInfo;