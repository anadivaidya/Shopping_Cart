export default function Card({url, name, price}) {
  return (
    <div className="border-2 flex flex-col justify-center items-center p-3 grow min-w-70 max-w-100 h-fit rounded-2xl" >
      <div>
        <img src={url} alt={name} />
        <hr />
      </div>
      <h1 className="text-2xl mb-1 mt-1">{name}</h1>
      <h1 className="text-xl mb-2">{price}</h1>
      <button className="rounded-lg text-black bg-orange-600 p-1 transition-all hover:text-white h-9 w-30 active:scale-95">
        Add to Cart
      </button>
    </div>
  );
}
