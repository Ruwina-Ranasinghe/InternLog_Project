import TaskStatusChart from "../../../components/pieChart";
import SidebarUser from "../../../components/sidebarUser";
import TaskStatusCards from "../../../components/taskStatusCard";
import { WebHeader } from "../../../components/webHeader";

const UserDashboard = () => {
    const completedValue = 140;
    const inProgressedValue = 100;
    const todoValue = 30;

    return (
                
        <div>
            <WebHeader/>
            <div className="flex">
                <SidebarUser userName={"USER"} userEmail={"user@gmail.com"} />
                <main className="flex-1 ml-0 md:ml-64 mt-14 sm:mt-16 md:mt-20 lg:mt-24 p-4 overflow-y-auto">
                    <div className="lg:pt-3 p-10 pt-9">
                        <div>
                            <TaskStatusChart completed={completedValue} inProgress={inProgressedValue} todo={todoValue} height={240} innerRadius={80} outerRadius={110}/>
                        </div>
                        <div className="mt-9">
                            <TaskStatusCards completed={completedValue} inProgress={inProgressedValue} todo={todoValue} />
                        </div>
                    </div>
                    
                </main>
            </div>

        </div>
        
    )
}

export default UserDashboard;