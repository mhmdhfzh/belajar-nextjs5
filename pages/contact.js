import Head from "next/Head";
import Navbar from "./components/Navbar";
import Image from "next/image";

const contact = () => {
    return(
        <>
            <Head>
                <title> Contact | Belajar Next JS</title>
                <meta name="description" content="Belajar Next JS" />
            </Head>
            <Navbar />
            <Image src="vercel.svg" alt="Logo Vercel" width={300} height={200} />
            <h1>Ini halaman Contact</h1>
        </>
    );
}

export default contact;