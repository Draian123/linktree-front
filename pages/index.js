import Link from 'next/link'
import MyHead from '../components/MyHead'
import styles from '../styles/apply.module.css'


export default function Home() {
  return (
    <>
      <MyHead
        title="Linktree"
        description="Welcome to Linktree"
        image=""
        url=""
      />

      <section className={styles.background + " min-h-screen flex justify-center items-center"}>
        <h1 className='text-center text-white text-7xl font-bold'> Welcome to Linktree</h1>
        
      </section>
    </>
  )
}
