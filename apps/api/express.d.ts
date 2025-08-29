declare namespace Express {
  export interface Request {
    user: {
        _id: string;
        name: string;
        email: string;
        avatar: string;
        activated: boolean;
        googleId: string;
        facebookId: string;
        createdAt: string;
        updatedAt: string;
        iat: number;
        exp: number;
        sub: string;
    },
    id: string;
    file: MulterS3.File;  
  }
}