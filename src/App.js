import React from 'react';
import './App.css';
import Settings from './components/Settings';
import Notifications from './components/Notifications';
import Tasks from './components/Tasks';
import SideMenu from './components/SideMenu';
import { Layout, Avatar, Breadcrumb } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Header, Footer, Sider, Content } = Layout;

function App() {
	function Component(content) {
		console.log(content);
	}

	return (
		<div className="App">
			<Layout>
				<Header style={{ padding: 10 }}>
					<Avatar style={{ float: 'right' }} icon={<UserOutlined />} />
				</Header>
				<Layout>
					<Sider>
						<SideMenu clickedItem={Component} />
					</Sider>
					<Layout>
						<Content style={{ margin: '0 16px' }}>
							<Breadcrumb style={{ margin: '16px 0' }}>
								<Breadcrumb.Item>User</Breadcrumb.Item>
								<Breadcrumb.Item>Bill</Breadcrumb.Item>
							</Breadcrumb>
							<div style={{ background: '#fff', padding: 24, minHeight: 500, float: 'center' }}>
								<Settings />
							</div>
						</Content>
						<Footer />
					</Layout>
				</Layout>
			</Layout>
		</div>
	);
}

export default App;
