import React from 'react';
import { Form, Switch } from 'antd';

function FormSwitch(props) {
	return (
		<Form.Item label={props.type}>
			<Switch checkedChildren="ON" defaultChecked />
		</Form.Item>
	);
}

export default FormSwitch;
