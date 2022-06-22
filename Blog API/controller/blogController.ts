import { db } from "../model/blogModel.ts";
import { RouterContext } from "https://deno.land/x/oak/mod.ts";

const collection = db.collection("blog");

export const get_AllBlogs = async (context: RouterContext)=>{
    const notes = await collection.find().toArray();
    context.response.body = { notes };
    context.response.status = 200;
}

export const post_ABlog = async (context: RouterContext)=>{
    const data = await context.request.body().value;
    await collection.insertOne({
        title: data.title,
        name: data.authorName,
        blogBody: data.blogBody
    });
    context.response.status = 201;
    context.response.body = { message: "Blog added successfully" };
}

export const put_ABlog = async (context: RouterContext)=>{
    const data = await context.request.body().value;
    const response = await collection.updateOne(
        { title: data.updateTitle },
        { $set: { title: data.title, blogBody: data.blogBody, name: data.authorName} },
      );
    context.response.status = 200;
    context.response.body = { response };
}

export const delete_ABlog = async (context: RouterContext)=>{
    const data = await context.request.body().value;
    const deleteCount = await collection.deleteOne({ title: data.title });
    context.response.status = 200;
    context.response.body = { deleteCount };
}