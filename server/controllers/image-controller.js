const imageService = require("../services/image-service");

class ImageController {
  async putImage(req, res, next) {
    try {
      const { imageUrl , id } = req.body;
      const imageData = await imageService.putImage(imageUrl, id);
      return res.json(imageData);
    } catch (e) {
      res.json(e.message);
    }
  }

  async getRandomImage(req, res, next) {
    try {
      const image = await imageService.getRandomImage();
      return res.json(image);
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = new ImageController();
