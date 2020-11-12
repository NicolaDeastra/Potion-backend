import Page from '../models/page';
import { updateValidate } from '../utils';

class PagesController {
  static getPages = async (req, res) => {
    try {
      const pages = await Page.find({});
      res.status(200).send(pages);
    } catch (err) {
      res.status(400).send(err);
    }
  };

  static getPage = async (req, res) => {
    const { id } = req.params;

    try {
      const user = await Page.findById(id);

      res.status(200).send(user);
    } catch (err) {
      res.status(400).send(err);
    }
  };

  static postPage = async (req, res) => {
    const page = new Page(req.body);

    try {
      await page.save();
      res.status(200).send(page);
    } catch (err) {
      res.status(400).send(err);
    }
  };

  static updatePage = async (req, res) => {
    const {
      params: { id },
      body,
    } = req;

    const updates = Object.keys(body);

    const allowedUpdate = ['title', 'content'];

    const isValidOperation = updateValidate(updates, allowedUpdate);

    if (!isValidOperation) {
      return res.status(400).send({ error: 'Invalid Update' });
    }

    try {
      const page = await Page.findById(id);
      updates.forEach((update) => (page[update] = body[update]));

      await page.save();

      res.status(200).send(page);
    } catch (err) {
      res.status(404).send({ error: 'Invalid update' });
    }
  };

  static deletePage = async (req, res) => {
    const { id } = req.params;

    try {
      await Page.findByIdAndDelete(id);

      res.send({ success: 'success delete page' });
    } catch (err) {
      res.send({ error: 'page not found' });
    }
  };
}

export default PagesController;
