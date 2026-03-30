import { motion } from 'framer-motion'

export function WhatsAppFAB() {
  return (
    <motion.a
      href="#"
      title="Chat on WhatsApp"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-[60px] w-[60px] animate-fab-pulse items-center justify-center rounded-full bg-[#25D366] text-[28px] text-white shadow-lg"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      💬
    </motion.a>
  )
}
