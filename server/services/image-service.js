const ImageModel = require("../models/image-model");

class ImageService {
  async putImage(imageUrl, id) {
    const image = await ImageModel.create({ imageUrl, id });
    return image;
  }

  async getRandomImage() {
    const imagesCount = await ImageModel.countDocuments();
    const randomValue = Math.floor(Math.random() * imagesCount);
    const iamge = await ImageModel.find({id: randomValue.toString()}).select("-_id , imageUrl");
    return image;
  }
}

module.exports = new ImageService();
