import { FieldError, UseFormRegister } from "react-hook-form";
import { z, ZodType } from "zod";

export type FormData = {
  content: string;
  description: string;
};

export type ValidFieldNames = "content" | "description";
export type FormFieldProps = {
  type: string;
  placeholder: string;
  name: ValidFieldNames;
  register?: UseFormRegister<FormData>;
  error?: FieldError | undefined;
  value: string | undefined;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  className?: string;
};

export const TodoSchema: ZodType<FormData> = z.object({
  id: z.string().optional().nullable(),
  content: z.string().min(4, { message: "Content is too short!" }),
  description: z
    .string()
    .min(4, { message: "Description is too short!" })
    .max(128, { message: "Maximum characters for description are 128." }),
});
