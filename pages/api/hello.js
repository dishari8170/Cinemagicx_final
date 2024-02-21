// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {


  if (req.body.c==="kwt"){
    res.status(200).send("hi deepali")

  } else if (req.query.d==="hal"){
    res.status(200).json("hi raju")
  }else {

    res.status(200).json("no access")

  }

  res.status(200).json(req.query.d==="kwt")



}
