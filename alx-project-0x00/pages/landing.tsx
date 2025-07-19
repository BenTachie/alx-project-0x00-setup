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
        <Button title="Small Rounded-sm" styles="text-sm px-3 py-1 rounded-sm" />
        <Button title="Small Rounded-md" styles="text-sm px-3 py-1 rounded-md" />
        <Button title="Small Rounded-full" styles ="text-sm px-3 py-1 rounded-lg" />

        {/* Medium Buttons */}
        <Button title="Medium Rounded-sm" styles="text-base px-4 py-2 rounded-sm" />
        <Button title="Medium Rounded-md" styles="text-base px-4 py-2 rounded-md" />
        <Button title="Medium Rounded-full" styles="text-base px-4 py-2 rounded-full" />

        {/* Large Buttons */}
        <Button title="Large Rounded-sm" styles="text-lg px-6 py-3 rounded-sm" />
        <Button title="Large Rounded-md" styles="text-lg px-6 py-3 rounded-md" />
        <Button title="Large Rounded-full" styles="text-lg px-6 py-3 rounded-full" />
      </div>
    </div>
  );
};

export default Landing;
