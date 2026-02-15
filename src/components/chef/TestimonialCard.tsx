interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
}

const TestimonialCard = ({ quote, name, role }: TestimonialCardProps) => (
  <div className="bg-white rounded-2xl p-8 border border-border relative">
    <div className="text-5xl font-serif text-purple-light leading-none mb-2 opacity-50">"</div>
    <p className="font-sans text-base text-dark leading-[1.7] mb-5 italic">{quote}</p>
    <div>
      <p className="font-sans text-sm font-bold text-dark">{name}</p>
      <p className="font-sans text-[13px] text-gray">{role}</p>
    </div>
  </div>
);

export default TestimonialCard;
