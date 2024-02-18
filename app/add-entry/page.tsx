"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { ChevronLeft, MoveLeft } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Card } from "@/components/ui/card";

const formSchema = z.object({
  description: z
    .string({ required_error: "Description is required" })
    .min(1, "required"),
  peoplePaid: z.array(z.any()).nonempty("Select at least one Person"),
});

export default function ProfileForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      description: "",
      peoplePaid: [],
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <Link href="/">
        <Button
          variant="outline"
          size="sm"
          className="mr-5 mb-10 mt-10 w-20 bg-slate-200 "
        >
          <MoveLeft className="h-4 w-4" />
        </Button>
      </Link>

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description of Incident</FormLabel>
              <FormControl>
                <Input placeholder="Dinner " {...field} />
              </FormControl>
              <FormDescription>
                Enter the incident for the payment
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Card className="p-5">
          <FormDescription className="mb-5">People Paid</FormDescription>
          <FormField
            control={form.control}
            name="peoplePaid"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md  p-4 shadow">
                <FormControl>
                  <Checkbox
                    checked={field.value?.includes("geeth")}
                    onCheckedChange={(checked) => {
                      return checked
                        ? field.onChange([...field.value, "geeth"])
                        : field.onChange(
                            field.value?.filter((value) => value !== "geeth"),
                          );
                    }}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>Geeth</FormLabel>
                </div>
              </FormItem>
            )}
          />
        </Card>
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
