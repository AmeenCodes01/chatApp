// config/auth.ts
export const JWT_CONFIG = {
  // In development, use .env file. In production, use Convex env
  secret: process.env.JWT_SECRET || "fallback-dev-secret",
};
