// components/EmailInput.tsx
'use client';

import React, { useState, useTransition, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { faArrowRight, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { waitListServer } from '@/actions/email-actions';
import { emailSchema } from '@/schema/email-schema';
import Button from './button';

const EmailInput = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState<{ text: string; type: 'error' | 'success' | '' }>({
    text: '',
    type: '',
  });
  const [isPending, startTransition] = useTransition();
  const [hasError, setHasError] = useState(false);

  // 🕒 Auto-hide message after 4s
  useEffect(() => {
    if (message.text) {
      const timer = setTimeout(() => {
        setMessage({ text: '', type: '' });
        setHasError(false);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Reset previous states
    setMessage({ text: '', type: '' });
    setHasError(false);

    // Client-side validation
    const validate = emailSchema.safeParse({ email });
    if (!validate.success) {
      const errorMessage = validate.error.issues[0]?.message || "Invalid email address";
      setMessage({ text: errorMessage, type: 'error' });
      setHasError(true);
      return;
    }

    startTransition(async () => {
      try {
        console.log("🚀 Starting form submission...");
        const formData = new FormData();
        formData.append('email', email);

        const response = await waitListServer(formData);
        console.log("📨 Server response:", response);

        if (response?.success) {
          setMessage({ 
            text: "🎉 You're on the waitlist! Check your inbox for a welcome email.", 
            type: 'success' 
          });
          setEmail('');
          setHasError(false);
        } else {
          const errorMessage = response?.error?.email ?? 'Something went wrong. Please try again.';
          setMessage({ text: errorMessage, type: 'error' });
          setHasError(true);
        }
      } catch (error) {
        console.error("💥 Form submission error:", error);
        setMessage({ 
          text: 'Network error. Please check your connection and try again.', 
          type: 'error' 
        });
        setHasError(true);
      }
    });
  };

  const inputBorderColor = hasError || message.type === 'error'
    ? 'border-red-500 focus-within:border-red-500'
    : message.type === 'success'
    ? 'border-green-500 focus-within:border-green-500'
    : 'border-gray-200 focus-within:border-[var(--color-secondary)]';

  return (
    <div className="w-full flex flex-col items-center">
      {/* Email form */}
      <form
        onSubmit={handleSubmit}
        noValidate
        className={`relative bg-white rounded-[100px] border ${inputBorderColor} 
          hover:border-gray-300 transition-all duration-300 focus-within:shadow-lg w-full max-w-md`}
      >
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            // Clear error when user starts typing
            if (hasError || message.type === 'error') {
              setHasError(false);
              setMessage({ text: '', type: '' });
            }
          }}
          placeholder="Type your email address"
          className="w-full pl-4 sm:pl-5 lg:pl-6 pr-24 sm:pr-28 lg:pr-32 py-3 sm:py-3.5 lg:py-4 
            bg-transparent border-none outline-none text-[var(--text-primary)] 
            placeholder:text-[var(--text-secondary)] placeholder:font-normal 
            text-sm sm:text-base lg:text-lg"
          disabled={isPending}
        />

        <div className="absolute right-1 top-1 bottom-1">
          <Button
            variant="secondary"
            type="submit"
            className="h-full px-3 sm:px-4 lg:px-6 xl:px-8 text-xs sm:text-sm lg:text-base 
              flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            disabled={isPending || !email}
          >
            {isPending ? (
              <>
                <FontAwesomeIcon icon={faSpinner} spin className="text-white" />
                Joining...
              </>
            ) : (
              <>
                Join Now
                <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
              </>
            )}
          </Button>
        </div>
      </form>

      {/* Animated message area */}
      <div className="min-h-[1.5rem] mt-2 flex justify-center items-center w-full">
        <AnimatePresence mode="wait">
          {message.text && (
            <motion.p
              key={message.text}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.3 }}
              className={`text-sm text-center font-medium px-4 ${
                message.type === 'error' ? 'text-red-600' : 'text-green-600'
              }`}
            >
              {message.text}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default EmailInput;