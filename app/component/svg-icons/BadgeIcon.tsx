
interface BadgeIconProps {
    className?: string;
}

const BadgeIcon = ({ className }: BadgeIconProps) => {
    return (
        <svg viewBox="0 0 32 32" fill="none" className={className}>
            <path
                d="M16 5 9 8v7c0 6 3.2 9.6 7 12 3.8-2.4 7-6 7-12V8l-7-3Z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
            />
            <path
                d="m12.5 16 2.5 2.5 4.5-5"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default BadgeIcon