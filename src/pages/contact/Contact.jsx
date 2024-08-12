import React, { useState } from 'react';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formState);
    // Here you would typically send the form data to a server
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">Contact Me</h1>

      <div className="retro-container mb-8 p-6">
        <p className="mb-4">
          I'm always excited to connect with fellow developers, potential
          clients, or anyone interested in web development and retro-inspired
          design. Whether you have a project in mind, a question about my work,
          or just want to say hello, I'd love to hear from you!
        </p>
        <p className="mb-4">
          You can reach out to me through the form below, or connect with me on
          social media:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>
            GitHub:{' '}
            <a
              href="https://github.com/timataliatov"
              className="text-[color:var(--color-accent)] hover:underline"
            >
              github.com/timataliatov
            </a>
          </li>
          <li>
            LinkedIn:{' '}
            <a
              href="https://www.linkedin.com/in/taliatov"
              className="text-[color:var(--color-accent)] hover:underline"
            >
              linkedin.com/in/taliatov
            </a>
          </li>
          <li>
            Twitter:{' '}
            <a
              href="https://x.com/timataliatov"
              className="text-[color:var(--color-accent)] hover:underline"
            >
              @timataliatov
            </a>
          </li>
        </ul>
        <p>
          I typically respond within 1-2 business days. Looking forward to
          connecting with you!
        </p>
      </div>

      <div className="retro-container p-6">
        <h2 className="text-xl font-bold mb-4">Send me a message</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formState.name}
              onChange={handleChange}
              className="w-full bg-[color:var(--color-bg)] text-[color:var(--color-text-main)] border border-solid border-[color:var(--color-border)] p-2"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              className="w-full bg-[color:var(--color-bg)] text-[color:var(--color-text-main)] border border-solid border-[color:var(--color-border)] p-2"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              value={formState.message}
              onChange={handleChange}
              rows="4"
              className="w-full bg-[color:var(--color-bg)] text-[color:var(--color-text-main)] border border-solid border-[color:var(--color-border)] p-2"
              required
            ></textarea>
          </div>
          <button type="submit" className="retro-button hover-effect w-full">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
