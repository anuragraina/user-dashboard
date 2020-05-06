import React from 'react';
import { Switch, Row, Col } from 'antd';
import '../style.css';

function Notifications() {
	return (
		<div>
			<Row justify="center">
				<Col span={12}>
					<Row justify="center" className="notifyRow">
						<Col span={6}>
							<strong>Send all Alerts</strong>
						</Col>
						<Col span={6}>
							<Switch checkedChildren="ON" unCheckedChildren="" defaultChecked />
						</Col>
					</Row>
					<Row justify="center" className="notifyRow">
						<Col span={6}>
							<strong>Alerts only for task success</strong>
						</Col>
						<Col span={6}>
							<Switch checkedChildren="ON" unCheckedChildren="" defaultChecked />
						</Col>
					</Row>
					<Row justify="center" className="notifyRow">
						<Col span={6}>
							<strong>Alerts only for failed tasks</strong>
						</Col>
						<Col span={6}>
							<Switch checkedChildren="ON" unCheckedChildren="" defaultChecked />
						</Col>
					</Row>
					<Row justify="center" className="notifyRow">
						<Col span={6}>
							<strong>I don't want any Alerts</strong>
						</Col>
						<Col span={6}>
							<Switch checkedChildren="ON" unCheckedChildren="" defaultChecked />
						</Col>
					</Row>
				</Col>
			</Row>
		</div>
	);
}

export default Notifications;
