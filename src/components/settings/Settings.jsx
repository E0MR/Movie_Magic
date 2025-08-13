import './Settings.css'

import { useState, useEffect } from 'react'

function Settings() {
  const [settings, setSettings] = useState(false);
  const [theme, setTheme] = useState(true); // Dark is defaukt
  
  const handleOpenSettings = () => {
    setSettings(!settings);
  }
  
  const handleTheme = () => {
    setTheme(!theme);
  }
  
  {/*&#127769; &#127761; &#9728;*/}
  
  return (
    <div className={`settings ${settings ? 'open' : ''}`} onClick={handleOpenSettings} >
      {settings ? <span>&#10018;</span> : <span>&#10059;</span>}
      <div className="setting theme" onClick={handleTheme}>
      {theme ? <span>&#127765;</span> : <span>&#9737;</span>}
      </div>
      <div className="setting lang" onClick={()=>{}}>en</div>
    </div>
    );
}

export default Settings
