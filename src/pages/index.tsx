
export default function Home(props) {
  // SPA
  // Executa com javascript, não sendo visível para crawlers
  // useEffect(() => {
  //   fetch('http://localhost:3333/episodes')
  //   .then(response => response.json())
  //     .then(data => console.log(data))
  // }, [])

  return (
    <div>
      <h1>Index</h1>
      <p>
        {JSON.stringify(props.episodes)}
      </p>
    </div>
  )
}

// SSR 
// executa toda vez que a aplicação é carregada. Gera muitas requisições
// export async function getServerSideProps() {
//   const response = await fetch('http://localhost:3333/episodes')
//   const data = await response.json()

//   return {
//     props: {
//       episodes: data
//     }
//   }
// }

// SSG
export async function getStaticProps() {
  const response = await fetch('http://localhost:3333/episodes')
  const data = await response.json()

  return {
    props: {
      episodes: data
    },
    revalidate: 60 * 60 * 8, // 8hrs
  }
}