import React, { useRef, useState } from 'react';
import {
	NativeSyntheticEvent,
	TextInput,
	TextInputKeyPressEventData,
	View,
} from 'react-native';
import { Input } from './input';
import clsx from 'clsx';

type OTPInputProps = {
	onChange?: (otp: string) => void;
};

const OTPInput = (props: OTPInputProps) => {
	const [input1, setInput1] = useState('');
	const [input2, setInput2] = useState('');
	const [input3, setInput3] = useState('');
	const [input4, setInput4] = useState('');

	const input1Ref = useRef<TextInput>(null);
	const input2Ref = useRef<TextInput>(null);
	const input3Ref = useRef<TextInput>(null);
	const input4Ref = useRef<TextInput>(null);

	const getRef = (index: number) => {
		switch (index) {
			case 0:
				return input1Ref;
			case 1:
				return input2Ref;
			case 2:
				return input3Ref;
			case 3:
				return input4Ref;
			default:
				return null;
		}
	};

	const getValue = (index: number) => {
		switch (index) {
			case 0:
				return input1;
			case 1:
				return input2;
			case 2:
				return input3;
			case 3:
				return input4;
			default:
				return '';
		}
	};

	const focusNextField = (nextField: React.RefObject<TextInput>) => {
		if (nextField && nextField.current) {
			nextField.current.focus();
		}
	};

	const handleOnKeyPress = (
		event: NativeSyntheticEvent<TextInputKeyPressEventData>
	) => {
		if (event.nativeEvent.key === 'Backspace') {
			if (input4) {
				setInput4('');
				focusNextField(input3Ref);
			} else if (input3) {
				setInput3('');
				focusNextField(input2Ref);
			} else if (input2) {
				setInput2('');
				focusNextField(input1Ref);
			} else if (input1) {
				setInput1('');
			}
		}
	};

	const handleInputChange = (index: number, text: string) => {
		switch (index) {
			case 0:
				setInput1(text);
				if (text) focusNextField(input2Ref);
				break;
			case 1:
				setInput2(text);
				if (text) focusNextField(input3Ref);
				break;
			case 2:
				setInput3(text);
				if (text) focusNextField(input4Ref);
				break;
			case 3:
				setInput4(text);
				if (text) input4Ref.current?.blur();
				break;
			default:
				break;
		}
		if (input1 && input2 && input3 && input4 && props.onChange) {
			props.onChange(input1 + input2 + input3 + input4);
		}
	};

	return (
		<View className='flex flex-row justify-center gap-x-4'>
			{new Array(4).fill(0).map((_, index) => (
				<Input
					className={clsx(
						'rounded-md bg-transparent border border-[#ACACAC] placeholder:text-accent text-text font-semibold text-[2.125rem] placeholder:text-[2.125rem] placeholder:font-semibold',
						getValue(index) && 'bg-[#FFEBCC] border-accent'
					)}
					key={`opt-input-${index}`}
					keyboardType='number-pad'
					placeholder='_'
					textAlign='center'
					maxLength={1}
					ref={getRef(index)}
					value={getValue(index)}
					onKeyPress={handleOnKeyPress}
					onChangeText={(text: string) => handleInputChange(index, text)}
				/>
			))}
		</View>
	);
};

export default OTPInput;
