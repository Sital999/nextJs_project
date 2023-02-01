import type { NextPage } from 'next'
import Link from "next/link"


const Home: NextPage = () => {
  return (
    <div className="space-y-3 mt-10">
      <h1 className="text-2xl font-bold text-center">
        Welcome to Quiz HomePage
      </h1>
      <h1 className="text-2xl font-bold text-center">
        To play quiz visit link
        <Link href="/quiz">
          <h1 className="text-2xl font-bold text-center underline">
            "localhost:3000/quiz"
          </h1>
        </Link>
      </h1>
    </div>
  ); 
}

export default Home
