import * as React from 'react';
import { Image, View } from 'react-native';
import { Button } from '~/components/ui/button';
import { Text } from '~/components/ui/text';
import TricycleImg from '~/assets/images/tricycle.png';
import { Input } from '~/components/ui/input';
import { Link } from 'expo-router';

export default function Screen() {
	return (
		<View className='flex-1 justify-center items-center p-6 bg-secondary/30'>
			<Image className='size-[6.25rem] mb-[3.75rem]' source={TricycleImg} />
			<View className='w-full flex flex-col'>
				<Text className='font-semibold text-3xl leading-[2.34375rem] text-center'>
					Forgot Password
				</Text>
				<Text className='mb-[1.875rem] text-center w-3/4 mx-auto'>
					Recover your account and regain access to your account{' '}
				</Text>
				<Text>Phone number</Text>
				<Input placeholder='Number' keyboardType='phone-pad' />
				<Link asChild href='/password-reset-complete'>
					<Button className='mt-5 grow w-full'>
						<Text>Continue</Text>
					</Button>
				</Link>
				<Text className='text-center mt-[1.875rem]'>
					Already have an account?{'  '}
					<Link
						className='text-accent font-bold'
						href={{
							pathname: '/(onboarding)/user-type/[action]',
							params: { action: 'login' },
						}}
					>
						Login here
					</Link>
				</Text>
			</View>
		</View>
	);
}
