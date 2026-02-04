import React from 'react';

export default function Certificates() {
  const fallbackSvg = encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="600" height="140"><rect width="100%" height="100%" fill="#FDEDF6" rx="12" ry="12"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="28" fill="#e943a2" font-weight="700">JavaScript Certificate</text></svg>'
  );

  return (
    <section id="certificates" className="container">
      <h2>Certificates</h2>
      <a href="https://www.hackerrank.com/certificates/6fef53909ef9" target="_blank" rel="noopener noreferrer">
        <img
          src="/js-cert.png"
          alt="JavaScript Certificate"
          className="cert-image"
          onError={(e) => {
            e.currentTarget.src = `data:image/svg+xml;utf8,${fallbackSvg}`;
          }}
        />
      </a>
    </section>
  );
}
