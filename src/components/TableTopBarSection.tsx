import SearchBar from "./SearchBar"

function TableTopBarSection() {
  return (
    <>
      <div className="flex justify-between items-center bg-white mx-2">
        <div className="flex-1">
          <SearchBar />
        </div>
        <div className="flex space-x-4 ml-2">
          <div className="flex items-center border border-gray-300 p-2 rounded">
            <div className="mr-2">
              Sort
            </div>
            <div>
              <svg className="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M8 20V10m0 10-3-3m3 3 3-3m5-13v10m0-10 3 3m-3-3-3 3"/>
              </svg>
            </div>
          </div>
          <div className="border border-gray-300 p-2 rounded">
            <svg className="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="gray" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 15v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-2m-8 1V4m0 12-4-4m4 4 4-4"/>
            </svg>
          </div>
        </div>
      </div>
    </>
  )
}

export default TableTopBarSection
