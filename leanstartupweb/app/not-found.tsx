import Link from 'next/link'
import Header from '@/(components)/header/header'

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="max-w-2xl w-full text-center">
          {/* Emoji triste */}
          <div className='mb-4 justify-items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" width="209" height="179" viewBox="0 0 209 179" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M39.0397 152.347C32.3646 153.744 28.0912 160.294 29.5025 166.966C30.9095 173.617 37.4345 177.874 44.0884 176.482L172.039 149.716C178.714 148.319 182.987 141.769 181.576 135.097C180.169 128.446 173.644 124.189 166.99 125.581L39.0397 152.347Z" fill="#282828"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M45.7829 63.0847C55.4734 72.741 71.1483 72.7414 80.8393 63.0857L57.9475 40.2757L80.8393 17.4648L63.3107 0L40.4197 22.81L17.5279 0C7.85765 9.63544 7.8574 25.2944 17.5273 34.9302L22.8918 40.2757L8.7953 54.3218C3.94291 59.1568 3.94296 67.0144 8.79541 71.8494C13.6233 76.6599 21.4324 76.6599 26.2602 71.8493L40.4197 57.7405L45.7829 63.0847Z" fill="#282828"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M190.561 0L167.67 22.81L144.779 0L127.25 17.4648L150.142 40.2757L136.046 54.3214C131.193 59.1567 131.193 67.0145 136.046 71.8496C140.874 76.66 148.683 76.6598 153.511 71.8491L167.67 57.7405L181.829 71.8493C186.657 76.6599 194.466 76.6599 199.294 71.8494C204.146 67.0144 204.146 59.1568 199.294 54.3218L185.198 40.2757L208.089 17.4648L190.561 0Z" fill="#282828"/>
            </svg>
          </div>

          {/* Titre et description */}
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Page introuvable</h1>
          <p className="text-lg text-gray-600 mb-12">
            Cette page n'existe pas ou actuellement indisponible
          </p>

          {/* Boutons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-full text-white bg-gray-900 hover:bg-gray-800 transition-colors duration-200"
            >
              Retour
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-full text-gray-900 bg-white border border-gray-300 hover:bg-gray-50 transition-colors duration-200"
            >
              Contactez-nous
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}