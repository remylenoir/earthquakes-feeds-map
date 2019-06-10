import React from 'react';

const Heading1 = ({ children, className }) => {
  return (
    <>
      <h1 className={className}>{children}</h1>
    </>
  );
};

const Heading2 = ({ children, className }) => {
  return (
    <>
      <h2 className={className}>{children}</h2>
    </>
  );
};

const Heading3 = ({ children, className }) => {
  return (
    <>
      <h3 className={className}>{children}</h3>
    </>
  );
};

const Heading4 = ({ children, className }) => {
  return (
    <>
      <h4 className={className}>{children}</h4>
    </>
  );
};

const Heading5 = ({ children, className }) => {
  return (
    <>
      <h5 className={className}>{children}</h5>
    </>
  );
};

const Heading6 = ({ children, className }) => {
  return (
    <>
      <h6 className={className}>{children}</h6>
    </>
  );
};

export { Heading1, Heading2, Heading3, Heading4, Heading5, Heading6 };
