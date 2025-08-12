import { Request, Response } from "express";
import {
    createTaskService,
    getUserTasksService,
    getAllTasksService,
    updateTaskService,
    deleteTaskService
} from "../services/task.service";
import mongoose from "mongoose";

export const createTask = async (req: Request, res: Response) => {
    try {
        const task = await createTaskService(
            new mongoose.Types.ObjectId((req as any).user.id),
            req.body
        );
        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({ message: "Error creating task", error });
    }
};

export const getUserTasks = async (req: Request, res: Response) => {
    try {
        const tasks = await getUserTasksService(
            new mongoose.Types.ObjectId((req as any).user.id)
        );
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: "Error fetching tasks", error });
    }
};

export const getAllTasks = async (req: Request, res: Response) => {
    try {
        const tasks = await getAllTasksService();
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: "Error fetching all tasks", error });
    }
};

export const updateTask = async (req: Request, res: Response) => {
    try {
        const updated = await updateTaskService(
            new mongoose.Types.ObjectId((req as any).user.id),
            req.params.id,
            req.body
        );
        if (!updated) return res.status(404).json({ message: "Task not found" });
        res.json(updated);
    } catch (error) {
        res.status(500).json({ message: "Error updating task", error });
    }
};

export const deleteTask = async (req: Request, res: Response) => {
    try {
        const deleted = await deleteTaskService(
            new mongoose.Types.ObjectId((req as any).user.id),
            req.params.id
        );
        if (!deleted) return res.status(404).json({ message: "Task not found" });
        res.json({ message: "Task deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting task", error });
    }
};