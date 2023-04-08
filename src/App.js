import { useEffect } from "react";
import useDrivePicker from "react-google-drive-picker";
 
function App() {
  const [openPicker] = useDrivePicker();
 
  
  const handleOpenPicker = () => {
    openPicker({
      clientId:"1007981399494-o0php876b79q615p5qpl50c76mj2ckrd.apps.googleusercontent.com",
      developerKey:"AIzaSyAERz6jb51QKQwE79DBPtTRd9Ixng_T_6c" ,
      viewId:"DOCS",
      
      token:"ya29.a0Ael9sCP7mBI38MRBr2uITwLRmQ_LFgM8oFYgGdG0pER_Ggj0YOqmCLogfW84wFFDg17W-IYA3PrOtwlgSVTgD98wMv2hFw2y-gLpSw-uvVS6bupcJ2riop4oR0AnbANmbn98ry1SmIbq9mcxCZ77Glos-AVPaCgYKASkSARASFQF4udJhneDNRwNWLmxYBPZxeZQc3w0163", // pass oauth token in case you already have one
      redirectUri:"https://developers.google.com/oauthplayground",
      showUploadView: true,
       
      
      refreshtoken:"1//04dRbz74JqOf1CgYIARAAGAQSNwF-L9Ired6YrtQmDNn1344BmVdt4p4oQs0VDCBfxa5OwM_rP1cMoIx5FBXXK5CWJhiE0szuB5Y",
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