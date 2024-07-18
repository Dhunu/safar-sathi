import { z } from "zod";

export const postLoadFormSchema = z.object({
    name: z
        .string()
        .min(3, "Name must be at least 3 characters long")
        .max(50, "Name must be at most 50 characters long"),
    loadType: z.enum(["Flatbed", "Reefer", "Dry Van"]),
    destination: z
        .string()
        .min(3, "Destination must be at least 3 characters long")
        .max(30, "Destination must be at most 30 characters long"),
    weight: z.number().min(1000, "Weight must be at least 1000 lbs"),
    deadline: z.date().refine((date) => date > new Date(), {
        message: "Deadline must be in the future",
    }),
});
