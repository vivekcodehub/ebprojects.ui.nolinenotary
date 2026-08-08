interface CheckProps {
    className?: string;
}

const Check = ({ className }: CheckProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="10" viewBox="0 0 13 10" fill="none" className={className}>
            <path d="M4.275 9.01875L0 4.74375L1.06875 3.675L4.275 6.88125L11.1562 0L12.225 1.06875L4.275 9.01875Z" fill="currentColor" />
        </svg>
    )
}

export default Check