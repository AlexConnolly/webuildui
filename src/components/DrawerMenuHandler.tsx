import React, { useEffect, useState } from 'react';
import { drawerMenuService, DrawerMenu } from '../services/DrawerMenuService';

const DrawerMenuHandler: React.FC = () => {
  const [currentDrawerMenu, setCurrentDrawerMenu] = useState<DrawerMenu | null>(null);

  useEffect(() => {
    const handleDrawerMenuChange = (drawerMenu: DrawerMenu | null) => {
      setCurrentDrawerMenu(drawerMenu);
    };

    drawerMenuService.subscribe(handleDrawerMenuChange);

    return () => {
      drawerMenuService.unsubscribe(handleDrawerMenuChange);
    };
  }, []);

  if (!currentDrawerMenu) return null;

  return (
    // Background overlay
    <div className="fixed inset-0 bg-black bg-opacity-60 z-40" onClick={() => drawerMenuService.closeCurrent()}>
      {/* Drawer menu */}
      <div
        className="fixed inset-y-0 right-0 flex bg-white w-72 shadow-lg z-50"
        onClick={(e) => {
          e.stopPropagation(); // Prevent click event from closing the drawer
        }}
      >
        <div className="w-full h-full p-6">
          <div className="mb-4">
            <h2 className="text-3xl font-semibold">{currentDrawerMenu.title}</h2>
          </div>
          <ul className="space-y-2">
            {currentDrawerMenu.items.map((item, index) => (
              <li key={index} className="hover:border-slate-600 hover-pointer border-2 text-lg text-slate-500 bg-gray-100 rounded px-3 py-3 cursor-pointer" onClick={() => {
                  drawerMenuService.closeCurrent(item);
              }}>
                {item.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DrawerMenuHandler;
