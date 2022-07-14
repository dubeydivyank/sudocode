import data from "../../data.json";
const Liked = () => {
  return (
    <>
      {data.users["ajnlfaiwefnlaksdlvmlaedf"].liked.map((vid) => {
        return <div>vid.title</div>;
      })}
      <div>Liked</div>
    </>
  );
};

export default Liked;
