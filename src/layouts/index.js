import Head from "next/head";

export const metadata = {
    title: "new test title from layouts",
    description: "test description"
}
export default function Layouts({children}){
    return (
        <>
        {/* <Head>
            <title>my ogtest website</title>
        </Head> */}
        <main>
            {children}
        </main>
        </>
    )
}