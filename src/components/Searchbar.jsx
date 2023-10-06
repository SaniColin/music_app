import { useNavigate } from "react-router-dom";
const Searchbar = () => {
  const navigate = useNavigate();
  const search = (e) => {
    if (e.target.value === "") navigate(`/`);
    else navigate(`/search/${e.target.value}`);
  };
  return (
    <div className="relative m-4 flex">
      <input
        type="text"
        placeholder="Search"
        className="rounded-full py-2 px-4 border border-gray-300 bg-transparent text-white focus:outline-none focus:border-blue-500"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            search(e);
          }
        }}
      />
      {/* <button class="px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-r-lg">
        <svg
          class="w-5 h-5 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm6.707-6.293l-4-4a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414-1.414z"></path>
        </svg>
      </button> */}
    </div>
  );
};

export default Searchbar;
