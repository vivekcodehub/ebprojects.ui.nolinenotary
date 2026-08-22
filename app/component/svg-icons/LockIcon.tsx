interface LockIconProps {
    className?: string;
}

const LockIcon = ({ className }: LockIconProps) => {
    return (
        <svg viewBox="0 0 32 32" fill="none" className={className}>
            <rect
                x="8"
                y="15"
                width="16"
                height="11"
                rx="2"
                stroke="currentColor"
                strokeWidth="1.6"
            />
            <path
                d="M11.5 15v-3.5a4.5 4.5 0 0 1 9 0V15"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
            />
        </svg>
    )
}

export default LockIcon