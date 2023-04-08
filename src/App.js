import { useEffect } from "react";
import useDrivePicker from "react-google-drive-picker";
 
function App() {
  const [openPicker] = useDrivePicker();
 
  
  const handleOpenPicker = () => {
    openPicker({
      clientId:"1007981399494-o0php876b79q615p5qpl50c76mj2ckrd.apps.googleusercontent.com",
      developerKey:"AIzaSyAERz6jb51QKQwE79DBPtTRd9Ixng_T_6c" ,
      viewId:"DOCS",
      
      token:"ya29.a0Ael9sCPf7l4GfL2PwxPgVbhOrM2Yb68m1wK6O483eUrhUhwELh5oWXYqK_W9DyqeZGo25iItUhS2Cqz7zVyJLpi48XJL4UPUrZvhthWL9ZihUEQa7VvsSCuvQLgKPlA2DFPZZ8QWdefykb-rs5KiQ7G6hpsoaCgYKAWcSARASFQF4udJhQ5Vyz0XsajujDRp7c_Ekog0163", // pass oauth token in case you already have one
      redirectUri:"https://developers.google.com/oauthplayground",
      showUploadView: true,
       
      
      refreshtoken:"1//04IlKUbvPqLFKCgYIARAAGAQSNwF-L9IrqWZ4uvAc1j7T-GKciPMiBx5JA2lJ5g2737ChrG8iG9kGcGN6I8bjHlHH-SusXUJOk3o",
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