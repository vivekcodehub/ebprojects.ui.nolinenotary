
interface MapIconProps {
    className?: string;
}

const MapIcon = ({ className }: MapIconProps) => {
    return (
        <svg viewBox="0 0 32 32" fill="none" className={className}>
            <path
                d="M16 27s8-7.4 8-13.5C24 8.7 20.4 5 16 5S8 8.7 8 13.5C8 19.6 16 27 16 27Z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
            />
            <circle cx="16" cy="13.5" r="3" stroke="currentColor" strokeWidth="1.6" />
        </svg>
    )
}

export default MapIcon


