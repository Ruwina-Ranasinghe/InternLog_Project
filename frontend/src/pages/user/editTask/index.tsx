import EditTaskForm from "../../../components/editTask";
import SidebarUser from "../../../components/sidebarUser";
import WebHeader from "../../../components/webHeader";

const EditTask = () => {
    return (
                
        <div>
            <WebHeader/>
            <div className="flex">
                <SidebarUser userName={"USER"} userEmail={"user@gmail.com"} />
                <main className="flex-1 ml-0 md:ml-64 mt-14 sm:mt-16 md:mt-20 lg:mt-24 p-4 overflow-y-auto">
                    <div className="lg:p-10 lg:pt-20 p-3 pt-10">
                        <div>
                            <EditTaskForm />
                        </div>
                    </div>
                    
                </main>
            </div>

        </div>
        
    )
}

export default EditTask;