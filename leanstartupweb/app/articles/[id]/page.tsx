import { Post } from '../../../(types)';
import API from '../../../(lib)/api';
import { notFound } from 'next/navigation';

async function fetchPost(id: string): Promise<Post | null> {
  try {
    const res = await API.get<Post>(`article/${id}`);
    return res.data;
  } catch (err){
    console.log(err);
    return null 
  }
}

export default async function ArticlePage({ 
  params 
}: {
  params: Promise<{ id: string }>
}) {
  // Attendre la résolution de params
  const resolvedParams = await params;
  const post = await fetchPost(resolvedParams.id);
  
  if (!post) {
    notFound(); // Affiche la page 404 si article introuvable
  }
  
  return (
    <main className="p-10 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-gray-500 text-sm mb-6">
        Publié le {new Date(post.createdAt).toLocaleDateString()}
      </p>
      <article className="text-gray-900 leading-relaxed whitespace-pre-wrap">
        {post.content}
      </article>
    </main>
  );
}

