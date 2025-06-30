"use client";
import TextInput from "@/components/common/forms/text-input";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useRef, useState } from "react";
import clsx from "clsx";
import Button from "@/components/ui/button";
import Link from "next/link";

const contactFormSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().required("Email is required"),
  message: yup.string().required("Message is required"),
});

type ContactFormValues = yup.InferType<typeof contactFormSchema>;

const budgetOptions = [
  { label: "Up to £10k", value: "up_to_10k" },
  { label: "£10k to £20k", value: "10k_to_20k" },
  { label: "£20k to £50k", value: "20k_to_50k" },
  { label: "£50k to £100k", value: "50k_to_100k" },
  { label: ">£100k", value: "over_100k" },
];

const ContactUsForm = () => {
  const [attachedFile, setAttachedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    // control,
    // setValue,
    // watch,
  } = useForm({
    resolver: yupResolver(contactFormSchema),
  });

  const [selectedBudget, setSelectedBudget] = useState<string | null>(null);

  const handleBudgetSelect = (value: string) => {
    setSelectedBudget(value);
  };

  const handleFileAttach = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event?.target?.files?.[0];
    if (file) {
      setAttachedFile(file);
    }
  };

  const onSubmit = async (data: ContactFormValues) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("message", data.message);
    if (selectedBudget) formData.append("budget", selectedBudget);
    if (attachedFile) formData.append("file", attachedFile);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      const result = await res.json();

      console.log("result", result);

      if (!res.ok) {
        console.error(result.error || "Failed to send message");
        // show toast or error state
        return;
      }

      // Success message
      console.log("Message sent successfully");
      // Reset form if needed
    } catch (error) {
      console.error("Submission error:", error);
    }
  };

  return (
    <form
      className="mt-14 max-w-[943px] flex flex-col gap-10"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="grid grid-cols-2 gap-8">
        <TextInput
          {...register("name")}
          label="Your Name"
          required
          placeholder="Enter your name"
          error={errors.name?.message}
        />
        <TextInput
          {...register("email")}
          label="Your Email"
          required
          type="email"
          placeholder="Enter your email"
          error={errors.email?.message}
        />
      </div>
      <TextInput
        {...register("message")}
        label="Message"
        required
        placeholder="Tell us about your project"
        error={errors.message?.message}
      />

      <div className="mt-8">
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
          accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png"
        />
        <button
          type="button"
          onClick={handleFileAttach}
          className="flex items-center gap-3 px-6 py-4 text-lg bg-neutral-600 rounded-lg border border-neutral-700 hover:bg-neutral-500 cursor-pointer transition-all duration-200"
        >
          <svg
            className="w-5 h-5 text-primary-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
            />
          </svg>
          <span className="text-sm font-medium">
            {attachedFile ? attachedFile.name : "Attach File"}
          </span>
        </button>

        {attachedFile && (
          <div className="mt-2 text-xs text-gray-400">
            File size: {(attachedFile.size / 1024).toFixed(1)} KB
          </div>
        )}
      </div>

      <div className="mt-6">
        <label className="inline-block font-bold text-primary-500 uppercase mb-4">
          Your Budget for This Project?
        </label>
        <div className="flex flex-wrap space-y-2 space-x-4">
          {budgetOptions.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => handleBudgetSelect(option.value)}
              className={clsx(
                "rounded-[50px] px-6 py-4 border transition-all cursor-pointer",
                selectedBudget === option.value
                  ? "bg-primary-500 border-transparent"
                  : "border-surface-border text-neutral-0 hover:bg-primary-500"
              )}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-8">
        <Button
          type="submit"
          intent="secondary"
          size="large"
          className="px-20"
          disabled={isSubmitting}
        >
          Submit
        </Button>
        <div>
          <p className="mb-1">By clicking this button you accept</p>
          <p>
            <Link href="#" className="text-primary-500 underline">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="#" className="text-primary-500 underline">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </form>
  );
};

export default ContactUsForm;
