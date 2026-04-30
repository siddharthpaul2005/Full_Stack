
import UserProfile from "./UserProfile";

function Icon({ username }) {
  return (
    <div>
      <h3>Icon Component</h3>
      <UserProfile username={username} />
    </div>
  );
}

export default Icon;