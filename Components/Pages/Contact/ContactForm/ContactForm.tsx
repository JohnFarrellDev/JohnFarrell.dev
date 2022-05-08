import React, { useState } from 'react'
import { Button } from '../../../Utilities/Button'
import styles from './ContactForm.module.css'

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
    <form
      action="https://formspree.io/xqkyvgaw"
      method="POST"
      onSubmit={submitForm}
    >
      <div className={styles.formGroup}>
        <label htmlFor="form-name" className={styles.srOnly}>
          Name:
        </label>
        <input
          type="text"
          name="name"
          id="form-name"
          placeholder="name"
          className={styles.formControl}
        />
        <label htmlFor="form-email" className={styles.srOnly}>
          Email:
        </label>
        <input
          type="email"
          name="email"
          placeholder="email"
          id="form-email"
          className={styles.formControl}
        />
        <label htmlFor="form-message" className={styles.srOnly}>
          Message:
        </label>
        <textarea
          name="message"
          rows={5}
          placeholder="message"
          id="form-message"
          className={styles.formControl}
        />
      </div>

      {status === Status.Success ? (
        <p>Thanks!</p>
      ) : (
        <Button type="submit" extraStyles={styles.submitBtn}>
          <span>submit here</span>
        </Button>
      )}
      {status === Status.Error && <p>Ooops! There was an error.</p>}
    </form>
  )
}
