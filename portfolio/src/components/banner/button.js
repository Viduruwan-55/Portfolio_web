import React from "react";

const DownloadButton = ({ title, icon, fileUrl }) => {
  const handleDownload = () => {
    // Create an anchor element
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileUrl.split("/").pop(); // Extract filename from URL
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className="w-1/3 px-6 py-3 rounded-lg shadow-shadowOne flex items-center justify-center bg-black bg-opacity-25 to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-100 group cursor-pointer border border-designColor"
      onClick={handleDownload}
      role="button"
      tabIndex={0}
    >
      <div className="flex items-center gap-3">
        {icon ? (
          <span className="text-2xl text-designColor">{icon}</span>
        ) : null}
        <h2 className="text-sm font-titleFont font-bold text-gray-300 hover:text-designColor duration-300">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default DownloadButton;
