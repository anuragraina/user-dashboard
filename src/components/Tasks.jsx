import React from 'react';
import { Form, Button, Row, Col, Select, Input, Checkbox } from 'antd';

function Tasks() {
	const layout = {
		labelCol   : { span: 6 },
		wrapperCol : { span: 16 }
	};
	const tailLayout = {
		wrapperCol : { offset: 6, span: 16 }
	};

	return (
		<Row justify="center">
			<Col span={15}>
				<Row justify="center" className="notifyRow">
					<Col span={15}>
						<Form {...layout}>
							<Form.Item label="Source Name">
								<Select>
									<Select.Option value="1">Option 1</Select.Option>
									<Select.Option value="2">Option 2</Select.Option>
									<Select.Option value="3">Option 3</Select.Option>
									<Select.Option value="4">Option 4</Select.Option>
								</Select>
							</Form.Item>

							<Form.Item label="Enable Logging" name="isLoggedIn" valuePropName="checked">
								<Checkbox />
							</Form.Item>

							<Form.Item name="inputSQL" label="Provide SQL">
								<Input.TextArea placeholder="Provide SQL in here." />
							</Form.Item>

							<Form.Item label="Target List">
								<Select>
									<Select.Option value="1">Option 1</Select.Option>
									<Select.Option value="2">Option 2</Select.Option>
									<Select.Option value="3">Option 3</Select.Option>
									<Select.Option value="4">Option 4</Select.Option>
								</Select>
							</Form.Item>

							<Form.Item {...tailLayout}>
								<Button type="danger" htmlType="button" style={{ margin: 2 }}>
									Cancel
								</Button>
								<Button id="submitBtn" htmlType="submit" style={{ margin: 2 }}>
									Submit
								</Button>
								<Button type="primary" htmlType="button" style={{ margin: 2 }}>
									Validate
								</Button>
							</Form.Item>
						</Form>
					</Col>
				</Row>
			</Col>
		</Row>
	);
}

export default Tasks;
