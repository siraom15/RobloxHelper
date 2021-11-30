import ServerUtils from '../utils/server.utils.js';

const getLowPlayerServer = async (req, res) => {
  if (req.query.sea !== undefined) {
    try {
      let data = await ServerUtils.findLowerServer(
        req.query.sea,
        req.query?.expectPlayer
      );
      res.send(data);
    } catch (error) {}
  } else {
    res.status(400).json({
      error: 'Bad Request',
    });
  }
};

export { getLowPlayerServer };
