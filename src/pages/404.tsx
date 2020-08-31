import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'

const Error = () => {
  return (
    <Layout>
      <main className="error-page">
        <div className="error-container">
          <h1>Oops, it's a dead end</h1>
          <Link to="/" className="btn">
            Home
          </Link>
        </div>
      </main>
    </Layout>
  )
}

export default Error
