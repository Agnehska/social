import React, { useState } from "react";
import Post from "../components/Post";
import userStore from "../stores/user-store";
import { useFetchData } from "../assets/hooks/useFetchData";

export const Wall = () => {
  const [isLiked, setIsLiked] = useState(false);
  const { token } = userStore;
  const {res:posts} = useFetchData('GET', 'posts', null, token)
  
  return (
    <section className="w-full mx-auto w-full px-3 pt-4 dark:bg-gray-800 dark:text-white">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 w-full">
        {posts?.map(post => {
          return(
            <Post key={post._id} post={post} />
          )
        })}
        <div className="border p-7 rounded-xl bg-white dark:bg-gray-700 drop-shadow-md border-neutral-200/50 col-span-5 flex flex-col gap-y-10 justify-between">
          <div className="flex flex-col">
            <img
              src="https://randomuser.me/api/portraits/women/30.jpg"
              alt="John Doe"
              className="h-10 w-10"
            />
            <p className="pt-2 text-sm font-semibold">Emily Smith</p>
            <p className="text-sm font-medium text-slate-700/70 dark:text-gray-400">
              Marketing Manager at ABC Company
            </p>
          </div>
          <div className="flex flex-col gap-y-3.5">
            <p className="font-bold text-xl">Efficient customer support</p>
            <p className="font-medium text-slate-700/90 dark:text-gray-300">
              The customer support team at our service is incredibly responsive
              and helpful. They went above and beyond to assist me with my
              issue.
            </p>
          </div>
          <div className="post__picture">
            <img src="https://plus.unsplash.com/premium_photo-1671707015876-1c0e51c92eef?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="картинка" />
          </div>
          <svg
            onClick={() => setIsLiked(!isLiked)}
            className="h-10 w-10 text-red-500"
            viewBox="0 0 24 24"
            fill={isLiked ? "red" : 'none'}
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {" "}
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </div>
        <div className="border p-7 rounded-xl bg-white dark:bg-gray-700 drop-shadow-md border-neutral-200/50 col-span-5 flex flex-col gap-y-10 justify-between">
          <div className="flex flex-col gap-y-3.5">
            <p className="font-bold text-xl">Seamless integration process</p>
            <p className="font-medium text-slate-700/90 dark:text-gray-300">
              Integrating our systems with our service was smooth and
              hassle-free. The support team guided us through every step of the
              process.
            </p>
          </div>
          <div className="flex flex-col">
            <img
              src="https://randomuser.me/api/portraits/women/90.jpg"
              alt="Jane Doe"
              className="h-10 w-10"
            />
            <p className="pt-2 text-sm font-semibold">Sarah Brown</p>
            <p className="text-sm font-medium text-slate-700/70 dark:text-gray-400">
              CTO at XYZ Corporation
            </p>
          </div>
        </div>
        {/* <div
            className="border p-7 rounded-xl bg-white dark:bg-gray-700 drop-shadow-md border-neutral-200/50 col-span-2 flex flex-col gap-y-10 justify-between">
            <div className="flex flex-col gap-y-3.5">
                <p className="font-bold text-xl">Reliable service uptime</p>
                <p className="font-medium text-slate-700/90 dark:text-gray-300">Our service has consistently maintained high uptime,
                ensuring that our operations run smoothly without any disruptions.</p>
            </div>
            <div className="flex flex-col">
                <img src="https://randomuser.me/api/portraits/men/90.jpg" alt="Ash Doe" className="h-10 w-10"/>
                <p className="pt-2 text-sm font-semibold">James White</p>
                <p className="text-sm font-medium text-slate-700/70 dark:text-gray-400">COO at XYZ Corporation</p>
            </div>
            </div> */}
      </div>
    </section>
  );
};
