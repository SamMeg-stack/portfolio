import Star from "@/assets/icons/Star";

const words = [
  { id: 1, name: "Performant" },
  { id: 2, name: "Accessible" },
  { id: 3, name: "Secure" },
  { id: 4, name: "Interactive" },
  { id: 5, name: "Scalable" },
  { id: 6, name: "User Friendly" },
  { id: 7, name: "Responsive" },
  { id: 8, name: "Maintainable" },
  { id: 9, name: "Search Optimized" },
  { id: 10, name: "Usable" },
  { id: 11, name: "Reliable" },
];

function Tape() {
  return (
    <div className="py-16 lg:py-42 overflow-x-clip">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 -rotate-3 -mx-1">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex flex-none gap-4 py-3">
            {words.map((word) => (
              <div key={word.id} className="inline-flex gap-4 items-center">
                <span className="text-gray-900 uppercase font-extrabold text-sm">
                  {word.name}
                </span>
                <Star classname="size-6 text-gray-900 -rotate-12" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tape;
