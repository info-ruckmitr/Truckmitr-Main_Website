import { motion } from 'framer-motion'
import { imageReveal } from '../../lib/animations'
import { cn } from '../../lib/utils'

interface ImageFrameProps {
  src: string
  alt: string
  className?: string
  /** Tailwind aspect / min-height classes */
  aspect?: string
}

export function ImageFrame({
  src,
  alt,
  className,
  aspect = 'aspect-[4/3]',
}: ImageFrameProps) {
  return (
    <motion.div
      variants={imageReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      className={cn(
        'group relative w-full overflow-hidden rounded-sm border border-[#e8e0d5] bg-[#faf8f5] p-2 shadow-[0_12px_40px_rgba(15,23,42,0.07)]',
        aspect,
        className,
      )}
    >
      <div
        className="pointer-events-none absolute inset-2 z-10 border border-[#b8860b]/25"
        aria-hidden
      />
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover transition-[transform,filter] duration-[1.1s] ease-out group-hover:scale-[1.04] group-hover:brightness-[1.02]"
        loading="lazy"
      />
    </motion.div>
  )
}
