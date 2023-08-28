import { AddTopics } from "@/app/serverAction";
import React from "react";

const AddTopic = () => {
  const addTopicHandler = async (formData) => {
    "use server";

    let title = formData.get("title");
    let description = formData.get("description");
    console.log("title", title);

    if (!title && !description) return;

    const response = await AddTopics({ title, description });
  };

  return (
    <div className="w-full">
      <div className="title text-3xl text-[#222] font-medium">
        Add New Topic..
      </div>
      <div className="form-element w-full md:w-[70%] mt-6">
        <form action={addTopicHandler} className="flex flex-col gap-5">
          <input
            type="text"
            name="title"
            required
            className="border p-3 rounded-md outline-indigo-400"
            placeholder="Add Title"
          />
          <textarea
            type="text"
            name="description"
            required
            className="border p-3 rounded-md outline-indigo-400"
            placeholder="Add Description"
            rows={6}
          ></textarea>

          <div>
            <button
              type="submit"
              className="text-left px-6 py-2 transition duration-300 ease-in-out border-2 rounded-full border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white"
            >
              Add Topic
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTopic;
