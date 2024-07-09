import { Link, Stack, usePathname } from 'expo-router';
import { View } from 'react-native';
import { Text } from '~/components/ui/text';

export default function NotFoundScreen() {
	const pathname = usePathname();
	return (
		<>
			<Stack.Screen options={{ title: 'Oops!' }} />
			<View className='flex-1 flex justify-center items-center'>
				<Text>{pathname}</Text>
				<Text>This screen doesn't exist.</Text>

				<Link href='/'>
					<Text>Go to home screen!</Text>
				</Link>
			</View>
		</>
	);
}
