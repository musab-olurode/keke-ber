import * as React from 'react';
import { Image, Pressable, View } from 'react-native';
import { Button } from '~/components/ui/button';
import { Text } from '~/components/ui/text';
import OnboardingImg1 from '~/assets/images/onboarding-img-1.png';
import OnboardingImg2 from '~/assets/images/onboarding-img-2.png';
import OnboardingImg3 from '~/assets/images/onboarding-img-3.png';
import { Link, useRouter } from 'expo-router';
import clsx from 'clsx';
import Animated, {
	LayoutAnimationConfig,
	SlideInRight,
	SlideOutLeft,
} from 'react-native-reanimated';

const ONBOARDING_DATA = [
	{
		title: 'Pay for your trips with ease',
		subtitle: 'Scan keke QR code with your mobile\napp to make payment',
		image: OnboardingImg1,
	},
	{
		title: 'Easy wallet top-up',
		subtitle: 'Top-up wallet anywhere and anytime!',
		image: OnboardingImg2,
	},
	{
		title: 'Wallet to wallet transfer',
		subtitle: 'Easily transfer to other ----- users',
		image: OnboardingImg3,
	},
];

export default function Screen() {
	const [currentIndex, setCurrentIndex] = React.useState(0);
	const router = useRouter();

	const handleNext = () => {
		if (currentIndex < ONBOARDING_DATA.length - 1) {
			setCurrentIndex((prev) => prev + 1);
		} else {
			router.replace({
				pathname: '/(onboarding)/user-type/[action]',
				params: { action: 'login' },
			});
		}
	};

	return (
		<View className='flex-1 justify-center items-center p-6 bg-secondary/30'>
			<LayoutAnimationConfig skipEntering>
				<Animated.View
					key={currentIndex}
					entering={SlideInRight}
					exiting={SlideOutLeft}
					className='flex flex-col items-center'
				>
					<Image
						className='size-[12.5rem] mb-[3.75rem]'
						source={ONBOARDING_DATA[currentIndex].image}
					/>
					<Text className='font-medium text-2xl leading-[1.875rem] text-center mb-5'>
						{ONBOARDING_DATA[currentIndex].title}
					</Text>
					<Text className='font-extralight text-sm leading-[1.09375rem] mb-[1.875rem] w-1/3 text-center'>
						{ONBOARDING_DATA[currentIndex].subtitle}
					</Text>
				</Animated.View>
			</LayoutAnimationConfig>
			<View className='flex flex-row gap-x-[0.3125rem]'>
				{ONBOARDING_DATA.map((_, index) => (
					<Pressable
						onPress={() => setCurrentIndex(index)}
						key={`onboarding-dot-${index}`}
						className={clsx(
							'h-[0.3125rem] rounded-sm',
							index === currentIndex
								? 'w-[1.875rem] bg-accent'
								: 'w-[0.9375rem] bg-[rgba(255,165,0,0.5)]'
						)}
					/>
				))}
			</View>
			<View className='w-full flex flex-col'>
				<Button className='mt-5 grow w-full' onPress={handleNext}>
					<Text>
						{currentIndex === ONBOARDING_DATA.length - 1 ? 'Sign up' : 'Next'}
					</Text>
				</Button>
				{currentIndex !== ONBOARDING_DATA.length - 1 ? (
					<Button
						variant='link'
						className='mt-5 grow w-full'
						onPress={() => setCurrentIndex(ONBOARDING_DATA.length - 1)}
					>
						<Text>Skip</Text>
					</Button>
				) : (
					<Link
						asChild
						href={{
							pathname: '/(onboarding)/user-type/[action]',
							params: { action: 'login' },
						}}
					>
						<Button variant='outline' className='mt-5 grow w-full'>
							<Text>Login</Text>
						</Button>
					</Link>
				)}
			</View>
		</View>
	);
}
