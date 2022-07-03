import * as express from 'express';
import ErrorMiddleware from './middlewares/ErrorMid';
import userRoutes from './routes/User';

class app {
  public _express: express.Express;

  constructor() {
    this._express = express();
    this.config();
    this.routes();
    this.useErrorMiddleware();
  }

  private routes(): void {
    this._express.use('/users', userRoutes);
  }

  private config(): void {
    this._express.use(express.json());
  }

  private useErrorMiddleware(): void {
    this._express.use(ErrorMiddleware);
  }

  public start(PORT: string | number): void {
    this._express.listen(PORT, () =>
      console.log(`server running on port ${PORT}`)
    );
  }
}

export default app;
