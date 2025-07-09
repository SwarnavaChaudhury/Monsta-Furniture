import React from 'react'
import PageTitle from '../pages/common/PageTitle'
import LoginSection from '../pages/components/login-register-components/LoginSection'
import RegisterSection from '../pages/components/login-register-components/RegisterSection'

export default function loginRegister() {
    return (
        <section>

            <PageTitle pg_title={'My Account'} />

            <div className='lg:w-[1320px] w-full mx-auto mb-20 grid lg:grid-cols-2 grid-cols-1 gap-[30px]'>
                <div>

                    <LoginSection />

                </div>
                <div>

                    <RegisterSection />

                </div>
            </div>

        </section>
    )
}