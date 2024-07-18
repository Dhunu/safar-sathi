"use client";

import { date, z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { postLoadFormSchema } from "@/schema";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../ui/select";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import CardTransition from "../card-transition";

export default function PostLoadForm() {
    const form = useForm<z.infer<typeof postLoadFormSchema>>({
        resolver: zodResolver(postLoadFormSchema),
        defaultValues: {
            name: "",
            loadType: "Flatbed",
            destination: "",
            weight: 1000,
            deadline: new Date(),
        },
    });

    const onSubmit = (data: z.infer<typeof postLoadFormSchema>) => {
        console.log(data);
    };
    return (
        <div className="mt-10">
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-8"
                >
                    <CardTransition>
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder="Name"
                                            className="border-primary/40"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </CardTransition>
                    <CardTransition>
                        <div className="grid space-y-8 sm:space-y-0 sm:space-x-5 grid-cols-1 sm:grid-cols-3">
                            <FormField
                                control={form.control}
                                name="loadType"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Load Type</FormLabel>
                                        <FormControl>
                                            <Select>
                                                <SelectTrigger
                                                    className="w-full border-primary/40"
                                                    defaultValue={field.value}
                                                >
                                                    <SelectValue
                                                        placeholder="Select load type"
                                                        className="text-primary"
                                                    />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="Flatbed">
                                                        Flatbed
                                                    </SelectItem>
                                                    <SelectItem value="Reefer">
                                                        Reefer
                                                    </SelectItem>
                                                    <SelectItem value="Dry Van">
                                                        Dry Van
                                                    </SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </FormControl>
                                        <FormDescription className="text-xs">
                                            Select the type of truck bed you
                                            need
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="weight"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Weight (in lbs)</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                placeholder="Name"
                                                className="border-primary/40"
                                            />
                                        </FormControl>
                                        <FormDescription className="text-xs">
                                            Weight must be atleast 1000 lbs
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="deadline"
                                render={({ field }) => (
                                    <FormItem className="flex flex-col">
                                        <FormLabel className="mt-2">
                                            Deadline
                                        </FormLabel>
                                        <FormControl>
                                            <Popover>
                                                <PopoverTrigger asChild>
                                                    <Button
                                                        variant={"outline"}
                                                        className={cn(
                                                            "w-full justify-start text-left font-normal border-primary/40",
                                                            !date &&
                                                                "text-muted-foreground"
                                                        )}
                                                    >
                                                        <CalendarIcon className="mr-2 h-4 w-4" />
                                                        {field.value ? (
                                                            format(
                                                                field.value,
                                                                "PPP"
                                                            )
                                                        ) : (
                                                            <span>
                                                                Pick a date
                                                            </span>
                                                        )}
                                                    </Button>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-auto p-0">
                                                    <Calendar
                                                        mode="single"
                                                        selected={field.value}
                                                        onSelect={
                                                            field.onChange
                                                        }
                                                        initialFocus
                                                    />
                                                </PopoverContent>
                                            </Popover>
                                        </FormControl>
                                        <FormDescription className="text-xs">
                                            Always select a deadline in the
                                            future
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                    </CardTransition>
                    <CardTransition>
                        <FormField
                            control={form.control}
                            name="destination"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Destination</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder="Destination"
                                            className="border-primary/40"
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                    </CardTransition>
                    <CardTransition>
                        <Button type="submit" className="w-full">
                            Post
                        </Button>
                    </CardTransition>
                </form>
            </Form>
        </div>
    );
}
