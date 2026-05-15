type CafeCardProps = {
  name: string;
  location: string;
  rating: string;
};

export default function CafeCard(props: CafeCardProps) {
  return (
    <div className="bg-[#111] border border-gray-800 rounded-2xl p-6 hover:border-gray-600 transition">

      <div className="flex items-center justify-between">

        <h2 className="text-2xl font-semibold">
          {props.name}
        </h2>

        <span className="bg-white text-black px-3 py-1 rounded-lg text-sm font-bold">
          ⭐ {props.rating}
        </span>

      </div>

      <p className="text-gray-400 mt-3">
        {props.location}
      </p>

      <div className="flex gap-3 mt-6">

        <button className="bg-white text-black px-5 py-2 rounded-xl font-semibold">
          Visit
        </button>

        <button className="border border-gray-700 px-5 py-2 rounded-xl">
          Details
        </button>

      </div>

    </div>
  );
}