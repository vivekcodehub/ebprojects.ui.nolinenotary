
interface DocumentIconProps {
    className?: string;
}

const DocumentIcon = ({className}:DocumentIconProps) => {
  return (
     <svg viewBox="0 0 32 32" fill="none" className={className}>
      <path
        d="M10 4h9l5 5v19a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M19 4v5h5" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path
        d="M16 14v6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="16" cy="23.5" r="1" fill="currentColor" />
    </svg>
  )
}

export default DocumentIcon