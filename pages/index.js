import Link from 'next/link'
import WP from 'wpapi'

const wpClient = new WP({
  endpoint: process.env.apiUrl
})

export default function Page({ id, title, content }) {
  return (
    <>
      <div>{title} id : {id}</div>
      <div
        dangerouslySetInnerHTML={{ __html: content }}
      >
      
     </div>
    </>
  )
}

export async function getStaticProps() {
  const posts = await wpClient.posts()
  console.log(posts)
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

