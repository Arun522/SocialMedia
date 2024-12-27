import { useState } from "react";

const SharePost = ({ postLink }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(postLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="text-lg font-bold mb-2">Share Post</h3>
      <div className="flex gap-4">
        <button className="bg-blue-500 text-white px-3 py-1 rounded-md">
          Facebook
        </button>
        <button className="bg-green-500 text-white px-3 py-1 rounded-md">
          WhatsApp
        </button>
        <button className="bg-blue-400 text-white px-3 py-1 rounded-md">
          Twitter
        </button>
      </div>
      <div className="mt-4">
        <input
          type="text"
          readOnly
          value={postLink}
          className="border p-2 w-full rounded-md"
        />
        <button
          onClick={handleCopyLink}
          className="mt-2 bg-gray-800 text-white px-3 py-1 rounded-md"
        >
          {copied ? "Link Copied!" : "Copy Link"}
        </button>
      </div>
    </div>
  );
};

export default SharePost;
