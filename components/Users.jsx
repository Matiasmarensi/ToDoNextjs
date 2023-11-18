import React from "react";
import Link from "next/link";

export default function Users({ users }) {
  return (
    <ul>
      {users.map((user) => (
        <Link key={user.id} href={`/users/${user.id}`}>
          <li className="bg-slate-300 mb-2 p-4 rounded-md flex justify-between text-black">
            <div className="">
              <h5 className="font-bold">
                {user.id} {user.first_name} {user.last_name}
              </h5>
              <p className="text-slate-555">Email: {user.email}</p>
            </div>
            <img className="rounded-full w-20" src={user.avatar} alt="avatar" />
          </li>
        </Link>
      ))}
    </ul>
  );
}
