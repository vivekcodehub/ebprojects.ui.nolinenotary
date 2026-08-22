
interface ClockIconProps {
    className?: string;
}

const ClockIcon = ({ className }: ClockIconProps) => {
    return (
        <svg viewBox="0 0 32 32" fill="none" className={className}>
            <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="1.6" />
            <path
                d="M16 9v7l5 3"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default ClockIcon