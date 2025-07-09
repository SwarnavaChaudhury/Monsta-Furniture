import React from 'react'
import PageTitle from '../pages/common/PageTitle';
import FAQuestionsAccordion from '../pages/components/frequently-questions-components/FAQuestionsAccordion';

export const metadata = {
    title: "Frequently Questions - Monsta E-Commerce",
    description: "Frequently Questions Page!",
};

export default function FrequentlyQuestions() {
    return (
        <section>

            <PageTitle pg_title={'Frequently Questions'} />

            <div className='lg:w-[1320px] w-full mx-auto mb-10'>

                <FAQuestionsAccordion />

            </div>

        </section>
    )
}