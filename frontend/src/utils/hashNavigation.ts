import type { MouseEvent } from "react";

const normalizeRoutePath = (path: string) => {
  const routePath = path.startsWith("/") ? path : `/${path}`;
  return routePath.replace(/\/{2,}/g, "/");
};

export const getHashHref = (path: string) => `#${normalizeRoutePath(path)}`;

export const navigateToHashRoute = (path: string) => {
  const targetHash = getHashHref(path);

  if (window.location.hash === targetHash) {
    window.dispatchEvent(new HashChangeEvent("hashchange"));
    return;
  }

  window.location.hash = targetHash;
};

export const handleHashRouteClick = (
  event: MouseEvent<HTMLAnchorElement>,
  path: string,
) => {
  if (
    event.defaultPrevented ||
    event.button !== 0 ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey
  ) {
    return;
  }

  event.preventDefault();
  navigateToHashRoute(path);
};
