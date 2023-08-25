import express from 'express';
import { imageController } from '../controller/image-controller.js';


const routes = express.Router();

routes.get('/image-url', imageController);


export default routes;