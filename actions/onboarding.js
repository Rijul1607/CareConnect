"use server"

import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { db } from "@/lib/prisma";

export async function setUserRole(formData){
    const {userId}=await auth();

    if(!userId){
        throw new Error("Unauthorized");
    }

    //find user in db

    const user =await db.user.findUnique({
        where:{clerkUserId:userId},
    });
    if(!user) throw new Error("User not found in database");

    const role=formData.get("role");

    if(!role || !["PATIENT" ,"DOCTOR"].includes(role)){
        throw new Error("Invalid role selecion");
    }
    try {
        if(role ==="PATIENT"){
            await db.user.update({
                where:{
                    clerkUserId:userId,
                },
                data:{
                    role:"PATIENT"
                },
            });
            revalidatePath("/");
            return {success:true ,redirect:"/doctors"};
        }
        if(role==="DOCTOR"){
            const speciality=formData.get("specialty");
            const experience=parseInt(formData.get("experience",10));
            const credentialUrl=formData.get("credentialUrl");
            const description=formData.get("description");

            if(!speciality || !experience || !credentialUrl || !description){
                throw new Error("all fields are required");
            }
           
            await db.user.update({
                where:{
                    clerkUserId:userId,
                },
                data:{
                    role:"DOCTOR",
                    speciality,
                    experience,
                    credentialUrl,
                    description,
                    verificationStatus:"PENDING",
                },
            });
            revalidatePath("/");
            return {success:true ,redirect:"/doctor/verification"};
        

        }

    } catch (error) {
        console.error("failed to set user role",error);
        throw new Error('failed to update user profile: ${error.message}');
    }
        
    }

export async function getCurrentUser() {
    const {userId}=await auth();

    if(!userId){
        throw new Error("Unauthorized");
    }
    try {
        const user =await db.user.findUnique({
        where:{clerkUserId:userId},
    });

    return user;
        
    } catch (error) {
        console.error("failed to get user info",error);
        return null;
        
    }
}
