import React from 'react'
import PageTitle from '../pages/common/PageTitle'
import HomeTestimonial from '../pages/components/home-page-components/HomeTestimonial';

export const metadata = {
    title: "About Us - Monsta E-Commerce",
    description: "About Us Page!",
};


export default function AboutUs() {
    return (
        <section>

            <PageTitle pg_title={'About Us'} />

            <div className='lg:w-[1320px] w-full mx-auto mb-10'>

                <div className='mb-5'>
                    <img src='/imgs/about-us/about-us-featured-img.jpg' className='w-full' />
                </div>
                <div className='text-center mb-10'>
                    <h1 className='text-2xl mb-5 font-bold'>
                        Welcome to Monsta!
                    </h1>
                    <p className='text-[14px] text-[#5a5a5a] mb-5'>
                        Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam, est usus legentis in iis qui facit eorum claritatem.
                    </p>
                    <p className='text-[14px] text-[#c09578] mb-5'>
                        “There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.”
                    </p>
                </div>
                <div>
                    <h1 className='text-2xl mb-5 text-center font-bold'>
                        Why Chose Us
                    </h1>

                    <div className='grid lg:grid-cols-3 grid-cols-1 gap-10'>
                        <div className='flex flex-col justify-center items-center text-[14px]'>
                            <div>
                                <img src='/imgs/about-us/icon-1.jpg' />
                            </div>
                            <div className='font-bold mb-3'>
                                Creative Design
                            </div>
                            <div className='text-center'>
                                Erat metus sodales eget dolor consectetuer, porta ut purus at et alias, nulla ornare velit amet enim
                            </div>
                        </div>
                        <div className='flex flex-col justify-center items-center text-[14px]'>
                            <div>
                                <img src='/imgs/about-us/icon-2.jpg' />
                            </div>
                            <div className='font-bold mb-3'>
                                100% Money Back Guarantee
                            </div>
                            <div className='text-center'>
                                Erat metus sodales eget dolor consectetuer, porta ut purus at et alias, nulla ornare velit amet enim
                            </div>
                        </div>
                        <div className='flex flex-col justify-center items-center text-[14px]'>
                            <div>
                                <img src='/imgs/about-us/icon-3.jpg' />
                            </div>
                            <div className='font-bold mb-3'>
                                Online Support 24/7
                            </div>
                            <div className='text-center'>
                                Erat metus sodales eget dolor consectetuer, porta ut purus at et alias, nulla ornare velit amet enim
                            </div>
                        </div>
                    </div>

                    <div className='grid lg:grid-cols-3 grid-cols-1 gap-10 text-[14px] mt-[50px]'>
                        <div className='flex flex-col justify-center items-center'>
                            <div className='mb-3'>
                                <img src='/imgs/about-us/about-1.jpg' />
                            </div>
                            <div className='mb-2 font-bold'>
                                What Do We Do?
                            </div>
                            <div className='mb-2 text-center leading-[30px]'>
                                Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.
                            </div>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <div className='mb-3'>
                                <img src='/imgs/about-us/about-2.jpg' />
                            </div>
                            <div className='mb-2 font-bold'>
                                Our Mission
                            </div>
                            <div className='mb-2 text-center leading-[30px]'>
                                Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.
                            </div>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <div className='mb-3'>
                                <img src='/imgs/about-us/about-3.jpg' />
                            </div>
                            <div className='mb-2 font-bold'>
                                History Of Us
                            </div>
                            <div className='mb-2 text-center leading-[30px]'>
                                Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <div className='lg:w-[1320px] w-full mx-auto mb-10'>
                <HomeTestimonial />
            </div>

        </section>
    )
}