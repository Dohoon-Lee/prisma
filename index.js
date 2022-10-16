const express = require("express");
const app = express();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    return res.status(200).json({ users });
  } catch (error) {
    console.log(error);
    return res.status(400).json(e);
  }
});

app.post("/", async (req, res) => {
  try {
    const newUser = await prisma.user.create({
      data: {
        // ...req.body
        nickname: req.body.nickname,
        email: req.body.email,
        password: req.body.password,
        provider: req.body.provider,
        agree: 
          req.body.agree === "false" || req.body.agree === "0" ? false : true,
      },
    });
    return res.status(201).json({ newUser });
  } catch (error) {
    console.log(error);
    return res.status(400).json(e);
  }
});

app.listen(3000, () => {
  console.log("server on 3000");
});