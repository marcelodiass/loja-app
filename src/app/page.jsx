import Link from 'next/link'

export default function Home() {
  return (
    <>
    <header>
      <nav>
        <ul>
          <li><Link href="/produtos/camisa">Camisa</Link></li>
        </ul>
      </nav>
    </header>
    
    
    <h1>Home</h1>

    </>
  )
}
