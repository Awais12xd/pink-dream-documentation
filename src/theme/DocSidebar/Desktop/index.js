import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import { useThemeConfig } from "@docusaurus/theme-common";
import CollapseButton from "@theme/DocSidebar/Desktop/CollapseButton";
import Content from "@theme/DocSidebar/Desktop/Content";
import styles from "@docusaurus/theme-classic/lib/theme/DocSidebar/Desktop/styles.module.css";
import docsDataSource from "@site/docsData";

const docsData = docsDataSource?.default || docsDataSource;

function SidebarBrand() {
  const brandName = docsData?.brand?.name || "Pink Dreams";

  return (
    <div className="pd-sidebar-brand">
      <Link to="/" className="pd-sidebar-brand__link">
        <div className="pd-sidebar-brand__mark-wrap">
          <div className="pd-sidebar-brand__mark">
            <span className="pd-sidebar-brand__mark-letter">P</span>
          </div>
          <span className="pd-sidebar-brand__mark-badge" />
        </div>
        <div className="pd-sidebar-brand__meta">
          <span className="pd-sidebar-brand__title">{brandName}</span>
          <span className="pd-sidebar-brand__subtitle">Documentation</span>
        </div>
      </Link>
    </div>
  );
}

function DocSidebarDesktop({ path, sidebar, onCollapse, isHidden }) {
  const {
    docs: {
      sidebar: { hideable },
    },
  } = useThemeConfig();

  return (
    <div className={clsx(styles.sidebar, isHidden && styles.sidebarHidden)}>
      <SidebarBrand />
      <Content path={path} sidebar={sidebar} />
      {hideable && <CollapseButton onClick={onCollapse} />}
    </div>
  );
}

export default React.memo(DocSidebarDesktop);
