// Outlined quarter-circles and triangles used as decoration beside CTAs.
const GeometricShapes = ({ className = '' }: { className?: string }) => (
    <svg
        viewBox="0 0 332 332"
        fill="none"
        stroke="#DDDDDD"
        strokeWidth="1.2"
        aria-hidden
        className={className}
    >
        <path d="M165 0 A165 165 0 0 0 0 165 L165 165 Z" />
        <path d="M166 82 L248 0 L330 82 Z" />
        <path d="M166 165 L248 83 L330 165 Z" />
        <circle cx="82.5" cy="248.5" r="82.5" />
        <path d="M166 166 A82 82 0 0 1 166 330 Z" />
        <path d="M330 166 A82 82 0 0 0 330 330 Z" />
    </svg>
);

export default GeometricShapes;
