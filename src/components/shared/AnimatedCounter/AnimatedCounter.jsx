import { useAnimatedCounter } from '@hooks/useAnimatedCounter'
import { cn } from '@utils/cn'
import styles from './AnimatedCounter.module.css'

export default function AnimatedCounter({
  end,
  prefix = '',
  suffix = '',
  decimals = 0,
  className,
  shimmer = false,
}) {
  const { ref, display } = useAnimatedCounter(end, {
    prefix,
    suffix,
    decimals,
    startWhenVisible: true,
  })

  return (
    <span ref={ref} className={cn(shimmer && 'stat-number-shimmer', styles.num, className)}>
      {display}
    </span>
  )
}
