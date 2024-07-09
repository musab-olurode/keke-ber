import * as React from 'react';
import { Image, View } from 'react-native';
import { Text } from '~/components/ui/text';
import RegisterSuccessCheckImg from '~/assets/images/register-success-check.png';
import { Link } from 'expo-router';
import { Button } from '~/components/ui/button';

export default function Screen() {
	return (
		<View className='flex-1 justify-center items-center p-6 bg-secondary/30'>
			<Image
				className='size-[9.8125rem] mb-[3.75rem]'
				source={RegisterSuccessCheckImg}
			/>
			<Text className='font-semibold text-3xl leading-[2.34375rem] mb-20'>
				Password Reset{'\n'} Successfully!
			</Text>
			<Text className='text-center text-subtitle leading-5 w-2/3 mb-[1.875rem]'>
				Your password has been reset successfully. You can now login with your
				new password.
			</Text>
			<Link asChild href='/verify-phone' className='w-full'>
				<Button className='mt-5'>
					<Text>Continue</Text>
				</Button>
			</Link>
		</View>
	);
}
