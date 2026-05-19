type ServiceCardProps = {
  title: string;
  description: string;
};

export default function ServiceCard({
  title,
  description,
}: ServiceCardProps) {
  return (
    <div className="bg-[#111] border border-gray-800 rounded-2xl p-6 hover:border-gray-600 transition">

      <h2 className="text-2xl font-semibold">
        {title}
      </h2>

      <p className="text-gray-400 mt-4 leading-7">
        {description}
      </p>

    </div>
  );
}