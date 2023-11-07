import Head from "next/Head";
import Navbar from "./components/Navbar";
import Image from "next/image";

const index = ({posts}) => {
    return(
        <>
            <Head>
                <title> Home | Belajar Next JS</title>
                <meta name="description" content="Belajar Next JS" />
            </Head>
            <Navbar />
            <Image src="vercel.svg" alt="Logo Vercel" width={300} height={200} />
            <h1>Ini halaman Home</h1>
            {posts.map((post) => (
              <div key = {post.id}>
              <h2>{post.title}</h2>
              </div>
            ))}
        </>
    );
}

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return{
    props :{
      posts: data,
    },
  };
};

export default index;