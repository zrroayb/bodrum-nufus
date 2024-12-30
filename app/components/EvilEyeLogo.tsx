export default function EvilEyeLogo() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="50" cy="50" r="45" fill="#00539C" /> {/* Outer dark blue */}
      <circle cx="50" cy="50" r="35" fill="white" />
      <circle cx="50" cy="50" r="25" fill="#00A2E8" /> {/* Light blue */}
      <circle cx="50" cy="50" r="15" fill="#2B3990" /> {/* Medium blue */}
      <circle cx="50" cy="50" r="8" fill="black" />
      <circle cx="47" cy="47" r="3" fill="white" /> {/* Reflection */}
    </svg>
  );
} 