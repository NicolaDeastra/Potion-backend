import express from 'express';

import PagesController from '../controller/pagesController';

const router = express.Router();

router.get('/', PagesController.getPages);

router.get('/:id', PagesController.getPage);

router.post('/', PagesController.postPage);

router.post('/:id', PagesController.updatePage);

router.delete('/:id', PagesController.deletePage);

export default router;
