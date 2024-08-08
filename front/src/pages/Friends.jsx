import React, { useState } from "react";
// import UserStore from '../stores/user-store';
import { observer } from "mobx-react-lite";
import { data } from "../assets/data/data.js";
import OneFriend from "../components/OneFriend.jsx";

const Friends = observer(() => {
  // const { user, errorBack } = UserStore;
  const [search, setSearch] = useState("");

  console.log(data[0]);

  return (
    <>
      <div className=" ml-10 mt-5">
        <input
          className="p-2 bg-gray-50 border border-gray-300"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search users"
        />
      </div>
      <div className="p-4 flex flex-wrap items-center justify-center">
        {data
          .filter((item) => {
            return search.toLowerCase() === ""
              ? item
              :  item.first_name.toLowerCase().includes(search.toLowerCase()) ||
                  item.last_name.toLowerCase().includes(search.toLowerCase()) ;
          })
          .map((user) => (
						<OneFriend key={user.id} user={user} />
					))
					}
      </div>
    </>
  );
});

export default Friends;
