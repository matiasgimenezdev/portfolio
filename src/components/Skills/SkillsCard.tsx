import { FunctionComponent } from 'react';
import { useTheme } from '../../hooks';
import { Skill } from '../../types';
import { SkillsItem } from '..';

type SkillsCardProps = {
	category: string;
	skills: Skill[];
};

export const SkillsCard: FunctionComponent<SkillsCardProps> = ({
	category,
	skills,
}) => {
	const { theme } = useTheme();

	const sectionStyle = `w-[80%] relative grid mt-8 py-4 px-2 grid-cols-2  ml-auto mr-auto justify-center ${
		theme == 'light'
			? 'border border-grey-light text-grey-darkest'
			: 'border border-grey-medium text-white'
	} rounded-md md:w-[60%] lg:w-[55%] xl:w-[50%] 2xl:w-[40%] md:grid-cols-3 xl:grid-cols-4`;

	return (
		<section className={sectionStyle}>
			<span
				className={`absolute font-medium -left-2 -top-3 text-xl rounded-md ${
					theme == 'light' ? 'bg-white' : 'bg-grey-darkest'
				}`}
			>
				{category}
			</span>
			{skills.map(({ name, alt, src }) => {
				return <SkillsItem name={name} alt={alt} src={src} key={src} />;
			})}
		</section>
	);
};
