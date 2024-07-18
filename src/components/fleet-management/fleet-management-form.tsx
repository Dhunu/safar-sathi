"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaDollarSign } from "react-icons/fa";
import { FaRoute, FaWeightScale } from "react-icons/fa6";
import { BsTruckFlatbed } from "react-icons/bs";
import { MdProductionQuantityLimits } from "react-icons/md";
import { IoIosTimer } from "react-icons/io";

import {
    Form,
    FormField,
    FormControl,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Label } from "../ui/label";

import { CustomInput } from "../custom-input";

const formSchema = z.object({
    total_trip_cost: z.coerce.number().nonnegative(),
    start_location: z
        .string()
        .min(1, { message: "Please provide starting location" }),
    end_location: z
        .string()
        .min(1, { message: "Please provide ending location" }),
    route_information: z
        .string()
        .min(1, { message: "Please provide route information" }),
    cargo_type: z.string().min(1, { message: "Please provide cargo type" }),
    quantity: z.coerce.number().nonnegative(),
    item_weight: z.coerce.number().nonnegative(),
    shift_schedule: z
        .string()
        .min(1, { message: "Please provide shift schedule" }),
});

export default function FleetManagementForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            total_trip_cost: undefined,
            start_location: "",
            end_location: "",
            route_information: "",
            cargo_type: "",
            quantity: undefined,
            item_weight: undefined,
            shift_schedule: "",
        },
    });

    function onSubmit(data: z.infer<typeof formSchema>) {
        console.log(data);
    }

    return (
        <Form {...form}>
            <form
                className="space-y-6 my-5 sm:my-10 text-primary"
                onSubmit={form.handleSubmit(onSubmit)}
            >
                <FormField
                    control={form.control}
                    name="total_trip_cost"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <CustomInput
                                    {...field}
                                    label="Total Trip Cost"
                                    icon={<FaDollarSign />}
                                    placeholder="Enter trip cost"
                                    type="number"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="flex flex-col">
                    <Label className="underline font-semibold">
                        Trip Details
                    </Label>
                    <div className="space-y-6 mt-2">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-10">
                            <FormField
                                control={form.control}
                                name="start_location"
                                render={({ field }) => (
                                    <FormItem className="w-full">
                                        <FormControl>
                                            <CustomInput
                                                {...field}
                                                label="Start Location"
                                                labelClassName="font-normal"
                                                placeholder="City/location"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="start_location"
                                render={({ field }) => (
                                    <FormItem className="w-full">
                                        <FormControl>
                                            <CustomInput
                                                {...field}
                                                label="Start Location"
                                                labelClassName="font-normal"
                                                placeholder="City/location"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                    </div>
                </div>
                <FormField
                    control={form.control}
                    name="route_information"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Route Information</FormLabel>
                            <FormControl>
                                <CustomInput
                                    {...field}
                                    label="Total Trip Cost"
                                    icon={<FaRoute />}
                                    placeholder="Pickup Location"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="flex flex-col">
                    <Label className="underline font-semibold">
                        Load Details
                    </Label>
                    <div className="space-y-6 mt-2">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-10">
                            <FormField
                                control={form.control}
                                name="cargo_type"
                                render={({ field }) => (
                                    <FormItem className="w-full">
                                        <FormControl>
                                            <CustomInput
                                                {...field}
                                                label="Cargo Type"
                                                labelClassName="font-normal"
                                                icon={<BsTruckFlatbed />}
                                                placeholder="Cargo Type"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="quantity"
                                render={({ field }) => (
                                    <FormItem className="w-full">
                                        <FormControl>
                                            <CustomInput
                                                {...field}
                                                label="Quantity"
                                                labelClassName="font-normal"
                                                icon={
                                                    <MdProductionQuantityLimits />
                                                }
                                                placeholder="Quantity"
                                                type="number"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                    </div>
                </div>
                <FormField
                    control={form.control}
                    name="item_weight"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <CustomInput
                                    {...field}
                                    label="Item Weight"
                                    icon={<FaWeightScale />}
                                    placeholder="Item Weight in Tons"
                                    type="number"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="shift_schedule"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <CustomInput
                                    {...field}
                                    label="Item Weight"
                                    icon={<IoIosTimer />}
                                    placeholder="Prefence Shift Schedule"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" className="w-full">
                    Optimise
                </Button>
            </form>
        </Form>
    );
}
