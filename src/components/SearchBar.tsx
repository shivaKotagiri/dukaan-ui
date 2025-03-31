
function SearchBar() {
  return (
    <div className="py-3 md:py-0 w-full md:w-auto order-3 md:order-2 mb-4 md:mb-2 mt-3">
      <form className="w-full md:max-w-sm">
        <label htmlFor="default-search" className="mb-2 text-md font-medium text-black sr-only">Search</label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
          </div>
          <input type="search" id="default-search" className="block w-full p-2 ps-10 text-md text-gray-900 rounded-sm border border-gray-300  focus:outline-none" placeholder="Order ID or transaction ID" required />
        </div>
      </form>
    </div>
  )
}

export default SearchBar
