import * as zod from "zod";

export const emailSchema = zod.object({
    email: zod.string().email("Must be a valid email address")
})