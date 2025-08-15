import {WebHeader} from "../../../components/webHeader.tsx";
import SidebarAdmin from "../../../components/sidebarAdmin.tsx";
import BarChartComponent from "../../../components/barGraph.tsx";
import AdminAnalysisGraph from "../../../components/adminAnalysisGraph.tsx";

const AdminDashboard =()=>{
    return(
        <div>
            <WebHeader/>
            <div className="flex">
                <SidebarAdmin />
                <main className="flex-1 ml-0 md:ml-64 mt-14 sm:mt-16 md:mt-20 lg:mt-24 p-4 overflow-y-auto flex justify-center">
                    <div className="lg:p-10 lg:pt-50 p-3 pt-10">

                        <div className="flex flex-col lg:flex-row gap-y-4 lg:gap-y-0 lg:gap-x-10">
                            <div className="flex-1">
                                <BarChartComponent />
                            </div>
                            <div className="flex-1">
                                <AdminAnalysisGraph />
                            </div>
                        </div>
                        <div className="flex justify-center pt-6">
                            <div className="bg-white rounded-lg shadow-lg px-6 py-4 text-2xl font-semibold text-[#B453F5]">
                                Total Task Completion Rate : {10 * 7}%
                            </div>
                        </div>

                    </div>
                </main>
            </div>

        </div>

    )
}

export default AdminDashboard;

