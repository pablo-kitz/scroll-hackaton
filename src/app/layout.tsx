"use client";

import { AntdRegistry } from "@ant-design/nextjs-registry";
import "@ant-design/v5-patch-for-react-19";
import { App, ConfigProvider, Layout } from "antd";
import "antd/dist/reset.css";
import "../styles/globals.css";

const { Content } = Layout;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <AntdRegistry>
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: "#4365ff",
                colorPrimaryHover: "#5a7cff",
                colorPrimaryActive: "#2d4bcc",
                colorBgContainer: "#111111",
                colorBgElevated: "#0a0a0a",
                colorText: "#ffffff",
                colorTextHeading: "#ffffff",
                colorTextSecondary: "rgba(255, 255, 255, 0.65)",
                colorBorder: "rgba(67, 101, 255, 0.2)",
                colorBorderSecondary: "rgba(67, 101, 255, 0.1)",
                colorBgBase: "#000000",
                borderRadius: 8,
                borderRadiusLG: 12,
                borderRadiusSM: 4,
                boxShadow: "0 4px 16px rgba(67, 101, 255, 0.15)",
                boxShadowSecondary: "0 2px 8px rgba(67, 101, 255, 0.1)",
                fontFamily:
                  "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
                fontSize: 14,
                fontSizeHeading1: 32,
                fontSizeHeading2: 24,
                fontSizeHeading3: 20,
                fontSizeHeading4: 16,
                fontSizeHeading5: 14,
                lineHeight: 1.6,
                motionDurationFast: "0.15s",
                motionDurationMid: "0.3s",
                motionDurationSlow: "0.5s",
              },
              components: {
                Layout: {
                  bodyBg: "transparent",
                  siderBg: "transparent",
                  headerBg: "transparent",
                },
                Menu: {
                  itemBg: "transparent",
                  itemSelectedBg: "rgba(67, 101, 255, 0.15)",
                  itemHoverBg: "rgba(67, 101, 255, 0.08)",
                  itemSelectedColor: "#4365ff",
                  itemHoverColor: "#5a7cff",
                },
                Card: {
                  colorBgContainer: "#111111",
                  colorBorderSecondary: "rgba(67, 101, 255, 0.2)",
                },
                Button: {
                  primaryShadow: "0 2px 8px rgba(67, 101, 255, 0.1)",
                },
                Input: {
                  colorBgContainer: "#0a0a0a",
                  colorBorder: "rgba(67, 101, 255, 0.3)",
                  colorPrimaryHover: "#4365ff",
                },
                Modal: {
                  contentBg: "#111111",
                  headerBg: "transparent",
                  footerBg: "transparent",
                },
              },
            }}
          >
            <App>
              <Layout style={{ background: "transparent !important", minHeight: "100vh" }}>
                <Layout className="main-layout">
                  <Content className="main-content" style={{ padding: 0 }}>
                    {children}
                  </Content>
                </Layout>
              </Layout>
            </App>
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
