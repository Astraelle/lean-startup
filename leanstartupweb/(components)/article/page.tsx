'use client';

import { useState } from 'react';
import API from '../../app/(lib)/api';

export default function ArticleForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');

    try {
      const res = await API.post('/article/create-article', { title, content });

      if (res.status === 201) {
        setMessage('✅ Article créé avec succès !');
        setTitle('');
        setContent('');
      }
    } catch (err: any) {
      const errorMsg =
        err.response?.data?.message || 'Erreur lors de la création.';
      setMessage(`❌ ${errorMsg}`);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded shadow-md max-w-xl mx-auto"
    >
      <h2 className="text-2xl font-semibold mb-4">Créer un article</h2>

      {message && <p className="mb-4">{message}</p>}

      <label className="block font-medium mb-1">Titre</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border p-2 rounded mb-4"
        required
      />

      <label className="block font-medium mb-1">Contenu</label>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full border p-2 rounded mb-6 h-40"
        required
      />

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Publier
      </button>
    </form>
  );
}
