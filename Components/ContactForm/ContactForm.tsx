import { useState } from 'react'
import { Button } from '../Utilities/Button/Button'

enum Status {
  Success,
  Error,
}

export const ContactForm = () => {
  const [status, setStatus] = useState<Status | null>(null)

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.target as HTMLFormElement
    const data = new FormData(form)
    const xhr = new XMLHttpRequest()
    xhr.open(form.method, form.action)
    xhr.setRequestHeader('Accept', 'application/json')
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return
      if (xhr.status === 200) {
        form.reset()
        setStatus(Status.Success)
      } else {
        setStatus(Status.Error)
      }
    }
    xhr.send(data)
  }

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
            'mb-5 w-full rounded-md bg-grey-1000 px-4 py-3 tracking-wide placeholder:uppercase placeholder:text-grey-500'
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
            'mb-5 w-full rounded-md bg-grey-1000 px-4 py-3 tracking-wide placeholder:uppercase placeholder:text-grey-500'
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
            'mb-5 w-full rounded-md bg-grey-1000 px-4 py-3 tracking-wide placeholder:uppercase placeholder:text-grey-500'
          }
        />
      </div>

      {status === Status.Success ? (
        <p>Thanks!</p>
      ) : (
        <Button
          type="submit"
          className="block w-full rounded-lg rounded-t-none bg-primary-300 py-4 font-bold uppercase text-primary-1000"
        >
          <span>submit here</span>
        </Button>
      )}
      {status === Status.Error && <p>Ooops! There was an error.</p>}
    </form>
  )
}
