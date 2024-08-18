import { BsTropicalStorm } from "react-icons/bs";
import connectMongoDB from "../../../libs/mongo";
import Topic from "../../../model/crudModel";
import { NextResponse } from "next/server";


export async function POST(request) {
    const {title,description}= await request.json();
    await connectMongoDB();
    await Topic.create({title,description});
    return NextResponse.json({message:"new topic created"},{status:201})
}

export async function GET(request) {
    await connectMongoDB();
    const topics = await Topic.find()
    return NextResponse.json({topics})
    
}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id")
    await connectMongoDB();
    await Topic.findByIdAndDelete(id)
    return NextResponse.json({message:"post deleted"},{status:200})
}