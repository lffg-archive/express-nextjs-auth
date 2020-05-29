declare global {
  namespace Express {
    interface SessionData {
      userData?: {
        id: number;
        username: string;
      };
    }
  }
}

export {};
