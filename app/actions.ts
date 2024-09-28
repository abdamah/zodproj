"use server";

import { parseWithZod } from "@conform-to/zod";
import { redirect } from "next/navigation";
import { userSchema } from "./lib/zodSchemas";

export async function CreateUser(prevState: unknown, formData: FormData) {
  const submission = parseWithZod(formData, {
    schema: userSchema,
  });

  if (submission.status !== "success") return submission.reply();

  return redirect("/success");
}
