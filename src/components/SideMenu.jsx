import React from 'react';
import { Menu } from 'antd';
import {
	DashboardOutlined,
	ProfileOutlined,
	SettingOutlined,
	NotificationOutlined,
	SnippetsOutlined,
	FormOutlined
} from '@ant-design/icons';

const { SubMenu } = Menu;

function SideMenu(props) {
	function handleClick() {
		console.log('clicked');
	}

	return (
		<Menu defaultSelectedKeys={[ 'Dashboard' ]} theme="dark" mode="inline">
			<Menu.Item key="Dashboard" icon={<DashboardOutlined />}>
				Dashboard
			</Menu.Item>
			<SubMenu key="Profile" icon={<ProfileOutlined />} title="Profile">
				<Menu.Item onClick={handleClick} key="Settings" icon={<SettingOutlined />}>
					Settings
				</Menu.Item>
				<Menu.Item key="Notifications" icon={<NotificationOutlined />}>
					Notifications
				</Menu.Item>
			</SubMenu>
			<SubMenu key="Mytasks" icon={<SnippetsOutlined />} title="My Tasks">
				<Menu.Item key="Task1" icon={<FormOutlined />}>
					Task 1
				</Menu.Item>
				<Menu.Item key="Task2" icon={<FormOutlined />}>
					Task 2
				</Menu.Item>
			</SubMenu>
		</Menu>
	);
}

export default SideMenu;
