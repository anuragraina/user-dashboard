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
	function handleClick(content) {
		props.clicked(content);
	}

	return (
		<Menu defaultSelectedKeys={[ 'Dashboard' ]} theme="dark" mode="inline">
			<Menu.Item onClick={() => handleClick('Dashboard')} key="Dashboard" icon={<DashboardOutlined />}>
				Dashboard
			</Menu.Item>
			<SubMenu key="Profile" icon={<ProfileOutlined />} title="Profile">
				<Menu.Item onClick={() => handleClick('Settings')} key="Settings" icon={<SettingOutlined />}>
					Settings
				</Menu.Item>
				<Menu.Item
					onClick={() => handleClick('Notifications')}
					key="Notifications"
					icon={<NotificationOutlined />}
				>
					Notifications
				</Menu.Item>
			</SubMenu>
			<SubMenu key="Mytasks" icon={<SnippetsOutlined />} title="My Tasks">
				<Menu.Item onClick={() => handleClick('Task1')} key="Task1" icon={<FormOutlined />}>
					Task 1
				</Menu.Item>
				<Menu.Item onClick={() => handleClick('Task2')} key="Task2" icon={<FormOutlined />}>
					Task 2
				</Menu.Item>
			</SubMenu>
		</Menu>
	);
}

export default SideMenu;
