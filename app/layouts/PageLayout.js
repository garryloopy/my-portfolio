import { motion } from "framer-motion";

export default function PageLayout({ children, className }) {
  return (
    <motion.main
      className={`min-h-screen w-full flex flex-col p-6 ${className} bg-zinc-900/25`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {children}
    </motion.main>
  );
}
