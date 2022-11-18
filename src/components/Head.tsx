import Head from "next/head";

type HeadProps = { title?: string, description?: string };

export default function HeadApp(props: HeadProps) {
    return (
        <Head>
            <title>{props.title || "Apegro Challenge"}</title>
            <meta name="description" content={props.description || "Apegro Challenge"} />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}