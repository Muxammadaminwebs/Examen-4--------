import positions from "../module/positions.model.js";

class positionController {
    async find(req, res) {
      const {
        id
      } = req.params;
      res.send(await positions.get(id));
    }
    async create(req, res) {
      res.send(await positions.post(req.body));
    }
    async update(req, res) {
      const {
        id
      } = req.params;
      res.send(await positions.put(id, req.body));
    }
    async delete(req, res) {
      const {
        id
      } = req.params;
      res.send(await positions.delete(id));
    }
}

export default new positionController();