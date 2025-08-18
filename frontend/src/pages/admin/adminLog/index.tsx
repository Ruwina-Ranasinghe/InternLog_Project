import SidebarAdmin from "../../../components/sidebarAdmin";
import TaskCard from "../../../components/adminTaskCard";
import WebHeader from "../../../components/webHeader";
import UserTasks from "../../../components/adminTaskCard";

const AdminLog = () => {
    return (
                
        <div>
            <WebHeader/>
            <div className="flex">
                <SidebarAdmin />
                <main className="flex-1 ml-0 md:ml-64 mt-14 sm:mt-16 md:mt-20 lg:mt-24 p-4 overflow-y-auto">
                    <div className="lg:p-10 lg:pt-50 p-3 pt-10">
                        <div className="pb-7 text-2xl font-bold" style={{color: '#1f2937'}}>
                            All Tasks
                        </div>
                        <UserTasks/>
                    </div>
                    
                </main>
            </div>

        </div>
        
    )
}

export default AdminLog;