import MainProvider from "@/src/utils/provider/main";
import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({ weight: ["400"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ToDoList📝",
  description: "간단하고 효율적으로 할일을 관리해 보세요!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={ubuntu.className}>
        <MainProvider>{children}</MainProvider>
      </body>
    </html>
  );
}
