const mongoose = require("mongoose");
mongoose
  .connect("mongodb+srv://pavi:pavi@cluster0.ghnljc9.mongodb.net/hi", {})
  .then(() => {
    console.log("connection: ");
  })
  .catch((err) => {
    console.log(err);
  });
//schema define the structure of document
//it is used get default values of validator
const playlistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  description: String,
  songs: {
    type: String,
    default: "pyaar",
  },
});

//model is wrapper on the mongoose schema

//class

//collection creation
const PlayList = new mongoose.model("Playlist", playlistSchema);

//insert

const fun = async () => {
  try {
    const playlist1 = new PlayList({
      name: "my playlist 1",
      description: "this is my playlist",
      songs: "pyaar",
    });
    const playlist2 = new PlayList({
      name: "my playlist2 ",
      description: "this is my playlist",
      songs: "pyaar",
    });
    const playlist3 = new PlayList({
      name: "my playlist3",
      description: "this is my playlist",
      songs: "pyaar",
    });
    let result = await PlayList.insertMany([playlist2, playlist3]);

    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

// fun();

//getdocument
const getData = async () => {
  const data = await PlayList.find().select({ song: "pyaar" }).limit(1);
  console.log(data);
};

getData();
