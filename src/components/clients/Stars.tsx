interface StarsProps {
  rating: number;
  size?: number;
}

export const Stars = ({ rating, size = 14 }: StarsProps) => {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          width={size}
          height={size}
          viewBox="0 0 20 20"
          fill={i < rating ? "#FBBC05" : "none"}
          stroke={i < rating ? "#FBBC05" : "#d1d5db"}
          strokeWidth="1.2"
        >
          <polygon points="10,1 12.9,7 19.5,7.6 14.5,12 16.2,18.5 10,15 3.8,18.5 5.5,12 0.5,7.6 7.1,7" />
        </svg>
      ))}
    </div>
  );
};
