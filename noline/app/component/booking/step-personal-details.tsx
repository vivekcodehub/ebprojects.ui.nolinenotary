"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  personalDetailsSchema,
  type PersonalDetailsValues,
} from "@/lib/validations/appointment";
import Button from "../ui/atoms/Button";

interface StepPersonalDetailsProps {
  initialValues?: PersonalDetailsValues;
  onBack: () => void;
  onNext: (values: PersonalDetailsValues) => void;
}

export function StepPersonalDetails({ initialValues, onBack, onNext }: StepPersonalDetailsProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PersonalDetailsValues>({
    resolver: zodResolver(personalDetailsSchema),
    defaultValues: initialValues ?? {
      fullName: "",
      email: "",
      secondSignerEmail: "",
      phone: "",
      message: "",
    },
  });

  return (
    <form onSubmit={handleSubmit(onNext)} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <Label htmlFor="fullName" className="body12 uppercase text-primary-black !font-medium">
            Full Name
          </Label>
          <Input
            id="fullName"
            placeholder="Enter your full name"
            className="mt-1"
            {...register("fullName")}
          />
          {errors.fullName && (
            <p className="text-xs text-red-500 mt-1">{errors.fullName.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="email" className="body12 uppercase text-primary-black !font-medium">
            Email Address
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="mt-1"
            {...register("email")}
          />
          {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
        </div>

        <div>
          <Label htmlFor="secondSignerEmail" className="body12 uppercase text-primary-black !font-medium">
            Email Address of Second Signer <span className="normal-case text-gray-400">(Optional)</span>
          </Label>
          <Input
            id="secondSignerEmail"
            type="email"
            placeholder="Enter your email"
            className="mt-1"
            {...register("secondSignerEmail")}
          />
          {errors.secondSignerEmail && (
            <p className="text-xs text-red-500 mt-1">{errors.secondSignerEmail.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="phone" className="body12 uppercase text-primary-black !font-medium">
            Phone
          </Label>
          <Input
            id="phone"
            type="tel"
            placeholder="Enter your phone number"
            className="mt-1"
            {...register("phone")}
          />
          {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone.message}</p>}
        </div>
      </div>

      <div>
        <Label htmlFor="message" className="body12 uppercase text-primary-black !font-medium">
          Message <span className="normal-case text-gray-400">(Optional)</span>
        </Label>
        <Textarea
          id="message"
          placeholder="Tell me about your project"
          className="mt-1"
          rows={4}
          {...register("message")}
        />
        {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message.message}</p>}
      </div>

      <div className="flex justify-between pt-2">
        <Button
          type="button"
          variant="outline"
          size="md"
          onClick={onBack}
          className="bg-transparent"
        >
          Previous
        </Button>
        <Button
          variant="primary"
          size="md"
          type="submit"
        >
          Next
        </Button>
      </div>
    </form>
  );
}
