import {  } from '@heroicons/react/24/solid'

export default function Hero() {
  return (
    <div>
      <div className="flex items-center justify-center p-5">
        <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-10 md:px-5">
          <div>
            <h1 className="mb-2 text-3xl font-bold">
              <span className="text-blue-500">Hi,</span> I'm Peter...
            </h1>
            <p className="mb-3">
              This is my personal website where I share my thoughts on various
              topics, including software development, technology, hobbies and life in general.
            </p>
            <p className="mb-3">
              I work as an IT consultant and I'm passionate about software and infrastructure.
              On my spare time i enjoy spending time with my family, building things, riding motorcycles, shooting and writing articles.
            </p>
            <div className="flex justify-center space-x-5">
              {/* <button className="flex w-full items-center justify-center gap-1 rounded-2xl bg-rose-500 p-5 py-3 font-semibold text-white hover:bg-rose-700">
                Follow
                <BeakerIcon className="h-10 w-10 text-blue-500" />
              </button>
              <button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-white p-5 py-3 font-semibold">
                Resume
                <BeakerIcon className="h-6 w-6 text-blue-500" />
              </button> */}
            </div>
          </div>
          <div>
            <img
              src="/peter_s.png"
              alt=""
              className="lg:size-96 size-72 rounded-full "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
