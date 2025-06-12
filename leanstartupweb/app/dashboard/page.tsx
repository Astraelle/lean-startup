'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getAuthUser } from '../(utils)/auth';
import ArticleForm from '../../(components)/article/page';

export default function DashboardPage() {
  const router = useRouter();
  const [authorized, setAuthorized] = useState<boolean | null>(null);

  useEffect(() => {
    const user = getAuthUser();

    if (!user) {
      router.push('/login');
    } else if (user.role !== 'admin') {
      router.push('/login');
    } else {
      setAuthorized(true);
    }
  }, [router]);

  if (authorized === null) {
    return <p className="text-center mt-10">Chargement...</p>;
  }

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-6">Dashboard Admin</h1>
      <p className="mb-4">Bienvenue, vous pouvez créer un article ici.</p>
      <ArticleForm />

    </main>
  );
}
