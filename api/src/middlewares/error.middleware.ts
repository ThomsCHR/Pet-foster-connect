import { type Request, type Response, type NextFunction } from "express";

const HTTP_MESSAGES: Record<number, string> = {
  400: "Requête invalide",
  401: "Non authentifié",
  403: "Accès refusé",
  404: "Ressource introuvable",
  409: "Conflit : la ressource existe déjà",
  500: "Erreur interne du serveur",
};

export class AppError extends Error {
  constructor(public status: number, message?: string) {
    super(message ?? HTTP_MESSAGES[status] ?? "Erreur inconnue");
  }
}

export function errorMiddleware(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
): void {
  if (err instanceof AppError) {
    res.status(err.status).json({ error: err.message });
    return;
  }
  console.error(err);
  res.status(500).json({ error: HTTP_MESSAGES[500] });
}
