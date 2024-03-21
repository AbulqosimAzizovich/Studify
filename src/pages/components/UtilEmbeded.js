import React from "react";
import Content from "../../layout/content/Content";
import Head from "../../layout/head/Head";
import { Block, BlockHead, BlockHeadContent, BlockTitle, BlockDes, BackTo } from "../../components/block/Block";
import { PreviewCard, PreviewTable, CodeBlock } from "../../components/preview/Preview";

const EmbededPage = ({ ...props }) => {
  return (
    <React.Fragment>
      <Head title="Ratio" />
      <Content page="component">
        <BlockHead size="lg" wide="sm">
          <BlockHeadContent>
            <BackTo link="/components" icon="arrow-left">
              Components
            </BackTo>
            <BlockTitle tag="h2" className="fw-normal">
              Ratio
            </BlockTitle>
            <BlockDes>
              <p className="lead">
                Create responsive video or slideshow embeds based on the width of the parent by creating an intrinsic
                ratio that scales on any device.
              </p>
            </BlockDes>
          </BlockHeadContent>
        </BlockHead>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Example</BlockTitle>
              <p>
                Wrap any embed like an <code>&lt;iframe&gt;</code> in a parent element with{" "}
                <code>.ratio</code> and an aspect ratio. 
              </p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <div className="ratio ratio-16x9">
              <iframe
                title="Embeded Responsive Item"
                src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
                allowFullScreen
              ></iframe>
            </div>
          </PreviewCard>
          <CodeBlock language="jsx">
            {`<div className="ratio ratio-16x9">
  <iframe
    src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
    allowFullscreen
  ></iframe>
</div>`}
          </CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Aspect Ratios</BlockTitle>
              <p>
                Aspect ratios can be customized with modifier classNames. By default the following ratio classNames are
                available.
              </p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewTable>
            <thead className="table-light">
              <tr>
                <th className="overline-title w-300px">className Reference</th>
                <th className="overline-title">Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>.ratio-{"{value}"}</code>
                </td>
                <td>21x9 | 16x9 | 4x3 | 1x1</td>
              </tr>
            </tbody>
          </PreviewTable>
          <CodeBlock language="jsx">{`<div className="ratio ratio-16x9"></div>`}</CodeBlock>
        </Block>
      </Content>
    </React.Fragment>
  );
};

export default EmbededPage;
