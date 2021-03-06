import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Settings() {
  const [auth, { handleSignout }] = useContext(AuthContext);

  return (
    <div>
      Settings
      <div>
        <button onClick={handleSignout}>SIGN OUT</button>
      </div>
    </div>
  );
}

export default Settings;
