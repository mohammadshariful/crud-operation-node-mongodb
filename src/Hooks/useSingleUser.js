import { useEffect, useState } from "react";

const useSingleUser = (id) => {
  const [user, setUser] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/user/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [id]);
  return [user];
};

export default useSingleUser;
