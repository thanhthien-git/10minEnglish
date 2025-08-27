// components/AuthForm.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AuthFormProps {
  initialMode?: "login" | "register";
  onSuccess?: () => void;
}

export default function AuthForm({
  initialMode = "login",
  onSuccess,
}: Readonly<AuthFormProps>) {
  const [isLogin, setIsLogin] = useState(initialMode === "login");

  return (
    <div>
      <h1 className="text-3xl font-bold text-center text-orange-500 mb-6">
        {isLogin ? "Đăng nhập" : "Đăng ký"}
      </h1>

      <AnimatePresence mode="wait">
        {isLogin ? (
          <motion.form
            key="login"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 40 }}
            transition={{ duration: 0.28 }}
            className="flex flex-col gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              // TODO: thêm logic auth ở đây
              if (onSuccess) onSuccess();
            }}
          >
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="p-3 rounded-xl border border-orange-300 bg-orange-50 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
            <input
              name="password"
              type="password"
              placeholder="Mật khẩu"
              className="p-3 rounded-xl border border-orange-300 bg-orange-50 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
            <button className="bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold transition">
              Đăng nhập
            </button>
          </motion.form>
        ) : (
          <motion.form
            key="register"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.28 }}
            className="flex flex-col gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              // TODO: thêm logic register ở đây
              if (onSuccess) onSuccess();
            }}
          >
            <input
              name="name"
              type="text"
              placeholder="Tên người dùng"
              className="p-3 rounded-xl border border-orange-300 bg-orange-50 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="p-3 rounded-xl border border-orange-300 bg-orange-50 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
            <input
              name="password"
              type="password"
              placeholder="Mật khẩu"
              className="p-3 rounded-xl border border-orange-300 bg-orange-50 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
            <button className="bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold transition">
              Đăng ký
            </button>
          </motion.form>
        )}
      </AnimatePresence>

      <p className="text-center text-gray-700 mt-6">
        {isLogin ? "Chưa có tài khoản?" : "Đã có tài khoản?"}{" "}
        <button
          onClick={() => setIsLogin(!isLogin)}
          className="text-orange-500 font-semibold hover:underline"
        >
          {isLogin ? "Đăng ký" : "Đăng nhập"}
        </button>
      </p>
    </div>
  );
}
