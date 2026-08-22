interface CheckListIconProps {
    className?: string;
}

const CheckListIcon = ({className}: CheckListIconProps) => {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className}>
      <rect
        x="6"
        y="4"
        width="20"
        height="24"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="m10.5 11 1.7 1.7L15.5 9"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M18.5 10.5h7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path
        d="m10.5 18 1.7 1.7L15.5 16"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M18.5 17.5h7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

export default CheckListIcon