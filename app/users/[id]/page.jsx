import React from "react";

async function getUser(id) {
  const res = await fetch(`https://reqres.in/api/users/${id}`);
  const data = await res.json();
  return data.data;
}

export default async function User({ params }) {
  const user = await getUser(params.id);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-blue-900 p-10 rounded-md text-white text-center">
        <img className="m-auto my-4 rounded-full w-20 h-20" loading="lazy" src={user.avatar} alt="s" />
        <h3 className="text-3xl font-bold">
          {user.id} {user.first_name} {user.last_name}
        </h3>
        <p>{user.email}</p>
      </div>
    </div>
  );
}
