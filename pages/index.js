var WPAPI = require( 'wpapi' );
var wp = new WPAPI({ endpoint: process.env.apiUrl });

export default function Home() {
  return (
    <div>
      now URL is {process.env.apiUrl}
    </div>
  )
}
