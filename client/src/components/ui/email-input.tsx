'use client';

import React, { useState, useTransition } from 'react';
import Button from './button';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { waitListServer } from '@/actions/email-actions';
import { z } from 'zod';
import { emailSchema } from '@/schema/email-schema';

const EmailInput = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState<{ text: string; type: 'error' | 'success' | '' }>({
    text: '',
    type: '',
  });
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // ✅ Local validation before hitting the server
    const validate = emailSchema.safeParse({ email });
    if (!validate.success) {
      setMessage({ text: validate.error.issues[0].message, type: 'error' });
      return;
    }

    // ✅ Clear any previous message
    setMessage({ text: '', type: '' });

    startTransition(async () => {
      const formData = new FormData();
      formData.append('email', email);

      const response = await waitListServer(formData);

      if (response?.success) {
        setMessage({ text: "🎉 You're on the waitlist! Check your inbox.", type: 'success' });
        setEmail('');
      } else {
        setMessage({
          text: response?.error?.email ?? 'Something went wrong. Try again.',
          type: 'error',
        });
      }
    });
  };

  // ✅ Dynamic border color
  const inputBorderColor =
    message.type === 'error'
      ? 'border-red-500 focus-within:border-red-500'
      : message.type === 'success'
      ? 'border-green-500 focus-within:border-green-500'
      : 'border-gray-200 focus-within:border-[var(--color-secondary)]';

  return (
    <div className="w-full">
      <form
        onSubmit={handleSubmit}
        noValidate
        className={`relative bg-white rounded-[100px] border ${inputBorderColor} hover:border-gray-300 transition-colors duration-300 focus-within:shadow-lg`}
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Type your email address"
          className="w-full pl-4 sm:pl-5 lg:pl-6 pr-24 sm:pr-28 lg:pr-32 py-3 sm:py-3.5 lg:py-4 bg-transparent border-none outline-none text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] placeholder:font-normal text-sm sm:text-base lg:text-lg"
          autoComplete="email"
          spellCheck={false}
        />

        <div className="absolute right-1 top-1 bottom-1">
          <Button
            variant="secondary"
            text={isPending ? 'Joining...' : 'Join Now'}
            icon={faArrowRight}
            className="h-full px-3 sm:px-4 lg:px-6 xl:px-8 text-xs sm:text-sm lg:text-base"
            disabled={isPending}
          />
        </div>
      </form>

      {message.text && (
        <p
          className={`mt-2 text-sm text-center ${
            message.type === 'error' ? 'text-red-600' : 'text-green-600'
          }`}
        >
          {message.text}
        </p>
      )}
    </div>
  );
};

export default EmailInput;
