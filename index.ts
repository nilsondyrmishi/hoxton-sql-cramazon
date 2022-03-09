import { PrismaClient } from "@prisma/client";
import cors from 'cors'
// @ts-ignore
import express from 'express'

const prisma = new PrismaClient({ log: ['query', 'error', 'warn', 'info'] })

const app = express()
app.use(cors())
app.use(express.json())




app.get('/users', async (req, res) => {
    const users = await prisma.user.findMany({ include: { Order: { select: { quantity: true, item: true} } } })
    res.send(users)
})




app.listen(8080, () => {
    console.log(`Server up: http://localhost:8080`)
})
