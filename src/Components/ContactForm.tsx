'use client';

import { useState } from 'react';

import { Button } from './Button';

enum Status {
  Success,
  Error,
}

export function ContactForm() {
  const [status, setStatus] = useState<Status | null>(null);

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setStatus(Status.Success);
      } else {
        setStatus(Status.Error);
      }
    };
    xhr.send(data);
  };

  return (
    <form action="https://formspree.io/xqkyvgaw" method="POST" onSubmit={submitForm}>
      <div className="rounded-[200px] px-6">
        <label htmlFor="form-name" className="sr-only">
          Name:
        </label>
        <input
          type="text"
          name="name"
          id="form-name"
          placeholder="name"
          className={
            'mb-5 w-full rounded-md bg-gray-50 px-4 py-3 tracking-wide placeholder:text-gray-500 placeholder:uppercase'
          }
        />
        <label htmlFor="form-email" className="sr-only">
          Email:
        </label>
        <input
          type="email"
          name="email"
          placeholder="email"
          id="form-email"
          className={
            'mb-5 w-full rounded-md bg-gray-50 px-4 py-3 tracking-wide placeholder:text-gray-500 placeholder:uppercase'
          }
        />
        <label htmlFor="form-message" className="sr-only">
          Message:
        </label>
        <textarea
          name="message"
          rows={5}
          placeholder="message"
          id="form-message"
          className={
            'mb-5 w-full rounded-md bg-gray-50 px-4 py-3 tracking-wide placeholder:text-gray-500 placeholder:uppercase'
          }
        />
      </div>

      {status === Status.Success ? (
        <p>Thanks!</p>
      ) : (
        <Button
          type="submit"
          className="bg-primary-800 text-primary-100 block w-full rounded-lg rounded-t-none py-4 font-bold uppercase"
        >
          <span>submit here</span>
        </Button>
      )}
      {status === Status.Error && <p>Ooops! There was an error.</p>}
    </form>
  );
}
