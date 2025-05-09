interface PlaceholderImageProps {
  name: string;
  size?: number;
  className?: string;
}

export default function PlaceholderImage({ name, size = 200, className = "" }: PlaceholderImageProps) {
  // Generate a consistent color based on the name
  const getColor = (name: string) => {
    const colors = [
      "bg-[#e20074]", // Brand pink
      "bg-[#ff00a0]", // Lighter pink
      "bg-[#d1006a]", // Darker pink
      "bg-[#ff1a8c]", // Another pink variant
    ];
    const index = name.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return colors[index % colors.length];
  };

  // Get initials
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <div
      className={`relative flex items-center justify-center ${getColor(name)} ${className}`}
      style={{ width: size, height: size }}
    >
      <span className="text-white text-4xl font-bold">{initials}</span>
    </div>
  );
} 