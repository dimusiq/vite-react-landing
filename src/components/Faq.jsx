import { useState } from 'react';
import { faqs } from '../constants';

const Faq = () => {
	const [accordion, setAccordion] = useState(-1);

	const toggleAccordion = (i) => {
		if (i === accordion) {
			setAccordion(-1);
			return;
		}
		setAccordion(i);
	};

	return (
		<div className='w-full  mx-auto mt-20 space-y-2 shadow lg:max-w-md px-[50px] md:px-[75px]'>
			<div>
				<span className=''> Часто задаваемые вопросы</span>
			</div>
			<div>
				{faqs.map((faq, i) => (
					<div key={i} onClick={() => toggleAccordion(i)} className=''>
						<h3
							className={`${
								accordion === i
									? 'bg-purple-300 text-black p-4'
									: 'p-4 bg-slate-300'
							} `}>
							{faq.question}
						</h3>
						<div>
							{accordion === i ? (
								<div>
									<span className='fill-current text-purple-700 h-10 w-10 transform transition-transform duration-500'>
										-
									</span>
								</div>
							) : (
								<div className='border-y-teal-900 w-12  h-12 rounded-full '>
									<span className='border-blue-600 rounded-full'>+</span>
								</div>
							)}
						</div>
						<div>
							<p className={accordion === i ? 'bg-gray' : 'hidden'}>
								{faq.answer}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Faq;
