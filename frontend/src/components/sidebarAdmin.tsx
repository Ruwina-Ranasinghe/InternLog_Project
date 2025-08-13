import { useState } from 'react';
import { IconUserCircle, IconMenu2, IconX } from '@tabler/icons-react';

export default function SidebarAdmin() {
    const [active, setActive] = useState('dashboard');
    const [isOpen, setIsOpen] = useState(false);

    const handleLinkClick = (link: string) => {
        setActive(link);
        if (window.innerWidth < 768) {
            setIsOpen(false); // close sidebar on mobile after clicking
        }
    };

    return (
        <>
            {/* Hamburger icon for mobile */}
            <div className="md:hidden fixed top-4 left-4 z-50">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="p-2 bg-purple-800 text-white rounded-md shadow-md"
                >
                    {isOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
                </button>
            </div>

            {/* SidebarAdmin */}
            <nav
                className={`
          fixed top-0 left-0 h-screen w-64 bg-purple-200 p-4 flex flex-col justify-between
          transform transition-transform duration-300 ease-in-out z-50
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0 md:static md:w-64
        `}
            >
                {/* Navigation */}
                <div className="flex flex-col gap-2 mt-4">
                    <button
                        className={`w-full text-left px-3 py-2 rounded ${
                            active === 'dashboard' ? 'bg-purple-800 text-white' : 'bg-purple-300 text-purple-900'
                        }`}
                        onClick={() => handleLinkClick('dashboard')}
                    >
                        Dashboard
                    </button>
                    <button
                        className={`w-full text-left px-3 py-2 rounded ${
                            active === 'tasks' ? 'bg-purple-800 text-white' : 'bg-purple-300 text-purple-900'
                        }`}
                        onClick={() => handleLinkClick('tasks')}
                    >
                        All Tasks
                    </button>
                </div>

                {/* Bottom user profile */}
                <div className="flex flex-col items-center gap-2 pb-4">
                    <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center">
                        <IconUserCircle size={30} />
                    </div>
                    <p className="text-sm text-gray-700 select-none">Admin</p>
                    <p className="text-xs text-gray-500 select-none">user@email.com</p>
                    <button className="mt-2 w-full bg-purple-800 text-white text-sm py-1 rounded-full">
                        Logout
                    </button>
                </div>
            </nav>

            {/* Overlay for mobile when sidebar is open */}
            {isOpen && (
                <div
                    onClick={() => setIsOpen(false)}
                    className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
                ></div>
            )}
        </>
    );
}
