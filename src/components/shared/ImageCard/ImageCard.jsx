import { cn } from '@utils/cn'
import styles from './ImageCard.module.css'

export default function ImageCard({
  src,
  alt,
  caption,
  className,
  overlayGradient = true,
}) {
  return (
    <figure className={cn(styles.figure, className)}>
      <div className={styles.inner}>
        <div className={styles.placeholder} aria-hidden />
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className={styles.img}
        />
        {overlayGradient && <div className={styles.overlay} />}
        {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
      </div>
    </figure>
  )
}
