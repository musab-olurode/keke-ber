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
				Account Creation Complete!
			</Text>
			<Text className='text-center text-subtitle leading-5 w-3/4 mb-[1.875rem]'>
				Congratulations! Your account has been successfully created. You can now
				log in and enjoy the benefits of (-----)!
			</Text>
			<Link asChild href='/home' replace className='w-full'>
				<Button className='mt-5'>
					<Text>Get Started</Text>
				</Button>
			</Link>
		</View>
	);
}
