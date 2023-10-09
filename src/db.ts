import {PrismaClient} from "@prisma/client"
// since next js have hot reload almost everytime this is like to avoid making prisma changes
// this is singleton design pattern 
const globalForPrisma = global as unknown as {
    prisma: PrismaClient | undefined
}


export const prisma = globalForPrisma.prisma ?? new PrismaClient({
    log: ['query']
})

if(process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

