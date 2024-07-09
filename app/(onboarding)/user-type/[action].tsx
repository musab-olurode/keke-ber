import * as React from 'react';
import { Image, View } from 'react-native';
import { Text } from '~/components/ui/text';
import TricycleImg from '~/assets/images/tricycle.png';
import { Link, useLocalSearchParams } from 'expo-router';
import { Button } from '~/components/ui/button';

export default function Screen() {
	const { action } = useLocalSearchParams();

	return (
		<View className='flex-1 justify-center items-center p-6 bg-secondary/30'>
			<Image className='size-[9.8125rem] mb-[3.75rem]' source={TricycleImg} />
			<Link asChild href={`/(auth)/${action}/student`} className='w-full'>
				<Button className='mt-5'>
					<Text>Passenger</Text>
				</Button>
			</Link>
			<Link asChild href={`/(auth)/${action}/driver`} className='w-full'>
				<Button className='mt-5'>
					<Text>Driver</Text>
				</Button>
			</Link>
		</View>
	);
}
