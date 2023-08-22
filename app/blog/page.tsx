"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
export default function Blog() {
  const [posts, setPosts] = useState<
    { title: string; slug: string; meta: string }[]
  >([]);
  const fetchPosts = async () => {
    const res = await fetch("/api/posts");
    const posts = await res.json();
    console.log(posts);
    setPosts(posts.postInfo);
  };
  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <>
      <div className=''>
        {posts &&
          posts.map((post, index) => (
            <div key={index} className='card w-96 h-5/6 bg-base-100 shadow-xl'>
              <figure>
                <Image src='/image1.jpg' alt='Shoes' width={400} height={60} />
              </figure>
              <div className='card-body'>
                <h2 className='card-title'>
                  {post.title}
                  <div className='badge badge-secondary'>NEW</div>
                </h2>
                <p>{post.meta}</p>
                <div className='card-actions justify-end'>
                  <div className='badge badge-outline'>Fashion</div>
                  <div className='badge badge-outline'>Products</div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
