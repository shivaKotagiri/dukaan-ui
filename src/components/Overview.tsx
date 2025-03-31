
function Overview() {
  return (
    <div className="flex justify-between mt-3">
      <div className="font-semibold text-xl mt-3">
        Overview
      </div>
      <div className="flex p-2 mt-1 mr-5 border border-gray-300 rounded-md cursor-pointer">
        <div className="">
          This Month
        </div>
        <div className="ml-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down-icon lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
        </div>
      </div>

    </div>
  )
}

export default Overview
