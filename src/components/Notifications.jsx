import React from 'react';
import { Form, Button, Row, Col } from 'antd';
import FormSwitch from './FormSwitch';

function Notifications() {
	const layout = {
		labelCol   : { span: 16 },
		wrapperCol : { span: 8 }
	};
	const tailLayout = {
		wrapperCol : { offset: 8, span: 16 }
	};

	return (
		<Row justify="center">
			<Col span={12}>
				<Row justify="center" className="notifyRow">
					<Col span={12}>
						<Form {...layout}>
							<FormSwitch type="Send all alerts." />
							<FormSwitch type="Alerts only task success." />
							<FormSwitch type="Alerts only for failed tasks." />
							<FormSwitch type="I dont want any alerts." />

							<Form.Item {...tailLayout}>
								<Button type="danger" htmlType="button" style={{ margin: 2 }}>
									Cancel
								</Button>
								<Button id="submitBtn" htmlType="submit" style={{ margin: 2 }}>
									Submit
								</Button>
							</Form.Item>
						</Form>
					</Col>
				</Row>
			</Col>
		</Row>
	);
}

export default Notifications;
