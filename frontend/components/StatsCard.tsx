type StatsCardProps = {
  number: string;
  label: string;
};

export default function StatsCard({
  number,
  label,
}: StatsCardProps) {
  return (
    <div className="bg-[#111] border border-gray-800 rounded-2xl p-8 text-center hover:border-gray-600 transition">

      <h2 className="text-5xl font-bold">
        {number}
      </h2>

      <p className="text-gray-400 mt-4 text-lg">
        {label}
      </p>

    </div>
  );
}