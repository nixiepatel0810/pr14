import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [course, setCourse] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-md rounded bg-white p-6 shadow">

        <h1 className="mb-5 text-center text-2xl font-bold text-blue-600">
          Student Registration
        </h1>

        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            className="mb-4 mt-1 w-full rounded border p-2"
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />

          <label>Email</label>
          <input
            className="mb-4 mt-1 w-full rounded border p-2"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />

          <label>Course</label>
          <input
            className="mb-4 mt-1 w-full rounded border p-2"
            type="text"
            value={course}
            onChange={e => setCourse(e.target.value)}
            required
          />

          <button
            className="w-full rounded bg-blue-600 p-2 text-white hover:bg-blue-700"
            type="submit"
          >
            Submit
          </button>
        </form>

        {submitted && (
          <div className="mt-5 rounded bg-green-100 p-4">
            <h2 className="mb-2 text-lg font-bold text-green-700">
              Student Details
            </h2>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Course: {course}</p>
          </div>
        )}

      </div>
    </div>
  );
}

export default App;