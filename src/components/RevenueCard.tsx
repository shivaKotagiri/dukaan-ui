interface check{
  RevenueType:string,
  Cash:string,
  Orders:string
}

function RevenueCard(props:check) {
  return (
    <>
      <div className="rounded-md rounded-b-none mt-3 p-5 ml-5 shadow-md mb-0 bg-white">
        <div className="flex">
          <div>{props.RevenueType}</div>
          <div className="ml-3 mt-1">
            <svg className="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" d="M9.529 9.988a2.502 2.502 0 1 1 5 .191A2.441 2.441 0 0 1 12 12.582V14m-.01 3.008H12M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
            </svg>
          </div>
        </div>
        <div className="flex justify-between mt-4 bg-white">
          <div className="text-3xl font-semibold">
            {props.Cash}
          </div>
          <div className="flex text-[#146fb5] translate-y-2 translate-x-3 cursor-pointer">
            <div className={props.Orders=="0"?"hidden":"underline font-base"}>{props.Orders} orders</div>
            <div className={props.Orders=="0"?"hidden":"-translate-y-1.5 -translate-x-1.5"}>
              <svg className="w-10 h-10 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="#146fb5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="m10 16 4-4-4-4"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default RevenueCard
