export default function CardCart({ url, name, price, onRemove }) {
  return (
    <div className="border-2 rounded-md flex flex-col sm:flex-row items-center justify-between p-4 my-4 w-full gap-4">
      <img
        src={url}
        alt={name}
        className="w-24 h-24 sm:w-32 sm:h-32 object-contain shrink-0"
      />

      <h2 className="text-base sm:text-xl font-light text-center sm:text-left flex-1 line-clamp-2">
        {name}
      </h2>
      <h2 className="text-lg sm:text-xl font-medium whitespace-nowrap">
        $ {price}
      </h2>
      <button
        onClick={onRemove}
        className="text-red-500 font-semibold px-3 py-1"
      >
        Remove
      </button>
    </div>
  );
}
