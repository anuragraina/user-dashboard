import React from 'react';
import { Form, Button, Row, Col, DatePicker } from 'antd';
import FormInput from './FormInput';

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
					<Col span={12}>
						<Form {...layout}>
							<FormInput type="Name" />

							<Form.Item
								label="Date of Birth"
								name="dob"
								rules={[
									{
										required : true,
										message  : 'Please input your Date of Birth!'
									}
								]}
							>
								<DatePicker />
							</Form.Item>

							<FormInput type="Profession" />

							<FormInput type="Designation" />

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

export default Settings;
