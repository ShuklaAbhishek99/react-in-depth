import { useParams } from "react-router-dom";

function User() {
  const { userId } = useParams();
  return (
    <h1 className="m-3 p-3 text-center text-2xl bg-slate-800 text-white rounded-lg">
      User: {userId}{" "}
    </h1>
  );
}

export default User;
