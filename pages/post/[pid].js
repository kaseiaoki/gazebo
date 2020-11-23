import WP from 'wpapi'
import Link from 'next/link'
import { useRouter } from 'next/router'


const Post = ({title, content}) => {
  const router = useRouter()
  const { pid } = router.query

  return (
    <>
    <section class="section">
      <h1 class="title">{title} </h1>
      <h2 class="subtitle">id : {pid}</h2>
      <div className='container'
        dangerouslySetInnerHTML={{ __html: content }}
      >
      </div>
   </section>
  </>
  )

}

export default Post


const wpClient = new WP({
  endpoint: process.env.apiUrl
})

export async function getStaticPaths() {
  const posts = await wpClient.posts()
  const path = posts.map(post => ({
    params: {
        pid: post.id.toString()
      }
  }))

  return {
      paths : path,
      fallback: false
  }
}

export async function getStaticProps({params}) {

  const post = await wpClient.posts().id(params.pid)
  const title =  post.title.rendered
  const content = post.content.rendered
  return {
    props: {
      title,
      content
    },
  }
}
