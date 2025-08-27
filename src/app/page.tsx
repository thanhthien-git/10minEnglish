"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import Footer from "../components/footer";
import Modal from "@/components/ui/modal";
import AuthForm from "@/components/auth-form";
import { useRouter } from "next/navigation";
const FadeSection = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px", once: false });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};

// SlideSection
const SlideSection = ({
  children,
  delay = 0,
  direction = "left",
}: {
  children: React.ReactNode;
  delay?: number;
  direction?: "left" | "right";
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "-100px", once: false });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, x: direction === "left" ? -100 : 100 }}
      animate={
        isInView
          ? { opacity: 1, x: 0, transition: { duration: 0.6, delay } }
          : { opacity: 0, x: direction === "left" ? -100 : 100 }
      }
    >
      {children}
    </motion.section>
  );
};

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<
    "about" | "commitments" | "pricing"
  >("about");
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<"login" | "register">("login");

  const aboutRef = useRef<HTMLDivElement>(null);
  const commitmentsRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const handleSubmit = async () => {
    router.push("/dashboard");
  };
  const handleCloseModal = useCallback(() => {
    setModalOpen(false);
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroContents.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [paused]);

  const scrollToSection = (section: "about" | "commitments" | "pricing") => {
    const ref =
      section === "about"
        ? aboutRef
        : section === "commitments"
        ? commitmentsRef
        : pricingRef;

    if (ref.current) {
      const top =
        ref.current.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top, behavior: "smooth" });
    }

    setMenuOpen(false);
  };

  // highlight section
  useEffect(() => {
    const sections = [
      { ref: aboutRef, key: "about" as const },
      { ref: commitmentsRef, key: "commitments" as const },
      { ref: pricingRef, key: "pricing" as const },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const section = sections.find(
              (s) => s.ref.current === entry.target
            );
            if (section) setActiveSection(section.key);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((s) => s.ref.current && observer.observe(s.ref.current));
    return () =>
      sections.forEach(
        (s) => s.ref.current && observer.unobserve(s.ref.current)
      );
  }, []);

  // hero contents
  const heroContents = [
    {
      title: "QuickLangua",
      subtitle: (
        <>
          Mini time, maxi learn! <br /> 10 câu, 10 phút, tiến bộ thật nhanh!
        </>
      ),
    },
    {
      title: "Học hiệu quả",
      subtitle: (
        <>
          Flashcards thông minh <br /> Ghi nhớ từ vựng nhanh chóng.
        </>
      ),
    },
    {
      title: "Phân tích cá nhân",
      subtitle: (
        <>
          AI đánh giá năng lực riêng. <br /> Cá nhân hóa lộ trình học tập.
        </>
      ),
    },
  ];

  const features = [
    {
      icon: "⚡",
      title: "Mini-test 10 câu",
      desc: "Thử sức với 10 câu hỏi mỗi ngày, chỉ mất 10 phút. Tối ưu thời gian, tối đa hiệu quả!",
    },
    {
      icon: "📊",
      title: "Phân tích cá nhân",
      desc: "Nhận ngay lộ trình học và đánh giá năng lực riêng cho bạn. AI phân tích điểm mạnh, điểm yếu!",
    },
    {
      icon: "💎",
      title: "Flashcards miễn phí",
      desc: "Ôn tập nhanh chóng với flashcards thông minh và mẹo học hiệu quả từ chuyên gia!",
    },
  ];

  const commitments = [
    {
      icon: "🎯",
      title: "Cam kết hiệu quả",
      desc: "Học mỗi ngày 10 phút, tiến bộ nhanh chóng và bền vững.",
    },
    {
      icon: "🕒",
      title: "Tiết kiệm thời gian",
      desc: "Chỉ 10 câu mỗi ngày, phù hợp với người bận rộn.",
    },
    {
      icon: "💡",
      title: "Phương pháp thông minh",
      desc: "Flashcards, mini-test và AI cá nhân hóa lộ trình học.",
    },
  ];

  const pricingPlans = [
    {
      title: "Free",
      price: "0 VND",
      features: [
        "10 câu mỗi ngày",
        "Flashcards miễn phí",
        "AI phân tích cơ bản",
      ],
    },
    {
      title: "Pro",
      price: "50k/tháng",
      features: [
        "50 câu mỗi ngày",
        "Flashcards nâng cao",
        "AI phân tích chi tiết",
      ],
    },
    {
      title: "Premium",
      price: "90k/tháng",
      features: ["Không giới hạn", "Flashcards chuyên sâu", "Hỗ trợ trực tiếp"],
    },
  ];

  const stats = [
    { value: "1000+", label: "Học viên đang học" },
    { value: "95%", label: "Tỷ lệ hài lòng" },
    { value: "50+", label: "Chủ đề đa dạng" },
  ];

  const orangeButton =
    "bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors";
  const outlineButton =
    "bg-white hover:bg-orange-50 text-orange-500 border border-orange-500 font-semibold py-3 px-6 rounded-lg transition-colors";

  const openLogin = () => {
    setModalMode("login");
    setModalOpen(true);
  };
  const openRegister = () => {
    setModalMode("register");
    setModalOpen(true);
  };

  return (
    <div className="font-sans">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
          <div className="text-2xl font-bold text-orange-500">QuickLangua</div>

          <div className="hidden md:flex space-x-4">
            {["about", "commitments", "pricing"].map((tab) => (
              <button
                key={tab}
                onClick={() => scrollToSection(tab as any)}
                className={`relative px-4 py-2 font-semibold text-orange-500 transition-colors duration-300
                  after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-orange-500
                  after:transition-all after:duration-300 hover:after:w-full ${
                    activeSection === tab ? "after:w-full" : ""
                  }`}
              >
                {tab === "about"
                  ? "Về chúng tôi"
                  : tab === "commitments"
                  ? "Cam kết"
                  : "Gói trả phí"}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={openLogin}
              className="cursor-pointer text-gray-600 hover:text-orange-500 font-medium"
            >
              Đăng nhập
            </button>
            <button onClick={openRegister} className={orangeButton}>
              Bắt đầu ngay
            </button>
          </div>

          <button
            className="md:hidden px-3 py-2 border rounded-md text-orange-500 border-orange-500"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white shadow-md">
            <div className="flex flex-col items-center py-4 space-y-2">
              {["about", "commitments", "pricing"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => scrollToSection(tab as any)}
                  className="w-3/4 px-4 py-2 font-semibold rounded-lg text-orange-500 border border-orange-500 hover:bg-orange-500 hover:text-white transition-colors"
                >
                  {tab === "about"
                    ? "Về chúng tôi"
                    : tab === "commitments"
                    ? "Cam kết"
                    : "Pricing"}
                </button>
              ))}
              <button
                onClick={openLogin}
                className="cursor-pointer text-gray-600 hover:text-orange-500 font-medium mt-2"
              >
                Đăng nhập
              </button>
              <button
                onClick={openRegister}
                className={orangeButton + " w-3/4 text-center mt-2"}
              >
                Bắt đầu ngay
              </button>
            </div>
          </div>
        )}
      </header>

      <main className="pt-20">
        {/* Hero */}
        <section className="bg-gradient-to-r from-orange-400 to-orange-600 text-white relative overflow-hidden h-[90vh]">
          <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 flex flex-col justify-center z-10 text-center md:text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0, transition: { duration: 0.8 } }}
                exit={{ opacity: 0, x: -50, transition: { duration: 0.8 } }}
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
                className="w-full sm:w-auto"
              >
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold drop-shadow-lg break-words">
                  {heroContents[index].title}
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-white/90 mt-4 mb-6 break-words">
                  {heroContents[index].subtitle}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mt-4">
              <button
                onClick={openRegister}
                className={`${outlineButton} w-full sm:w-auto text-center`}
              >
                Bắt đầu ngay
              </button>
            </div>
          </div>

          <img
            src="/man-banner.png"
            alt="Hero Banner"
            className="absolute bottom-0 right-4 w-auto h-60 sm:h-96 md:h-[28rem] lg:h-[32rem] hidden md:block"
          />
        </section>
        <div className="p-6 sm:p-20 bg-orange-200 flex flex-col gap-8">
          {/* About */}{" "}
          <SlideSection direction="left">
            {" "}
            <section
              ref={aboutRef}
              className="py-16 px-4 sm:px-6 lg:px-20 text-center bg-white rounded-xl shadow-lg"
            >
              {" "}
              <h2 className="text-3xl sm:text-4xl font-bold text-orange-500 mb-4">
                {" "}
                Về chúng tôi{" "}
              </h2>{" "}
              <p className="text-gray-700 mb-2">
                {" "}
                Thành lập năm 2025, QuickLangua mang sứ mệnh giúp mọi người học
                tiếng Anh hiệu quả mỗi ngày.{" "}
              </p>{" "}
              <p className="text-gray-700 mb-8">
                {" "}
                Chúng tôi tự hào với phương pháp học ngắn nhưng chất lượng cao:
                flashcards thông minh, mini-test 10 phút, AI cá nhân hóa lộ
                trình học.{" "}
              </p>{" "}
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8 flex-wrap">
                {" "}
                {features.map((f, i) => (
                  <FadeSection key={i} delay={i * 0.2}>
                    {" "}
                    <motion.div
                      whileHover={{
                        scale: 1.03,
                        boxShadow: "0 10px 20px rgba(255, 159, 49, 0.3)",
                      }}
                      className="bg-white border border-orange-500 shadow-md rounded-lg p-6 sm:p-8 w-full sm:w-72 mx-auto mb-4 sm:mb-0 cursor-pointer transition-all"
                    >
                      {" "}
                      <div className="text-4xl mb-4">{f.icon}</div>{" "}
                      <h3 className="text-xl font-semibold text-orange-500 mb-2">
                        {" "}
                        {f.title}{" "}
                      </h3>{" "}
                      <p className="text-gray-600">{f.desc}</p>{" "}
                    </motion.div>{" "}
                  </FadeSection>
                ))}{" "}
              </div>{" "}
              <div className="flex flex-col sm:flex-row justify-center gap-8 flex-wrap">
                {" "}
                {stats.map((s, i) => (
                  <div className="w-full sm:w-auto" key={i}>
                    {" "}
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-orange-500 mb-2">
                      {" "}
                      {s.value}{" "}
                    </h3>{" "}
                    <p className="text-gray-600">{s.label}</p>{" "}
                  </div>
                ))}{" "}
              </div>{" "}
            </section>{" "}
          </SlideSection>{" "}
          {/* Commitments */}{" "}
          <SlideSection direction="right">
            {" "}
            <section
              ref={commitmentsRef}
              className="py-16 px-4 sm:px-6 lg:px-20 text-center bg-white rounded-xl shadow-md"
            >
              {" "}
              <FadeSection>
                {" "}
                <h2 className="text-3xl sm:text-4xl font-bold text-orange-500 mb-12">
                  {" "}
                  Cam kết của chúng tôi{" "}
                </h2>{" "}
                <div className="flex flex-col sm:flex-row justify-center gap-6 items-stretch flex-wrap">
                  {" "}
                  {commitments.map((c, i) => (
                    <FadeSection key={i} delay={i * 0.2}>
                      {" "}
                      <motion.div
                        whileHover={{
                          scale: 1.05,
                          boxShadow: "0 10px 20px rgba(255, 159, 49, 0.2)",
                        }}
                        className="bg-white rounded-lg border-2 border-orange-500 p-6 sm:p-8 w-full sm:w-72 mx-auto mb-4 sm:mb-0 flex flex-col h-full cursor-pointer transition-all"
                      >
                        {" "}
                        <div className="flex-1 flex flex-col justify-between">
                          {" "}
                          <div className="text-4xl mb-4">{c.icon}</div>{" "}
                          <h3 className="text-xl font-semibold text-orange-500 mb-2">
                            {" "}
                            {c.title}{" "}
                          </h3>{" "}
                          <p className="text-gray-600">{c.desc}</p>{" "}
                        </div>{" "}
                      </motion.div>{" "}
                    </FadeSection>
                  ))}{" "}
                </div>{" "}
              </FadeSection>{" "}
            </section>{" "}
          </SlideSection>
          {/* Pricing */}
          <div className="p-6 sm:p-20 bg-orange-200 flex flex-col gap-8">
            <SlideSection direction="left">
              <section
                ref={pricingRef}
                className="bg-white py-16 px-4 sm:px-6 lg:px-20 text-center rounded-xl shadow-lg"
              >
                <FadeSection>
                  <h2 className="text-3xl sm:text-4xl font-bold text-orange-500 mb-12">
                    Gói trả phí
                  </h2>
                  <div className="flex flex-col sm:flex-row justify-center gap-6 flex-wrap">
                    {pricingPlans.map((p, i) => (
                      <FadeSection key={i} delay={i * 0.2}>
                        <div className="bg-white rounded-lg p-6 sm:p-8 w-full sm:w-72 mx-auto mb-4 sm:mb-0 border-2 border-orange-400 shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300">
                          <h3 className="text-xl font-semibold text-orange-500 mb-2">
                            {p.title}
                          </h3>
                          <h4 className="text-3xl font-bold mb-4 text-black">
                            {p.price}
                          </h4>
                          <ul className="text-gray-600 mb-4 ">
                            {p.features.map((f, idx) => (
                              <li key={idx}>{f}</li>
                            ))}
                          </ul>
                          <button
                            onClick={openRegister}
                            className={orangeButton}
                          >
                            Bắt đầu
                          </button>
                        </div>
                      </FadeSection>
                    ))}
                  </div>
                </FadeSection>
              </section>
            </SlideSection>
          </div>
        </div>
      </main>

      {/* Modal auth */}
      <Modal isOpen={modalOpen} onClose={handleCloseModal}>
        <AuthForm initialMode={modalMode} onSuccess={handleSubmit} />
      </Modal>

      <Footer />
    </div>
  );
}
