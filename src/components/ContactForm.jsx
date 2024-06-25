import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
// import Button from "./Button.jsx";
// import { contactFormValidator } from "@/utils/contactFormValidator";

const contactFormValidator = z.object({
  name: z.string().min(1).max(50),
  email: z.string().email(),
  message: z.string().min(1).max(5000),
});

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactFormValidator),
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const sendEmail = async ({
    name,
    email,
    company,
    message,
  }) => {
    try {
      setSending(true);
      const validatedForm = contactFormValidator.parse({
        name,
        email,
        company,
        message,
      });
      await emailjs.send(
        import.meta.env.PUBLIC_EMAILJS_SERVICE,
        import.meta.env.PUBLIC_EMAILJS_TEMPLATE,
        validatedForm,
        import.meta.env.PUBLIC_EMAILJS_USER
      );
      reset();
      setSending(false);
      setSent(true);
      setTimeout(() => setSent(false), 4000);
    } catch (error) {
      if (error instanceof z.ZodError) {
        setSending(false);
        setError("name", { message: error.message });
        setError("email", { message: error.message });
        setError("message", { message: error.message });
      } else {
        console.log(error);
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit(sendEmail)}
      className="flex w-full flex-col text-dark-purple"
    >
      <div className="min-h-96 flex w-full flex-col sm:flex-row sm:gap-16 md:gap-24">
        <div className="mt-16 w-full">
          <div className="form-container">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              id="name"
              type="text"
              {...register("name")}
              className={`form-input ${
                errors.name
                  ? "ring-4 ring-red-700 focus-within:ring-4"
                  : "ring-blurple focus-within:ring-4 hover:ring-4"
              }`}
            />
            <p
              className={
                errors.name
                  ? "visible mt-2 h-5 text-xs text-red-500"
                  : "invisible"
              }
            >
              We need to know your name
            </p>
          </div>
          <div className="form-container">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              id="email"
              type="email"
              {...register("email")}
              className={`form-input ${
                errors.email
                  ? "ring-4 ring-red-700 focus-within:ring-4"
                  : "ring-blurple focus-within:ring-4 hover:ring-4"
              }`}
            />
            <p
              className={
                errors.email
                  ? "visible mt-2 h-5 text-xs text-red-500"
                  : "invisible"
              }
            >
              We need a valid email
            </p>
          </div>
          <div className="form-container">
            <label htmlFor="company" className="form-label">
              Company
            </label>
            <input
              id="company"
              type="text"
              {...register("company")}
              className="form-input ring-blurple focus-within:ring-4 hover:ring-4"
            />
          </div>
        </div>
        <div className="mt-0 w-full sm:mt-16">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            id="message"
            type="textarea"
            {...register("message")}
            className={`form-textarea ${
              errors.message
                ? "ring-4 ring-red-700 focus-within:ring-4"
                : "ring-blurple focus-within:ring-4 hover:ring-4"
            }`}
          />
          <p
            className={
              errors.message
                ? "visible mt-2 h-5 text-xs text-red-500"
                : "invisible"
            }
          >
            Let us know how we can help
          </p>
        </div>
      </div>
      <div className="mt-16 flex w-full justify-center">
        <button
          type="submit"
          aria="Send"
          secondary={false}
          disabled={
            errors.name ||
            errors.email ||
            errors.message ||
            sending
          }
          contact={true}
        >
          <svg
            className="h-5 w-5 animate-spin text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        </button>
      </div>
    </form>
  );
}
