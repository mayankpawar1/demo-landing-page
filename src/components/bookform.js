import React, { useState } from 'react';

const BookADemoForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    jobTitle: '',
    email: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // Add your form submission logic here (e.g., send to API)
  };

  return (
    <section className="max-w-xl mx-auto my-10 p-6 bg-white rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Book a Demo</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className="w-full border border-gray-300 p-3 rounded-md"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="w-full border border-gray-300 p-3 rounded-md"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <input
          type="text"
          name="company"
          placeholder="Company Name"
          className="w-full border border-gray-300 p-3 rounded-md"
          value={formData.company}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="jobTitle"
          placeholder="Job Title"
          className="w-full border border-gray-300 p-3 rounded-md"
          value={formData.jobTitle}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          className="w-full border border-gray-300 p-3 rounded-md"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition duration-200"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default BookADemoForm;
