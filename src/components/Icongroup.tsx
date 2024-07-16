"use client";

export function Icons({ children, title }: any) {
	return (
		<div className="flex flex-col flex-wrap gap-y-2 pt-3">
			<h2 className="text-md text-gray-600 dark:text-white">
				{title}
			</h2>
			<div className="flex flex-row flex-wrap gap-2 text-gray-700 dark:text-white/50">
				{children}
			</div>
		</div>
	);
}