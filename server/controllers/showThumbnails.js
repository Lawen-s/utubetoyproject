const { response } = require("express");
const { posts } = require("../models");

module.exports = {
  get: async (req, res) => {
    console.log("~~~~~~~~", req.body);
    const data = await posts.findAll().catch((err) => this.res.json(err));
    res.status(200).json(data);
    // const result = await posts.findOne({ where: { user_id: 1 } });
    // console.log("%%%%%%%%", result);
    // const result = await posts.findAll();
    // res.status(200).json(result);
  },

  //     const result = await posts.findAll()
  //     console.log('~~~~~~~',result)
  //     });

  //     //res.status(200).json(result);

  //     // (req, res) => {
  //     //   posts.get((err, result) => {
  //     //     console.log("~~~~~~~~~~", result);
  //     //     if (err) {
  //     //       res.status(400).send("err");
  //     //     } else {
  //     //       res.status(200).json(result);
  //     //     }
  //     //   });

  //     // console.log("getVideo", req.body.id);

  //     // res.status(200).json("ok");
  //   },
};
