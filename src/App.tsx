import SideBar from "./components/SideBar"
import NavBar from "./components/NavBar"
import Overview from "./components/Overview"
import PayoutCard from "./components/PayoutCard"
import RevenueCard from "./components/RevenueCard"
import TransactonsBar from "./components/TransactonsBar"
import UserTransactionDetails from "./components/UserTransactionDetails"
import FooterSection from "./components/FooterSection"

function App() {
  return (
    <div className="flex flex-col md:flex-row bg-[#FAFAFA]">
      <div className="w-full md:w-auto md:fixed bg-white">
        <SideBar />
      </div>

      <div className="w-full md:ml-64">
        <div className="px-4  ">
          <NavBar />
          <hr className="mt-3 border-gray-300" />
          <Overview />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            <div className="w-full">
              <PayoutCard />
            </div>
            <div className="w-full">
              <RevenueCard RevenueType={"Amount Pending"} Cash={"₹ 92,312.20"} Orders={"13"} />
            </div>
            <div className="w-full">
              <RevenueCard RevenueType={"Amount Processed"} Cash={"₹ 23,92,312.19"} Orders={"0"} />
            </div>
          </div>
          <div>
            <TransactonsBar />
          </div>
          <div>
            <UserTransactionDetails />
          </div>
          <div>
            <FooterSection />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
