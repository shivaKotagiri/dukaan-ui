
function TransactonsBar() {
  return (
    <>
    <div>
      <div className="font-semibold text-xl mt-5  ">
          Transactions | This Month
        </div>
        <div className='flex mt-4 text-sm'>
          <button className='bg-[#E6E6E6] rounded-2xl p-1.5 text-gray-500 mr-3 w-26 cursor-pointer'>Payouts (22)</button>
          <button className='bg-[#146EB4] rounded-2xl p-1.5 text-white w-26 cursor-pointer'>Refunds (6)</button>
        </div>
    </div>

    </>
  )
}

export default TransactonsBar
