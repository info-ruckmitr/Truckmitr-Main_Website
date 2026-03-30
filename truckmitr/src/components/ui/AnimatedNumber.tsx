import { useAnimatedNumber } from '../../hooks/useAnimatedNumber'

interface AnimatedNumberProps {
  target: number
  suffix?: string
  prefix?: string
  className?: string
  duration?: number
}

export function AnimatedNumber({
  target,
  suffix = '',
  prefix = '',
  className = '',
  duration = 2000,
}: AnimatedNumberProps) {
  const { value, ref } = useAnimatedNumber(target, duration)
  return (
    <span ref={ref} className={className}>
      {prefix}
      {value.toLocaleString('en-IN')}
      {suffix}
    </span>
  )
}
