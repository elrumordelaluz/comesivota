import Home from '../components/Home'
import Layout from '../components/Layout'

export default function Index() {
  return <Home />
}

Index.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
