import express from 'express';
import { LANDING } from '../enums/api.enum';
import { LandingController } from '../controllers/landing.controller';

const landingRouter = express.Router();

landingRouter.post(LANDING.LOAD_MAIN, LandingController.loadLanding);
landingRouter.post(LANDING.LOAD_ALL_BLOGS, LandingController.loadAllBlogs);
landingRouter.post(LANDING.LOAD_ALL_QAS, LandingController.loadAllQAs);
landingRouter.post(LANDING.GET_DIRECTION, LandingController.getDirection);
landingRouter.post(LANDING.GET_ATTRACTION, LandingController.getAttraction);
landingRouter.post(LANDING.GET_BLOG, LandingController.getBlog);
landingRouter.post(LANDING.GET_QA, LandingController.getQA);
landingRouter.post(LANDING.GET_WEATHER, LandingController.getWeather);
landingRouter.post(LANDING.GET_WEATHER_4_TEN, LandingController.getWeather4Ten);
landingRouter.post(
  LANDING.LOAD_ALL_DIRECTIONS,
  LandingController.loadAllDirections
);
landingRouter.post(
  LANDING.LOAD_ALL_ARTICLES,
  LandingController.loadAllArticles
);
landingRouter.post(
  LANDING.LOAD_ALL_ATTRACTIONS,
  LandingController.loadAllAttractions
);

export default landingRouter;
