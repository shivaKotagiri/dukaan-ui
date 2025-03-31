import TableTopBarSection from "./TableTopBarSection"
import TableSection from "./TableSection";

function UserTransactionDetails() {

  return (
    <>
      <div className="p-2 bg-white mt-5">
        <div className="mt-0">
          <TableTopBarSection />
        </div>
        <div className="p-5">
          <TableSection />
        </div>
      </div>
    </>
  )
}

export default UserTransactionDetails
