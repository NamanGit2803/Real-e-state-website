'use client'

import { useState } from "react"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Controller } from "react-hook-form";

const formSchema = z.object({
    firstName: z.string().min(2),
    lastName: z.string().min(2),
    phone: z.string().min(10),
    email: z.string().email().optional().or(z.literal("")),
    lookingFor: z.string(),
    message: z.string().max(500),
});

const Form = () => {

    const [sent, setSent] = useState(false);

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            lookingFor: "Villa",
            message: "",
        },
    });

    const onSubmit = (data) => {
        console.log(data);

        setSent(true);
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="h-fit space-y-2 rounded-2xl border border-border/60 bg-card p-8"
        >
            <div className="font-display text-2xl text-foreground">
                Tell us what you need
            </div>

            <div className="grid grid-cols-2 gap-3">

                <div>
                    <label className="text-xs text-muted-foreground">
                        First name
                    </label>

                    <input
                        {...register("firstName")}
                        maxLength={50}
                        className="mt-1 h-11 w-full rounded-md border border-border bg-background px-3 text-sm focus:border-primary focus:outline-none"
                    />

                    {errors.firstName && (
                        <p className="mt-1 text-xs text-red-500">
                            First name is required
                        </p>
                    )}
                </div>

                <div>
                    <label className="text-xs text-muted-foreground">
                        Last name
                    </label>

                    <input
                        {...register("lastName")}
                        maxLength={50}
                        className="mt-1 h-11 w-full rounded-md border border-border bg-background px-3 text-sm focus:border-primary focus:outline-none"
                    />

                    {errors.lastName && (
                        <p className="mt-1 text-xs text-red-500">
                            Last name is required
                        </p>
                    )}
                </div>
            </div>

            <div>
                <label className="text-xs text-muted-foreground">
                    Phone
                </label>

                <input
                    type="tel"
                    {...register("phone")}
                    maxLength={15}
                    className="mt-1 h-11 w-full rounded-md border border-border bg-background px-3 text-sm focus:border-primary focus:outline-none"
                />

                {errors.phone && (
                    <p className="mt-1 text-xs text-red-500">
                        Valid phone is required
                    </p>
                )}
            </div>

            <div>
                <label className="text-xs text-muted-foreground">
                    Email
                </label>

                <input
                    type="email"
                    {...register("email")}
                    maxLength={120}
                    className="mt-1 h-11 w-full rounded-md border border-border bg-background px-3 text-sm focus:border-primary focus:outline-none"
                />
            </div>

            {/* Select */}
            <div>
                <label className="text-xs text-muted-foreground">
                    Looking for
                </label>

                <Controller
                    control={control}
                    name="lookingFor"
                    render={({ field }) => (
                        <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                        >
                            <SelectTrigger className="mt-1 h-11! w-full rounded-md border border-border bg-background px-3 text-sm focus:ring-0 focus:ring-offset-0">

                                <SelectValue placeholder="Select property type" />
                            </SelectTrigger>

                            <SelectContent>
                                <SelectItem value="Villa">
                                    Villa
                                </SelectItem>

                                <SelectItem value="Apartment">
                                    Apartment
                                </SelectItem>

                                <SelectItem value="Plot">
                                    Plot
                                </SelectItem>

                                <SelectItem value="Commercial">
                                    Commercial
                                </SelectItem>

                                <SelectItem value="Rental">
                                    Rental
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    )}
                />
            </div>

            {/* Textarea */}
            <div>
                <label className="text-xs text-muted-foreground">
                    Message
                </label>

                <textarea
                    rows={4}
                    maxLength={500}
                    placeholder="Tell us about your budget, preferred locations..."
                    {...register("message")}
                    className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:border-primary focus:outline-none"
                />
            </div>

            <Button disabled={sent} className="w-full rounded-md bg-primary h-12 py-3 text-sm font-medium text-primary-foreground hover:opacity-90">
                {sent ? "Message sent ✓" : "Send message"}
            </Button>

            {sent && (
                <p className="text-xs text-success">
                    Thanks — we'll be in touch within 24 hours.
                </p>
            )}
        </form>
    )
}

export default Form