
import React from 'react';
import { Button, EmptyState, Layout, Page, TextStyle } from "@shopify/polaris";
import { ResourcePicker, TitleBar } from '@shopify/app-bridge-react';
import store from 'store-js';
import ResourceListWithProducts from '../components/ResourceList';

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
            onAction: () => {
              this.setState({ open: true });
              console.log('clicked');
//                alert("yay!");
            },
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
            heading="Your list of selected products"
            image={img}
          >
            <p><strong>Development purposes only, please do not use for production purposes</strong><br/>
            packaged with Node, React, Polaris and Apollo ! 🎉
            </p>
          </EmptyState>
        </Layout>
        <ResourceListWithProducts />
      </Page>
    );
  }
  handleSelection = (resources) => {
    const idsFromResources = resources.selection.map((product) => product.id);
    this.setState({ open: false });
    console.log(JSON.stringify(idsFromResources));
    store.set('ids', idsFromResources);
  };
}
export default Index;

