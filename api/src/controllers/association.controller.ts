import { type Request, type Response } from "express";
import { prisma } from "../client";


export const getAssociations = async (req: Request, res: Response) => {
    try {
        const associations = await prisma.association.findMany();
        res.json(associations);
    } catch (error) {
        console.error("Error fetching associations:", error);
        res.status(500).json({ error: "An error occurred while fetching associations." });
    }
};
export const getAssociationById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const association = await prisma.association.findUnique({
            where: { id: Number(id) },
        });
        if (association) {
            res.json(association);
        } else {            res.status(404).json({ error: "Association not found." });
        }
    } catch (error) {
        console.error(`Error fetching association with id ${id}:`, error);
        res.status(500).json({ error: "An error occurred while fetching the association." });
    }
};
export const createAssociation = async (req: Request, res: Response) => {
    const { name, description, email, phone, address } = req.body;
    try {
        const newAssociation = await prisma.association.create({
            data: {
                name,
                description,
                email,
                phone,
                address,
            },
        });
        res.status(201).json(newAssociation);
    } catch (error) {
        console.error("Error creating association:", error);
        res.status(500).json({ error: "An error occurred while creating the association." });
    }
};
export const updateAssociation = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, description, email, phone, address } = req.body;
    try {
        const updatedAssociation = await prisma.association.update({    
            where: { id: Number(id) },
            data: {
                name,
                description,    
                email,
                phone,
                address,
            },
        });
        res.json(updatedAssociation);
    } catch (error) {
        console.error(`Error updating association with id ${id}:`, error);
        res.status(500).json({ error: "An error occurred while updating the association." });
    }
};
export const deleteAssociation = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        await prisma.association.delete({
            where: { id: Number(id) },
        });
        res.json({ message: "Association deleted successfully." });
    } catch (error) {
        console.error(`Error deleting association with id ${id}:`, error);
        res.status(500).json({ error: "An error occurred while deleting the association." });
    }   
};