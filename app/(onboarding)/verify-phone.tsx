import * as React from 'react';
import { Image, View } from 'react-native';
import { Text } from '~/components/ui/text';
import TricycleImg from '~/assets/images/tricycle.png';
import { Link } from 'expo-router';
import { Button } from '~/components/ui/button';
import OTPInput from '~/components/ui/otp-input';

export default function Screen() {
	return (
		<View className='flex-1 justify-center items-center p-6 bg-secondary/30'>
			<Image className='size-[6.25rem] mb-[3.75rem]' source={TricycleImg} />
			<Text className='font-semibold text-3xl leading-[2.34375rem]'>
				Verify your number
			</Text>
			<Text className='mb-[3.125rem] text-center'>
				Let’s get your account up and running!
			</Text>
			<Text className='text-center text-subtitle leading-5 w-2/3'>
				We sent an OTP code to your phone number. Enter the code to complete
				creating your account.
			</Text>
			<View className='mt-[3.0625rem] mb-[4.9375rem]'>
				<OTPInput />
			</View>
			<Link asChild href='/(onboarding)/register-complete' className='w-full'>
				<Button className='mt-5'>
					<Text>Continue</Text>
				</Button>
			</Link>
			<Text className='text-center mt-[1.875rem]'>
				Already have an account?{' '}
				<Link href='/(onboarding)/user-type/login' asChild>
					<Text className='text-accent ml-[0.6875rem] font-bold'>
						Login here
					</Text>
				</Link>
			</Text>
		</View>
	);
}
