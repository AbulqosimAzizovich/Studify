import React from "react";
import { useFileManager } from "../components/Context";
import QuickAccess from "../components/QuickAccess";
import ViewFilter from "../components/ViewFilter";
import Files from "../components/Files";
import { Block, BlockBetween, BlockHead, BlockHeadContent, BlockTitle, Icon } from "../../../../components/Component";

const Home = () => {
  const { fileManager } = useFileManager();

  const quickView = [...fileManager.files.filter((item) => item.starred === true && !item.deleted)];
  const allFiles = [...fileManager.files.filter((item) => !item.deleted)];

  return (
    <>
      {quickView.length > 0 && <QuickAccess files={quickView} />}
      <Block className="nk-fmg-listing">
        <BlockHead size="xs">
          <BlockBetween className="g-2">
            <BlockHeadContent>
              <BlockTitle tag="h6">Недавние файлы</BlockTitle>
            </BlockHeadContent>
            <BlockHeadContent>
              <ViewFilter />
            </BlockHeadContent>
          </BlockBetween>
        </BlockHead>

        <Files files={allFiles} />
      </Block>
    </>
  );
};

export default Home;
