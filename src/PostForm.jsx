import React, { useState } from 'react';

export default function PostForm() {
  const [formData, setFormData] = useState({
    post_title: '',
    post_content: ''
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Šeit var pievienot savu apstrādes loģiku
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-6 bg-white rounded-2xl shadow-md space-y-6">
      <div>
        <label htmlFor="post_title" className="block text-lg font-medium text-gray-700">
          Nosaukums
        </label>
        <input
          type="text"
          id="post_title"
          name="post_title"
          value={formData.post_title}
          onChange={handleChange}
          className="mt-2 w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label htmlFor="post_content" className="block text-lg font-medium text-gray-700">
          Saturs
        </label>
        <textarea
          id="post_content"
          name="post_content"
          rows="6"
          value={formData.post_content}
          onChange={handleChange}
          className="mt-2 w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full py-3 px-6 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition duration-300"
      >
        Publicēt
      </button>
    </form>
  );
}
