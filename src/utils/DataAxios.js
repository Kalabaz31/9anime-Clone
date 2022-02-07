import { useAxios } from "use-axios-client";

export default function App(_url) {
  const { data, error, loading } = useAxios({
    url: _url
  });

  if (loading || !data) return "Loading...";
  if (error) return "Error!";

  return data;
}
