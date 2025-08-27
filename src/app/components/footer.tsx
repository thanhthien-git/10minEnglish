"use client";

import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-orange-50 border-t border-orange-200 ">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo + description */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
              10
            </div>
            <span className="font-bold text-lg text-gray-900">QuickLangua</span>
          </div>
          <p className="text-gray-700 text-sm">
            Học tiếng Anh mỗi ngày, nhanh chóng & hiệu quả với mini test,
            flashcards và lộ trình cá nhân.
          </p>
          <div className="flex gap-3 mt-2">
            <a
              href="#"
              className="text-gray-700 hover:text-orange-500 transition-colors"
            >
              <Facebook size={18} />
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-orange-500 transition-colors"
            >
              <Twitter size={18} />
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-orange-500 transition-colors"
            >
              <Instagram size={18} />
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-orange-500 transition-colors"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        {/* Links column 1 */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-4">Khóa học</h3>
          <ul className="flex flex-col gap-2 text-gray-600 text-sm">
            <li>
              <a
                href="#courses"
                className="hover:text-orange-500 transition-colors"
              >
                Tất cả khóa học
              </a>
            </li>
            <li>
              <a
                href="#courses"
                className="hover:text-orange-500 transition-colors"
              >
                Mini test
              </a>
            </li>
            <li>
              <a
                href="#courses"
                className="hover:text-orange-500 transition-colors"
              >
                Flashcards
              </a>
            </li>
          </ul>
        </div>

        {/* Links column 2 */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-4">Hỗ trợ</h3>
          <ul className="flex flex-col gap-2 text-gray-600 text-sm">
            <li>
              <a
                href="#faq"
                className="hover:text-orange-500 transition-colors"
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-orange-500 transition-colors"
              >
                Liên hệ
              </a>
            </li>
            <li>
              <a
                href="#privacy"
                className="hover:text-orange-500 transition-colors"
              >
                Chính sách bảo mật
              </a>
            </li>
          </ul>
        </div>

        {/* Links column 3 */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-4">Về chúng tôi</h3>
          <ul className="flex flex-col gap-2 text-gray-600 text-sm">
            <li>
              <a
                href="#about"
                className="hover:text-orange-500 transition-colors"
              >
                Về QuickLangua
              </a>
            </li>
            <li>
              <a
                href="#team"
                className="hover:text-orange-500 transition-colors"
              >
                Đội ngũ
              </a>
            </li>
            <li>
              <a
                href="#blog"
                className="hover:text-orange-500 transition-colors"
              >
                Blog
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-orange-200 mt-6 pt-4 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} QuickLangua. All rights reserved.
      </div>
    </footer>
  );
}
