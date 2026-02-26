import React, {useEffect, useState} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {useWindowSize, useColorMode} from '@docusaurus/theme-common';
import {
  useDoc,
  useDocsSidebar,
} from '@docusaurus/plugin-content-docs/client';
import {useLocation} from '@docusaurus/router';
import DocItemPaginator from '@theme/DocItem/Paginator';
import DocVersionBanner from '@theme/DocVersionBanner';
import DocVersionBadge from '@theme/DocVersionBadge';
import DocItemFooter from '@theme/DocItem/Footer';
import DocItemTOCMobile from '@theme/DocItem/TOC/Mobile';
import DocItemTOCDesktop from '@theme/DocItem/TOC/Desktop';
import DocItemContent from '@theme/DocItem/Content';
import DocBreadcrumbs from '@theme/DocBreadcrumbs';
import ContentVisibility from '@theme/ContentVisibility';
import DocSidebarItems from '@theme/DocSidebarItems';
import styles from '@docusaurus/theme-classic/lib/theme/DocItem/Layout/styles.module.css';
import docsDataSource from '@site/docsData';

const docsData = docsDataSource?.default || docsDataSource;

function useDocTOC() {
  const {frontMatter, toc} = useDoc();
  const windowSize = useWindowSize();
  const hidden = frontMatter.hide_table_of_contents;
  const canRender = !hidden && toc.length > 0;
  const mobile = canRender ? <DocItemTOCMobile /> : undefined;
  const desktop =
    canRender && (windowSize === 'desktop' || windowSize === 'ssr') ? (
      <DocItemTOCDesktop />
    ) : undefined;

  return {hidden, mobile, desktop};
}

function IconMenu() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 6h16M4 12h16M4 18h16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function IconClose() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 6l12 12M18 6l-12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function IconMoon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M20.5 14.5a8.5 8.5 0 1 1-11-11 7.5 7.5 0 0 0 11 11Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconSun() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M12 2.5V5.2M12 18.8v2.7M21.5 12h-2.7M5.2 12H2.5M18.7 5.3l-1.9 1.9M7.2 16.8l-1.9 1.9M18.7 18.7l-1.9-1.9M7.2 7.2 5.3 5.3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconExternal() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M14 5h5v5M19 5l-8.5 8.5M19 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DocsContentHeader({onOpenSidebar}) {
  const {colorMode, setColorMode} = useColorMode();
  const mainWebsiteUrl =
    docsData?.links?.mainWebsiteUrl || 'https://pinkdreams.com';
  const darkModeEnabled = colorMode === 'dark';

  return (
    <header className="pd-content-header">
      <div className="pd-content-header__left">
        <button
          type="button"
          className="pd-mobile-menu-toggle"
          onClick={onOpenSidebar}
          aria-label="Open sidebar menu">
          <IconMenu />
        </button>
      </div>
      <div className="pd-content-header__actions">
        <Link
          className="pd-content-link"
          to={String(mainWebsiteUrl)}
          target="_blank"
          rel="noopener noreferrer">
          <IconExternal />
          <span>Website</span>
        </Link>
        <button
          type="button"
          className="pd-theme-toggle"
          onClick={() => setColorMode(darkModeEnabled ? 'light' : 'dark')}
          aria-label="Toggle color mode">
          {darkModeEnabled ? <IconSun /> : <IconMoon />}
        </button>
      </div>
    </header>
  );
}

function MobileSidebar({isOpen, onClose, sidebar, path}) {
  const brandName = docsData?.brand?.name || 'Pink Dreams';
  const items = sidebar?.items || [];

  return (
    <>
      <div
        className={clsx('pd-mobile-sidebar-backdrop', isOpen && 'is-open')}
        onClick={onClose}
      />
      <aside className={clsx('pd-mobile-sidebar', isOpen && 'is-open')}>
        <div className="pd-mobile-sidebar__header">
          <div className="pd-sidebar-brand pd-sidebar-brand--mobile">
            <Link to="/" className="pd-sidebar-brand__link" onClick={onClose}>
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
          <button
            type="button"
            className="pd-mobile-sidebar__close"
            onClick={onClose}
            aria-label="Close sidebar menu">
            <IconClose />
          </button>
        </div>
        <nav className="pd-mobile-sidebar__nav">
          <ul className="menu__list">
            <DocSidebarItems
              items={items}
              activePath={path}
              level={1}
              onItemClick={(item) => {
                if (item.type === 'link') {
                  onClose();
                }
                if (item.type === 'category' && item.href) {
                  onClose();
                }
              }}
            />
          </ul>
        </nav>
      </aside>
    </>
  );
}

export default function DocItemLayout({children}) {
  const docTOC = useDocTOC();
  const {metadata} = useDoc();
  const sidebar = useDocsSidebar();
  const {pathname} = useLocation();
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  useEffect(() => {
    setMobileSidebarOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (typeof document === 'undefined') {
      return undefined;
    }
    document.body.classList.toggle('pd-mobile-sidebar-open', mobileSidebarOpen);
    return () => {
      document.body.classList.remove('pd-mobile-sidebar-open');
    };
  }, [mobileSidebarOpen]);

  return (
    <div className="pd-doc-layout">
      <DocsContentHeader onOpenSidebar={() => setMobileSidebarOpen(true)} />
      <div className="row">
        <div className={clsx('col', !docTOC.hidden && styles.docItemCol)}>
          <ContentVisibility metadata={metadata} />
          <DocVersionBanner />
          <div className={styles.docItemContainer}>
            <article>
              <DocBreadcrumbs />
              <DocVersionBadge />
              {docTOC.mobile}
              <DocItemContent>{children}</DocItemContent>
              <DocItemFooter />
            </article>
            <DocItemPaginator />
          </div>
        </div>
        {docTOC.desktop && <div className="col col--3">{docTOC.desktop}</div>}
      </div>
      <MobileSidebar
        isOpen={mobileSidebarOpen}
        onClose={() => setMobileSidebarOpen(false)}
        sidebar={sidebar}
        path={pathname}
      />
    </div>
  );
}
