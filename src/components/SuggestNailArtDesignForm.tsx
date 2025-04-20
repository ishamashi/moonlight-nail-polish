"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { suggestNailArtDesign } from "@/ai/flows/suggest-nail-art-design";
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

const formSchema = z.object({
  color: z.string().min(2, {
    message: "Color must be at least 2 characters.",
  }),
  style: z.string().min(2, {
    message: "Style must be at least 2 characters.",
  }),
  occasion: z.string().min(2, {
    message: "Occasion must be at least 2 characters.",
  }),
});

export function SuggestNailArtDesignForm() {
  const [designSuggestion, setDesignSuggestion] = useState<{
    designSuggestion: string;
    imageUrl: string;
  } | null>(null);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      color: "",
      style: "",
      occasion: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const result = await suggestNailArtDesign(values);
    setDesignSuggestion(result);
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="color"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Color</FormLabel>
                <FormControl>
                  <Input placeholder="Preferred Color" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="style"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Style</FormLabel>
                <FormControl>
                  <Input placeholder="Preferred Style" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="occasion"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Occasion</FormLabel>
                <FormControl>
                  <Input placeholder="Occasion" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Suggest Design</Button>
        </form>
      </Form>
      {designSuggestion && (
        <Card className="mt-6">
          <CardContent className="space-y-2">
            <h3 className="text-lg font-semibold">Suggested Design</h3>
            <p className="text-muted-foreground">
              {designSuggestion.designSuggestion}
            </p>
            {designSuggestion.imageUrl && (
              <img
                src={designSuggestion.imageUrl}
                alt="Suggested Nail Art Design"
                className="rounded-md"
              />
            )}
          </CardContent>
        </Card>
      )}
    </>
  );
}
