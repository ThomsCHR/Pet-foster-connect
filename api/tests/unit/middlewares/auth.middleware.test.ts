import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { requireAuth } from "../../../src/middlewares/auth.middleware";

const SECRET = "test-secret-jest-key"; // même valeur que dans tests/setup.ts

// Crée un faux objet Response avec les méthodes dont Express a besoin
function creerFauxRes() {
  const res = {} as Response;
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
}

describe("requireAuth middleware", () => {
  it("retourne 401 si aucun cookie n'est présent", () => {
    const req = { cookies: {} } as Request;
    const res = creerFauxRes();
    const next = jest.fn() as jest.MockedFunction<NextFunction>;

    requireAuth(req, res, next);

    expect(res.status).toHaveBeenCalledWith(401);
    expect(next).not.toHaveBeenCalled();
  });

  it("appelle next() avec un token JWT valide", () => {
    const token = jwt.sign({ id: 1, email: "user@example.com", role: "volunteer" }, SECRET);
    const req = { cookies: { token } } as unknown as Request;
    const res = creerFauxRes();
    const next = jest.fn() as jest.MockedFunction<NextFunction>;

    requireAuth(req, res, next);

    expect(next).toHaveBeenCalledTimes(1);
  });

  it("retourne 401 si le token est invalide", () => {
    const req = { cookies: { token: "faux.token.invalide" } } as unknown as Request;
    const res = creerFauxRes();
    const next = jest.fn() as jest.MockedFunction<NextFunction>;

    requireAuth(req, res, next);

    expect(res.status).toHaveBeenCalledWith(401);
    expect(next).not.toHaveBeenCalled();
  });

  it("retourne 401 si le token est expiré", () => {
    const token = jwt.sign({ id: 1, email: "user@example.com", role: "user" }, SECRET, {
      expiresIn: -1, // expiré immédiatement
    });
    const req = { cookies: { token } } as unknown as Request;
    const res = creerFauxRes();
    const next = jest.fn() as jest.MockedFunction<NextFunction>;

    requireAuth(req, res, next);

    expect(res.status).toHaveBeenCalledWith(401);
  });
});
