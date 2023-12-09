import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<script
						async
						src='https://analytics.kellenwiltshire.com/script.js'
						data-website-id='358daa92-8fd8-431f-80d7-b5008ffe235b'
					></script>

					<link href='https://fonts.googleapis.com/css2?family=Ubuntu&display=swap' rel='stylesheet' />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
