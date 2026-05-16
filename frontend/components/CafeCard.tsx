type CafeCardProps = {
  name: string;
  location: string;
  rating: string;
  distance: string;
  isOpen: boolean;
  selected: boolean;
  onSelect: () => void;
};

export default function CafeCard({
  name,
  location,
  rating,
  distance,
  isOpen,
  selected,
  onSelect,
}: CafeCardProps) {

  return (

    <div
      onClick={onSelect}
      className={`p-6 rounded-3xl border cursor-pointer transition
      ${
        selected
          ? "border-green-500 bg-green-500/10"
          : "border-gray-800 bg-[#111] hover:border-gray-600"
      }`}
    >

      {/* =========================
          Top Section
      ========================= */}
      <div className="flex items-start justify-between">

        <div>

          <h2 className="text-2xl font-bold">
            {name}
          </h2>

          <p className="text-gray-400 mt-2">
            {location}
          </p>

        </div>

        {/* Rating */}
        <div className="bg-black px-3 py-1 rounded-xl border border-gray-700">

          ⭐ {rating}

        </div>

      </div>

      {/* =========================
          Bottom Section
      ========================= */}
      <div className="flex items-center justify-between mt-6">

        {/* Distance */}
        <p className="text-sm text-gray-400">
          📍 {distance}
        </p>

        {/* Open / Closed */}
        <div
          className={`px-3 py-1 rounded-xl text-sm font-medium
          ${
            isOpen
              ? "bg-green-500/20 text-green-400"
              : "bg-red-500/20 text-red-400"
          }`}
        >
          {isOpen ? "Open" : "Closed"}
        </div>

      </div>

    </div>

  );

}