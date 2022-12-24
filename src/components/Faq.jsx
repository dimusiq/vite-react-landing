import { useState } from 'react';
import { faqs } from '../constants';
import { plus, minus } from '../assets';

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
		<div className='w-h-screen mx-auto mt-20  border-b-gray-400  px-[50px] md:px-[75px]'>
			<div className='border-b-2 w-full'>
				<span className='text-[48px] font-normal '>
					Часто задаваемые вопросы
				</span>
			</div>
			<div>
				{faqs.map((faq, i) => (
					<div key={i} onClick={() => toggleAccordion(i)} className=' '>
						<div className='flex justify-between cursor-pointer border-b-2 items-center '>
							<h3
								className={`${
									accordion === i
										? ' text-[24px] font-semibold py-4 '
										: 'text-[24px] font-semibold py-4 '
								} w-full align-middle `}>
								{faq.question}
							</h3>
							{accordion === i ? (
								<div className='duration-700 ease-in'>
									<img src={minus} alt='close' />
								</div>
							) : (
								<div className=' duration-700 ease-out'>
									<img src={plus} alt='open' />
								</div>
							)}
						</div>
						<div>
							<p
								className={`overflow-hidden transition-[max-height] duration-700 ease-in-out  ${
									accordion === i ? 'max-h-screen' : 'max-h-0 '
								}`}>
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
