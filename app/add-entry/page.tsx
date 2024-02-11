"use client";
import { Button } from "@/components/ui/button";
import { ChevronLeft, FormInput } from "lucide-react";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "@/components/ui/use-toast";

const items = [
  {
    id: "Geeth",
    label: "Geeth",
    value: 0,
  },
  {
    id: "User 2",
    label: "User 2",
    value: 0,
  },
  {
    id: "User 3",
    label: "User 3",
    value: 0,
  },
  {
    id: "User 4",
    label: "User 4",
    value: 0,
  },
  {
    id: "User 5",
    label: "User 5",
    value: 0,
  },
  {
    id: "User 6",
    label: "User 6",
  },
] as const;

export default function addEntry() {
  const FormSchema = z.object({
    items: z.array(z.string()).refine((value) => value.some((item) => item), {
      message: "You have to select at least one item.",
    }),
    description: z.string(),
    totalAmount: z.number({
      required_error: "Total Amount is required",
      invalid_type_error: "Value must be a number",
    }),
    amountsOwe: z.record(z.string(), z.number()),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      items: [],
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }
  return (
    <main className="">
      <nav className=" bg-[#E2E8F0] h-20 pl-48 pr-48 flex items-center">
        <Link href="/">
          <Button variant="default" size="sm" className="mr-5">
            <ChevronLeft className="h-4 w-4" />
          </Button>
        </Link>
        <span className="font-bold text-4xl">Add New Entry</span>
      </nav>

      <div className="pl-48 pr-48 mt-10">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 border p-5 rounded-sm"
          >
            <FormField
              control={form.control}
              name="items"
              render={() => (
                <FormItem>
                  <div className="mb-4">
                    <FormLabel className="text-base">People who paid</FormLabel>
                    <FormDescription>
                      Select the people who made payment during this activity.
                      If you are the only one who paid select your name only
                    </FormDescription>
                  </div>
                  <div className="flex gap-5">
                    {items.map((item) => (
                      <FormField
                        key={item.id}
                        control={form.control}
                        name="items"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key={item.id}
                              className="flex flex-row items-start space-x-3 space-y-0"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(item.id)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([
                                          ...field.value,
                                          item.id,
                                        ])
                                      : field.onChange(
                                          field.value?.filter(
                                            (value) => value !== item.id,
                                          ),
                                        );
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="font-normal">
                                {item.label}
                              </FormLabel>
                            </FormItem>
                          );
                        }}
                      />
                    ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="description"
                        type="text"
                        className="w-1/2"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />

            {form.watch("items").length > 0 && (
              <div>
                {form.watch("items").map((itemId) => (
                  <FormField
                    name={`amountsOwe.${itemId}`}
                    control={form.control}
                    render={({ field }) => <Input {...field} type="number" />}
                  />
                ))}
              </div>
            )}
          </form>
        </Form>
      </div>
      <div className=" grid grid-cols-6 gap-10 mt-10"></div>
    </main>
  );
}
