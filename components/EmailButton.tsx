"use client";

import { useState } from "react";

const EmailButton = () => {
  const email = "hafizuddinshariff@gmail.com";

  const [isCopied, setIsCopied] = useState(false);

  const handleCopyEmail = () => {
    if (isCopied) return;

    navigator.clipboard.writeText(email);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 3000);
  };
  return (
    <button className="btn btn-primary" onClick={handleCopyEmail}>
      <div className="flex items-center gap-2">
        {isCopied ? "Email Copied!" : "hafizuddinshariff@gmail.com"}
        {isCopied ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M20 2H10c-1.103 0-2 .897-2 2v4H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2v-4h4c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM4 20V10h10l.002 10H4zm16-6h-4v-4c0-1.103-.897-2-2-2h-4V4h10v10z" />
          </svg>
        )}
      </div>
    </button>
  );
};

export default EmailButton;
