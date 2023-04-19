import groups from "../module/groups.model.js";


class groupsController {
    async find(req, res) {
      const {
        id
      } = req.params;
      res.send(await groups.get(id));
    }
    async create(req, res) {
      res.send(await groups.post(req.body));
    }
    async update(req, res) {
      const {
        id
      } = req.params;
      res.send(await groups.put(id, req.body));
    }
    async delete(req, res) {
      const {
        id
      } = req.params;
      res.send(await groups.delete(id));
    }
}

export default new groupsController();