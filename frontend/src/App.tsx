// import SidebarAdmin from './components/./sidebarAdmin.tsx';
import UserSidebar from "./components/sidebarUser.tsx";

function App() {
    return (

        <div>
            {/*<SidebarAdmin/>*/}
            <UserSidebar userName="John Doe" userEmail="john@example.com" />
        </div>
    );
}

export default App;
