import { Article } from '../types';

export const articles: Article[] = [
	{
		title: 'Hello world 👋',
		date: 'Jul 1',
		fullDate: 'July 1, 2023',
		tags: ['blog'],
		path: '/blog/hello-world',
		id: 'hello-world',
		englishContent: `<h5 class="font-medium">Welcome to my chaotic programming corner 🤭!</h5>
		<p class="py-2">
			I'm not an expert and I probably still have a lot to learn, but I have
			decided to share my experience with the community. In my time as a
			developer, I've learned that collaboration is key.
		</p>
		<img
		src="/images/articles/hello-world/hello.png"
			alt=""
			class="h-52 rounded-xl"
		/>
		<p class="py-2">
			By sharing what I know and working together, we can all improve our skills
			and help each other grow. So don't hesitate if you need help!
		</p>
		<p>You've reached the end!. Thanks for taking the time to read this.</p>
		`,
		spanishContent: `<h5 class="font-medium">¡Bienvenidos a mi caótico rincón programático 🤭!</h5>
		<p class="py-2">
			No soy un experto y probablemente todavía tengo mucho que aprender, pero he
			decidido compartir mi experiencia con la comunidad. En mi tiempo
			programando, aprendí que la colaboración es clave.
		</p>
		<img
			src="/images/articles/hello-world/hello.png"
			alt=""
			class="h-52 rounded-xl"
		/>
		<p class="py-2">
			Al compartir lo que sé y trabajar juntos, todos podemos mejorar nuestras
			habilidades y ayudarnos mutuamente a crecer.
		</p>
		<p>
			Llegaste al final del articulo! ✔️. Agradezco que hayas tomado el tiempo de
			leer esto.
		</p>
		<p>Espero que disfrutes explorando.</p>
		`,
	},
];
