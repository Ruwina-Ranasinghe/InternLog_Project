import { useState } from 'react';
import {
    Icon2fa,
    IconBellRinging,
    IconDatabaseImport,
    IconFingerprint,
    IconKey,
    IconLogout,
    IconReceipt2,
    IconSettings,
    IconSwitchHorizontal,
} from '@tabler/icons-react';
import { Code, Group } from '@mantine/core';


const data = [
    { link: '', label: 'Notifications', icon: IconBellRinging },
    { link: '', label: 'Billing', icon: IconReceipt2 },
    { link: '', label: 'Security', icon: IconFingerprint },
    { link: '', label: 'SSH Keys', icon: IconKey },
    { link: '', label: 'Databases', icon: IconDatabaseImport },
    { link: '', label: 'Authentication', icon: Icon2fa },
    { link: '', label: 'Other Settings', icon: IconSettings },
];

export function NavbarSimpleColored() {
    const [active, setActive] = useState('Billing');

    return (
        <nav className="h-[700px] w-[300px] p-4 flex flex-col bg-blue-600">
            <div className="flex-1">
                <Group className="pb-4 mb-6 border-b border-blue-700" justify="space-between" align="center">

                    <Code fw={700} className="bg-blue-700 text-white font-bold px-2 py-1 rounded">
                        v3.1.2
                    </Code>
                </Group>

                {/* Navigation links */}
                <div className="flex flex-col gap-2">
                    {data.map((item) => {
                        const Icon = item.icon;
                        const isActive = item.label === active;
                        return (
                            <a
                                key={item.label}
                                href={item.link}
                                onClick={(e) => {
                                    e.preventDefault();
                                    setActive(item.label);
                                }}
                                className={`flex items-center text-sm px-3 py-1 rounded font-medium transition-colors duration-200
                  ${isActive ? 'bg-white text-blue-600 shadow-sm' : 'text-white hover:bg-blue-700 hover:text-white'}`}
                            >
                                <Icon
                                    className={`mr-3 w-6 h-6 ${isActive ? 'text-blue-600' : 'text-blue-100'}`}
                                    stroke={1.5}
                                />
                                <span>{item.label}</span>
                            </a>
                        );
                    })}
                </div>
            </div>

            <div className="pt-4 mt-4 border-t border-blue-700 flex flex-col gap-2">
                <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="flex items-center text-sm text-white px-3 py-1 rounded font-medium hover:bg-blue-700 hover:text-white transition-colors duration-200"
                >
                    <IconSwitchHorizontal className="mr-3 w-6 h-6 text-blue-100" stroke={1.5} />
                    <span>Change account</span>
                </a>

                <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="flex items-center text-sm text-white px-3 py-1 rounded font-medium hover:bg-blue-700 hover:text-white transition-colors duration-200"
                >
                    <IconLogout className="mr-3 w-6 h-6 text-blue-100" stroke={1.5} />
                    <span>Logout</span>
                </a>
            </div>
        </nav>
    );
}
