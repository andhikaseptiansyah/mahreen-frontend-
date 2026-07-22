import { useEffect, type ReactNode } from "react";
import { useAuth } from "../../hooks/useAuth";
import { getLoginRedirectRoute } from "../../services/auth/authNavigation";
import { navigateToHashRoute } from "../../utils/hashNavigation";

const RedirectingState = ({ label }: Readonly<{ label: string }>) => (
  <main
    aria-live="polite"
    style={{
      minHeight: "100vh",
      display: "grid",
      placeItems: "center",
      background: "#050505",
      color: "#d8b66f",
      fontFamily: "Inter, sans-serif",
      letterSpacing: ".12em",
      textTransform: "uppercase",
      fontSize: 11,
    }}
  >
    {label}
  </main>
);

const ProtectedRoute = ({
  children,
  targetPath,
}: Readonly<{ children: ReactNode; targetPath: string }>) => {
  const { isAuthenticated, isLoading } = useAuth();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigateToHashRoute(getLoginRedirectRoute(targetPath));
    }
  }, [isAuthenticated, isLoading, targetPath]);

  if (isLoading) return <RedirectingState label="Memeriksa sesi..." />;
  if (!isAuthenticated) return <RedirectingState label="Mengarahkan ke halaman login..." />;
  return children;
};

export default ProtectedRoute;
