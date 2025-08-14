import { Burger, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import logo from '../assets/logo1.png';

const WebHeader = () => {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <header
      className="fixed top-0 left-0 w-full border-b border-gray-200 dark:border-gray-700 px-4 z-50"
      style={{ backgroundColor: '#D3B5F8', borderBottom: '1px solid #830999'  }}
    >
      <div className="flex justify-between items-center h-14 sm:h-16 md:h-20 lg:h-24">
        <Group>
          <Burger opened={opened} onClick={toggle} size="sm" className="sm:hidden" />
          <div className="flex items-center -mt-5 sm:mt-0 sm:ml-2 lg:ml-4">
            <img
              src={logo}
              alt="Company Logo"
              className="h-8 w-auto sm:h-10 md:h-12 lg:h-14 object-contain"
              style={{ maxWidth: '200px' }}
            />
          </div>
        </Group>
      </div>
    </header>
  );
};

export default WebHeader;
