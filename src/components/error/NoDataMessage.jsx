import React from "react";

export default function NoDataMessage({ message = "No data found." }) {
  return (
    <div className="bg-gray-200 p-6 rounded-md">
      <p className="text-center text-muted-foreground">{message}</p>
    </div>
  );
}
