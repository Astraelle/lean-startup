import { FC } from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  text: string;
  name: string;
  title: string;
}

const TestimonialCard: FC<TestimonialCardProps> = ({ text, name, title }) => {
  return (
    <div className="border border-blue-300 p-4 rounded-md shadow-sm w-full max-w-sm">
      <div className="flex mb-2 text-black">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={16} fill="black" className="mr-1" />
        ))}
      </div>
      <p className="italic text-sm mb-3">{text}</p>
      <p className="text-xs font-medium text-gray-800">{name}, {title}</p>
    </div>
  );
};

export default TestimonialCard;