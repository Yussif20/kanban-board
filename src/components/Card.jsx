export const Card = ({ title }) => {
  return (
    <div className="group/card relative min-h-16 overflow-hidden rounded-lg bg-white px-4 py-3 shadow-sm">
      <h2 className="text-heading-m">{title}</h2>
    </div>
  );
};
