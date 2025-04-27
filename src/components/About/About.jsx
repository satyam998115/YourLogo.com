import React from 'react'

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://images.pexels.com/photos/1367276/pexels-photo-1367276.jpeg?cs=srgb&dl=pexels-rebrand-cities-581004-1367276.jpg&fm=jpg"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            All About YourLogo.com
                        </h2>
                        <p className="mt-6 text-gray-600">
                        At YourLogo.com, we believe a powerful logo is more than just a design — it’s the heartbeat of a brand.
                       Founded with a simple idea — to make world-class branding accessible to everyone — we specialize in creating custom, memorable, 
                      and impactful logos that help businesses, creators, and entrepreneurs stand out.
                        </p>
                        <p className="mt-4 text-gray-600">
                         Our team is made up of passionate designers, creative thinkers, and branding experts who work closely with you to bring your vision to life. Every logo we create is a blend of creativity,
                         strategy, and craftsmanship, tailored to tell your unique story.
                         Whether you’re building a startup, refreshing your business image, or launching a new product, YourLogo.com is your trusted partner for turning ideas into powerful visual identities.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
