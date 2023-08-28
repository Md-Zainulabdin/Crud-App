import Link from "next/link";
import React from "react";
import DeleteTopic from "../deleteTopic/page";
import HeroText from "../HeroText/page";
import { dateBuilder } from "@/utils/dateBuilder";

const getTopics = async () => {
  try {
    const res = await fetch(`${process.env.BASE_URL}/api/topics`, {
      cache: "no-cache",
      next: {
        tags: ["topics"],
      },
    });

    return await res.json();
  } catch (error) {
    console.log("Error", error);
  }
};

const TopicList = async () => {
  const topics = await getTopics();
  const date = dateBuilder(new Date());

  return (
    <div className="All-Topics w-full relative pb-12">
      <HeroText value={'📝 All Topics..'}/>
      <div className="w-full md:w-[70%] py-10 flex flex-col gap-6">
        {topics?.data ? (
          topics?.data?.map((currElem) => (
            <div
              className="w-full flex flex-col gap-2 border px-6 py-4 rounded-md relative"
              key={currElem?._id}
            >
              <div className="topic w-full flex justify-between items-center">
                <h1 className="text-xl md:text-3xl font-medium text-[#222]">
                  {currElem?.title}
                </h1>
                <Link
                  href={`/UpdateTopic/${currElem?._id}`}
                  className="text-md text-white bg-indigo-600 px-4 py-1"
                >
                  Edit
                </Link>
              </div>
              <hr className="my-3"/>
              <div className="date">
                <span className="text-md text-[#555]">{date}</span>
              </div>
              <div className="desc">
                <p className="text-md md:text-xl text-[#333]">{currElem?.description}</p>
              </div>
              <div className="updates mt-3 flex gap-3">
                <DeleteTopic id={currElem?._id} />
              </div>
              <span></span>
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
