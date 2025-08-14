
// import SidebarAdmin from './components/./sidebarAdmin.tsx';
import UserSidebar from "./components/sidebarUser.tsx";
import  { WebHeader }  from './components/webHeader';


function App() {
    return (

        <div>
            {/*<SidebarAdmin/>*/}
            <WebHeader/>
            <UserSidebar userName="John Doe" userEmail="john@example.com" />

        </div>
    );
}

export default App;
