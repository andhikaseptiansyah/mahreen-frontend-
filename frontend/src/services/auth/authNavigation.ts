export const getLoginRedirectRoute = (targetPath: string) =>
  `/login?required=1&redirect=${encodeURIComponent(targetPath)}`;
