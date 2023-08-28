import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import Link from "next/link";
import React from "react";
import DeleteTopic from "../deleteTopic/page";

const TopicList = async () => {
    await connectMongoDB();
    const topics = await Topic.find();
  
  return (
    <div className="All-Topics w-full">
      <div className="title text-3xl text-[#222] font-medium">All Topics..</div>
      <div className="w-full md:w-[70%] mt-10 flex flex-col gap-6">
        {topics ? (
          topics?.map((currElem) => (
            <div
              className="w-full flex flex-col gap-2 border p-4 rounded-md relative"
              key={currElem?._id}
            >
              <div className="topic">
                <h1 className="text-xl md:text-2xl font-semibold text-[#222]">
                  {currElem?.title}
                </h1>
              </div>
              <div className="desc">
                <p className="text-lg text-[#555]">{currElem?.description}</p>
              </div>
              <div className="updates mt-3 flex gap-3">
                <Link
                  href={`/UpdateTopic/${currElem?._id}`}
                  className="text-md text-indigo-500"
                >
                  Edit
                </Link>
                <DeleteTopic id={currElem?._id}/>
              </div>
            </div>
          ))
        ) : (
          <div>Loading..</div>
        )}
      </div>
    </div>
  );
};

export default TopicList;
