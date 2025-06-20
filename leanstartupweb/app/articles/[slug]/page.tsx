import { notFound } from 'next/navigation';

// Wordpress
type WPPost = {
  id: number;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
};

type PageProps = {
  params: Promise<{ slug: string }>;
  // searchParams?: { [key: string]: string | string[] };
};

export default async function ArticlePage({ params }: PageProps){
  const wpParams = await params
  const res = await fetch(
    `https://www.charlie-pierre.com/wordpressback/wp-json/wp/v2/posts?slug=${(wpParams.slug)}`,
    { next: { revalidate: 60 } }
  );  
  const posts: WPPost[] = await res.json();
  
  if (!posts.length) {
    return notFound();
  }

  const post = posts[0];
  // params: Promise<{ id: string }>
  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      <h1
        className="text-3xl font-bold mb-6"
        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
      />
      <article
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
      />
    </div>
  )
}
  // Attendre la résolution de params
  // const resolvedParams = await params;
  // const post = await fetchPost(resolvedParams.id);
  
  // if (!post) {
  //   notFound(); // Affiche la page 404 si article introuvable
  // }
  
  // return (
  //   // <main className="p-10 max-w-3xl mx-auto">
  //   //   <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
  //   //   <p className="text-gray-500 text-sm mb-6">
  //   //     Publié le {new Date(post.createdAt).toLocaleDateString()}
  //   //   </p>
  //   //   <article className="text-gray-900 leading-relaxed whitespace-pre-wrap">
  //   //     {post.content}
  //   //   </article>
  //   // </main>
  // );


