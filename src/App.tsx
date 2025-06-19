import Button from './components/Button';
import { useState, useEffect } from 'react';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="p-8 space-y-4 flex flex-col items-start">
      <Button onClick={toggleTheme}>
        Toggle Theme ({isDarkMode ? 'Dark' : 'Light'})
      </Button>

      <h2 className="text-xl font-semibold dark:text-white">Button Examples:</h2>

      <div className="space-y-2">
        <p className="dark:text-gray-300">Default Button:</p>
        <Button onClick={() => alert('Default clicked!')}>
          Default Action
        </Button>
      </div>

      <div className="space-y-2">
        <p className="dark:text-gray-300">Disabled Button:</p>
        <Button disabled onClick={() => alert('Disabled clicked!')}>
          Disabled Button
        </Button>
      </div>

      <div className="space-y-2">
        <p className="dark:text-gray-300">Custom Styled Button (bg-red-500):</p>
        <Button className="bg-red-500 hover:bg-red-700 text-white dark:bg-red-600 dark:hover:bg-red-800" onClick={() => alert('Custom clicked!')}>
          Custom Button
        </Button>
      </div>

      <div className="space-y-2">
        <p className="dark:text-gray-300">Another Default Button:</p>
        <Button>
          Another Action
        </Button>
      </div>

    </div>
  );
}

export default App;
