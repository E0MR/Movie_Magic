import './Settings.css'

import { useState } from 'react'

import { setTheme } from "../../store/appSlice"
import { useSelector, useDispatch } from "react-redux"

function Settings() {
  const [settings, setSettings] = useState(false);
  
  const theme = useSelector((state) => state.app.theme);
  const dispatch = useDispatch();
  
  const handleOpenSettings = () => {
    setSettings(!settings);
  }
  
  {/*&#127769; &#127761; &#9728;*/}
  
  return (
    <div className={`settings ${settings ? 'open' : ''}`}>
      <div className={`closed ${settings ? 'inner' : ''}`} onClick={handleOpenSettings}>
        {settings ? <span>&#10018;</span> : <span>&#10059;</span>}
      </div>
      <div className="setting theme" onClick={() => {dispatch(setTheme())}}>
        {theme ? <span>&#9733;</span> : <span>&#9728;</span>}
      </div>
      <div className="setting lang" onClick={()=>{}}>en</div>
    </div>
    );
}

export default Settings
