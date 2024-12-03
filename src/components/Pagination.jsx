
const Pagination = () => {
  return (
    <div className="flex justify-between items-center p-6">
      <button className="text-gray-600 hover:underline">← Previous</button>
      <div className="space-x-2">
        <button className="text-white bg-black px-3 py-1 rounded">1</button>
        <button className="text-gray-600 hover:underline">2</button>
        <button className="text-gray-600 hover:underline">3</button>
        <span>...</span>
        <button className="text-gray-600 hover:underline">10</button>
      </div>
      <button className="text-gray-600 hover:underline">Next →</button>
    </div>
  );
};

export default Pagination;
