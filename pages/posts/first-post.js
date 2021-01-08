import Head from 'next/head';
import Link from 'next/link'

import Layout from '../../components/layout'

export default function FirstPost() {
    return (
        <Layout>
            {/* Adicionando um header a nossa página */}
            <Head>
                <title>First Post</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* Adicionando Link para navegar entre 
            telas sem recarregar a pagina */}
            <Link href="/">
                <a>Voltar</a>
            </Link>

            {/* Titulo */}
            <h1>First Post</h1>
            <p>
                Phasellus turpis nulla, commodo eget libero nec, dignissim porttitor leo. Morbi id purus luctus, tristique erat ac, placerat mi. Duis id pellentesque ex, sit amet hendrerit dolor. Donec vitae lectus libero. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce auctor maximus dui, nec euismod tellus pharetra nec. Etiam pulvinar massa in auctor interdum. Integer vel vulputate arcu, quis dapibus urna.
            </p>
            <p>
                Maecenas et sapien efficitur, mollis quam nec, fermentum est. Donec convallis mauris ac sapien pellentesque, ut egestas ex pretium. Morbi sed neque velit. Mauris luctus a arcu venenatis aliquam. Suspendisse potenti. Morbi dignissim lorem vel eros ornare tempor. Aenean ac malesuada nisi. Nulla orci sem, laoreet id est id, pretium tempor enim. 
            </p>
            <p>
                Mauris bibendum faucibus suscipit. Maecenas a porttitor purus, lobortis congue elit. Cras vehicula tincidunt aliquet. Praesent viverra mauris at leo efficitur, vel accumsan risus luctus. In vehicula eu nibh non elementum. Nulla facilisi. Vestibulum nec lorem et eros semper dictum quis quis enim. Sed accumsan lectus erat, a pulvinar tortor rutrum quis. Quisque eleifend lorem nisi, non efficitur ex dapibus vel.
            </p>
        </Layout>
    );
}