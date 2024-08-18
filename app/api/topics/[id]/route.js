import connectMongoDB from '../../../../libs/mongo'
import Topic from '../../../../model/crudModel'
import {NextResponse} from 'next/server'


export async function PUT(request,{params}) {
    const {id}=params;
    const {newTitle:title,newDesc:description}=await request.json();
    await connectMongoDB();
    await Topic.findByIdAndUpdate(id,{title,description})
    return NextResponse.json({message:"updated"},{status:201})

} 

export async function GET(request,{params}) {
    const {id}=params;
    await connectMongoDB();
    const topic = await Topic.findOne({_id:id});
    return NextResponse.json({topic})
    
}