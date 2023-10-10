import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  //   const [data, setData] = useState([]);

  //   useEffect(() => {
  //     fetch("https://api.github.com/users/ShuklaAbhishek99")
  //       .then((res) => res.json())
  //       .then((data) => setData(data));
  //   }, []);

  return (
    <>
      <div className="m-4 p-2 bg-gray-800 flex justify-center flex-col text-center text-white text-3xl rounded-lg">
        <h1 className="">{data.name} </h1>
        <img
          className="m-3 p-3 mx-auto max-w-md"
          src={data.avatar_url}
          alt="Github Avatar"
        />
        <p>Github Followers: {data.followers}</p>
      </div>
    </>
  );
}

export default Github;

// this code should be in different file, this is done just for ease
// if we write the code here fast refresh won't work
// export const githubInfoLoader = async () => {
//   const response = await fetch("https://api.github.com/users/ShuklaAbhishek99");
//   return response.json();
// };
