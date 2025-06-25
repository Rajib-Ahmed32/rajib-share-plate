import React from "react";

export default function ErrorMessage({ message = "Something went wrong." }) {
  return (
    <div className="text-center !text-white font-medium bg-gray-50 border border-red-200 p-4 rounded">
      {message}
    </div>
  );
}
