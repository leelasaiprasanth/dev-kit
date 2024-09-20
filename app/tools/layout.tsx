"use client";

import ToolList from "@/app/_components/ToolList";
import Link from "next/link";
import { useState } from "react";

import { Button } from "../_components/Button";

import { RiMenuSearchFill as Menu, RiCloseLine as X } from "react-icons/ri";

import { FaGithub } from "react-icons/fa";

export default function ToolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // const handleItemClick = (id: string) => {
  //   setSelectedItem(id);
  //   setIsMenuOpen(false);
  // };

  return (
    <>
      <div className="min-h-screen bg-background relative">
        {/* Floating Container for Home and Menu */}
        <div className="fixed top-4 right-4 flex gap-2 bg-background p-2 rounded-lg   border border-white">
          <Link
            href="/"
            className="rounded-md bg-purple-700 p-1 text-2xl font-semibold text-white shadow-sm hover:bg-purple-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-900"
          >
            🏡
          </Link>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
          <Link
            href="https://github.com/leelasaiprasanth/dev-kit"
            className="flex items-center justify-center rounded-md p-1"
          >
            <FaGithub className="h-6 w-6" />
          </Link>
        </div>

        {/* Floating Menu */}
        {isMenuOpen && (
          <div className="fixed top-20 right-4 bg-background border rounded-md shadow-lg p-4 z-auto">
            <nav>
              <ToolList />
            </nav>
          </div>
        )}

        {/* Main Content Area */}
        <div className="h-[calc(100vh-4rem)] pt-28 p-4 w-full">{children}</div>
      </div>
    </>
  );
}
