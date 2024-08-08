import React, { useState } from 'react'

const Post = ({post}) => {
  const [isLiked, setIsLiked] = useState(false);
  
  return (
    <div className="border p-7 rounded-xl bg-white dark:bg-gray-700 drop-shadow-md border-neutral-200/50 col-span-5 flex flex-col gap-y-10 justify-between">
      <div className="flex flex-col">
        <img
          src={post.user.avatar}
          alt={post.user.fullname}
          className="h-10 w-10"
        />
        <p className="pt-2 text-sm font-semibold">{post.user.fullname}</p>
        <p className="text-sm font-medium text-slate-700/70 dark:text-gray-400">
          {post.user.address}
        </p>
      </div>
      <div className="flex flex-col gap-y-3.5">
        <p className="font-bold text-xl">{post.title}</p>
        <p className="font-medium text-slate-700/90 dark:text-gray-300">
          {post.description}
        </p>
      </div>
      <div className="post__picture">
        <img src={post.photo} alt="картинка" />
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
  )
}

export default Post