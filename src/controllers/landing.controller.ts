import { Request, Response, NextFunction } from 'express';

export class LandingController {
  static async loadLanding(req: Request, res: Response, next: NextFunction) {}

  static async loadAllDirections(
    req: Request,
    res: Response,
    next: NextFunction
  ) {}

  static async loadAllArticles(
    req: Request,
    res: Response,
    next: NextFunction
  ) {}

  static async loadAllAttractions(
    req: Request,
    res: Response,
    next: NextFunction
  ) {}

  static async loadAllBlogs(req: Request, res: Response, next: NextFunction) {}

  static async loadAllQAs(req: Request, res: Response, next: NextFunction) {}

  static async getDirection(req: Request, res: Response, next: NextFunction) {}

  static async getAttraction(req: Request, res: Response, next: NextFunction) {}

  static async getBlog(req: Request, res: Response, next: NextFunction) {}

  static async getQA(req: Request, res: Response, next: NextFunction) {}

  static async getWeather(req: Request, res: Response, next: NextFunction) {}

  static async getWeather4Ten(
    req: Request,
    res: Response,
    next: NextFunction
  ) {}
}
