function Post({ post }) {
  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </>
  )
}

const posts = [
  { id: 1, title: 'Hello', content: 'World' },
  { id: 2, title: 'Lorem', content: 'ipsum' },
]

export async function getStaticPaths() {
  // const res = await fetch('https://.../posts')
  // const posts = await res.json()

  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }))
  // fallback: `false` means other routes should 404.
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  // const res = await fetch(`https://.../posts/${params.id}`)
  // const post = await res.json()
  const post = posts.find((p) => p.id.toString() === params.id)
  return { props: { post } }
}

export default Post
