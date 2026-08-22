
interface BoltIconProps {
    className?: string;
}

const BoltIcon = ({ className }: BoltIconProps) => {
    return (
        <svg viewBox="0 0 32 32" fill="none" className={className}>
      <path
        d="M17.5 5 8 18h7l-1.5 9L24 14h-7l1.5-9Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
    )
}

export default BoltIcon