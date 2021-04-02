import React from 'https://dev.jspm.io/react/index.js';
import ReactDOMServer from 'https://dev.jspm.io/react-dom/server.js';

class porfolio extends React.Component{
    render() {
        return (
            <html>
                <head>

                </head>
                <body>
                    <h1>Jesse's Portfolio</h1>
                </body>
                <footer>

                </footer>
            </html>
        )
    }
}

export default ReactDOMServer.renderToStaticMarkup(porfolio);