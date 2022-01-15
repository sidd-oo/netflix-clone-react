const router = require("express").Router();
const MyList = require("../models/MyList");
const verify = require("../verifyToken");

//CREATE
router.post("/", verify, async (req, res) => {
  const newMyList = new MyList(req.body);
  try {
    const savedMyList = await newMyList.save();
    res.status(201).json(savedMyList);
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATE
// router.put("/", verify, async (req, res) => {
//   const userId = req.body.userId;
//   const movieId = req.body.movieId
//   const newMyList = new MyList(req.body);
//   try {
//     const upadatedContent = await MyList.findByIdAndUpdate()
//     const savedMyList = await newMyList.save();
//     res.status(201).json(savedMyList);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// DELETE
// router.delete("/:id", verify, async (req, res) => {
//   if (req.user.isAdmin) {
//     try {
//       await List.findByIdAndDelete(req.params.id);
//       res.status(200).json("The list has been deleted.");
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   } else {
//     res.status(403).json("You are not allowed!");
//   }
// });

//GET ALL
router.get("/", verify, async (req, res) => {
  let myList = [];
  try {
    myList = await MyList.aggregate([{ $sample: { size: 10 } }]);
    res.status(200).json(myList);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET
router.get("/find/:userID", verify, async (req, res) => {
  const userID = req.params.userID;
  try {
    let myList = await MyList.find({ userId: userID});
    res.status(200).json(myList[0].content);
  } catch (err) {
    console.log("Hello");
    res.status(500).json(err);
  }
});

module.exports = router;
