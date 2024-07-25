import React from "react";

const OverlayLoading = () => {
  return (
    <div className="fixed top-0 h-screen w-screen inset-0 z-50 flex flex-col items-center justify-center gap-5 bg-white backdrop-blur-sm">
      <h1 className="text-4xl font-bold">THE BLOG</h1>
      <span className="h-6 w-6 animate-spin rounded-full border-b-2 border-current" />
    </div>
  );
};

export default OverlayLoading;
