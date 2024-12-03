import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(){
    try {
        const newUser = await prisma.user.create({
           data : {
            email : "tushar43@gmail.com",
            name : "Tushar",
            posts : {
                create : {
                    title : "gym",
                    description : "I go to gym",       
                }
            }
           }
        });

        console.log(newUser);
    } catch (error) {
        console.log("error --> " , error);
        process.exit(1);
    }
}

main();