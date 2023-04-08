import { useEffect } from "react";
import useDrivePicker from "react-google-drive-picker";
 
function App() {
  const [openPicker] = useDrivePicker();
 
  
  const handleOpenPicker = () => {
    openPicker({
      clientId:"1007981399494-o0php876b79q615p5qpl50c76mj2ckrd.apps.googleusercontent.com",
      developerKey:"AIzaSyAERz6jb51QKQwE79DBPtTRd9Ixng_T_6c" ,
      viewId:"DOCS",
      
      token:"ya29.a0Ael9sCOtUe1vUYNm4TT4589YAVbmboLJVOmsIx5DwsWlGoMTJ5eJ_v3AqX5DXTbtPQJz2lIPDLcZf2VlmLDZdaHgI7M0_7iKbI695ykWwumKf-zwVmnhD6QvNwHgWiQ7lsElz5w_4BG8jRhhR2ec6ERYwMhnaCgYKAV0SARASFQF4udJhwRhQ0FPQngF2qkcHVN-0Mw0163", // pass oauth token in case you already have one
      redirectUri:"https://developers.google.com/oauthplayground",
      showUploadView: true,
       
      
      refreshtoken:"1//04WGGzj_ezReICgYIARAAGAQSNwF-L9Ir-blnNhhGfKXLYFXHC_1k8vhBKknLr1CypKAshKUEhBEN2Bnx2h081nTiunZxhO63E_U",
      showUploadFolders: true,
      supportDrives: true,
      multiselect: true,
      navHidden: true,
      selectFolderEnabled: true,
      
      
    
    });
  };
  
 
 
  return (
      <button onClick={() => handleOpenPicker()}>Upload</button>
  );
}
 
export default App;