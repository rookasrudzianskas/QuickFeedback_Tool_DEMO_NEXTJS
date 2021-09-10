import Head from 'next/head'



export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold  mb-10">
          Welcome to{' '}
          <a className="text-blue-600" href="https://byrookas.com">
            Quick Feedback Demo in Next JS!
          </a>
        </h1>

          <div className="">
              <iframe src="https://quickfeedback.digital/embed/MWiWRZN1PrAkdqdxDtAE" />
              {/*<IframeResizer*/}
              {/*    checkOrigin={false}*/}
              {/*    title="Comments"*/}
              {/*    src={`https://quickfeedback.digital/embed/MWiWRZN1PrAkdqdxDtAE`}*/}
              {/*    style={{*/}
              {/*        width: '1px',*/}
              {/*        minWidth: '100%'*/}
              {/*    }}*/}
              {/*/>*/}
          </div>

      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer>
    </div>
  )
}
