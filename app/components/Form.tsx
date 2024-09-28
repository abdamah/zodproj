"use client";

import { useActionState } from "react";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { CreateUser } from "../actions";
import { userSchema } from "../lib/zodSchemas";

export default function Form() {
  const [lastResult, action] = useActionState(CreateUser, undefined);

  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, {
        schema: userSchema,
      });
    },

    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });
  return (
    <form
      className="grid gap-4"
      id={form.id}
      onSubmit={form.onSubmit}
      action={action}
    >
      <div className="grid grid-cols-2 gap-4">
        <div className="grid gap-2">
          <Label htmlFor="first-name">First name</Label>
          <Input
            key={fields.firstName.key}
            name={fields.firstName.name}
            defaultValue={fields.firstName.initialValue}
            id="first-name"
            type="text"
            placeholder="First Name"
          />
          <p className="text-red-500 text-xl">{fields.firstName.errors}</p>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="last-name">Last name</Label>
          <Input
            key={fields.lastName.key}
            name={fields.lastName.name}
            defaultValue={fields.lastName.initialValue}
            id="last-name"
            type="text"
            placeholder="Last Name"
          />
          <p className="text-red-500 text-xl">{fields.lastName.errors}</p>
        </div>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input
          key={fields.email.key}
          name={fields.email.name}
          defaultValue={fields.email.initialValue}
          id="email"
          type="email"
          placeholder="demo@mail.com"
        />
        <p className="text-red-500 text-xl">{fields.email.errors}</p>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="password">Password</Label>
        <Input
          key={fields.password.key}
          name={fields.password.name}
          defaultValue={fields.password.initialValue}
          id="password"
          type="password"
        />
        <p className="text-red-500 ">{fields.password.errors}</p>
      </div>
      <Button type="submit" className="w-full">
        Sign Up
      </Button>
    </form>
  );
}
