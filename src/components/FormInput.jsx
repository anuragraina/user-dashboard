import React, { useState } from 'react';
import { Form, Input } from 'antd';

function FormInput(props) {
	const msg = 'Please input your ' + props.type + '!';

	const [ value, setValue ] = useState('');
	const [ validStatus, setValidStatus ] = useState('');
	const [ helpText, setHelpText ] = useState('');

	function handleChange(event) {
		const val = event.target.value;

		if (val.match(/^[a-z A-Z]+$/)) {
			setValue(val);
			setValidStatus('success');
			setHelpText('');
		} else {
			setHelpText('Only text allowed!!!');
			setValidStatus('warning');
		}
	}

	return (
		<Form.Item
			label={props.type}
			name={props.type}
			validateStatus={validStatus}
			help={helpText}
			rules={[
				{
					required : true,
					message  : msg
				}
			]}
		>
			<Input value={value} onChange={handleChange} maxLength="30" />
		</Form.Item>
	);
}

export default FormInput;
