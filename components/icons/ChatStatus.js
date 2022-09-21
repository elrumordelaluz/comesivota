export default function ChatStatusIcon(props) {
  return (
    <svg viewBox="0 0 28.33 27.01" {...props}>
      <path
        d="M23.43 13.97a8.72 8.72 0 0 1-5.42 8.07M6.62 10.66a8.74 8.74 0 0 1 8.08-5.42M11.95 22.25a8.75 8.75 0 0 1-5.79-6.54"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <circle cx="21.74" cy="7.2" r="2.95" fill="var(--status, #f7f7f7)" />
    </svg>
  )
}
