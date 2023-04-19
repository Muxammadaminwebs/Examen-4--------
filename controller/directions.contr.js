import directions from "../module/directions.model.js";

class directsController {
    async find(req, res) {
      const {
        id
      } = req.params;
      res.send(await directions.get(id));
    }
    async create(req, res) {
      res.send(await directions.post(req.body));
    }
    async update(req, res) {
      const {
        id
      } = req.params;
      res.send(await directions.put(id, req.body));
    }
    async delete(req, res) {
      const {
        id
      } = req.params;
      res.send(await directions.delete(id));
    }
}

export default new directsController();