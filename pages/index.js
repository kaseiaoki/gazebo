import WP from 'wpapi'
import Link from 'next/link'

const wpClient = new WP({
  endpoint: process.env.apiUrl
})

export async function getStaticProps() {
  const posts = await wpClient.posts()
  const id = posts[1].id
  const title =  posts[1].title.rendered
  const content = posts[1].content.rendered
  return {
    props: {
      id,
      title,
      content
    },
  }
}

export default function Page({ id, title, content }) {
  return (
    <>
      <section class="section">
        <h1 class="title">{title} </h1>
        <h2 class="subtitle">id : {id}</h2>
        <div className='container'
          dangerouslySetInnerHTML={{ __html: content }}
        >
        </div>
     </section>
    </>
  )
}



