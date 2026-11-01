interface SlashProps {
    className?: string;
}

const Slash = ({ className }: SlashProps) => {
    return (
        <svg
            aria-hidden="true"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            className={className}
        >
            <path d="M13 3 7 17" />
        </svg>
    )
}

export default Slash