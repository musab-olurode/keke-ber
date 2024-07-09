import * as React from 'react';
import { TextInput, View } from 'react-native';
import { cn } from '~/lib/utils';

type AdditionalProps = {
	icon?: React.ReactNode;
};

const Input = React.forwardRef<
	React.ElementRef<typeof TextInput>,
	React.ComponentPropsWithoutRef<typeof TextInput> & AdditionalProps
>(({ className, placeholderClassName, icon, ...props }, ref) => {
	return (
		<View className='relative'>
			{icon && (
				<View className='absolute z-10 left-3 top-1/2 -translate-y-1/2'>
					{icon}
				</View>
			)}
			<TextInput
				ref={ref}
				className={cn(
					'web:flex h-10 native:h-12 web:w-full rounded-[0.625rem] bg-input-background px-3 web:py-2 text-base lg:text-sm native:text-lg native:leading-[1.25] text-foreground placeholder:text-[#665F5F] placeholder:font-extralight placeholder:text-sm web:ring-offset-background file:border-0 file:bg-transparent file:font-medium web:focus-visible:outline-none web:focus-visible:ring-2 web:focus-visible:ring-ring web:focus-visible:ring-offset-2',
					props.editable === false && 'opacity-50 web:cursor-not-allowed',
					icon && 'pl-12',
					className
				)}
				placeholderClassName={cn('text-muted-foreground', placeholderClassName)}
				{...props}
			/>
		</View>
	);
});

Input.displayName = 'Input';

export { Input };
