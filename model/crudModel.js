import mongoose from "mongoose";

const crudSchema =new mongoose.Schema({
title:String,
description:String
},
{timestamps:true})


const Topic =mongoose.models.Topic || mongoose.model("Topic",crudSchema)

export default Topic; 