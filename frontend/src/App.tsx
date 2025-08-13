<<<<<<< Updated upstream
// import SidebarAdmin from './components/./sidebarAdmin.tsx';
import UserSidebar from "./components/sidebarUser.tsx";
=======
import  { NavbarSimpleColored }  from './components/sidebar';
import  { WebHeader }  from './components/webHeader';
>>>>>>> Stashed changes

function App() {
    return (

        <div>
<<<<<<< Updated upstream
            {/*<SidebarAdmin/>*/}
            <UserSidebar userName="John Doe" userEmail="john@example.com" />
=======
            <WebHeader/>
            <NavbarSimpleColored/>
>>>>>>> Stashed changes
        </div>
    );
}

export default App;
