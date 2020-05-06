import React from 'react';
import { Form, Input, Button, Row, Col, DatePicker } from 'antd';

function Settings() {
	const layout = {
		labelCol   : { span: 8 },
		wrapperCol : { span: 16 }
	};
	const tailLayout = {
		wrapperCol : { offset: 8, span: 16 }
	};

	return (
		<Row justify="center">
			<Col span={12}>
				<Row justify="center" className="notifyRow">
					<Form {...layout}>
						<Form.Item
							label="Name"
							name="name"
							rules={[
								{
									required : true,
									message  : 'Please input your username!'
								}
							]}
						>
							<Input />
						</Form.Item>

						<Form.Item
							span={16}
							label="Date of Birth"
							rules={[
								{
									required : true,
									message  : 'Please input your username!'
								}
							]}
						>
							<DatePicker />
						</Form.Item>

						<Form.Item
							label="Profession"
							name="profession"
							rules={[
								{
									required : true,
									message  : 'Please input your username!'
								}
							]}
						>
							<Input />
						</Form.Item>

						<Form.Item
							label="Designation"
							name="designation"
							rules={[
								{
									required : true,
									message  : 'Please input your username!'
								}
							]}
						>
							<Input />
						</Form.Item>

						<Form.Item {...tailLayout}>
							<Button type="danger" htmlType="button" style={{ margin: 2 }}>
								Cancel
							</Button>
							<Button id="submitBtn" htmlType="submit" style={{ margin: 2 }}>
								Submit
							</Button>
						</Form.Item>
					</Form>
				</Row>
			</Col>
		</Row>
	);
}

export default Settings;
