
import Link from 'next/link'

export default function NotFound() {
    return (
        <section>

            <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-center px-4">
                <img src='/imgs/page-not-found/page-not-found.png' className='w-[500px]' />
                <h1 className="text-[100px] font-extrabold text-gray-300 mb-[-20px]">404</h1>
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">Page Not Found</h2>
                <p className="text-gray-600 mb-6">
                    Sorry, the page you are looking for doesn't exist or has been moved.
                </p>
                <Link href="/" className="px-6 py-2 bg-[#C09578] hover:bg-black text-white rounded transition duration-300">
                    ⬅ Return Home
                </Link>
            </div>

        </section>
    );
}