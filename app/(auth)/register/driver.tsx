import * as React from 'react';
import { Image, ScrollView, View } from 'react-native';
import { Button } from '~/components/ui/button';
import { Text } from '~/components/ui/text';
import TricycleImg from '~/assets/images/tricycle.png';
import { Input } from '~/components/ui/input';
import { Link, useRouter } from 'expo-router';
import PersonIcon from '~/assets/icons/person.svg';
import KeyIcon from '~/assets/icons/key.svg';
import PhoneIcon from '~/assets/icons/phone.svg';
import MailIcon from '~/assets/icons/mail.svg';

export default function Screen() {
	const router = useRouter();

	return (
		<ScrollView
			contentContainerClassName='flex-1 justify-center items-center'
			className='flex-1 p-6 bg-secondary/30'
		>
			<Image className='size-[6.25rem] mb-[3.75rem]' source={TricycleImg} />
			<View className='w-full flex flex-col'>
				<Text className='font-semibold text-3xl leading-[2.34375rem]'>
					Register
				</Text>
				<Text className='mb-[1.875rem]'>
					Let’s get your account up and running!
				</Text>
				<View className='flex flex-col gap-y-[0.9375rem]'>
					<Input icon={<PersonIcon />} placeholder='Plate Number' />
					<Input icon={<PhoneIcon />} placeholder='Phone Number' />
					<Input icon={<MailIcon />} placeholder='Email address' />
					<Input icon={<PersonIcon />} placeholder='Username' />
					<Input
						icon={<KeyIcon />}
						placeholder='Create password'
						keyboardType='visible-password'
					/>
					<Input
						icon={<KeyIcon />}
						placeholder='Confirm password'
						keyboardType='visible-password'
					/>
				</View>
				<Link asChild href='/(auth)/forgot-password'>
					<Text className='self-end mt-[0.875rem] text-accent font-bold'>
						Forgot Password?
					</Text>
				</Link>
				<Link asChild href='/verify-phone'>
					<Button className='mt-5'>
						<Text>Continue</Text>
					</Button>
				</Link>
				<Text className='text-center mt-[1.875rem]'>
					Already have an account?{' '}
					<Link asChild href='/(auth)/login/driver'>
						<Text className='text-accent ml-[0.6875rem] font-bold'>
							Login here
						</Text>
					</Link>
				</Text>
			</View>
		</ScrollView>
	);
}
