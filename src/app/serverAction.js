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