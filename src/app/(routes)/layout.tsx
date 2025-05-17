import { MainLayout } from "@/components/layout/main-layout";
import { ThemeSwitcher } from "@/components/theme/ThemeSwitcher";

export default function RouteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <MainLayout>{children}</MainLayout>
        <ThemeSwitcher />
      </body>
    </html>
  );
}
