import data from "../data.json";
import { useAuthContext } from "../context/AuthContext";

const Liked = () => {
  const { user } = useAuthContext();
  return (
    <>
      {/* {data.users["ajnlfaiwefnlaksdlvmlaedf"].liked.map((vid) => {
        return <div>{vid.title}</div>;
      })} */}
      {!user ? <div>not logged in</div> : <div>logged in</div>}
    </>
  );
};

export default Liked;
