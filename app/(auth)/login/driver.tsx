import * as React from 'react';
import { Image, View } from 'react-native';
import { Button } from '~/components/ui/button';
import { Text } from '~/components/ui/text';
import TricycleImg from '~/assets/images/tricycle.png';
import { Input } from '~/components/ui/input';
import PersonIcon from '~/assets/icons/person.svg';
import KeyIcon from '~/assets/icons/key.svg';
import { Link } from 'expo-router';

export default function Screen() {
	return (
		<View className='flex-1 justify-center items-center p-6 bg-secondary/30'>
			<Image className='size-[6.25rem] mb-[3.75rem]' source={TricycleImg} />
			<View className='w-full flex flex-col'>
				<Text className='font-semibold text-3xl leading-[2.34375rem]'>
					Welcome
				</Text>
				<Text className='mb-[1.875rem]'>Enter your login details</Text>
				<View className='mb-[0.9375rem]'>
					<Input icon={<PersonIcon />} placeholder='Plate Number' />
				</View>
				<Input
					icon={<KeyIcon />}
					placeholder='Password'
					keyboardType='visible-password'
				/>
				<Link asChild href='/(auth)/forgot-password'>
					<Text className='self-end mt-[0.875rem] text-accent font-bold'>
						Forgot Password?
					</Text>
				</Link>
				<Link asChild href='/verify-phone'>
					<Button className='mt-5 grow w-full'>
						<Text>Log in</Text>
					</Button>
				</Link>
				<Text className='text-center mt-[1.875rem]'>
					Don’t have an account?{'  '}
					<Link
						className='text-accent font-bold'
						href='/(auth)/register/driver'
					>
						Register here
					</Link>
				</Text>
			</View>
		</View>
	);
}
