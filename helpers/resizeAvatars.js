const jimp = require("jimp");

const resizeAvatars = async (filePath) => {
  try {
    const image = await jimp.read(filePath);
    await image.resize(250, 250).writeAsync(filePath);
  } catch (error) {
    console.error("Error resizing avatar:", error);
  }
};

module.exports = resizeAvatars;
