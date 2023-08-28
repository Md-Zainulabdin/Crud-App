'use server'
import connectMongoDB from "@/libs/mongodb"
import Topic from "@/models/topic";

export const AddTopics = async (data) => {
    try {
        await connectMongoDB();
        await Topic.create(data)
        return { status: "OK", message: "Topic Add Successfully!" }
    } catch (error) {
        return { status: "ERROR", message: "Server error, please try again!" }
    }
} 

export const UpdateTopics = async (id, data) => {
    try {
        await connectMongoDB();
        await Topic.findByIdAndUpdate(id, data)
        return { status: "OK", message: "Topic Updated Successfully!" }
    } catch (error) {
        return { status: "ERROR", message: "Server error, please try again!" }
    }
}

export const DeleteTopicsFromDB = async (id) => {
    try {
        await connectMongoDB();
        await Topic.findByIdAndDelete(id)
        return { status: "OK", message: "Topic Deleted Successfully!" }
    } catch (error) {
        return { status: "ERROR", message: "Server error, please try again!" }
    }
}