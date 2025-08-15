import {WebHeader} from "../../components/webHeader.js";
import SidebarAdmin from "../../components/sidebarAdmin.tsx";
import BarChartComponent from "../../components/barGraph.tsx";

const AdminDashboard =()=>{
    return(
        <div>
            <WebHeader/>
            <div className="flex">
                <SidebarAdmin />
                <main className="flex-1 ml-0 md:ml-64 mt-14 sm:mt-16 md:mt-20 lg:mt-24 p-4 overflow-y-auto">
                    <div className="lg:p-10 lg:pt-50 p-3 pt-10">
                        <BarChartComponent/>
                        <div className="pb-7 text-2xl font-semibold text-[#B453F5]">
                            Total Task Completion Rate : {10*7}%
                        </div>
                    </div>

                </main>
            </div>

        </div>

    )
}

export default AdminDashboard;

