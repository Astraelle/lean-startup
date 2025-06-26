import { Post } from "../../(types)";
import API from "../../(lib)/api";
import Link from "next/link";

async function fetchPosts(): Promise<Post[]> {
  try {
    const res = await API.get("/article/get-article");
    return res.data;
  } catch (err) {
    console.error("Erreur lors de la récupération des articles", err);
    return [];
  }
}

type WPPost = {
  id: number;
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  _embedded?: {
    'wp:featuredmedia'?: {
      source_url: string;
    }[];
  }
};

type PageProps = {
    searchParams: Promise<{ page?: string }>
}

export default async function ArticlesPage({ searchParams }: PageProps) {

  const searchParamsPages = await searchParams;
  const currentPage = parseInt(searchParamsPages.page || "1", 10);
  const perPage = 6;
  const url = `https://www.charlie-pierre.com/wordpressback/wp-json/wp/v2/posts?_embed&per_page=${perPage}&page=${currentPage}`;
  const res = await fetch(url, {
    next: { revalidate: 60 }, // ISR support in App Router
    cache: 'force-cache',
  });

  const posts: WPPost[] = await res.json();
  const totalPages = parseInt(res.headers.get("x-wp-totalpages") || "1");

  return(
    <>
      <section className="pt-20 w-[90%] m-auto">
        <h2 className="text-3xl font-bold mb-6">Articles du moment</h2>
        <div className="grid grid-cols-3 gap-6">
          {posts.map((post) => {
            const image = post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/default-image.jpg';
            return(
            
            <div key={post.id} className="border border-[#1A1B191A]">
              <img src="/articleimg.jpg" alt="" />
                <Link href={`/articles/${post.slug}`} prefetch>
                  <div
                    className="text-xl font-semibold hover:underline p-10"
                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                  />
                </Link>
              <div
                className="p-10"
                dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
              />
              <Link href={`/articles/${post.slug}`} className="pl-10 text-[#32BF84]" prefetch>Lire l'article {">"}</Link>
            </div>

          )})}

        </div>
        <div className="flex justify-center mt-10 space-x-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <Link
              key={page}
              href={`/articles?page=${page}`}
              className={`px-4 py-2 border rounded ${
                page === currentPage ? "bg-[#32BF84] text-white" : "text-gray-700 hover:bg-[#32BF84] hover:text-white"
              }`}
              prefetch
            >
              {page}
            </Link>
          ))}
        </div>
      </section>
    </>
    
  )
  
}
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
