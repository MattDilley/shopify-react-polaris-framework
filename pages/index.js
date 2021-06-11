
import React from 'react';
import { Button, EmptyState, Layout, Page, TextStyle } from "@shopify/polaris";
import { ResourcePicker, TitleBar } from '@shopify/app-bridge-react';
const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';
class Index extends React.Component {
  state = { open: false };
  render() {
    return (
      <Page>
        <TitleBar
          title="polaris-skeleton App"
          primaryAction={{
            content: 'Select products',
          }}
        />
        <ResourcePicker
          resourceType="Product"
          showVariants={false}
          open={this.state.open}
          onSelection={(resources) => this.handleSelection(resources)}
          onCancel={() => this.setState({ open: false })}
        />
        <Layout>
        <div>
            <TextStyle variation="positive">
              Sample app using React and Polaris
            </TextStyle>
        </div>
        <EmptyState
            heading="Discount your products temporarily"
            action={{
              content: 'Select products',
              onAction: () => {
                this.setState({ open: true });
                console.log('clicked');
//                alert("yay!");
              },
            }}
            image={img}
          >
            <p>Select products to change their price temporarily.</p>
            <p><strong>Development purposes only, please do not use for production purposes</strong><br/>
            packaged with Node, React and Polaris! 🎉
            </p>
          </EmptyState>
        </Layout>
      </Page>
    );
  }
  handleSelection = (resources) => {
    const idsFromResources = resources.selection.map((product) => product.id);
    this.setState({ open: false });
    console.log(JSON.stringify(idsFromResources));
    alert("Ids from Product section: " + JSON.stringify(idsFromResources));
  };
}
export default Index;

