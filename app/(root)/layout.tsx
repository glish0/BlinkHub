import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import LeftSideBar from "../components/Shared/LeftSideBar";
import MainContainer from "../components/Shared/MainContainer";
import RigthSideBar from "../components/Shared/RigthSideBar";
import TopBar from "../components/Shared/TopBar";
import BottomBar from "../components/Shared/BottomBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BlinkHub",
  description: "Social Media application",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className}  `}>
          <div className='flex flex-row'>
            <LeftSideBar />
              <MainContainer>
                <TopBar />
                {children}
              </MainContainer>
            <RigthSideBar />
          </div>
          <BottomBar />
        </body>
      </html>
    </ClerkProvider>
  );
}
