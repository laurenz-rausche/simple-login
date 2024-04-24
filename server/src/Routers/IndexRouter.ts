import { Router } from "express"

//the index router
export const IndexRouter = Router()

//the index methods here
IndexRouter.get("/", (req, res) => {
  res.send(`${process.env.NODE_ENV}`)
})