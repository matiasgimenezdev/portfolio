import { FunctionComponent, ReactNode } from 'react';

interface ParagraphProps {
	children: ReactNode;
}

export const Paragraph: FunctionComponent<ParagraphProps> = ({
	children,
}: ParagraphProps) => {
	return <p className='p-10 font-light text-xl'>{children}</p>;
};
