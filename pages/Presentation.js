import Head from "components/RemarkableHead";
import React from 'react'
export default class extends React.Component{
  static async getInitialProps({ query }) {
    console.log('SLUG', query.name);
    return {};
  }
  render() {
  return (
    <div>
      <Head code={this.props.url.query.text} />
    </div>
  );
  }
}

