import './Link.scss';

export function Link({ href, value }) {
	return (
		<a href={href} rel='noreferer' target='_blank'>
			{value}
		</a>
	);
}
