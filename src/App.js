import React from 'react';
import './App.css';
import { Layout, Avatar, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;

function App() {
	return (
		<div className="App">
			<Layout>
				<Header style={{ padding: 10 }}>
					<Avatar style={{ float: 'right' }} icon={<UserOutlined />} />
				</Header>
				<Layout>
					<Sider>
						<Menu theme="dark" mode="inline">
							<SubMenu
								key="sub2"
								title={
									<span>
										<span>Profile</span>
									</span>
								}
							>
								<Menu.Item key="1">Settings</Menu.Item>
								<Menu.Item key="2">Notifications</Menu.Item>
							</SubMenu>
						</Menu>
					</Sider>
					<Layout>
						<Content>Content</Content>
						<Footer>Footer</Footer>
					</Layout>
				</Layout>
			</Layout>
		</div>
	);
}

export default App;
