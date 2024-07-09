import * as React from 'react';
import { Image, Pressable, ScrollView, View } from 'react-native';
import { Text, TextClassContext } from '~/components/ui/text';
import AvatarImg from '~/assets/images/avatar.png';
import { Link } from 'expo-router';
import { Button } from '~/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';
import { Card, CardContent } from '~/components/ui/card';
import BellIcon from '~/assets/icons/bell.svg';
import EyeOffIcon from '~/assets/icons/eye-off.svg';
import PlusIcon from '~/assets/icons/plus.svg';
import PaymentHistoryIcon from '~/assets/icons/payment-history.svg';
import MessagesIcon from '~/assets/icons/messages.svg';
import ScanQRIcon from '~/assets/icons/scan-qr.svg';
import TransferIcon from '~/assets/icons/transfer.svg';
import clsx from 'clsx';
import { StatusBar } from 'expo-status-bar';

const QUICK_FEATURES = [
	{
		icon: PaymentHistoryIcon,
		title: 'Payment\nHistory',
	},
	{
		icon: MessagesIcon,
		title: 'Messages',
	},
	{
		icon: ScanQRIcon,
		title: 'Scan QR',
	},
	{
		icon: TransferIcon,
		title: 'Transfer',
	},
];

const RECENT_ACTIVITIES = [
	{
		title: 'Your ride payment to Abdul was successful.',
		subtitle: '30 mins ago',
	},
	{
		title: 'Ride payment',
		subtitle: '+N300',
		className: 'text-red-500',
	},
	{
		title: 'Payment failed',
	},
	{
		title: 'Transfer to Onimisi was successful.',
		subtitle: '5 hours ago',
	},
	{
		title: 'Are you available to take me to CIS?',
		subtitle: '30 mins ago',
	},
	{
		title: 'Welcome to (---) Azeez! Complete setting up your profile here.',
		subtitle: '5 days ago',
	},
	{
		title: 'Welcome to (---) Azeez! Complete setting up your profile here.',
		subtitle: '5 days ago',
	},
];

export default function Screen() {
	return (
		<ScrollView
			contentContainerClassName='pb-[3.0625rem]'
			className='p-6 bg-secondary/30'
		>
			<StatusBar translucent={false} />
			<View className='flex flex-row items-center gap-x-[0.9375rem] pb-10'>
				<Avatar alt="Rick Sanchez's Avatar" className='size-[3.125rem]'>
					<AvatarImage source={AvatarImg} />
					<AvatarFallback>
						<Text>RS</Text>
					</AvatarFallback>
				</Avatar>
				<Text className='font-medium text-2xl leading-[1.875rem] grow'>
					Hello,{' '}
					<Text className='text-accent font-medium text-2xl leading-[1.875rem]'>
						Azeez77
					</Text>
				</Text>
				<Link href='/notifications'>
					<BellIcon />
				</Link>
			</View>
			<Card className='rounded-md border-none bg-primary mb-[1.875rem]'>
				<CardContent className='py-[1.5625rem] flex flex-col gap-y-[0.9375rem]'>
					<TextClassContext.Provider value='text-primary-foreground'>
						<Text className='font-medium text-2xl leading-[1.875rem]'>
							Wallet Balance
						</Text>
						<View className='flex flex-row justify-between'>
							<View className='flex flex-row items-center gap-x-5'>
								<Text className=''>₦ *****</Text>
								<Pressable>
									<EyeOffIcon />
								</Pressable>
							</View>
							<Pressable>
								<PlusIcon />
							</Pressable>
						</View>
						<View className='flex flex-row justify-between'>
							<Text className='font-light text-xs'>
								{new Date().toLocaleDateString('en-GB', {
									year: '2-digit',
									month: '2-digit',
									day: '2-digit',
								})}
							</Text>
							<Text className='font-light text-xs'>
								{new Date().toLocaleTimeString('en-GB', {
									hour: '2-digit',
									minute: '2-digit',
									hour12: true,
								})}
							</Text>
						</View>
					</TextClassContext.Provider>
				</CardContent>
			</Card>
			<Text className='font-bold text-[1.3125rem] leading-[1.540625]'>
				Quick Features
			</Text>
			<View className='flex flex-row flex-wrap gap-[1.3125rem] pt-[1.875rem] pb-[3.28125rem]'>
				{QUICK_FEATURES.map(({ icon: Icon, title }, index) => (
					<Pressable
						key={`quick-features-${index}`}
						className='flex flex-col items-center basis-[30%]'
					>
						<Icon />
						<Text className='text-center mt-[0.9375rem] text-[#665F5F] font-normal text-[0.9375rem] leading-[1.100625rem]'>
							{title}
						</Text>
					</Pressable>
				))}
			</View>
			<Text className='font-bold text-[1.3125rem] leading-[1.540625]'>
				Recent Activity
			</Text>
			<View className='flex flex-col py-[0.9375rem]'>
				{RECENT_ACTIVITIES.map(({ title, subtitle, className }, index) => (
					<View
						key={`recent-activities-${index}`}
						className='flex flex-row justify-between py-[0.625rem]'
					>
						<Text
							className='font-normal text-[0.9375rem] leading-[1.100625rem] text-wrap w-[70%]'
							numberOfLines={1}
						>
							{title}
						</Text>
						<Text className={clsx('font-light text-xs shrink-0', className)}>
							{subtitle}
						</Text>
					</View>
				))}
			</View>
		</ScrollView>
	);
}
