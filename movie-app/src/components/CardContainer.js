import React, { useContext, useEffect, useState } from "react";

const CardContainer = ({ item }) => {
  const [post, setPost] = useState("");
  useEffect(() => {
    const getMovie = async () => {
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=111d6e02&i=${item.imdbID}`
      );
      const data = await res.json();
      console.log(data);
      setPost(data);
    };
    getMovie();
  }, []);

  return (
    <div className="mx-auto w-[50rem]">
      <div className="flex border-slate-500 border-2 my-5 w-[100%] gap-[10%]">
        <div className=" ">
          <img
            src={post.Poster}
            alt="poster"
            className="clip-your-needful-style"
          />
        </div>
        <div className="w-[50%] flex flex-col items-end  pt-[10px]">
          <h2 className="text-[25px]  ">MOVIE DETAILS</h2>
          <hr />
          <h1 className="text-[30px] text-bold text-right border-4 border-b-slate-500 mb-5">
            {post.Title}
          </h1>
          <h5>
            <strong>Released Date:</strong> {post.Released}
          </h5>
          <h5>
            <strong>Rating:</strong> {post.imdbRating}/10
          </h5>
          <p className="text-right">
            {post.Plot}
            <br />
            <strong>Duration:</strong>
            {post.Runtime}
            <br />
            <strong>Actors:</strong>
            {post.Actors}
            <br />
            <strong>Director</strong>
            {post.Director}
          </p>

          <div className="my-5">
            <ul className="flex gap-[10px]  ">
              {post?.Genre?.split(",").map((item, idx) => (
                <li
                  className="border-black border-2 rounded-md px-1  bg-slate-300"
                  key={idx}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
