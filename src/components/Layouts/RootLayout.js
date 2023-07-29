import {
  MenuOutlined,
  FacebookFilled,
  LinkedinFilled,
  GoogleSquareFilled,
  TwitterSquareFilled,
  DownOutlined,
} from '@ant-design/icons';
import { Col, Dropdown, Layout, Menu, Row, Space } from 'antd';
const { Header, Sider, Content, Footer } = Layout;
import styles from '@/styles/Home.module.css';
import Link from 'next/link';
import React from 'react';
import { menuCategories, allMenuItems } from '@/assets/data';

const RootLayout = ({ children }) => {
  return (
    <Layout>
      <Header>
        <Row>
          <Col xs={18} md={12}>
            <div className="brand-logo">
              <h1 style={{ margin: 0 }}>
                <Link
                  href="/"
                  style={{
                    color: '#fff',
                    // backgroundColor: '#404040',
                    // padding: '5px 10px',
                    borderRadius: '3px',
                  }}
                >
                  PC HOUSE.
                </Link>
              </h1>
            </div>
          </Col>
          <Col xs={0} md={12} style={{ textAlign: 'right' }}>
            <Menu theme="dark" mode="vertical" className={styles.menu_items}>
              <Dropdown
                menu={{
                  items: menuCategories,
                }}
              >
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    Categories
                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown>
              <Link href="/pc-builder">
                <items
                  style={{
                    margin: '0 25px',
                  }}
                >
                  PC Builder
                </items>
              </Link>
              <items className={styles.loginMenu}>Login</items>
            </Menu>
          </Col>
          <Col xs={6} md={0} style={{ textAlign: 'right' }}>
            <Dropdown
              menu={{
                items: allMenuItems,
              }}
              trigger={['click']}
            >
              <a onClick={(e) => e.preventDefault()}>
                <MenuOutlined
                  style={{
                    padding: 5,
                    color: '#666',
                    background: '#fff',
                    borderRadius: 5,
                  }}
                />
              </a>
            </Dropdown>
          </Col>
        </Row>
      </Header>

      <Content
        style={{
          padding: '0 24px',
          minHeight: '60vh',
        }}
      >
        {children}
      </Content>

      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        <div className={styles.line}></div>
        <h2
          style={{
            fontSize: '28px',
          }}
        >
          PC HOUSE LIMITED
        </h2>
        <p className={styles.social_icons}>
          <FacebookFilled />

          <TwitterSquareFilled />

          <GoogleSquareFilled />

          <LinkedinFilled />
        </p>
        PC HOUSE ©2023 All right reserved.
      </Footer>
    </Layout>
  );
};

export default RootLayout;
