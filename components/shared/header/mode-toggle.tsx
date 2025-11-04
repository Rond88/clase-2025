"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  SunIcon,
  MoonIcon,
  SunMoon,
  CloudMoon,
  Flower,
  Flower2,
  Coffee,
} from "lucide-react";

export default function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const themes = ["light", "dark", "system", "light2", "dark2", "cafe"];

  const handleToggle = () => {
    const currentIndex = themes.indexOf(theme!);
    const nextTheme = themes[(currentIndex + 1) % themes.length];
    setTheme(nextTheme);
  };

  const renderIcon = () => {
    switch (theme) {
      case "dark":
        return <MoonIcon />;
      case "light":
        return <SunIcon />;
      case "system":
        return <SunMoon />;
      case "light2":
        return <Flower />;
      case "dark2":
        return <Flower2 />;
      case "cafe":
        return <Coffee />;
    }
  };

  return (
    <Button variant="ghost" onClick={handleToggle}>
      {renderIcon()}
    </Button>
  );
}
