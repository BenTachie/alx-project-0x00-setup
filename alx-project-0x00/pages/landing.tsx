// pages/landing.tsx
import React from "react";
import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div className="p-8 space-y-4">
      <h1 className="text-xl font-extralight">Landing Page</h1>

      <Card />

      <div className="flex gap-4 flex-wrap">
        {/* Small Buttons with Various Shapes */}
        <Button title="Small Rounded-sm" style="text-sm px-3 py-1 rounded-sm" />
        <Button title="Small Rounded-md" style="text-sm px-3 py-1 rounded-md" />
        <Button title="Small Rounded-full" style="text-sm px-3 py-1 rounded-full" />

        {/* Medium Buttons */}
        <Button title="Medium Rounded-sm" style="text-base px-4 py-2 rounded-sm" />
        <Button title="Medium Rounded-md" style="text-base px-4 py-2 rounded-md" />
        <Button title="Medium Rounded-full" style="text-base px-4 py-2 rounded-full" />

        {/* Large Buttons */}
        <Button title="Large Rounded-sm" style="text-lg px-6 py-3 rounded-sm" />
        <Button title="Large Rounded-md" style="text-lg px-6 py-3 rounded-md" />
        <Button title="Large Rounded-full" style="text-lg px-6 py-3 rounded-full" />
      </div>
    </div>
  );
};

export default Landing;
