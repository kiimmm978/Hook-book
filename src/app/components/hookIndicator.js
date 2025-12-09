import React from "react";
import { usePathname } from "next/navigation";

const HookIndicator = () => {
  const path = usePathname();
  return (
    <div className=" text-blue-600">
      Current Hook Is <span>{path}</span>
    </div>
  );
};

export default HookIndicator;
