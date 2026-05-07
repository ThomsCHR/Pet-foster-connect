import { Request, Response, NextFunction } from "express";
import { z } from "zod";
import { validate } from "../../../src/middlewares/validate.middleware";

// Schéma simple utilisé pour tous les tests
const schema = z.object({
  name: z.string().min(1),
});

// Crée un faux objet Response avec les méthodes dont Express a besoin
function creerFauxRes() {
  const res = {} as Response;
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
}

describe("validate middleware", () => {
  it("appelle next() quand le body est valide", () => {
    const req = { body: { name: "Rex" } } as Request;
    const res = creerFauxRes();
    const next = jest.fn() as jest.MockedFunction<NextFunction>;

    validate(schema)(req, res, next);

    expect(next).toHaveBeenCalledTimes(1);
  });

  it("retourne 400 quand un champ requis est manquant", () => {
    const req = { body: {} } as Request;
    const res = creerFauxRes();
    const next = jest.fn() as jest.MockedFunction<NextFunction>;

    validate(schema)(req, res, next);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(next).not.toHaveBeenCalled();
  });

  it("retourne une réponse JSON avec le champ 'error'", () => {
    const req = { body: {} } as Request;
    const res = creerFauxRes();
    const next = jest.fn() as jest.MockedFunction<NextFunction>;

    validate(schema)(req, res, next);

    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({ error: "Données invalides" })
    );
  });
});
