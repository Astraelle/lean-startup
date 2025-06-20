import { Post } from "../../(types)";
import API from "../../(lib)/api";
import Link from "next/link";
// import { WPPost } from "@/(types)/wp-post";

async function fetchPosts(): Promise<Post[]> {
  try {
    const res = await API.get("/article/get-article");
    return res.data;
  } catch (err) {
    console.error("Erreur lors de la récupération des articles", err);
    return [];
  }
}

// type ArticlePost = {
//   posts: WPPost[]
// }

// export async function getStaticsProps(){
//   const url = "https://www.charlie-pierre.com/wordpressback/wp-json/wp/v2/posts?_embed"
//   const resPosts = await fetch(url);
//   const wpPosts: WPPost[] = await resPosts.json()

//   return {
//     props: { wpPosts },
//     revalidate: 60
//   }
// }

type WPPost = {
  id: number;
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
};

export default async function ArticlesPage() {

  const url = 'https://www.charlie-pierre.com/wordpressback/wp-json/wp/v2/posts?_embed';
  const res = await fetch(url, {
    next: { revalidate: 60 }, // ISR support in App Router
  });

  const posts: WPPost[] = await res.json();
  return(
    <>
      <div className="max-w-3xl mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6">Articles</h1>
      {posts.map((post) => (
        <div key={post.id} className="mb-6">
          <Link href={`/articles/${post.slug}`}>
            <div
              className="text-xl font-semibold text-blue-600 hover:underline"
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            />
          </Link>
          <div
            className="text-gray-600"
            dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
          />
        </div>
      ))}
    </div>
    </>
    
  )
  
  // const posts = await fetchPosts();

  // return (
  //   <main className="p-10 max-w-4xl mx-auto">
  //     <h1 className="text-3xl font-bold mb-6">Articles publiés</h1>

  //     {posts.length === 0 ? (
  //       <p>Aucun article pour le moment.</p>
  //     ) : (
  //       <ul className="space-y-6">
  //         {posts.map((post) => (
  //           <li key={post._id} className="bg-white p-6 rounded shadow">
  //             <Link href={`/articles/${post._id}`}>
  //               <h2 className="text-xl font-semibold text-blue-600 hover:underline">
  //                 {post.title}
  //               </h2>
  //             </Link>
  //             <p className="text-gray-600 text-sm mb-2">
  //               Publié le {new Date(post.createdAt).toLocaleDateString()}
  //             </p>
  //             <p className="text-gray-800">
  //               {post.content.length > 200
  //                 ? post.content.slice(0, 200) + "..."
  //                 : post.content}
  //             </p>
  //           </li>
  //         ))}
  //       </ul>
  //     )}
  //   </main>
  // );
}
