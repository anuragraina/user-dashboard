import React, { useState } from 'react';
import './App.css';
import Settings from './components/Settings';
import Notifications from './components/Notifications';
import Tasks from './components/Tasks';
import SideMenu from './components/SideMenu';
import Dashboard from './components/Dashboard';
import { Layout, Avatar, Breadcrumb } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Header, Footer, Sider, Content } = Layout;

function App() {
	const [ Component, setComponent ] = useState(<Dashboard />);
	const [ breadcrumb1, setBreadcrumb1 ] = useState('');
	const [ breadcrumb2, setBreadcrumb2 ] = useState('Dashboard');

	function clickedItem(content) {
		switch (content) {
			case 'Settings':
				setComponent(Settings);
				setBreadcrumb1('Profile');
				setBreadcrumb2('Settings');
				break;

			case 'Notifications':
				setComponent(Notifications);
				setBreadcrumb1('Profile');
				setBreadcrumb2('Notifications');
				break;

			case 'Task1':
				setComponent(Tasks);
				setBreadcrumb1('My Tasks');
				setBreadcrumb2('Task 1');
				break;

			case 'Task2':
				setComponent(Tasks);
				setBreadcrumb1('My Tasks');
				setBreadcrumb2('Task 2');
				break;

			case 'Dashboard':
				setComponent(Dashboard);
				setBreadcrumb1('');
				setBreadcrumb2('Dashboard');
				break;

			default:
				break;
		}
	}

	return (
		<div className="App">
			<Layout>
				<Header>
					<div id="avatarDiv">
						<Avatar icon={<UserOutlined />} />
						<p>User</p>
					</div>
				</Header>
				<Layout>
					<Sider>
						<SideMenu clicked={clickedItem} />
					</Sider>
					<Layout>
						<Content style={{ margin: '0 16px' }}>
							<Breadcrumb style={{ margin: '16px 0' }}>
								<Breadcrumb.Item>{breadcrumb1}</Breadcrumb.Item>
								<Breadcrumb.Item>{breadcrumb2}</Breadcrumb.Item>
							</Breadcrumb>
							<div id="componentDiv">{Component}</div>
						</Content>
						<Footer />
					</Layout>
				</Layout>
			</Layout>
		</div>
	);
}

export default App;
