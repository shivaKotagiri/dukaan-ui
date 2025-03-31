
import data from "./data";

function TableSection() {
  return (
    <div className="overflow-x-auto">
      <table className=" w-full text-sm">
        <thead>
          <tr className="text-gray-700">
            <th className="text-left font-semibold text-gray-800 p-2">ORDER ID</th>
            <th className="text-left font-semibold text-gray-800 p-2">STATUS</th>
            <th className="text-center font-semibold text-gray-800 p-2">TRANSACTION ID</th>
            <th className="text-center font-semibold text-gray-800 p-2">REFUND DATE</th>
            <th className="text-right font-semibold text-gray-800 p-2">ORDER AMOUNT</th>
          </tr>
        </thead>
        <tbody>
          {data.details.map((transaction, index) => (
            <tr key={index} className="border-b border-gray-300">
              <td className="text-left p-4 text-[#146EB4] font-semibold">#{transaction.orderId}</td>

              <td className="text-left p-4 flex">
                <div  className={transaction.status=="Successful"?"w-2.5 h-2.5 rounded-full bg-green-400 mr-2 mt-1":transaction.status=="Failed"?"w-2.5 h-2.5 rounded-full bg-red-400  mr-2 mt-1":"w-2.5 h-2.5 rounded-full bg-gray-400 mr-2 mt-1"}></div>
                <div>{transaction.status}</div>
              </td>
              <td className="text-center p-4">{transaction.transactionId}</td>
              <td className="text-center p-4">{transaction.refundDate || "N/A"}</td>
              <td className="text-right p-4">{transaction.orderAmount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableSection;
