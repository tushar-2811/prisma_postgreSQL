import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(){
    try {
        const newPost = await prisma.post.create({
            data : {
                title : "run",
                description : "I Like Running",
                author : {
                    connect : {
                        id : 1
                    }
                }
            }
        });
        console.log(newPost);

    } catch (error) {
        console.log("error" , error);
        process.exit(1);
    }
}

main();