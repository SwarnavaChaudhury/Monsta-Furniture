import React from 'react'
import PageTitle from '../pages/common/PageTitle';

export const metadata = {
    title: "Terms of Use Page - Monsta E-Commerce",
    description: "Terms of Use Page!",
};

export default function TermsOfUse() {
    return (
        <section>

            <PageTitle pg_title={'Terms of Use'} />

            <div className='lg:w-[1320px] w-full mx-auto mb-10'>

                <h1 className='mb-5 text-2xl'>
                    Who we are
                </h1>
                <p className='text-[14px] text-[rgb(90,90,90)] mb-5'>
                    Our website address is: <a href='http://localhost:3000/'>http://localhost/furniture</a>
                </p>

                <h1 className='mb-5 text-2xl'>
                    What personal data we collect and why we collect it
                </h1>
                <h1 className='mb-5 text-2xl'>
                    Comments
                </h1>
                <p className='text-[14px] text-[rgb(90,90,90)] mb-5'>
                    When visitors leave comments on the site we collect the data shown in the comments form, and also the visitor’s IP address and browser user agent string to help spam detection.
                </p>

                <p className='text-[14px] text-[rgb(90,90,90)] mb-5'>
                    An anonymized string created from your email address (also called a hash) may be provided to the Gravatar service to see if you are using it. The Gravatar service privacy policy is available here: https://automattic.com/privacy/. After approval of your comment, your profile picture is visible to the public in the context of your comment.
                </p>

                <h1 className='mb-5 text-2xl'>
                    Media
                </h1>
                <p className='text-[14px] text-[rgb(90,90,90)] mb-5'>
                    If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included. Visitors to the website can download and extract any location data from images on the website.
                </p>


                <h1 className='mb-5 text-2xl'>
                    Cookies
                </h1>
                <p className='text-[14px] text-[rgb(90,90,90)] mb-5'>
                    If you leave a comment on our site you may opt-in to saving your name, email address and website in cookies. These are for your convenience so that you do not have to fill in your details again when you leave another comment. These cookies will last for one year.
                </p>

                <p className='text-[14px] text-[rgb(90,90,90)] mb-5'>
                    If you have an account and you log in to this site, we will set a temporary cookie to determine if your browser accepts cookies. This cookie contains no personal data and is discarded when you close your browser.
                </p>

                <p className='text-[14px] text-[rgb(90,90,90)] mb-5'>
                    When you log in, we will also set up several cookies to save your login information and your screen display choices. Login cookies last for two days, and screen options cookies last for a year. If you select “Remember Me”, your login will persist for two weeks. If you log out of your account, the login cookies will be removed.
                </p>

                <p className='text-[14px] text-[rgb(90,90,90)] mb-5'>
                    If you edit or publish an article, an additional cookie will be saved in your browser. This cookie includes no personal data and simply indicates the post ID of the article you just edited. It expires after 1 day.
                </p>

                <h1 className='mb-5 text-2xl'>
                    Embedded content from other websites
                </h1>
                <p className='text-[14px] text-[rgb(90,90,90)] mb-5'>
                    Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website.
                </p>

                <p className='text-[14px] text-[rgb(90,90,90)] mb-5'>
                    These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracking your interaction with the embedded content if you have an account and are logged in to that website.
                </p>

                <h1 className='mb-5 text-2xl'>
                    How long we retain your data
                </h1>
                <p className='text-[14px] text-[rgb(90,90,90)] mb-5'>
                    If you leave a comment, the comment and its metadata are retained indefinitely. This is so we can recognize and approve any follow-up comments automatically instead of holding them in a moderation queue.
                </p>

                <p className='text-[14px] text-[rgb(90,90,90)] mb-5'>
                    For users that register on our website (if any), we also store the personal information they provide in their user profile. All users can see, edit, or delete their personal information at any time (except they cannot change their username). Website administrators can also see and edit that information.
                </p>


                <h1 className='mb-5 text-2xl'>
                    What rights you have over your data
                </h1>
                <p className='text-[14px] text-[rgb(90,90,90)] mb-5'>
                    If you have an account on this site, or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us. You can also request that we erase any personal data we hold about you. This does not include any data we are obliged to keep for administrative, legal, or security purposes.
                </p>

                <h1 className='mb-5 text-2xl'>
                    Where we send your data
                </h1>
                <p className='text-[14px] text-[rgb(90,90,90)] mb-5'>
                    Visitor comments may be checked through an automated spam detection service.
                </p>

            </div>

        </section>
    )
}