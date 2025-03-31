
function PayoutCard() {
  return (
    <>
      <div>
        <div className='bg-[#146fb5] hover:bg-[#1174C2] rounded-md rounded-b-none mt-3 p-5 flex-col'>
          <div className="flex">
            <div className="text-white">Next payout</div>
            <div className="ml-3 mt-1">
              <svg className="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" d="M9.529 9.988a2.502 2.502 0 1 1 5 .191A2.441 2.441 0 0 1 12 12.582V14m-.01 3.008H12M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
            </svg>
            </div>
          </div>
          <div className="flex justify-between mt-4">
            <div className="text-white text-3xl font-semibold">
              ₹ 2,312.23
            </div>
            <div className="flex text-white translate-y-2 translate-x-3 cursor-pointer">
              <div className="underline font-base">23 orders</div>
              <div className="-translate-y-1.5 -translate-x-1.5">
                <svg className="w-10 h-10 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="m10 16 4-4-4-4"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#0E4F82] flex justify-between text-white rounded-t-none rounded-md pt-1 pb-2 px-6">
          <div>Next payout date:</div>
          <div>Today, 04:00 PM</div>
        </div>
      </div>
    </>
  )
}

export default PayoutCard;
